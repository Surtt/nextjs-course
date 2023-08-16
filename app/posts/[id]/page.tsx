export default function Post({
  params,
}: {
  params: {
    id: string;
  };
}) {
  return <>Post: {params.id}</>;
}
