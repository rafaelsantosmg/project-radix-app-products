import { Box } from '@mui/material'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import SortTable from '../components/Table'
import { styleHome } from '../styles/style-home'

export default function Home() {
  return (
    <Box sx={styleHome.main}>
      <Box sx={styleHome.mainWrapper}>
        <Header />
        <SearchBar />
        <SortTable />
      </Box>
    </Box>
  )
}
