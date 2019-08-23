const Repo = require('../../models/Repos/Repos');

const RepoController = {
    async getAll() {
        const repos = await Repo.getAll();
        return Promise.resolve(repos);
    },
    extractSimpleInfo(repo) {
        const {
            name,
            full_name,
            description,
            html_url,
            url,
        } = repo;
        return {
            name,
            full_name,
            description,
            html_url,
            url,
        };
    },
    extractName(repo) {
        const { name } = repo;
        return { name };
    },
};

module.exports = RepoController;
