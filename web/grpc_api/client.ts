import {
  GetItemsResponse,
  PostItemRequest,
  PostItemResponse,
  Status,
  UpdateItemRequest,
  UpdateItemResponse,
} from 'proto/todolist_pb';
import { ClientReadableStream } from 'grpc-web';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { TodoListClient } from 'proto/TodolistServiceClientPb';
// import { FieldMask } from 'google-protobuf/google/protobuf/field_mask_pb';

const client = new TodoListClient('http://localhost:8888');

export const getItems = (): ClientReadableStream<GetItemsResponse> => {
  const responseStream: ClientReadableStream<GetItemsResponse> = client.getItems(new Empty());
  return responseStream;
};

export const postItem = async (): Promise<PostItemResponse> => {
  const itemRequest = new PostItemRequest();
  itemRequest.setName('test');
  itemRequest.setStatus(Status.STATUS_TODO);
  const response: PostItemResponse = await client.postItem(itemRequest, null);
  return response;
};

export const updateItem = async (id: number): Promise<UpdateItemResponse> => {
  const itemRequest = new UpdateItemRequest();
  itemRequest.setId(id);
  itemRequest.setName('fieldMask');
  const response: UpdateItemResponse = await client.updateItem(itemRequest, null);
  return response;
};
