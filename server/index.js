import express from "express";
import cors from "cors";
import productsRoutes from "./routes/productsRoutes.js";

const port = 1117;
const githubRepoLink = "https://github.com/traez/organogramltd-backend-developer-test2";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
  res.send(`
    <h1>Hello World from Trae Zeeofor. Visit link for App info</h1>
    <h2><a href="${githubRepoLink}" target="_blank">${githubRepoLink}</a></h2>
  `);
});

app.listen(port, () => {
  console.log(`App is listening on port: ${port}`);
});