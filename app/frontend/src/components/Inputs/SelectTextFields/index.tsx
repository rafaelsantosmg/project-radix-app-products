import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'

export default function SelectTextFields({ ...props }) {
  const { label, data = [] } = props
  return (
    <Box sx={{ width: '100%' }}>
      <TextField
        id="standard-select-currency"
        select
        label={label}
        defaultValue={data.length ? data[0] : ''}
        variant="filled"
        fullWidth
        {...props}
      >
        {data.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  )
}
