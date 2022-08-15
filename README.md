This is a demo project that runs a few Cypress tests on BrowserStack automate via Jenkins

## Jenkins Configurations

Under the build config, select 'Sxecute shell' and enter the following script.
`make.js` will create a browserstack.json file with the authentication credentials from environment variables.

```
npm install
node make.js
browserstack-cypress run
```
