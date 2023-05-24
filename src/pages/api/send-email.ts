import type { NextApiRequest, NextApiResponse } from "next";
import { render } from "@react-email/render";
import WelcomeTemplate from "../../../emails/WelcomeTemplate";
import { sendEmail } from "../../../lib/email";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // extract email from request
  const { body } = req;

  // complete if POST method 
  if (req.method === 'POST') {
    // try to send email using given email address
    try {
      await sendEmail({
        to: body.email,
        subject: "Welcome to NextAPI",
        html: render(WelcomeTemplate()),
      });
      
      console.log(body.email)
      return res.status(200).json({ message: "Email sent successfully" });
    } catch(e) {
      res.status(400).send(e);
    }
  } else {
    res.status(405).send({
        message: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
}
