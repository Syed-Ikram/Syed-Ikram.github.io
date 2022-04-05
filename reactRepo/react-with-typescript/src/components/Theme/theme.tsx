import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
const theme = createTheme({
    palette:{
        primary:{
            main:'#03314B'
        },
        secondary:green
    },
    typography:{
      fontFamily: 'Cera Pro',
      button:{
          textTransform:"none"
      }
    }
})
export default theme;