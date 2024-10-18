export const dynamicParams = false;

export default async function IssuePage({
  params: { id },
}: {
  params: { id: string };
}) {
  return <div>{id}</div>;
}
