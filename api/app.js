import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRoute from "./routes/auth.route.js"

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

//allows to send cookie to client side

app.use(express.json());
app.use(cookieParser());
app.get("/", (req, res) => {
  res.send("Hello from your Express server!");
  console.log("Hio")
});

app.use("/api/auth",authRoute)
app.listen(8800,() => {
    console.log("Server is running localhost:8800");
  });



