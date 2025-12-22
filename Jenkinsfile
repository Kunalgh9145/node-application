pipeline{
    agent {label "kunalaws"}

    stages {

        stage('Code Checkout'){

            steps{
                git branch:"main", url:"https://github.com/Kunalgh9145/node-application.git"
            }
        }
        stage('Installing Nodejs'){

            steps{
                script{
                    def status=sh(script:"node --version",returnStatus: true)
                    echo "$status"
                    if (status != 0) {
                        echo "❌ Node.js is NOT installed on this Jenkins agent"
                        echo "Installing nodejs..."
                        sh(script:"curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -",returnStatus:false)
                        sh(script:"sudo apt install -y nodejs",returnStatus:false)
                        sh 'node -v'
                        sh 'npm -v'
                        echo "✅ Node.js is installed"
                    } else {
                        sh 'node -v'
                        sh 'npm -v'
                        echo "✅ Node.js is installed"
                    }
                }
            }
        }
        stage("Installing Dependencies"){
            steps{
                sh "npm i"
            }
        }
        stage("Testing"){
            steps{
                sh "npm run test"
            }
        }
        stage("Build Docker image"){
            steps{
                sh "docker build -t my-web-app ."
            }
        }
        stage("Deploying"){
            steps{
                sh "docker run -d -p 3000:3000 --name my-webapp-container my-web-app"
            }
        }

    }
}