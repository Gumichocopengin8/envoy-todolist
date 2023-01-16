import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class Item extends jspb.Message {
  getId(): number;
  setId(value: number): Item;

  getName(): string;
  setName(value: string): Item;

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
  getItem(): Item | undefined;
  setItem(value?: Item): PostItemRequest;
  hasItem(): boolean;
  clearItem(): PostItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PostItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PostItemRequest): PostItemRequest.AsObject;
  static serializeBinaryToWriter(message: PostItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PostItemRequest;
  static deserializeBinaryFromReader(message: PostItemRequest, reader: jspb.BinaryReader): PostItemRequest;
}

export namespace PostItemRequest {
  export type AsObject = {
    item?: Item.AsObject,
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

