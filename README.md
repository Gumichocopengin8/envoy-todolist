# GRPC-WEB with Envoy

## How to Run

- Run `go run main.go` in `api` folder
- Run `make proto-api` in root
- Run `docker-compose up` in root
- Run `grpcurl -plaintext -d '{"item": {"id": 1, "name": "sf"}}' localhost:9090 todolist.TodoList/PostItem` to
  call post item

## Rebuild Docker

- `docker-compose build --no-cache envoy` in root
