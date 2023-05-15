import { NextFunction, Request, Response } from "express";
import { createUsrToDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {

  const user = await createUsrToDB();

  res.status(200).json(
    {
      status: 'success',
      data: user
    }
  )

  // res.send('Hello World!')
  console.log('hello world in also in dev side')
};
