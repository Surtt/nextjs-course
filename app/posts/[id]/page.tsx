import { API } from '@/app/api';
import { Post as PostInterface } from '@/interfaces/post.interface';
import { Input, Textarea, Title, Typography } from '@/components';
import styles from './page.module.css';
import Like from '@/components/like/like';
import Image from 'next/image';
import { Comment as CommentInterface } from '@/interfaces/comment.interface';
import { Comment } from '@/components';

interface PostProps {
  params: {
    id: string;
  };
}

async function getPost(id: string): Promise<PostInterface> {
  const res = await fetch(`${API.posts}/${id}`);
  return await res.json();
}

async function getCommentsByPost(postId: string): Promise<CommentInterface[]> {
  const res = await fetch(`${API.comments}?postId=${postId}`);
  return await res.json();
}

export default async function Post({ params }: PostProps) {
  const post = await getPost(params.id);
  const comments = await getCommentsByPost(params.id);

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
      <div className={styles.comments}>
        <Title tag='h2'>Comments</Title>
        {comments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
      <Input placeholder='Name' />
      <Textarea placeholder='Comment'></Textarea>
    </article>
  );
}
