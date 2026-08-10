import cors from "cors";
import dotenv from "dotenv";
import express from "express";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;



app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Hobblitt API is running",
  });
});

app.listen(PORT, () => {
  console.log(`Hobblitt API running on http://localhost:${PORT}`);
});


