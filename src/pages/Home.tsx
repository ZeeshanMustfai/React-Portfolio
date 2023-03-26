import { Container } from '@mui/material'
import { useCallback, useRef, useState } from 'react'
import { Header, Navbar } from '../components'
import About from './about/About'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Skills from './skills/Skills'
import Work from './work/Work'

const Home = () => {
	const skillsRef = useRef<HTMLDivElement>(null)
	const aboutRef = useRef<HTMLDivElement>(null)
	const projectRef = useRef<HTMLDivElement>(null)
	const contactRef = useRef<HTMLDivElement>(null)

	const handleMenuAction = useCallback((item: string) => {
		if (item === 'Skills') {
			if (skillsRef.current) {
				skillsRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		}

		if (item === 'Projects') {
			if (projectRef.current) {
				projectRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		}

		if (item === 'Contact') {
			if (contactRef.current) {
				contactRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [])

	return (
		<>
			<Navbar handleMenuAction={handleMenuAction} />
			<Container sx={{ py: 8 }}>
				<Header />
				<Work projectRef={projectRef} />/
				<Skills skillsRef={skillsRef} />
				<Contact contactRef={contactRef} />
			</Container>
			<Footer />
		</>
	)
}

export default Home
