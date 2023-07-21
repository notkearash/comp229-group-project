import mongoose, { Schema, Document, model, Types } from 'mongoose';

interface Professor extends Document {
  name: string;
  ratings: string[];
}

const professorSchema = new Schema<Professor>({
  name: {
    type: String,
    required: true,
  },
  ratings: [String],
});

const ProfessorModel = model<Professor>('Professor', professorSchema);

export { ProfessorModel };