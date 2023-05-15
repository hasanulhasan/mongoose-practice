import { User } from "./user.model";

export const createUsrToDB = async () => {
  const user = await new User({
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
  })
  await user.save();
  return user;
}