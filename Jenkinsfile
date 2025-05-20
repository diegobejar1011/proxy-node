pipeline {
    agent any

    environment {
        EC2_USER = 'ubuntu'
        SSH_KEY = credentials('ssh-key-ec2-auth')
        PORT = credentials('port')
        SECRET_KEY = credentials('secret-key')
        SERVER_IP = '34.196.198.8' // Agrega esta credencial en Jenkins
        REMOTE_PATH = '/home/ubuntu/service-auth'
        PM2_NAME = 'health-service'  // Nombre único para PM2
    }

    stages {
        stage('Preparar entorno') {
            steps {
                sh 'echo "🚀 Iniciando proceso de despliegue"'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh """
                    ssh -i $SSH_KEY -o StrictHostKeyChecking=no $EC2_USER@$SERVER_IP '
                        echo "📦 Actualizando sistema..."
                        sudo apt-get update -y &&
                        sudo apt-get upgrade -y

                        echo "📥 Verificando Node.js..."
                        if ! command -v node > /dev/null; then
                            curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                            sudo apt-get install -y nodejs
                        fi

                        echo "📥 Verificando PM2..."
                        if ! command -v pm2 > /dev/null; then
                            sudo npm install -g pm2
                        fi

                        echo "📁 Verificando carpeta de app..."
                        if [ ! -d "$REMOTE_PATH/.git" ]; then
                            git clone https://github.com/diegobejar1011/proxy-node.git $REMOTE_PATH
                        fi

                        echo "Configurando entorno..."
                        cd $REMOTE_PATH
                        cat > .env <<EOF
# PORT 
PORT=${PORT}
# Auth  
JWT_SECRET_KEY=${SECRET_KEY}
EOF

                        echo "🔁 Realizando despliegue..."
                        git pull origin main &&  // Asume que siempre usa main, puedes cambiarlo
                        npm ci &&
                        pm2 restart ${PM2_NAME} || pm2 start app.js --name ${PM2_NAME}
                    '
                    """
                }
            }
        }

        stage('Verificación') {
            steps {
                sh 'echo "✅ Despliegue completado exitosamente"'
            }
        }
    }
}