import dotenv from "dotenv";

import { createApp } from "./app.js";

dotenv.config();

const app = createApp();
const PORT = Number(process.env.PORT ?? 4000);

app.listen(PORT, () => {
  console.log(`Hobblitt API running on http://localhost:${PORT}`);
});
