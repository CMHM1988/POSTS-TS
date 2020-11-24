import {Request, Response} from 'express'

export const getAllPosts = (req: Request, res: Response) => {
   return res.json({
      msg: `All posts!`
   });
};