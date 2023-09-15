import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import theme from '@/theme'

export default function SelectTextFields({ ...props }) {
  const { label, data = [] } = props
  return (
    <Box sx={{ width: '100%', position: 'relative' }}>
      <TextField
        id="standard-select-currency"
        select
        label={label}
        defaultValue={data.length ? data[0] : ''}
        variant="outlined"
        fullWidth
        {...props}
      >
        {data.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
      {props.value !== '' && (
        <RestartAltIcon
          sx={{
            position: 'absolute',
            right: 40,
            top: '50%',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
            fontSize: '1.2rem',
            color: theme.gray,
          }}
          onClick={() => props.onChange({ target: { value: '' } })}
        />
      )}
    </Box>
  )
}
