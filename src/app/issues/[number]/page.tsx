export const dynamicParams = false;

export function generateStaticParams() {
  const slugs = ['1', '2', '3', '4', '5', '6'];
  return slugs.map(slug => ({ id: slug }));
}

export default function IssuePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>{id}</div>;
}
