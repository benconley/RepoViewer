const router = require('express').Router();
const path = require('path');
const asyncHandler = require('express-async-handler');
const RepoController = require('../controllers/repos/repos');

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/repos', asyncHandler(async (req, res) => {
    const resp = [];
    const result = await RepoController.getAll();
    result.forEach((repo) => {
        resp.push(RepoController.extractSimpleInfo(repo));
    });
    return res.json(resp);
}));

router.get('/repoNames', asyncHandler(async (req, res) => {
    const resp = [];
    const result = await RepoController.getAll();
    result.forEach((repo) => {
        resp.push(RepoController.extractName(repo));
    });
    return res.json(resp);
}));
module.exports = router;
