import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect(props) {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <Box className="w-4/5 text-left m-auto h-[40px] mb-8">
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.nama}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label="NamaSelect"
          onChange={handleChange}
        >
          {props.datas ? props.datas.map((data) => (
          <MenuItem 
            value={data.role}
            >
              {data.role.charAt(0).toUpperCase() + data.role.slice(1)}
          </MenuItem>)
          ) : null}
        </Select>
      </FormControl>
    </Box>
  );
}