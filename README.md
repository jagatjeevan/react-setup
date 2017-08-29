+[![dependencies Status](https://david-dm.org/jagatjeevan/react-setup/status.svg)](https://david-dm.org/jagatjeevan/react-setup)
 +[![devDependencies Status](https://david-dm.org/jagatjeevan/react-setup/dev-status.svg)](https://david-dm.org/jagatjeevan/react-setup?type=dev)
# React setup
A sample project for a React project

# Installation Guide
###### Dependency
- [Node](https://nodejs.org/en/) : Make sure you are on 6.11.1 version.

###### Tech Stack
- Webpack : The module bundler
- Sass : Css Pre-processor
- Sass Linter : Style consistency
- Es6 : Better way to write JavaScript.
- Es6 Linter : JavaScript Consistentency and best practices
- nsp : Checks the node modules vulnerabilities
- React
- Redux : state management
- Translation : i18next
- Unit Testing : Mocha and chai
- Coverage : Istanbul.

###### Running the module
- Check if you are running the right version of node. Check ".nvmrc" or "package.json"
- npm install
- npm start <br />
Check for other options in package.json, script section. 

## Some Practices followed
###### Git Commit message
- Write crisp commit message. Details should be in the code and not the message.
- Format : JiraCard | Message | Pair1/Pair2
- There are pre-commit hooks. Please try not to push with --no-verify option.

###### Component Names
- Component names are Sentence case. App, Dashboard, etc.
- Rest are small case. 

###### Fixme
- Yarn deletes the .yml file required for sasslint. Hence not using yarn
- Translation does not refresh the labels. It has to be manually refreshed
