const Repos = require('../../models/Repos/Repos');
const RepoController = require('./repos');
const mockRepoData = require('../../models/Repos/Repos.mock');

jest.mock('../../models/Repos/Repos');

describe('Repos Controller', () => {
    describe('get all', () => {
        it('should get an array of repositories', (done) => {
            Repos.getAll.mockResolvedValueOnce(mockRepoData.outputMock);
            RepoController.getAll().then((result) => {
                expect(result.length).toEqual(mockRepoData.outputMock.length);
                done();
            });
        });
    });
    describe('extractSimpleInfo', () => {
        it('should only return the known short list of fields', (done) => {
            const result = RepoController.extractSimpleInfo(mockRepoData.outputMock[0]);
            expect(Object.keys(result).length).toBe(5);
            done();
        });
    });
    describe('extractName', () => {
        it('should only return the repo name', (done) => {
            const result = RepoController.extractName(mockRepoData.outputMock[0]);
            expect(Object.keys(result).length).toBe(1);
            done();
        });
    });
});
