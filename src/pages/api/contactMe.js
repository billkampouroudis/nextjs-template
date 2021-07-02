// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { apiCallMethods } from '../../constants';
import contactMeController from '../../api/controllers/forms/contactMe';

export default function contactMe(req, res) {
  switch (req.method) {
    case apiCallMethods.post:
      (async () => {
        const response = await contactMeController.sendEmail();
        console.log(response);
      })();
  }
}
