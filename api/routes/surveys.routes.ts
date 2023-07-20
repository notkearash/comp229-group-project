import surveysController from '../controllers/surveys';
import express, { Router, Request, Response } from "express";

export const router: Router = express.Router();
router.get('/professor', surveysController.getAllProfessors);
router.post('/professor', surveysController.createProfessor);
router.get('/professor/:id', surveysController.getProfessorById);
router.put('/professor/:id', surveysController.updateProfessorById);
router.delete('/professor/:id', surveysController.deleteProfessorById);

