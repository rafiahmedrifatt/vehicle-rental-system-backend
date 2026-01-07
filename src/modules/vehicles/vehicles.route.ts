import { Router } from "express";
import { vehicleController } from "./vehicle.controller";

const router = Router();

router.get("/", vehicleController.getVehicles);

export const vehicleRoute = router;
