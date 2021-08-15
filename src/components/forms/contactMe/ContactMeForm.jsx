import React, { useState } from 'react';
import { TextField, Button, CircularProgress } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import {
  validateAll,
  haveErrors
} from '../../../utils/validation';

// Custom Components
import FormField from '../../misc/formField/FormField';

// API Calls
import contactMeApi from '../../../api/calls/contactMe';

export default function ContactMeForm() {
  const initialInputs = {
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
    }
  };

  const [inputs, setInputs] = useState(initialInputs);
  const [loading, setLoading] = useState(false);
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

    const data = {
      email: validatedInputs.email.value
    };

    if (haveErrors(validatedInputs)) {
      enqueueSnackbar(validatedInputs.email.errorMessage, { variant: 'error' });
    } else {
      setLoading(true);

      // TODO: Translate
      contactMeApi.submit(data)
        .then(() => { enqueueSnackbar('We will contact you soon!', { variant: 'success' }); })
        .catch((err) => { enqueueSnackbar(err.message, { variant: 'error' }); })
        .finally(() => {
          clearForm();
          setLoading(false);
        });
    }
  };

  const { email } = inputs;

  return (
    <div className="contact-me-form">
      <form noValidate autoComplete="off" className="mb-4" onSubmit={onSubmit}>
        <FormField
          component={TextField}
          label={email.label}
          variant="outlined"
          className="mr-2"
          value={email.value}
          name={email.name}
          rules={email.rules}
          onValidate={(result) => {
            setInputs({ ...inputs, email: result });
          }}
          errorMessage={email.errorMessage}
          hideError
        />

        {/* TODO: Translate */}
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          startIcon={loading && <CircularProgress size={16} />}
        >
          Contact
        </Button>
      </form>
    </div>

  );
}
