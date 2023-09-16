/* eslint-disable react-hooks/exhaustive-deps */
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import { FormControl, IconButton, InputLabel, Select } from '@mui/material'
import MenuItem from '@mui/material/MenuItem'

export default function SelectFields({ ...props }) {
  const { label, options } = props

  return (
    <FormControl sx={{ width: '100%' }}>
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
        {...props}
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

{
  /* <FormControl sx={{ width: '100%' }}>
  <InputLabel id="select-label">{props.label}</InputLabel>
  <Select
    value={props.value}
    id="select"
    labelId="select-label"
    onChange={props.onChange}
    displayEmpty
    renderValue={(value) => (value ? value : props.label)}
    sx={{
      '& .MuiSelect-iconOutlined': {
        display: props.value ? 'none' : '',
      },
      '&.Mui-focused .MuiIconButton-root': { color: 'primary.main' },
    }}
    endAdornment={
      props.value !== '' && (
        <IconButton
          // sx={{ visibility: selectedValue ? 'visible' : 'hidden' }}
          onClick={() => props.onChange({ target: { value: '' } })}
        >
          <ClearIcon />
        </IconButton>
      )
    }
    {...props}
  >
    {props?.data?.map((option: string) => (
      <MenuItem key={option} value={option}>
        {option}
      </MenuItem>
    ))}
  </Select>
</FormControl> */
}
