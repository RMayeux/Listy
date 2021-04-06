import { get } from '../../libs/api';

export interface ListInterface {
  id: string;
  name: string;
  description: string;
}

export default async function searchList(): Promise<ListInterface[]> {
  const lists = await get('/lists');
  return lists;
}
