import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import ejs from "ejs";
import path from "path";

const app = express();
app.set("view engine", "ejs");
app.set("views",path.join(__dirname,"view"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req,res) => res.render("index"));

export default app;