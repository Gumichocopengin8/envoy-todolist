import { GetItemsResponse, Item, PostItemRequest, PostItemResponse } from 'proto/todolist_pb';
import { TodoListClient } from 'proto/TodolistServiceClientPb';

const client = new TodoListClient('http://localhost:8888');

export const postItem = async (): Promise<PostItemResponse> => {
  const newItem = new Item();
  const itemRequest = new PostItemRequest();
  newItem.setId(1);
  newItem.setName('test');
  itemRequest.setItem(newItem);
  const response: PostItemResponse = await client.postItem(itemRequest, null);
  return response;
};
