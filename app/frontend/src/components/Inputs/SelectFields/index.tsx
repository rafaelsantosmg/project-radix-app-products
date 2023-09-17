/* eslint-disable react-hooks/exhaustive-deps */
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { FormControl, IconButton, InputLabel, Select } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

export default function SelectFields({ ...props }) {
  const { label, options, ...rest } = props

  return (
    <FormControl variant="outlined" sx={{ width: '100%' }}>
      <InputLabel id="select-label">{label}</InputLabel>
      <Select
        sx={{
          '& .MuiSelect-iconOutlined': { display: props.value ? 'none' : '' },
          '&.Mui-focused .MuiIconButton-root': { color: 'primary.main' },
        }}
        labelId="select-label"
        id="select"
        renderValue={(value) => (value ? value : label)}
        endAdornment={
          props.value !== '' && (
            <IconButton
              onClick={() => props.onChange({ target: { value: '' } })}
            >
              <RestartAltIcon />
            </IconButton>
          )
        }
        {...rest}
      >
        {options.map((option: string) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
