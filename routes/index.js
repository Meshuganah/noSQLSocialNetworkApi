const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('There was an issue with the endpoint trying to be used');
});

module.exports = router;