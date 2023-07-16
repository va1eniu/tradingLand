import { Router } from "express";
import { obtenerAcciones, agregarAcciones, borrarAcciones, oneAccion, actualizarAcciones } from "../controllers/acciones.controller.js";

const router = Router();

router.get("/", obtenerAcciones);

router.post("/", agregarAcciones);

router.delete("/:id", borrarAcciones);

router.patch("/:id", actualizarAcciones);

router.get("/", oneAccion);

export default router;