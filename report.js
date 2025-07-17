const fs = require('fs');
const reporter = require('cucumber-html-reporter');

const jsonReportPath = 'results/cucumber-report.json';
const htmlReportPath = 'results/cucumber-report.html';

// Cria a pasta se não existir
if (!fs.existsSync('results')) {
  fs.mkdirSync('results');
}

// Verifica se o JSON existe antes de gerar
if (!fs.existsSync(jsonReportPath)) {
  console.error(`❌ Arquivo de relatório não encontrado: ${jsonReportPath}`);
  process.exit(1);
}

const options = {
  theme: 'bootstrap',
  jsonFile: jsonReportPath,
  output: htmlReportPath,
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    "Platform": "API Testing",
    "Executed": "Remote"
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'API Test Project' },
      { label: 'Release', value: '1.0.0' },
      { label: 'Execution Start Time', value: new Date().toISOString() },
      { label: 'Execution End Time', value: new Date().toISOString() }
    ]
  }
};

reporter.generate(options);
