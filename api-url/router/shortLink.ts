import express from "express";
import Links from "../models/Links";

const shortLinkRouter = express.Router();
shortLinkRouter.get('/:shortUrl', async (req, res, next) => {
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

export default shortLinkRouter;