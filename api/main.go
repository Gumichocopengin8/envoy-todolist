package main

import (
	"context"
	"log"
	"net"

	pb "github.com/Gumichocopengin8/envoy-todolist/proto"
	"github.com/golang/protobuf/ptypes/empty"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
)

const (
	port = "0.0.0.0:9090"
)

type server struct {
	pb.UnimplementedTodoListServer
	requests []*pb.GetItemsResponse
}

func (s *server) GetItems(_ *empty.Empty, stream pb.TodoList_GetItemsServer) error {
	for _, r := range s.requests {
		if err := stream.Send(&pb.GetItemsResponse{Item: r.GetItem()}); err != nil {
			return err
		}
	}

	previousCount := len(s.requests)

	for {
		currentCount := len(s.requests)
		if previousCount < currentCount && currentCount > 0 {
			r := s.requests[currentCount-1]
			log.Printf("Sent: %v", r.GetItem())
			if err := stream.Send(&pb.GetItemsResponse{Item: r.GetItem()}); err != nil {
				return err
			}
		}
		previousCount = currentCount
	}
}

func (s *server) PostItem(ctx context.Context, r *pb.PostItemRequest) (*pb.PostItemResponse, error) {
	log.Printf("Received: %v", r.GetItem())
	newItem := &pb.GetItemsResponse{Item: r.GetItem()}
	s.requests = append(s.requests, newItem)
	return &pb.PostItemResponse{Result: true}, nil
}

func main() {
	lis, err := net.Listen("tcp", port)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	pb.RegisterTodoListServer(s, &server{})
	reflection.Register(s)
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
