import {Request, Response} from 'express'

export const getAllAuthors = (req: Request, res: Response) => {
   return res.json({
      msg: `All Authors!`
   });
};