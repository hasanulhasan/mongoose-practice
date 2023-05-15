import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUsrToDB = async (payload: IUser): Promise<IUser> => {
  const user = new User(payload)
  await user.save();
  return user;
}

export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
}

export const getUserFromDB = async (payload: string): Promise<IUser | null> => {
  const user = await User.findOne({ id: payload })
  return user
}

/*{
    id: 40542,
    role: 'Choloman Shekh',
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
  } */