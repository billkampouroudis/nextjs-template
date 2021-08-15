import { getErrors, haveErrors, validateAll } from '../../utils/validation';
import mailer from '../../utils/promiseMailer';

const contactMeEmailOptions = (receiver) => ({
  from: process.env.EMAIL_HOST_USER,
  to: receiver,
  subject: 'Contact me form submission',
  html: `
    <div style="font-size: 16px;">
      Hello there
    </div>
  `
});

export const sendEmail = async (email) => {
  const fields = {
    email: {
      value: email,
      rules: {
        email: true,
        maxLength: 45,
        notEmpty: true
      },
      errorMessage: ''
    }
  };

  const validatedFields = validateAll(fields);
  if (haveErrors(validatedFields)) {
    return Promise.reject(getErrors(validatedFields));
  }

  // Send email
  try {
    await mailer(contactMeEmailOptions(validatedFields.email.value));
    return Promise.resolve('The form was submitted successfully');
  } catch (error) {
    return Promise.reject(error);
  }
};
