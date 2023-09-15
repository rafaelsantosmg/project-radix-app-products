import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import background from '../../asset/images/radix-background.jpg'
import theme from '../../theme'

function Header() {
  return (
    <Box sx={{ gridArea: 'header', background: theme.gradientPurple }}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: '0 1.5rem' }}
      >
        <Image
          src={background}
          width={120}
          height={50}
          alt="Picture of the author"
        />
        <Typography variant="h3" align="center" sx={{ color: theme.white }}>
          APP de Produtos RADIX
        </Typography>
      </Grid>
    </Box>
  )
}

export default Header
