.PHONY: proto-api
proto-api:
	protoc --go_out=api --go_opt=paths=source_relative --go-grpc_out=api --go-grpc_opt=paths=source_relative proto/*.proto

# .PHONY: proto-web
# proto-web:
# 	protoc
# protoc --js_out=. --js_opt=paths=source_relative --js-grpc_out=. --js-grpc_opt=paths=source_relative proto/*.proto
# --grpc-web_out=import_style=typescript,mode=grpcwebtext:.
