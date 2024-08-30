const express = require('express');
const ensureAuthenticated = require('../Middlewares/Auth');

const router = express.Router();

router.get('/productlist', ensureAuthenticated, (req, res) => {
    console.log('---- logged in user detail ---', req.user);
    res.status(200).json([
        {
            name: "mobile",
            price: 10000
        },
        {
            name: "tv",
            price: 20000
        }
    ]);
});

module.exports = router;
