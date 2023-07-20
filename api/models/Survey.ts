import { Schema, Document, model, Types } from 'mongoose';

interface Rating {
  text: string;
}

interface Professor extends Document {
  name: string;
  ratings: Types.ObjectId[] | Rating[];
}

const ratingSchema = new Schema<Rating>({
  text: {
    type: String,
    required: true,
  },
});

const professorSchema = new Schema<Professor>({
  name: {
    type: String,
    required: true,
  },
  ratings: [{
    type: Schema.Types.ObjectId,
    ref: 'Rating',
  }],
});

const RatingModel = model<Rating>('Rating', ratingSchema);
const ProfessorModel = model<Professor>('Professor', professorSchema);

export { RatingModel, ProfessorModel };
