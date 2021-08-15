import makeRequest, { requestMethods } from '../request';

const contactMe = {
  submit: async (data) => {
    try {
      const response = await makeRequest({
        method: requestMethods.POST,
        url: '/api/forms/contactMe',
        data
      });

      return Promise.resolve(response.data);
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export default contactMe;
