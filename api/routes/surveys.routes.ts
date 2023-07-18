import { createProfessor } from '../controllers/surveys';
import express, { Router, Request, Response } from "express";

export const router: Router = express.Router();
router.get('/', createProfessor);
