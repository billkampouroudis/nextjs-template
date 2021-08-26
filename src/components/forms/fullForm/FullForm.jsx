import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  TextField, Button, CircularProgress, Grid
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useSnackbar } from 'notistack';
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
    firstName: {
      label: 'First Name',
      name: 'firstName',
      value: '',
      rules: {
        maxLength: 45
      },
      errorMessage: ''
    },
    lastName: {
      label: 'Last Name',
      name: 'lastName',
      value: '',
      rules: {
        maxLength: 45
      },
      errorMessage: ''
    },
    email: {
      label: 'Email',
      name: 'email',
      value: '',
      rules: {
        email: true,
        maxLength: 45,
        notEmpty: true
      },
      errorMessage: ''
    },
    movie: {
      label: 'Top 100 Movies',
      name: 'movies',
      value: null,
      inputValue: '',
      rules: {
        notEmpty: true
      },
      errorMessage: ''
    }
  };

  const [inputs, setInputs] = useState(initialInputs);
  const [loading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

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

    if (haveErrors(validatedInputs)) {
      // TODO: Translate
      enqueueSnackbar('Παρακαλούμε ελέγξτε τα στοιχεία σας.', { variant: 'error' });
    } else {
      enqueueSnackbar('Yeey!', { variant: 'success' });
      clearForm();
    }
  };

  const {
    firstName, lastName, email, movie
  } = inputs;

  return (
    <form noValidate autoComplete="off" className="mb-4" onSubmit={onSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <FormField
            component={TextField}
            label={firstName.label}
            variant="outlined"
            value={firstName.value}
            name={firstName.name}
            rules={firstName.rules}
            onValidate={(result) => {
              setInputs({ ...inputs, firstName: result });
            }}
            errorMessage={firstName.errorMessage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormField
            component={TextField}
            label={lastName.label}
            variant="outlined"
            value={lastName.value}
            name={lastName.name}
            rules={lastName.rules}
            onValidate={(result) => {
              setInputs({ ...inputs, lastName: result });
            }}
            errorMessage={lastName.errorMessage}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormField
            component={TextField}
            label={email.label}
            variant="outlined"
            value={email.value}
            name={email.name}
            rules={email.rules}
            onValidate={(result) => {
              setInputs({ ...inputs, email: result });
            }}
            errorMessage={email.errorMessage}
          />
        </Grid>
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
            renderInput={(params) => (
              <TextField
                {...params}
                label="Top 100 movies"
                error={movie.errorMessage ? true : undefined}
                variant="outlined"
              />
            )}
          />
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
