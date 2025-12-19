pipeline{
    agent {label "kunalaws"}

    stages {

        stage('Code Checkout'){

            steps{
                git branch:"main", url:"https://github.com/Kunalgh9145/node-application.git"
            }
        }
        stage('Installing Dependencies'){

            steps{
                script{
                    def status=sh(script:"node --version",returnStatus: true)
                    echo "$status"
                }
            }
        }
    }
}