import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { handleOnBlur, handleOnChange, handleOnInputChange } from '../../../utils/validation';

export default function FormField(props) {
  const {
    component, label, value, inputValue, name, rules, errorMessage, hideError
  } = props;

  const [input, setInput] = useState({
    label,
    value,
    inputValue,
    name,
    rules,
    errorMessage,
    hideError
  });

  const [exitField, setExitField] = useState(false); // Indicates whether the user cliked outside the field

  useEffect(() => {
    setInput({
      label,
      value,
      inputValue,
      name,
      rules,
      errorMessage,
      hideError
    });
  }, [label, value, inputValue, name, rules, errorMessage, hideError]);

  const propsToAdd = { ...props };
  const Component = component; // In case there are more than one children take the first one.

  // Remove the props in the list from the actual form field
  for (const item of ['value', 'component', 'errorMessage', 'onValidate', 'hideError', 'rules', 'onInputChange']) {
    delete propsToAdd[item];
  }

  const handleChange = (event, newInputValue) => {
    const result = handleOnChange({ ...input }, newInputValue, exitField);
    props.onValidate(result);
  };

  const handleBlur = () => {
    const result = handleOnBlur({ ...input, exit: true });
    setExitField(true);
    props.onValidate(result);
  };

  const handleInputChange = (event, newInputValue) => {
    const result = handleOnInputChange(input, newInputValue);
    props.onValidate(result);
  };

  return (
    <>
      {/* {
        React.cloneElement(Component,
          {
            ...propsToAdd,
            // className: 'w-100',
            // error: !!input.errorMessage,
            onChange: handleChange,
            onBlur: handleBlur
            // onInputChange: handleInputChange
            // value: input.value || ''
          })
      }
      {input.errorMessage && !hideError && (
        <Typography variant="body2" className="text-errorMain">
          {input.errorMessage}
        </Typography>
      )} */}

      <Component
        {...propsToAdd}
        className="w-100"
        error={!!input.errorMessage || undefined}
        onChange={handleChange}
        onBlur={handleBlur}
        onInputChange={handleInputChange}
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
  component: PropTypes.object.isRequired,
  value: PropTypes.any,
  label: PropTypes.string,
  rules: PropTypes.object,
  errorMessage: PropTypes.string, // This has to be passed from the parent component when you want to validate all the form fields on submit
  onValidate: PropTypes.func.isRequired, // This is triggered when the value of the field changes and when you click out of it
  hideError: PropTypes.bool,
  name: PropTypes.string.isRequired
};
