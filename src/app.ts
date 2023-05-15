import express, { Application } from 'express'
import cors from 'cors';

const app: Application = express()

//Application routes
import userRoutes from './app/modules/user/user.route'
//using cors
app.use(cors())

//parse data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/api/v1/user', userRoutes)
app.use('/api/v1/user', userRoutes)

app.get('/test', (req, res) => {
  res.send('this is test url')
})

export default app;


/*
 step of data in mongodb
 step1: Interface Done
 step2: schema Done
 step3: Model
 step4: Database Query
 */