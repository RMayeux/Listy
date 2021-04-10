import { deleteItem } from '../../libs/api';

export default async function deleteList(): Promise<void> {
  await deleteItem('/lists');
}
