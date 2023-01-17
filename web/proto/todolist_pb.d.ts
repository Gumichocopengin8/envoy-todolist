import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Item extends jspb.Message {
  getId(): number;
  setId(value: number): Item;

  getName(): string;
  setName(value: string): Item;

  getStatus(): Status;
  setStatus(value: Status): Item;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Item.AsObject;
  static toObject(includeInstance: boolean, msg: Item): Item.AsObject;
  static serializeBinaryToWriter(message: Item, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Item;
  static deserializeBinaryFromReader(message: Item, reader: jspb.BinaryReader): Item;
}

export namespace Item {
  export type AsObject = {
    id: number,
    name: string,
    status: Status,
  }
}

export class GetItemsResponse extends jspb.Message {
  getItem(): Item | undefined;
  setItem(value?: Item): GetItemsResponse;
  hasItem(): boolean;
  clearItem(): GetItemsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetItemsResponse): GetItemsResponse.AsObject;
  static serializeBinaryToWriter(message: GetItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetItemsResponse;
  static deserializeBinaryFromReader(message: GetItemsResponse, reader: jspb.BinaryReader): GetItemsResponse;
}

export namespace GetItemsResponse {
  export type AsObject = {
    item?: Item.AsObject,
  }
}

export class PostItemRequest extends jspb.Message {
  getName(): string;
  setName(value: string): PostItemRequest;

  getStatus(): Status;
  setStatus(value: Status): PostItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostItemRequest): PostItemRequest.AsObject;
  static serializeBinaryToWriter(message: PostItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostItemRequest;
  static deserializeBinaryFromReader(message: PostItemRequest, reader: jspb.BinaryReader): PostItemRequest;
}

export namespace PostItemRequest {
  export type AsObject = {
    name: string,
    status: Status,
  }
}

export class PostItemResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): PostItemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PostItemResponse): PostItemResponse.AsObject;
  static serializeBinaryToWriter(message: PostItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostItemResponse;
  static deserializeBinaryFromReader(message: PostItemResponse, reader: jspb.BinaryReader): PostItemResponse;
}

export namespace PostItemResponse {
  export type AsObject = {
    result: boolean,
  }
}

export class UpdateItemRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateItemRequest;

  getName(): string;
  setName(value: string): UpdateItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateItemRequest): UpdateItemRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateItemRequest;
  static deserializeBinaryFromReader(message: UpdateItemRequest, reader: jspb.BinaryReader): UpdateItemRequest;
}

export namespace UpdateItemRequest {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class UpdateItemResponse extends jspb.Message {
  getResult(): boolean;
  setResult(value: boolean): UpdateItemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateItemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateItemResponse): UpdateItemResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateItemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateItemResponse;
  static deserializeBinaryFromReader(message: UpdateItemResponse, reader: jspb.BinaryReader): UpdateItemResponse;
}

export namespace UpdateItemResponse {
  export type AsObject = {
    result: boolean,
  }
}

export enum Status { 
  STATUS_UNSPECIFIED = 0,
  STATUS_TODO = 1,
  STATUS_IN_PROGRESS = 2,
  STATUS_DONE = 3,
  STATUS_WONT_DO = 4,
}
