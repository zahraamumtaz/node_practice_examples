import express from "express";
import logger from "morgan";
import bodyParser from "body-parser";
import todoRoutes from "./server/routes/todoRoutes";

// Set up the express app
const app  = express();

// Log requests to the console.
app.use(logger('dev'));

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/todo', todoRoutes);
// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning.',
}));

export = app;