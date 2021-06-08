const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        return next();
    }
    return res.send("SORRY, YOU ARE NOT AN ADMIN!")
})

router.get('/topsecret', (req, res) => {
    res.send('this is a secret')
})
router.get('/deleteeverything', (req, res) => {
    res.send('evidence deleted')
})

module.exports = router;