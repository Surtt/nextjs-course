import { API } from '@/app/api';
import { Post as PostInterface } from '@/interfaces/post.interface';
import { Title, Typography } from '@/components';
import styles from './page.module.css';
import Like from '@/components/like/like';
import Image from 'next/image';

interface PostProps {
  params: {
    id: string;
  };
}

async function getPost(id: string): Promise<PostInterface> {
  const res = await fetch(`${API.posts}/${id}`);
  return await res.json();
}

export default async function Post({ params }: PostProps) {
  const post = await getPost(params.id);
  return (
    <article className={styles.article}>
      <Title tag='h1'>{post.title}</Title>
      <div className={styles.info}>
        <Typography size='xs'>Front-end</Typography>
        <span>&bull;</span>
        <Typography size='xs'>1 месяц назад</Typography>
        <span>&bull;</span>
        <Typography size='xs'>3 минуты</Typography>
        <span>&bull;</span>
        <Like amount={4} postId={post.id} />
      </div>
      <Image
        width={657}
        height={400}
        className={styles.img}
        src='https://fakeimg.pl/657x400'
        alt='placeholder'
      />
      <Typography className={styles.text} size='lg'>
        {post.body}
      </Typography>
      <div className={styles.like}>
        <Typography>Понравилось? Жми</Typography>
        <Like postId={post.id} border size='md' />
      </div>
    </article>
  );
}
