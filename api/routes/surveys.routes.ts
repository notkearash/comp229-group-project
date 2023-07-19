import { getAllProfessors, createProfessor } from '../controllers/surveys';
import express, { Router, Request, Response } from "express";

export const router: Router = express.Router();
router.get('/professor', getAllProfessors);
router.post('professor/', createProfessor);

