import { Box } from '@mui/material'
import Form from '../components/Form'
import Header from '../components/Header'

export default function AddProducts() {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"header header header header" 
        "form form form form"`,
      }}
    >
      <Header />
      <Form />
    </Box>
  )
}
