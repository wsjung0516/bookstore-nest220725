pipeline {
    agent any
    environment {
      AWS_ACCOUNT_ID="863586588248"
      AWS_DEFAULT_REGION="us-east-1" 
      CLUSTER_NAME="default"
      SERVICE_NAME="nodejs-container-service"
      TASK_DEFINITION_NAME="first-run-task-definition"
      DESIRED_COUNT="1"
      IMAGE_REPO_NAME1="server-image"
      IMAGE_REPO_NAME2="mysql-image"
      IMAGE_REPO_NAME3="client-image"
      // IMAGE_TAG="latest"
      IMAGE_TAG="${env.BUILD_ID}"
      REPOSITORY_URI1 = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME1}"
      REPOSITORY_URI2 = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME2}"
      REPOSITORY_URI3 = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME3}"
      registryCredential = "demo-admin-user"
    }
   
    stages {

      // Tests
      // stage('Unit Tests') {
      //   steps{
      //     script {
      //       sh 'npm install'
      //       sh 'npm test -- --watchAll=false'
      //     }
      //   }
      // }
          
      // Building Docker images
      stage('Building image') {
        steps{
          script {
            dockerImage1 = docker.build ("${IMAGE_REPO_NAME1}:${IMAGE_TAG}","./server")
            dockerImage2 = docker.build ("${IMAGE_REPO_NAME2}:${IMAGE_TAG}","./mysql")
            dockerImage3 = docker.build ("${IMAGE_REPO_NAME3}:${IMAGE_TAG}","-f Dockerfile.prod ./client")
            // dockerImage1 = docker.build "${IMAGE_REPO_NAME1}:${IMAGE_TAG}"
            // dockerImage2 = docker.build "${IMAGE_REPO_NAME2}:${IMAGE_TAG}"
          }
        }
      }
    
      // Uploading Docker images into AWS ECR
      stage('Pushing to ECR') {
        steps{  
          script {
            docker.withRegistry("https://" + REPOSITORY_URI1, "ecr:${AWS_DEFAULT_REGION}:" + registryCredential) {
              dockerImage1.push()
            }
            docker.withRegistry("https://" + REPOSITORY_URI2, "ecr:${AWS_DEFAULT_REGION}:" + registryCredential) {
              dockerImage2.push()
            }
            docker.withRegistry("https://" + REPOSITORY_URI3, "ecr:${AWS_DEFAULT_REGION}:" + registryCredential) {
              dockerImage3.push()
            }
          }
        }
       }
        
      // stage('Deploy') {
      //   steps{
      //     withAWS(credentials: registryCredential, region: "${AWS_DEFAULT_REGION}") {
      //       script {
      //         sh "chmod +x -R ${env.WORKSPACE}"
      //         sh './script.sh'
      //       }
      //     } 
      //   }
      // }      
    }
}

