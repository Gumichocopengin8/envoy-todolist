import { useCallback, useState } from 'react';
import { Button } from '@mui/material';

import { PostItemResponse } from 'proto/todolist_pb';
import { postItem } from 'grpc_api/client';

const ItemList = () => {
  const [res, setRes] = useState<PostItemResponse.AsObject['result']>(false);

  const sendItem = useCallback(async () => {
    const response = await postItem();
    setRes(response.getResult());
  }, []);

  return (
    <div>
      <div>res: {String(res)}</div>
      <Button onClick={sendItem}>Post</Button>
    </div>
  );
};

export default ItemList;
