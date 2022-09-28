import express, { Request, Response, NextFunction } from "express";
import { json } from "body-parser";
import userRoutes from "./routes/userRoute";
import postRoute from "./routes/postRoute"

const app = express();
app.use(json());

app.listen(3000, () => {
  console.log("http:localhost:3000/");
});

app.use("/user", userRoutes);
app.use("/post", postRoute)

app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({ message: err.message });
});
