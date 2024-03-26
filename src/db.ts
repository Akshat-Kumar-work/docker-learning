import mongoose, { Schema, model } from 'mongoose';


//own container localhost
// const mongoUrl: string = 'mongodb://localhost:27017/myDatabase';


const mongoUrl : any =  process.env.MONGO_URL;


//container name where mongo is on
// const mongoUrl : string = 'mongodb://mongo_container:27017/myDatabase';


//here we had provided the native machine as local host
// const mongoUrl: string = 'mongodb://host.docker.internal:27017/myDatabase';



// Connect to MongoDB
mongoose.connect(mongoUrl)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a User schema
interface IUser {
  name: string;
  age: number;
  email: string;
}

const UserSchema: Schema = new Schema<IUser>({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true }
});

// Create a User model
export const User = model<IUser>('User', UserSchema);