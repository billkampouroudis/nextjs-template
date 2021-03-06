// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { requestMethods } from '../../../api/request';
import { sendEmail } from '../../../api/controllers/contactMe';
import STATUS from '../../../api/statusCodes';
import { successResponse, errorResponse } from '../../../utils/response';
import { NotFoundError, BadRequestError } from '../../../api/errors';

// eslint-disable-next-line no-unused-vars
export default async function handler(req, res) {
  let response = {};

  switch (req.method) {
    case requestMethods.POST: {
      const { email } = req.body;
      try {
        response = await sendEmail(email);
      } catch (error) {
        return errorResponse(new BadRequestError(error), res);
      }
    } break;
    default: errorResponse(new NotFoundError(), res);
  }

  return successResponse(STATUS.HTTP_200_OK, response, res);
}
