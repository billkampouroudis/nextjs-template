import STATUS from '../api/statusCodes';

export const successResponse = (status, data = {}, res = {}) => {
  const responseStatus = status || STATUS.HTTP_200_OK;
  res.status(responseStatus).json({ data } || {});
};

export const errorResponse = (error, res = {}) => {
  const responseStatus = error.status || STATUS.HTTP_500_INTERNAL_SERVER_ERROR;
  res.status(responseStatus).json({ error } || {});
};
