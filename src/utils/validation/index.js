import Validator from './validator';

/**
 * Runs the validation for all given input objects
 * and adds an error message to each of them if any of the validation rules fails.
 * @param {object} inputs An object that contains the description of the actual input fields
 * of the form
 * @param {string} input.label The label of the input
 * @param {string} input.name The name of the input
 * @param {string} input.value The value of the input
 * @param {string} input.inputValue The visible value of the input
 * @param {object} input.rules The validation rules of the input
 * @param {object} input.errorMessage The error message that will be displayed in case
 * the validation of the input value fails
 * @returns {object} The inputs object with an error message to the inputs that failed validation.
 */
export const validateAll = (inputs) => {
  const resultInputs = { ...inputs };

  for (const inputKey in inputs) {
    for (const ruleKey in inputs[inputKey].rules) {
      let result = {};

      if (inputs[inputKey].file) {
        result = Validator[ruleKey](
          inputs[inputKey].file,
          inputs[inputKey].rules[ruleKey]
        );
      } else {
        result = Validator[ruleKey](
          inputs[inputKey].value,
          inputs[inputKey].rules[ruleKey]
        );
      }

      resultInputs[inputKey] = {
        ...inputs[inputKey],
        errorMessage: result.error || ''
      };

      if (result.error) {
        break;
      }
    }
  }
  return resultInputs;
};

/**
 * Runs the validation for the given input object
 * and adds an error message if any of the validation rules fails.
 * @param {object} inputs An object that contains the description of an actual input field
 * of the form
 * the validation of the input value fails
 * @returns {object} The input object with an error message if the validation failed.
 */
export const validateOne = (input) => {
  const tempInput = { ...input };

  for (const ruleKey in input.rules) {
    let result = {};

    if (input.file) {
      result = Validator[ruleKey](input.file, input.rules[ruleKey]);
    } else {
      result = Validator[ruleKey](input.value, input.rules[ruleKey]);
    }

    if (result.error) {
      return {
        ...tempInput,
        errorMessage: result.error
      };
    }
  }
  return { ...tempInput, errorMessage: '' };
};

/**
 * Checks if there are errors in the given form inputs
 * @param {object} inputsToCheck An object that contains the description of the actual input fields
 * @returns {bool}
 */
export const haveErrors = (inputsToCheck = {}) => {
  for (const inputKey in inputsToCheck) {
    if (inputsToCheck[inputKey].errorMessage) {
      return true;
    }
  }
  return false;
};

/**
 * Validates the given input object when needed.
 * @param {object} input An object that contains the description of an actual input field
 * @param {string} newValue The new value that the user typed
 * @returns {object} The input object with an error message if the validation failed
 */
export const handleOnChange = (input, newValue, exit) => {
  const newInput = { ...input, value: newValue };
  if (exit) {
    return validateOne(newInput);
  }

  return newInput;
};

/**
 * Validates the given input object when needed.
 * @param {object} input An object that contains the description of an actual input field
 * @param {string} newInputValue The new value that the input shows to the users
 * @returns {object} The input object with an error message if the validation failed
 */
export const handleOnInputChange = (input, newInputValue) => {
  const newInput = { ...input, inputValue: newInputValue };
  return newInput;
};

/**
 * Validates the given input object.
 * @param {object} input An object that contains the description of an actual input field
 * @returns {object} The input object with an error message if the validation failed
 */
export const handleOnBlur = (input) => validateOne(input);

export const getErrors = (inputs) => {
  const errors = {};
  for (const key in inputs) {
    const input = inputs[key];

    if (input.errorMessage) {
      errors[key] = input.errorMessage;
    }
  }

  return errors;
};
