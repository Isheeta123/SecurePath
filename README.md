# Download Link From Github #

**🚀 Tech Stack Overview**

1)Frontend: React.js
2)API Gateway: GraphQL (Apollo Gateway)
3)Communication: gRPC
4)Backend: Golang Microservices
5)Storage: MinIO (S3-compatible bucket)
6)Authentication: JWT (JSON Web Tokens)

**🛠️ 1. Clone the Repository**

git clone https://github.com/<your-repo>.git
cd <your-repo>

**⚙️ 2. Install Node.js and React**

Install Node.js LTS

curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

**Check Versions**

node -v
npm -v
**Install React Frontend Dependencies**

cd frontend
npm install
(Optional): Use NVM to manage Node versions

**🌐 3. Setup GraphQL Gateway (Apollo Gateway)**

cd gateway
npm install
Add .env File (example):

JWT_SECRET=your_secure_secret

**🔌 4. Install gRPC & Protocol Buffers**

Install Protobuf Compiler

sudo apt install -y protobuf-compiler

**Install gRPC Tools for Go**

go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest
Update PATH

export PATH="$PATH:$(go env GOPATH)/bin"

**💻 5. Setup Golang Backend Services**

Install Go
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz
echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.profile
source ~/.profile
**Check Go Version**

go version
Build and Run Service

cd backend/user-service
go mod tidy
go run main.go
✅ Use separate .env files and avoid hardcoding secrets

**☁️ 6. Setup MinIO S3 Bucket**
Download & Install MinIO

wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
sudo mv minio /usr/local/bin/
Run MinIO

minio server /mnt/data --console-address ":9001"
Access URLs
Default Credentials

Access Key: minio123
Secret Key: minio123

**✅ Change immediately:**

export MINIO_ROOT_USER=your_secure_user
export MINIO_ROOT_PASSWORD=your_secure_password

**🔐 7. JWT Authentication**
Use Libraries
Go: github.com/golang-jwt/jwt/v5
Node.js: jsonwebtoken

**Token Validation (Go Example):**

token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
    return []byte(os.Getenv("JWT_SECRET")), nil
})
✅ Validate algorithm
✅ Store secrets in .env or secret manager (Vault, AWS Secrets Manager, etc.)

**🐳 8. Run All Services (Docker Compose - Optional)**

Include in docker-compose.yml:

React Frontend
GraphQL Gateway
Go Microservices
MinIO
Redis/PostgreSQL (if needed)

**🔒 Security Recommendations**

Use strong, rotating JWT secrets
Never hardcode credentials
Secure .env files and access control
Validate incoming tokens and avoid deprecated Protobuf options
