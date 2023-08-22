interface PostProps {
  params: {
    id: string;
  };
}

export default function Post({ params }: PostProps) {
  return <>Post: {params.id}</>;
}
