import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

export default function TextFields({ ...props }) {
  const { ...rest } = props
  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        id="filled-search"
        type="search"
        variant="outlined"
        fullWidth
        {...rest}
      />
    </Box>
  )
}
