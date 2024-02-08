import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import config from "./config";
import linksRouter from "./router/links";
import shortLinkRouter from "./router/shortLink";

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

app.use('/links', linksRouter);
app.use('/', shortLinkRouter);

const run = async () => {
    await mongoose.connect(config.mongoose.db);

    app.listen(port, () => {
        console.log(`Server listen on ${port} port!`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

void run();