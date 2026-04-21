const {generateUrl} = require('../controllers/urlController');
const express= require('express');
const router= express.Router();
router.post('/',generateUrl);
module.exports=router;