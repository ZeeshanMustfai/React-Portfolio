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
import { SetStateAction, useState } from 'react'
import { Menu as MenuIcon } from '@mui/icons-material'
import styles from './navbar.module.less'

const navItems = ['About me', 'Skills', 'Projects']

const drawer = (
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
					<ListItemButton sx={{ textAlign: 'center' }}>
						<ListItemText primary={item} />
					</ListItemButton>
				</ListItem>
			))}
		</List>
	</Box>
)
type TNavbarProps = {
	handleMenuAction: (arg: string) => void
}
export const Navbar = ({ handleMenuAction }: TNavbarProps) => {
	const [openMobile, setOpenMobile] = useState(false)
	const handleDrawerToggle = () => {
		setOpenMobile(!openMobile)
	}
	const handleAction = (menu: string) => {
		handleMenuAction(menu)
	}
	return (
		<Box>
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
									<Typography key={menu} onClick={() => handleAction(menu)}>
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
					{drawer}
				</Drawer>
			</Box>
		</Box>
	)
}
