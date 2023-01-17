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
	requests []*pb.Item
}

func (s *server) GetItems(_ *empty.Empty, stream pb.TodoList_GetItemsServer) error {
	for _, r := range s.requests {
		if err := stream.Send(&pb.GetItemsResponse{Item: r}); err != nil {
			return err
		}
	}

	previousCount := len(s.requests)

	for {
		currentCount := len(s.requests)
		if previousCount < currentCount && currentCount > 0 {
			r := s.requests[currentCount-1]
			log.Printf("Sent: %v", r)
			if err := stream.Send(&pb.GetItemsResponse{Item: r}); err != nil {
				return err
			}
		}
		previousCount = currentCount
	}
}

var count int64 = 1

func (s *server) PostItem(ctx context.Context, r *pb.PostItemRequest) (*pb.PostItemResponse, error) {
	newItem := &pb.Item{Id: count, Name: r.GetName(), Status: r.GetStatus()}
	count += 1
	s.requests = append(s.requests, newItem)
	log.Printf("Received: %v", newItem)
	return &pb.PostItemResponse{Result: true}, nil
}

func (s *server) UpdateItem(ctx context.Context, r *pb.UpdateItemRequest) (*pb.UpdateItemResponse, error) {
	for i := range s.requests {
		if s.requests[i].GetId() == r.GetId() {
			s.requests[i] = &pb.Item{Id: r.GetId(), Name: r.GetName()}
			break
		}
	}
	return &pb.UpdateItemResponse{Result: true}, nil
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
