.PHONY: all
all:
	$(MAKE) proto-api
	$(MAKE) proto-web

.PHONY: proto-api
proto-api:
	protoc --go_out=api --go_opt=paths=source_relative --go-grpc_out=api --go-grpc_opt=paths=source_relative proto/*.proto

.PHONY: proto-web
proto-web:
	protoc -I=proto todolist.proto \
		--js_out=import_style=commonjs:web/proto \
		--grpc-web_out=import_style=typescript,mode=grpcwebtext:web/proto
