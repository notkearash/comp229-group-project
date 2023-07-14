import { Request, Response } from 'express';
import { ProfessorModel } from '../models/Survey';

const createProfessor = async (req: Request, res: Response) => {
  try {
    const { name, department } = req.body;

    const existingProfessor = await ProfessorModel.findOne({ name });

    if (existingProfessor) {
      return res.status(409).json({ error: 'Professor already exists' });
    }

    const professor = await ProfessorModel.create({ name, department });

    res.status(201).json(professor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { createProfessor };

