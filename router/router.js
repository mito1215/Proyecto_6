import { Router } from "express";
import { getSkills, insertSkills, updateSkills, deleteSkills } from "../controllers/skills.js";
import { getUsers, insertUsers, updateUsers, deleteUsers } from "../controllers/users.js"
import { deleteCompanies, getCompanies, insertCompanies, updateCompanies } from "../controllers/companies.js";
import { getNegotiationStatus, insertNegotiationStatus, updateNegotiationStatus, deleteNegotiationStatus } from "../controllers/negotiation_status.js"
import {getNegotiation, insertNegotiation, updateNegotiation, deleteNegotiation} from "../controllers/negotiation.js"

const router = Router();

//Tabla de Habiliadades
router.get("/skills",getSkills)
router.post("/skills",insertSkills)
router.put("/skills/:id",updateSkills)
router.delete("/skill/:id",deleteSkills)

//Tabla de Usuarios
router.get("/users",getUsers)
router.post("/users",insertUsers)
router.put("/users/:id",updateUsers)
router.delete("/users/:id",deleteUsers)

//Tabla de Compañias
router.get("/companies",getCompanies)
router.post("/companies",insertCompanies)
router.put("/companies/:id",updateCompanies)
router.delete("/companies/:id",deleteCompanies)

//Tabla de Estado de Negociación
router.get("/status",getNegotiationStatus)
router.post("/status",insertNegotiationStatus)
router.put("/status/:id",updateNegotiationStatus)
router.delete("/status/:id",deleteNegotiationStatus)

//Tabla de Necociación
router.get("/negotiation",getNegotiation)
router.post("/negotiation",insertCompanies)
router.put("/negotiation/:id",updateNegotiation)
router.delete("/negotiation/:id",deleteNegotiation)


export default router;
