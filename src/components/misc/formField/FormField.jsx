import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { handleOnBlur, handleOnChange } from '../../../utils/validation';

export default function FormField(props) {
  const {
    component, label, value, name, rules, errorMessage, hideError
  } = props;

  const [input, setInput] = useState({
    label, value, name, rules, errorMessage
  });

  const [exitField, setExitField] = useState(false); // Indicates whether the user cliked outside the field

  useEffect(() => {
    setInput({
      label, value, name, rules, errorMessage, hideError
    });
  }, [label, value, name, rules, errorMessage, hideError]);

  const propsToAdd = { ...props };
  const Component = component;

  // console.log(propsToAdd.className);

  // Remove the props in the list from the actual form field
  for (const item of ['component', 'errorMessage', 'value', 'onValidate', 'hideError', 'rules']) {
    delete propsToAdd[item];
  }

  const handleChange = (evt) => {
    const result = handleOnChange({ ...input }, evt.target.value, exitField);
    props.onValidate(result);
  };

  const handleBlur = (evt) => {
    const result = handleOnBlur({ ...input, value: evt.target.value, exit: true });
    setExitField(true);
    props.onValidate(result);
  };

  return (
    <>
      <Component
        {...propsToAdd}
        className="w-100"
        error={!!input.errorMessage}
        onChange={handleChange}
        onBlur={handleBlur}
        value={input.value || ''}
      />
      {input.errorMessage && !hideError && (
        <Typography variant="body2" className="text-errorMain">
          {input.errorMessage}
        </Typography>
      )}

    </>
  );
}

FormField.defaultProps = {
  label: '',
  value: '',
  rules: {},
  errorMessage: '',
  hideError: false
};

FormField.propTypes = {
  component: PropTypes.elementType.isRequired,
  value: PropTypes.oneOfType([String, Object]),
  label: PropTypes.string,
  rules: PropTypes.object,
  errorMessage: PropTypes.string, // This has to be passed from the parent component when you want to validate all the form fields on submit
  onValidate: PropTypes.func.isRequired, // This is triggered when the value of the field changes and when you click out of it
  hideError: PropTypes.bool,
  name: PropTypes.string.isRequired
};
