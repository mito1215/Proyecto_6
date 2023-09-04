import 'dotenv/config';
import express from 'express';
import router from "./router/router.js";

const port = process.env.APP_PORT;
const app = express();
app.use(express.json());

app.use(router);
app.listen(port)

console.log(`Corriendo ${process.env.APP_NAME} mi servidor en http://localhost:${port}`);
