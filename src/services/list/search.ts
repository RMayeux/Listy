import { get } from '../../libs/api';

export interface ListInterface {
  id: string;
  name: string;
  owner: OwnerInterface;
}

interface OwnerInterface {
  id: string;
  firstName: string;
  lastName: string;
}

export default async function searchList(): Promise<ListInterface[]> {
  return get('/lists');
}
