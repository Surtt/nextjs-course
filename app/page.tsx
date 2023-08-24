import { Card } from '@/components';
import Like from '@/components/like/like';
import styles from './page.module.css';
import { PostInterface } from '@/interfaces/post.interface';
import { API } from '@/app/api';

async function getPosts(): Promise<PostInterface[]> {
  const res = await fetch(API.posts);
  const data = await res.json();
  console.log(data);
  return data;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Like border={true} size='md' />
      <div>{JSON.stringify(posts)}</div>
    </main>
  );
}
