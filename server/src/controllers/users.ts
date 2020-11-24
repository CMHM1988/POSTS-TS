import {Request, Response} from 'express'

export const getAllUsers = (req: Request, res: Response) => {
   return res.json({
      msg: `All users!`
   });
};