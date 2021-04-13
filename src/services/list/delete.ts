import { deleteItem } from '../../libs/api';

export default async function deleteList(id: string): Promise<void> {
  await deleteItem(`/lists/${id}`);
}
