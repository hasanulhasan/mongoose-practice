import { NextFunction, Request, Response } from "express";
import { createUsrToDB, getUserFromDB, getUsersFromDB } from "./user.service";

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body
  const user = await createUsrToDB(data);

  res.status(200).json(
    {
      status: 'success',
      data: user
    }
  )
  // res.send('Hello World!')
  console.log('hello world in also in dev side')
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  const users = await getUsersFromDB();
  res.status(200).json({
    status: 'success',
    data: users
  })
}

export const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id } = req.params
  const user = await getUserFromDB(id);
  res.status(200).json({
    status: 'success',
    data: user
  })
}