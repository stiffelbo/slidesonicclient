import React from "react";

import { TextField, MenuItem } from "@mui/material";

const SelectSimple = ({ options, value, onChange, label = "Select Collection" }) => {
    return (
        <TextField
          select
          label={label}
          value={value}
          onChange={e=>onChange(e.target.value)}
          sx={{width: '100%'}}
          variant="standard"
        >
          {options.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
    );
};

export default SelectSimple;