const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router
    .route('/thoughts')
    .get(getAllThoughts, getThoughtById)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/thoughts/:thoughtId/reactions')
    .post(createReaction)
    .delete(deleteReaction);

module.exports = router;