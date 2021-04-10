import { create } from '../../libs/api';
import { ListInterface } from '../../screens/HomeScreen';

export default async function createList(body: ListInterface): Promise<void> {
  await create(body, '/lists');
}
