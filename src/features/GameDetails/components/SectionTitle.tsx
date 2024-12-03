interface ISectionTitleProps {
  title: string;
}
export default function SectionTitle({ title }: ISectionTitleProps) {
  return <h2 className="text-2xl font-semibold">{title}</h2>;
}
