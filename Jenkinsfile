pipeline {
	agent any

	environment {
		IMAGE_NAME = 'node-express-app'
		CONTAINER_NAME = 'node-express-container'
	}

	stages {
		stage('Install Dependencies') {
			steps {
				sh 'npm install'
			}
		}

		stage('Build Docker Image') {
			steps {
				sh 'docker build -t $IMAGE_NAME .'
			}
		}

		stage('Run Docker Container') {
			steps {
				sh 'docker rm -f $CONTAINER_NAME || true'
				sh 'docker run -d --name $CONTAINER_NAME -p 3000:3000 $IMAGE_NAME'
			}
		}
	}
}
