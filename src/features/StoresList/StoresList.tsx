import StoreCard from '@/features/StoresList/StoreCard';
import { getStores } from '@/lib/api/stores';
import { Container } from '@/shared/Container';
import { SectionHeader } from '@/shared/SectionHeader';

export default async function StoresList() {
  const { error, data: storesList } = await getStores();

  if (error) {
    return <h1>SWW</h1>;
  }

  console.log(storesList[0]);

  return (
    <Container>
      <SectionHeader title="Stores list" />
      <div className="flex flex-col">
        {storesList.map(({ name, image_background, slug, domain }) => (
          <StoreCard
            key={slug}
            name={name}
            image={image_background}
            domain={domain}
          />
        ))}
      </div>
    </Container>
  );
}
