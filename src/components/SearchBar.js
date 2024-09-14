import React from 'react';
import { TextField, Autocomplete, CircularProgress } from '@mui/material';

const SearchBar = ({ inputValue, setInputValue, filteredCountries, loading }) => (
  <Autocomplete
    freeSolo
    options={filteredCountries.map((option) => `${option.name} - ${option.capital}`)}
    inputValue={inputValue}
    onInputChange={(event, newInputValue) => {
      setInputValue(newInputValue);
    }}
    renderInput={(params) => (
      <TextField
        {...params}
        label="Search by Country or Capital"
        variant="outlined"
        fullWidth
        InputProps={{
          ...params.InputProps,
          endAdornment: (
            <>
              {loading ? <CircularProgress color="inherit" size={20} /> : null}
              {params.InputProps.endAdornment}
            </>
          ),
        }}
      />
    )}
  />
);

export default SearchBar;
