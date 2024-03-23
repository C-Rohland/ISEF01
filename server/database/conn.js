import mongoose from "mongoose";

export default async function connect(){
    try {
        await mongoose.connect(process.env.ATLAS_URI);
        console.log("Database Connected");
    } catch (error) {
        console.error("Database connection error:", error);
        throw error; // Weiterleiten des Fehlers, um die Ausführung zu stoppen.
    }
}