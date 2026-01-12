import { Request, Response } from "express";

const createdBookings = async (req: Request, res: Response) => {
  try {
    const result: any = await bookingServices.createdBookings(req, res);

    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: error,
    });
  }
};

const getBookings = async (req: Request, res: Response) => {
  try {
    const result: any = await bookingServices.getBookings();

    const user = req.user;
    if (user?.role === "admin") {
      return res.status(200).json({
        success: true,
        message: "Bookings retrieved successfully",
        data: result,
      });
    } else {
      const selectBooking = result.filter(
        (bookingData: any) => bookingData.customer.email === user?.email
      );

      res.status(200).json({
        success: true,
        message: "Bookings retrieved successfully",
        data: selectBooking,
      });
    }
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: error,
    });
  }
};

const UpdatedBookings = async (req: Request, res: Response) => {
  try {
    const result: any = await bookingServices.UpdatedBookings(req, res);
    res.status(200).json({
      success: true,
      message: `${
        result.status === "cancelled"
          ? "Booking cancelled successfully"
          : "Booking marked as returned. Vehicle is now available"
      }`,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
      errors: error,
    });
  }
};

export const bookingsController = {
  createdBookings,
  getBookings,
  UpdatedBookings,
};
