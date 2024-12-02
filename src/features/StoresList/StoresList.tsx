import { getStores } from '@/lib/api/stores';

export default async function StoresList() {
  const { error, data: storesList } = await getStores();

  if (error) {
    return <h1>SWW</h1>;
  }

  return (
    <div>
      <h1>Stores list</h1>
      {storesList.map((store) => (
        <h1 key={store.id}>{store.name}</h1>
      ))}
    </div>
  );
}
