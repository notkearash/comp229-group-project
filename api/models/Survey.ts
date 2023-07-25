import mongoose, { Schema, Document, model, Types } from 'mongoose';

interface Professor extends Document {
  name: string;
  ratings: string[];
}

interface User extends Document {
  username: string;
  password: string;
}

const professorSchema = new Schema<Professor>({
  name: {
    type: String,
    required: true,
  },
  ratings: [String],
});

const userSchema = new Schema<User>({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const ProfessorModel = model<Professor>('Professor', professorSchema);
const UserModel = model<User>('User', userSchema);

export { ProfessorModel, UserModel };