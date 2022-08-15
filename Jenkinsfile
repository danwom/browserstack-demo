pipeline {
   agent any
   stages {
      stage('setup') {
         steps {
            browserstack(credentialsId: '2e81ca82-a79d-404c-84af-6c148c28e0cb	') {
                sh 'npm install'
                sh 'node make.js'
            }
         }
      }
    }
  }