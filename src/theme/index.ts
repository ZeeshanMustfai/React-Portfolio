import { createTheme } from '@mui/material/styles'
export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#C4C4C4',
    },
  },
  typography: {
    allVariants: {
      fontFamily: 'DM Sans',
    },
  },

  components: {
    MuiTextField: {
      defaultProps: {
        size: 'small',
        fullWidth: true,
        margin: 'dense',
        variant: 'outlined'
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 20,
        },
      },
    },
  },
})
