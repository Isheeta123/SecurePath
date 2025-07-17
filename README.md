# Download Link From Github #

🚀 Tech Stack Overview
Frontend: React.js

API Gateway: GraphQL (Apollo Gateway)

Communication: gRPC

Backend: Golang Microservices

Storage: MinIO (S3-compatible bucket)

Authentication: JWT (JSON Web Tokens)

🛠️ 1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/<your-repo>.git
cd <your-repo>
⚙️ 2. Install Node.js and React
Install Node.js LTS

bash
Copy
Edit
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
Check Versions

bash
Copy
Edit
node -v
npm -v
Install React Frontend Dependencies

bash
Copy
Edit
cd frontend
npm install
(Optional): Use NVM to manage Node versions

🌐 3. Setup GraphQL Gateway (Apollo Gateway)
bash
Copy
Edit
cd gateway
npm install
Add .env File (example):

env
Copy
Edit
JWT_SECRET=your_secure_secret
🔌 4. Install gRPC & Protocol Buffers
Install Protobuf Compiler

bash
Copy
Edit
sudo apt install -y protobuf-compiler
Install gRPC Tools for Go

bash
Copy
Edit
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
Update PATH

bash
Copy
Edit
export PATH="$PATH:$(go env GOPATH)/bin"
💻 5. Setup Golang Backend Services
Install Go

bash
Copy
Edit
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz
echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.profile
source ~/.profile
Check Go Version

bash
Copy
Edit
go version
Build and Run Service

bash
Copy
Edit
cd backend/user-service
go mod tidy
go run main.go
✅ Use separate .env files and avoid hardcoding secrets

☁️ 6. Setup MinIO S3 Bucket
Download & Install MinIO

bash
Copy
Edit
wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
sudo mv minio /usr/local/bin/
Run MinIO

bash
Copy
Edit
minio server /mnt/data --console-address ":9001"
Access URLs

API: http://localhost:9000

Console: http://localhost:9001

Default Credentials

Access Key: minioadmin

Secret Key: minioadmin

✅ Change immediately:

bash
Copy
Edit
export MINIO_ROOT_USER=your_secure_user
export MINIO_ROOT_PASSWORD=your_secure_password
🔐 7. JWT Authentication
Use Libraries

Go: github.com/golang-jwt/jwt/v5

Node.js: jsonwebtoken

Token Validation (Go Example):

go
Copy
Edit
token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
    return []byte(os.Getenv("JWT_SECRET")), nil
})
✅ Validate algorithm (e.g., HS256 or RS256)
✅ Store secrets in .env or secret manager (Vault, AWS Secrets Manager, etc.)

🐳 8. Run All Services (Docker Compose - Optional)
Include in docker-compose.yml:

React Frontend

GraphQL Gateway

Go Microservices

MinIO

Redis/PostgreSQL (if needed)

🔒 Security Recommendations
Use strong, rotating JWT secrets

Never hardcode credentials

Secure .env files and access control

Validate incoming tokens and avoid deprecated Protobuf options
