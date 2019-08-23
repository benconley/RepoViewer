const fetch = require('node-fetch');

const Repos = {
    async getAll() {
        try {
            const response = await fetch(process.env.URL_GITHUB_REPO_LIST);
            const json = response.json();
            return Promise.resolve(json);
        } catch (err) {
            return Promise.reject(err);
        }
    },
};

module.exports = Repos;
