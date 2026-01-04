import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_DsLtQT6n2bEN@ep-square-pine-a8ra4yko-pooler.eastus2.azure.neon.tech/neondb?sslmode=require&channel_binding=require",
});

const initDb = async () => {
  try {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            phone VARCHAR(20) UNIQUE NOT NULL,
            role VARCHAR(10) NOT NULL DEFAULT 'user'
        );
    `);

    pool.query(`
        CREATE TABLE IF NOT EXISTS vehicles (
            id SERIAL PRIMARY KEY,
            vehicle_name VARCHAR(255) NOT NULL,
            type 'car' | 'bike' | 'van' | 'SUV' NOT NULL,
            registration_number UNIQUE NOT NULL,
            daily_rental_price NUMERIC(10, 2) NOT NULL,
            availability_status 'available' | 'booked' NOT NULL
        );
    `);

    pool.query(`
        CREATE TABLE IF NOT EXISTS bookings (
            id SERIAL PRIMARY KEY,
            customer_id INTEGER REFERENCES users(id),
            vehicle_id INTEGER REFERENCES vehicles(id),
            rental_start_date DATE NOT NULL,
            rental_end_date DATE NOT NULL,
            total_price NUMERIC(10, 2) NOT NULL,
            booking_status 'active' | 'cancelled' | 'returned' NOT NULL
        );
            
        `);
  } catch (error) {
    console.error("Error initializing database:", error);
  }
};
