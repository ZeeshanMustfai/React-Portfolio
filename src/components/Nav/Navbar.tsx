import {
	AppBar,
	Box,
	Container,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Toolbar,
	Typography,
} from '@mui/material'
import { SetStateAction, useCallback, useState } from 'react'
import { Menu as MenuIcon } from '@mui/icons-material'
import styles from './navbar.module.less'
import { CssVarsProviderConfig } from '@mui/system'

const navItems = ['About me', 'Skills', 'Projects']

type TDrawerProp = {
	handleAction: (arg: string) => void
}
const MobileMenuDrawer = ({ handleAction }: TDrawerProp) => {
	const handleMobileAction = (action: string) => {
		handleAction(action)
	}
	return (
		<Box className={styles.drawer}>
			<Typography
				variant='h6'
				fontWeight={800}
				padding='5px'
				textAlign={'center'}
			>
				Mustfai
			</Typography>
			<Divider />
			<List>
				{navItems.map((item) => (
					<ListItem key={item} disablePadding>
						<ListItemButton
							sx={{ textAlign: 'center' }}
							onClick={() => handleMobileAction(item)}
						>
							<ListItemText primary={item} />
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Box>
	)
}
type TNavbarProps = {
	handleMenuAction: (arg: string) => void
	topNavRef: any
}
export const Navbar = ({ handleMenuAction, topNavRef }: TNavbarProps) => {
	const [openMobile, setOpenMobile] = useState(false)
	const handleDrawerToggle = () => {
		setOpenMobile(!openMobile)
	}

	const handleAction = useCallback((menu: string) => {
		handleMenuAction(menu)
	}, [])

	return (
		<Box ref={topNavRef}>
			<AppBar position='fixed' component='nav'>
				<Container>
					<Toolbar className={styles.toolbar}>
						<Box
							className={styles.appLogo}
							sx={{
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<IconButton
								color='inherit'
								aria-label='open drawer'
								edge='start'
								onClick={handleDrawerToggle}
								sx={{ mr: 2, display: { sm: 'none' } }}
							>
								<MenuIcon />
							</IconButton>
							<Typography variant='h6' fontWeight={800}>
								Mustfai
							</Typography>
						</Box>
						<Box
							className={styles.navMenu}
							sx={{
								display: { xs: 'none', sm: 'flex' },
								flex: { sm: 2, md: 1 },
							}}
						>
							{navItems.map((menu) => {
								return (
									<Typography
										key={menu}
										onClick={() => handleAction(menu)}
										className={styles.navItems}
									>
										{menu}
									</Typography>
								)
							})}
							<Typography
								className={styles.btnContact}
								onClick={() => handleAction('Contact')}
							>
								Contact me
							</Typography>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<Box component='nav'>
				<Drawer
					anchor='top'
					variant='temporary'
					open={openMobile}
					onClose={handleDrawerToggle}
					elevation={8}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
						},
					}}
				>
					<MobileMenuDrawer handleAction={handleAction} />
				</Drawer>
			</Box>
		</Box>
	)
}
