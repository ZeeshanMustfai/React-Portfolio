import { Box, Button, Typography } from '@mui/material'
import CommonTitle from '../../lib/commonTitle/CommonTitle'
import { TextField } from '@mui/material'
import styles from './contact.module.less'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { Spliter } from '../../lib'

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
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			message: '',
		},
		validationSchema,
		onSubmit: (values) => {
			console.log('values')
			alert(JSON.stringify(values, null, 2))
		},
	})
	return (
		<div className={styles.contactMain} ref={contactRef}>
			<CommonTitle>Contact</CommonTitle>
			<div className={styles.contactText}>
				<Typography variant='body2' textAlign={'justify'} gutterBottom>
					Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
					varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
					quis libero viverra facilisis ut ac est.
				</Typography>
				<Spliter />
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
					<Button type='submit' variant='outlined'>
						Submit
					</Button>
				</Box>
			</form>
		</div>
	)
}

export default Contact
