import mongoose from 'mongoose';
import app from './app'

const port: number = 9000

// database connection
async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/practice-mongo');
    console.log(`Database connection successful`);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`)
    })
  } catch (error) {
    console.log(`Database connection successful`, error)
  }
}
main();



