# repoViewer
Author: [Ben Conley](http://benconley.net/)
repoViewer is a simple nodeJS application to retrieve and display GitHub repository information
  - Retrieve simple info for a configured GitHub user account
  - Return information as JSON through an open endpoint

Example installation exists on AWS. Contact me if you want to demo it because the instance is not running all the time:
    http://ec2-34-213-169-46.us-west-2.compute.amazonaws.com:3000/
### Installation
repoViewer requires [Node.js](https://nodejs.org/) to run.

Clone the repoViewer repository from GitHub
```sh
git clone https://github.com/benconley/repoViewer.git
```
Set ENV variables, or copy sample .env file and edit as desired
```
$ cd repoViewer
$ cp .env.sample .env
$ vim .env

    *or*

$ NODE_ENV=development node app
$ LOG_FORMAT=dev
$ URL_GITHUB_REPO_LIST='https://api.github.com/users/benconley/repos'

    *or*

$ NODE_ENV=production node app
$ LOG_FORMAT=prod
$ URL_GITHUB_REPO_LIST='https://api.github.com/users/benconley/repos'
```
Install the dependencies and devDependencies and start the server.
```
$ npm install
$ node app.js
```
### Logging
Logger feature prints to stdout for consumption by Elastic Stack or similiar tooling. Environment settings will determine color formatting for logger
Example output:
```
::ffff:98.122.144.182 - - [24/Aug/2019:14:16:00 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
::ffff:98.122.144.182 - - [24/Aug/2019:14:16:02 +0000] "GET / HTTP/1.1" 304 - "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.100 Safari/537.36"
```
### Testing
Only a few simple tests have been implemented. They can be executed using Jest
```
ben [~/dev/repoViewer]$ jest
 PASS  controllers/repos/repos.spec.js
  Repos Controller
    get all
      ✓ should get an array of repositories (3ms)
    extractSimpleInfo
      ✓ should only return the known short list of fields
    extractName
      ✓ should only return the repo name

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.787s, estimated 1s
Ran all test suites.
```