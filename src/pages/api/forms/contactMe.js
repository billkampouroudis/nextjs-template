// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { requestMethods } from '../../../api/request';
import contactMeController from '../../../api/controllers/contactMe';
import STATUS from '../../../api/statusCodes';
import { successResponse, errorResponse } from '../../../utils/response';
import { NotFoundError } from '../../../api/errors';

// eslint-disable-next-line no-unused-vars
export default async function handler(req, res) {
  switch (req.method) {
    case requestMethods.POST: {
      const response = await contactMeController.sendEmail();
      successResponse(STATUS.HTTP_200_OK, response, res);
    } break;
    default: errorResponse(new NotFoundError(), res);
  }
}
