const express = require('express'),
    router = express.Router();



router.get('/hello' , function(req, res,next) {

    return res.send(' ok ')

});




module.exports = router;