import Image from 'next/image';

interface IStoreCardProps {
  domain: string;
  image: string;
  name: string;
}
export default function StoreCard({ domain, image, name }: IStoreCardProps) {
  return (
    <a href={`https://${domain}`} className="mb-2" target="_blank">
      <div className="flex items-center justify-between bg-gray-800 p-4 rounded-xl text-white">
        <div className="min-h-[100px] flex items-center">
          <Image src={image} alt={name} width={200} height={200} />
        </div>
        <h3 className="text-3xl font-bold">{name}</h3>
      </div>
    </a>
  );
}
