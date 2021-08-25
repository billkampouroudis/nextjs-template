import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  TextField, Button, CircularProgress, Grid
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {
  validateAll,
  haveErrors
  // validateOne
} from '../../../utils/validation';

// Custom Components
import FormField from '../../misc/formField/FormField';

// Data
import top100movies from './top100Movies';

export default function Form() {
  const initialInputs = {
    // email: {
    //   label: 'Email',
    //   name: 'email',
    //   value: '',
    //   rules: {
    //     email: true,
    //     maxLength: 45,
    //     notEmpty: true
    //   },
    //   errorMessage: ''
    // },
    movie: {
      label: 'Top 100 Movies',
      name: 'movies',
      value: top100movies[0] || '',
      inputValue: top100movies[0].title || '',
      rules: {
        notEmpty: true
      },
      errorMessage: ''
    }
  };

  const [inputs, setInputs] = useState(initialInputs);
  const [loading, setLoading] = useState(false);

  const clearForm = () => {
    const newInputs = {};
    for (const key in inputs) {
      newInputs[key] = { ...inputs[key], value: '' };
    }

    setInputs(newInputs);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    const validatedInputs = validateAll(inputs);
    setInputs(validatedInputs);
    // const data = {
    //   email: validatedInputs.email.value
    // };

    if (haveErrors(validatedInputs)) {
      // enqueueSnackbar(validatedInputs.email.errorMessage, { variant: 'error' });
    } else {
      setLoading(true);
      // TODO: Translate
      // contactMeApi.submit(data)
      //   .then(() => { enqueueSnackbar('We will contact you soon!', { variant: 'success' }); })
      //   .catch((err) => { enqueueSnackbar(err.message, { variant: 'error' }); })
      //   .finally(() => {
      clearForm();
      //     setLoading(false);
      //   });
    }
  };

  const { email, movie } = inputs;

  return (
    <form noValidate autoComplete="off" className="mb-4" onSubmit={onSubmit}>
      <Grid container spacing={2}>

        {/* <Grid item xs={12} md={6}>
          <FormField
            component={TextField}
            label={email.label}
            variant="outlined"
            className="w-100"
            value={email.value}
            name={email.name}
            rules={email.rules}
            onValidate={(result) => {
              setInputs({ ...inputs, email: result });
            }}
            errorMessage={email.errorMessage}
          />
        </Grid> */}
        <Grid item xs={12} md={6}>
          <FormField
            component={Autocomplete}
            value={movie.value}
            name={movie.name}
            rules={movie.rules}
            onValidate={(result) => {
              setInputs({ ...inputs, movie: result });
            }}
            errorMessage={movie.errorMessage}
            options={top100movies}
            getOptionLabel={(option) => (option && option.title ? option.title : '')}
            inputValue={movie.inputValue}
            renderInput={(params) => <TextField {...params} label="Top 100 movies" variant="outlined" />}
          />

          {/* <Autocomplete
            value={movie.value}
            name={movie.name}
            options={top100movies}
            getOptionLabel={(option) => (option && option.title ? option.title : '')}
            onChange={(event, newValue) => {
              const newMovie = { ...inputs.movie, value: newValue };
              setInputs({ ...inputs, movie: validateOne(newMovie) });
            }}
            inputValue={inputs.movie.inputValue}
            onInputChange={(event, newInputValue) => {
              // const newMovie = { ...inputs.movie, value: newInputValue };
              setInputs({ ...inputs, movie: { ...inputs.movie, inputValue: newInputValue } });
            }}
            onLabel
            renderInput={(params) => <TextField {...params} label="Top 100 movies" variant="outlined" />}
          /> */}
        </Grid>

        <Grid item xs={12} className="text-right">
          {/* TODO: Translate */}
          <Button
            variant="contained"
            color="primary"
            type="submit"
            startIcon={loading && <CircularProgress size={16} />}
          >
            Contact
          </Button>
        </Grid>
      </Grid>

    </form>
  );
}

Form.propTypes = {
};
