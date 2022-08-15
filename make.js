const fs = require('fs');

username = process.env.BROWSERSTACK_USERNAME;
accessKey = process.env.BROWSERSTACK_ACCESS_KEY;
buildName = process.env.JENKINS_LABEL;
let auth = {
    username,
    access_key: accessKey,
};

let config = {
    auth,
    "browsers": [
        {
            "browser": "chrome",
            "os": "Windows 10",
            "versions": [
                "latest"
            ]
        },
        {
            "browser": "firefox",
            "os": "Windows 10",
            "versions": [
                "latest"
            ]
        },
        {
            "browser": "edge",
            "os": "Windows 10",
            "versions": [
                "latest"
            ]
        },
        {
            "browser": "chrome",
            "os": "OS X Mojave",
            "versions": [
                "latest"
            ]
        },
        {
            "browser": "firefox",
            "os": "OS X Mojave",
            "versions": [
                "latest"
            ]
        }
    ],
    "run_settings": {
        "cypress_config_file": "cypress.config.js",
        "project_name": "browserstack-demo",
        "build_name": buildName,
        "exclude": [],
        "parallels": 5,
        "npm_dependencies": {},
        "package_config_options": {},
        "headless": true
    },
    "connection_settings": {
        "local": false,
        "local_identifier": null,
        "local_mode": null,
        "local_config_file": null
    },
    "disable_usage_reporting": false
};

fs.writeFileSync('browserstack.json', JSON.stringify(config))

