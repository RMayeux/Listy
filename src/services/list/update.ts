import { ListInterface } from '../../screens/HomeScreen';
import { update } from '../../libs/api';

export default async function updateList(body: ListInterface): Promise<void> {
  await update(body, '/lists');
}
