import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors';
import { Schema, model } from 'mongoose';
import { IUser } from './app/modules/user/user.interface';
import { userSchema } from './app/modules/user/user.model';

const app: Application = express()

//using cors
app.use(cors())
//parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  /*
  step of data in mongodb
  step1: Interface Done
  step2: schema Done
  step3: Model
  step4: Database Query
  */

  const createUsrToDB = async () => {
    const user = new User({
      id: 40541,
      role: 'Mojammel Mia',
      password: "hasanulHasan",
      name: {
        firstName: 'Hasan',
        middleName: 'UL',
        lastName: 'Karim'
      },
      dob: '25/09/1997',
      gender: 'male',
      email: 'hasanlink71@yahoo.com',
      contact: '01862086965',
      presentAddress: 'kumira'
    })
    await user.save();
  }
  createUsrToDB();

  res.send('Hello World!')
  console.log('hello world in also in dev side')
});
app.get('/test', (req, res) => {
  res.send('this is test url')
})


export default app;