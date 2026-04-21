const {urlMod} = require('../models/urlModel');
const {nanoid} = require('nanoid');

async function generateUrl(req,res)
{
    const {actUrl}=req.body;
    if(!actUrl) return res.status(404).json({err:"URL is mandatory"})
    const shortUrl= nanoid(8);

    const newEntry = await urlMod.create({
        shortUrl:shortUrl,
        actUrl:actUrl,
    });

    res.json({
        message: "short url created",
        shortUrl:shortUrl,
        data: newEntry
    });

}
module.exports = {generateUrl};