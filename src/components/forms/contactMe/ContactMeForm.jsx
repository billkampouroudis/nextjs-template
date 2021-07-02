import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import {
  validateAll
// haveErrors
} from '../../../utils/validation';

// Custom Components
import FormField from '../../misc/formField/FormField';

export default function ContactMeForm(props) {
  const initialInputs = {
    email: {
      label: 'Email',
      name: 'email',
      value: '',
      rules: {
        email: true,
        maxLength: 45
      },
      errorMessage: ''
    }
  };

  const [inputs, setInputs] = useState(initialInputs);

  const onSubmit = (evt) => {
    evt.preventDefault();
    const validatedInputs = validateAll(inputs);
    setInputs(validatedInputs);

    // console.log(typeof evt.target.elements.email.value);
    // if (!haveErrors(validatedInputs)) {
    // const data = {
    //   email: inputs.email.value
    // };
    // if (props.address) {
    //   addressesApi.updateAddress(props.address.id, data).then(() => {
    //     clearInputs();
    //     props.onSuccess && props.onSuccess();
    //   });
    // } else {
    //   addressesApi.createAddress(data).then(() => {
    //     clearInputs();
    //     props.onSuccess && props.onSuccess();
    //   });
    // }
    // }
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
        />

        <Button variant="outlined" color="primary" type="submit">
          Contact me
        </Button>
      </form>
    </div>

  );
}
