import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function TextFields({ ...props }) {
  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        id="filled-search"
        type="search"
        variant="filled"
        fullWidth
        {...props}
      />
    </Box>
  )
}
