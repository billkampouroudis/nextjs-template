import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import {
  handleOnBlur,
  handleOnChange
} from '../../../utils/validation';

export default function FormField(props) {
  const {
    component, label, value, name, rules, errorMessage
  } = props;

  const [input, setInput] = useState({
    label, value, name, rules, errorMessage
  });
  // Indicates whether the user cliked outside the field
  const [exitField, setExitField] = useState(false);

  useEffect(() => {
    setInput({
      label, value, name, rules, errorMessage
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [label, value, name, rules, errorMessage]);

  const propsToAdd = { ...props };
  const Component = component;

  for (const item of ['component', 'errorMessage', 'value', 'onValidate']) {
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
        error={!!input.errorMessage}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {input.errorMessage && (
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
  errorMessage: ''
};

FormField.propTypes = {
  component: PropTypes.elementType.isRequired,
  value: PropTypes.string,
  label: PropTypes.string,
  rules: PropTypes.object,
  errorMessage: PropTypes.string
};
