import { Router } from "express";
import TurnoController from "../controllers/TurnoController.js";

const routes = Router();
const turnoController = new TurnoController();

routes.post("/", turnoController.crearTurno);
routes.get("/:mes", turnoController.reporteDiversidad);
routes.get("/", turnoController.obtenerTurnos);

export default routes;