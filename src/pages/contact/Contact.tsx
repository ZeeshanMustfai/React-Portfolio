import { Alert, Box, Snackbar, Typography } from '@mui/material'
import { TextField } from '@mui/material'
import styles from './contact.module.less'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { LoadingButton as Button } from '@mui/lab'
import { CommonTitle, Spliter } from '../../components'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

type TContactProps = {
	contactRef: any
}

const validationSchema = yup.object().shape({
	email: yup
		.string()
		.email('Enter a valid email')
		.required('Email is required'),
	name: yup
		.string()
		.min(6, 'Name should be of minimum 8 characters length')
		.required('Name is required'),
	message: yup.string(),
})

const Contact = ({ contactRef }: TContactProps) => {
	const [loading, setLoading] = useState(false)
	const [emailStatus, setEmailStatus] = useState('')
	const [open, setOpen] = useState(false)
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema,
		onSubmit: (values) => {
			const { name, email, message } = values
			const templateParams = {
				name,
				email,
				message,
			}
			setLoading(true)
			emailjs
				.send(
					String(process.env.REACT_APP_SERVICE_ID),
					String(process.env.REACT_APP_TEMPLATE_ID),
					templateParams,
					process.env.REACT_APP_EMAIL_PUBLIC_KEY
				)
				.then(
					(result) => {
						setLoading(false)
						setOpen(true)
						setTimeout(() => {
							setOpen(false)
						}, 2000)
						setEmailStatus(result.text)
						formik.resetForm()
					},
					(error) => {
						setLoading(false)
						setEmailStatus(error.text)
					}
				)
		},
	})
	return (
		<div className={styles.contactMain} ref={contactRef}>
			<CommonTitle>Contact</CommonTitle>
			<div className={styles.contactText}>
				<Typography variant='body1' textAlign={'justify'} gutterBottom>
					If you want to work with me then please contact me here!
				</Typography>
			</div>

			<form onSubmit={formik.handleSubmit} className={styles.contactForm}>
				<TextField
					placeholder='Enter your name*'
					name='name'
					onChange={formik.handleChange}
					value={formik.values.name}
					error={formik.touched.name && Boolean(formik.errors.name)}
					helperText={formik.touched.name && formik.errors.name}
				/>
				<TextField
					placeholder='Enter your email*'
					name='email'
					onChange={formik.handleChange}
					value={formik.values.email}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
				/>
				<TextField
					placeholder='Your Message'
					multiline
					name='message'
					rows='4'
					value={formik.values.message}
					onChange={formik.handleChange}
					error={formik.touched.message && Boolean(formik.errors.message)}
					helperText={formik.touched.message && formik.errors.message}
				/>
				<Box textAlign={'center'} marginTop={2}>
					<Button type='submit' variant='contained' loading={loading}>
						Submit
					</Button>
				</Box>
				{emailStatus && (
					<Snackbar
						open={open}
						anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
					>
						<Alert severity={emailStatus === 'OK' ? 'success' : 'error'}>
							{emailStatus === 'OK'
								? 'Your email successfully sent!'
								: emailStatus}
						</Alert>
					</Snackbar>
				)}
			</form>
			<Box mt={8}>
				<Spliter />
			</Box>
		</div>
	)
}

export default Contact
