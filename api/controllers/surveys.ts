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

const getAllProfessors = async (req: Request, res: Response) => {
  try {
    const professors = await ProfessorModel.find();
    res.json(professors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getProfessorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const professor = await ProfessorModel.findById(id);

    if (!professor) {
      return res.status(404).json({ error: 'Professor not found' });
    }

    res.json(professor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateProfessorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, department } = req.body;

    const updatedProfessor = await ProfessorModel.findByIdAndUpdate(
      id,
      { name, department },
      { new: true }
    );

    if (!updatedProfessor) {
      return res.status(404).json({ error: 'Professor not found' });
    }

    res.json(updatedProfessor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteProfessorById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedProfessor = await ProfessorModel.findByIdAndDelete(id);

    if (!deletedProfessor) {
      return res.status(404).json({ error: 'Professor not found' });
    }

    res.json(deletedProfessor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export { createProfessor, getAllProfessors, getProfessorById, updateProfessorById, deleteProfessorById };
