const formMessages = {
  el: {
    required: 'Αυτό το πεδίο είναι υποχρεωτικό',
    maxLength: (length) => `Αυτό το πεδίο πρέπει να περιέχει λιγότερους από ${length} χαρακτήρες`,
    minLength: (length) => `Αυτό το πεδίο πρέπει να περιέχει τουλάχιστον ${length} χαρακτήρες`,
    email: 'Εισάγετε μία σωστή διεύθυνση email',
    phone: 'Εισάγετε ένα σωστό αριθμό τηλεφώνου',
    fileTooLarge: (sizeString) => `Το αρχείο δεν πρέπει να ξεπερνά τα ${sizeString}`,
    fileType: 'Αυτός το τύπος αρχείου δεν υποστηρίζεται',
    generalError: 'Σφάλμα κατά την αποστολή της φόρμας',
    success: 'Η φόρμα στάλθηκε με επιτυχία',
    password: {
      length: (length) => `Ο κωδικός πρέπει να περιέχει τουλάχιστον ${length} χαρακτήρες`
    },
    numeric: 'Εισάγετε έναν αριθμό'
  },
  en: {
    required: 'This field is required',
    maxLength: (length) => `This field should contain less than ${length} characters`,
    minLength: (length) => `This field should contain at least ${length} characters`,
    email: 'Please provide a correct email',
    phone: 'Please provide a correct phone number',
    fileTooLarge: (sizeString) => `File should not exceed ${sizeString}`,
    fileType: 'This file type is not supported',
    generalError: 'There was an error while submitting the form',
    success: 'Form submitted successfully',
    password: {
      length: (length) => `Password should contain at least ${length} characters`
    },
    numeric: 'Please insert a number'
  }
};

export default formMessages;
