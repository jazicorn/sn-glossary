import type { NextApiRequest, NextApiResponse } from 'next';
import glossary from '../../../../utils/dataExamplePublicGlossary';
import { GlossaryContextType } from '../../../../lib/types';

// get all public terms
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    // complete is GET method
  if (req.method === 'GET') {
      try {
        // get data from json file
        const data:GlossaryContextType[] = glossary;
        return res.status(200).json(data);
    } catch (e) {
      res.status(400).send(e);
    }
  } else {
    res.status(405).send({
      message: `The HTTP ${req.method} method is not supported at this route.`,
    });
  }
}