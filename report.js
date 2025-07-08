const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber_report.json',
  output: 'cucumber_report.html',
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Platform": "API Testing",
    "Executed": "Remote"
  },
  customData: {
    title: 'Run info',
    data: [
      {label: 'Project', value: 'API Test Project'},
      {label: 'Release', value: '1.0.0'},
      {label: 'Execution Start Time', value: new Date().toISOString()},
      {label: 'Execution End Time', value: new Date().toISOString()}
    ]
  }
};

reporter.generate(options);