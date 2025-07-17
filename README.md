                                                           # Download from the github link #

## TechStack Used:
1) React.js
2) Graphql gateway
3) GRPC
4) Golang
5) MINIOS3 BUCKET
6) JWT Auth

1. Clone the GitHub Repository

git clone https://github.com/<your-org>/<your-repo>.git
cd <your-repo>
Replace the URL with your actual repository.

⚙2. Install Node.js and React.js

# Install Node.js (LTS recommended)
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Check versions
node -v
npm -v

# Install project dependencies (React frontend)
cd frontend
npm install
Use nvm (Node Version Manager) if you want more control over Node versions.

🕸3. Install GraphQL Gateway
This is often a custom server or Apollo Gateway.

If using Apollo Gateway:

cd gateway
npm install
Add .env with appropriate environment variables (secure API keys, service URLs).

Example .env:

JWT_SECRET=your_secure_secret


4. Install gRPC

# Install Protocol Buffers compiler
sudo apt install -y protobuf-compiler

# Install gRPC tools for Go
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@latest

# Make sure Go binaries are in your PATH
export PATH="$PATH:$(go env GOPATH)/bin"
Always validate .proto files for security (no unsafe or deprecated options).

5. Install Golang Backend Services

# Install Go (latest stable version recommended)
wget https://go.dev/dl/go1.22.0.linux-amd64.tar.gz
sudo rm -rf /usr/local/go && sudo tar -C /usr/local -xzf go1.22.0.linux-amd64.tar.gz
echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.profile
source ~/.profile

# Check Go version
go version

# Build and run your Go services
cd backend/user-service
go mod tidy
go run main.go
Use separate .env files for each service and avoid hardcoding secrets.

☁6. Setup MinIO S3 Bucket (Self-Hosted S3)

# Download MinIO server
wget https://dl.min.io/server/minio/release/linux-amd64/minio
chmod +x minio
sudo mv minio /usr/local/bin/

# Run MinIO
minio server /mnt/data --console-address ":9001"
Access: http://localhost:9000 (API), http://localhost:9001 (Console)

Default credentials:

Access Key: minioadmin

Secret Key: minioadmin

Change default credentials immediately using environment variables or config file:


export MINIO_ROOT_USER=your_secure_user
export MINIO_ROOT_PASSWORD=your_secure_password

7. JWT Authentication
In both Go and Node services:

Use libraries like github.com/golang-jwt/jwt/v5 (Go) and jsonwebtoken (Node.js)

Store secrets securely (using Vault or .env)

Example token validation (Go):


token, err := jwt.Parse(tokenString, func(token *jwt.Token) (interface{}, error) {
    return []byte(os.Getenv("JWT_SECRET")), nil
})
 Always use strong, rotating secrets and validate algorithm used (alg === "HS256" or RS256).

8. Run All Services (Example Using Docker Compose - Optional)
Create a docker-compose.yml to orchestrate:

React frontend

GraphQL gateway

Go microservices

MinIO

Redis/PostgreSQL if needed

9. Security Recommendations
Use HTTPS (with Nginx reverse proxy or Caddy)

Validate all GraphQL and REST inputs

Enable CORS only where needed

Use rate limiting and logging middleware

Set up CI/CD pipeline to scan for vulnerabilities (e.g., npm audit, gosec)

