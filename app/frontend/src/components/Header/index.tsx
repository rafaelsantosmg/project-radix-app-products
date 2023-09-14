import { Box, Container, Grid, Typography } from '@mui/material'
import background from '../../asset/images/radix-background.jpg'
import Image from 'next/image'
import theme from '../../theme'

function Header() {
  return (
    <Box sx={{ gridArea: 'header', background: theme.gradientPurple }}>
      <Typography variant="h4" align="center" sx={{ color: theme.white }}>
        APP de Produtos RADIX
      </Typography>
    </Box>
  )
}

export default Header
