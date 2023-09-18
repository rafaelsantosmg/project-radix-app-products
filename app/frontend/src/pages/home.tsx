import { Box } from '@mui/material'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import SortTable from '../components/Table'

export default function Home(): JSX.Element {
  return (
    <Box
      sx={{
        alingItems: 'center',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 1,
        gridTemplateRows: 'auto',
        gridTemplateAreas: `"header header header header" 
        "search search search search" "table table table table"`,
      }}
    >
      <Header />
      <SearchBar />
      <SortTable />
    </Box>
  )
}
