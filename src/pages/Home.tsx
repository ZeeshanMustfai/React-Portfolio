import { Container } from '@mui/material'
import { useCallback, useRef } from 'react'
import { Header, Navbar } from '../components'
import About from './about/About'
import Contact from './contact/Contact'
import Footer from './footer/Footer'
import Skills from './skills/Skills'
import Projects from './projects/Projects'

const Home = () => {
	const skillsRef = useRef<HTMLDivElement>(null)
	const aboutRef = useRef<HTMLDivElement>(null)
	const projectRef = useRef<HTMLDivElement>(null)
	const contactRef = useRef<HTMLDivElement>(null)
	const topNavRef = useRef<HTMLDivElement>(null)

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
		if (item === 'About me') {
			if (aboutRef.current) {
				aboutRef.current.scrollIntoView({ behavior: 'smooth' })
			}
		}
	}, [])

	const handleGoToUp = useCallback(() => {
		if (topNavRef.current) {
			topNavRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}, [])

	// function countKSubarrays(nums: number[], k: number) {
	// 	let count = 0
	// 	let prefixSums = Array(nums.length + 1).fill(0)
	// 	let modCounts = Array(k).fill(0)
	// 	prefixSums[0] = 0
	// 	modCounts[0] = 1

	// 	for (let i = 0; i < nums.length; i++) {
	// 		prefixSums[i + 1] = prefixSums[i] + nums[i]
	// 		let mod = ((prefixSums[i + 1] % k) + k) % k // to handle negative remainders
	// 		count += modCounts[mod]
	// 		modCounts[mod]++
	// 	}

	// 	return count
	// }

	return (
		<>
			<Navbar handleMenuAction={handleMenuAction} topNavRef={topNavRef} />
			<Container sx={{ py: 8 }}>
				<Header />
				<About aboutRef={aboutRef} />
				<Skills skillsRef={skillsRef} />
				<Projects projectRef={projectRef} />/
				<Contact contactRef={contactRef} />
			</Container>
			<Footer handleGoToUp={handleGoToUp} />
		</>
	)
}

export default Home
