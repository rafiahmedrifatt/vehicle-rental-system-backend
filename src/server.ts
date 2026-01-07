import express, { Request, Response } from "express";
import { userRoute } from "./modules/users/users.route";
import { initDb } from "./database/db";
import { vehicleRoute } from "./modules/vehicles/vehicles.route";

initDb();
const app = express();

app.use("/api/v1/users", userRoute);
app.use("/vehicles", vehicleRoute);

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
