interface ISectionHeaderProps {
  title: string;
}
export default function SectionHeader({ title }: ISectionHeaderProps) {
  return <h2 className="text-4xl font-bold mb-4">{title}</h2>;
}
