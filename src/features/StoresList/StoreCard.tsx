import Image from 'next/image';

interface IStoreCardProps {
  domain: string;
  image: string;
  name: string;
}
export default function StoreCard({ domain, image, name }: IStoreCardProps) {
  return (
    <a
      href={`https://${domain}`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative block mb-4 group rounded-xl overflow-hidden transform transition-transform hover:scale-105 shadow-medium hover:shadow-heavy"
    >
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={name}
          width={1440}
          height={200}
          className="group-hover:brightness-75 transition-all"
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-3xl font-bold text-white group-hover:text-green-400 transition-colors">
          {name}
        </h3>
      </div>
    </a>
  );
}
