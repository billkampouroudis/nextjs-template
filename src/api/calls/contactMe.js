import makeRequest, { requestMethods } from '../request';

const contactMe = {
  submit: async () => {
    try {
      const response = await makeRequest({
        method: requestMethods.POST,
        url: '/api/forms/contactMe'
      });

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export default contactMe;
