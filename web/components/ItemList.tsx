import { useCallback, useEffect, useState } from 'react';
import { Button } from '@mui/material';

import { Item, PostItemResponse } from 'proto/todolist_pb';
import { getItems, postItem, updateItem } from 'grpc_api/client';

const ItemList = () => {
  const [res, setRes] = useState<PostItemResponse.AsObject['result']>(false);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const responseStream = getItems();
    responseStream.on('data', (item) => {
      const newItem = item.getItem();
      if (newItem) {
        setItems((prev) => [...prev, newItem]);
      }
    });
    responseStream.on('status', (status) => {
      console.log(status);
    });
    return () => {
      responseStream.cancel();
    };
  }, []);

  const sendItem = useCallback(async () => {
    const response = await postItem();
    setRes(response.getResult());
  }, []);

  const update = useCallback(async () => {
    const response = await updateItem(2);
  }, []);

  return (
    <div>
      <div>res: {String(res)}</div>
      {items.map((item) => (
        <div key={item.getId()}>
          {item.getId()} {item.getName()} {item.getStatus()}
        </div>
      ))}
      <Button onClick={sendItem}>Post</Button>
      <Button onClick={update}>Update</Button>
    </div>
  );
};

export default ItemList;
