import express from "express";
import Links from "../models/Links";

const linksRouter = express.Router();

const generateShortUrl = () => {
    const symbols = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let shortUrl = '';
    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * symbols.length);
        shortUrl += symbols[randomIndex];
    }
    return shortUrl;
}

linksRouter.post('/', async (req, res, next) => {
    try {
        const {originalUrl} = req.body;

        const newLinks = {
            originalUrl,
            shortUrl: generateShortUrl(),
        };

        const links = new Links(newLinks);
        await links.save();

        res.send(links);
    } catch (e) {
        next(e);
    }
});

linksRouter.get('/:shortUrl', async (req, res, next) => {
    try {
        const getShortUrl = req.params.shortUrl;

        const link = await Links.findOne({shortUrl: getShortUrl});

        if (!link) {
           return res.status(404).send({error: 'Not found!'});
        }

        res.status(301).redirect(link.originalUrl);
    } catch (e) {
        next(e);
    }
});

export default linksRouter;