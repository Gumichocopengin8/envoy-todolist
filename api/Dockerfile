FROM golang:1.19.5 AS builder
WORKDIR /go/src/github.com/Gumichocopengin8/envoy-todolist
COPY . .
ENV CGO_ENABLED=0
ENV GOOS=linux
ENV GOARCH=amd64
RUN go build -o app main.go

FROM alpine
RUN apk add --no-cache ca-certificates
COPY --from=builder /go/src/github.com/Gumichocopengin8/envoy-todolist/app /app
ENTRYPOINT ["/app"]
