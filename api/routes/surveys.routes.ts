import surveysController from '../controllers/surveys';
import express, { Router, Request, Response } from "express";

export const router: Router = express.Router();
router.get('/professor/', surveysController.getAllProfessors);
router.post('/professor/', surveysController.createProfessor);
router.get('/professor/:id', surveysController.getProfessorById);
router.put('/professor/:id', surveysController.updateProfessorById);
router.delete('/professor/:id', surveysController.deleteProfessorById);

router.post('/professor/:id/rating/', surveysController.addRatingToProfessor);
router.delete('/professor/:id/rating/', surveysController.deleteRatingFromProfessor);


router.get('/user/', surveysController.getAllUsers);
router.post('/user/signup/', surveysController.createUser);
router.post('/user/login/', surveysController.loginUser)
