import SortTable from '../src/components/Table'
import { Box } from '@mui/material'
import Header from '../src/components/Header'
import { styleHome } from '../styles/style-home'

export default function Home() {
  return (
    <Box sx={styleHome.main}>
      <Box sx={styleHome.mainWrapper}>
        <Header />
        <SortTable />
      </Box>
    </Box>
  )
}
