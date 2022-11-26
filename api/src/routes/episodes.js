const { Router } = require('express');
const { getEpisodes} = require('../controllers/controllerEpisode');

const router = Router();
router.get("/", getEpisodes);




module.exports = router;