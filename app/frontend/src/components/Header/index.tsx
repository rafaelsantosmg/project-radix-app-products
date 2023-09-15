import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import background from '../../asset/images/radix-background.jpg'
import theme from '../../theme'

function Header() {
  return (
    <Box
      sx={{
        gridArea: 'header',
        background: theme.gradientPurple,
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ padding: '0 1.5rem' }}
      >
        <Image
          src={background}
          width={100}
          height={40}
          alt="Picture of the author"
        />
        <Typography variant="h5" align="center" sx={{ color: theme.white }}>
          APP de Produtos RADIX
        </Typography>
      </Grid>
    </Box>
  )
}

export default Header
