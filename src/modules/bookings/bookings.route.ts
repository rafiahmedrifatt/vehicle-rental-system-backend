import { Router } from "express";
import { bookingsController } from "./bookings.controller";

const router = Router();

router.post("/", bookingsController.createdBookings);

router.get("/", bookingsController.getBookings);

router.put(
  "/:bookingId",

  bookingsController.UpdatedBookings
);

export const bookingRoute = router;
