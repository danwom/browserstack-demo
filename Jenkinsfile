pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building'
                npm install
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                browserstack-cypress run
            }
        }

    }
}