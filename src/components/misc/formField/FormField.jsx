import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { handleOnBlur, handleOnChange, handleOnInputChange } from '../../../utils/validation';

/**
 * A wrapper for any form field. You just use this wrapper and pass to it the props you would pass
 * to the actual component you want to use.
 * @example
 * <FormField
 *   component={TextField}
 *   label="Email"
 *   variant="outlined"
 *   className="w-100"
 *   value=""
 *   name="email"
 *   rules={
 *     email: true,
 *     maxLength: 45,
 *     notEmpty: true
 *   }
 *   onValidate={(result) => {
 *     setInputs({ ...inputs, email: result });
 *   }}
 *   errorMessage=""
 * />
 * @param {*} props
 */
export default function FormField(props) {
  const {
    component, label, value, inputValue, name, rules, errorMessage, hideError, className
  } = props;

  const propsToAdd = { ...props };
  const Component = component; // In case there are more than one children take the first one.
  const componentNameAutocomplete = 'MuiAutocomplete';

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

  // Remove the props in the list from the actual form field
  for (const item of [
    'value',
    'component',
    'errorMessage',
    'onValidate',
    'hideError',
    'rules',
    'className',
    'inputValue'
  ]) {
    delete propsToAdd[item];
  }

  const isAutoComplete = () => Component.options.name === componentNameAutocomplete;

  const hasError = () => {
    if (isAutoComplete() || !errorMessage) {
      return undefined;
    }

    return true;
  };

  const handleChange = (event, newValue) => {
    let result;
    if (isAutoComplete()) {
      // If component is an autocomplete, result should contain the object value of the selected element
      result = handleOnChange({ ...input }, newValue, exitField);
    } else {
      result = handleOnChange({ ...input }, event.target.value, exitField);
    }

    props.onValidate(result);
  };

  const handleBlur = () => {
    const result = handleOnBlur({ ...input, exit: true });
    setExitField(true);
    props.onValidate(result);
  };

  // This triggers only with autocompletes
  const handleInputChange = (field, newInputValue) => {
    const result = handleOnInputChange(input, newInputValue);
    props.onValidate(result);
  };

  if (isAutoComplete()) {
    propsToAdd.onInputChange = handleInputChange;
  }

  return (
    <>
      <Component
        {...propsToAdd}
        className={`w-100 ${className}`}
        error={hasError()}
        onChange={handleChange}
        onBlur={handleBlur}
        value={input.value || ''}
        inputvalue={input.inputValue}
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
  value: null,
  inputValue: undefined,
  rules: {},
  errorMessage: '',
  hideError: false,
  className: ''
};

FormField.propTypes = {
  component: PropTypes.object.isRequired,
  value: PropTypes.any,
  inputValue: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
  errorMessage: PropTypes.string, // This has to be passed from the parent component when you want to validate all the form fields on submit
  onValidate: PropTypes.func.isRequired, // This is triggered when the value of the field changes and when you click out of it
  hideError: PropTypes.bool,
  name: PropTypes.string.isRequired,
  className: PropTypes.node
};
