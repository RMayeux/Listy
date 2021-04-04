import { get } from '../../libs/api';

export interface listInterface {
  id: string;
  name: string;
  description: string;
}

export async function searchList(): Promise<listInterface[]> {
  const lists = await get('/lists');
  return lists;
}
