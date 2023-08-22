import { Card } from '@/components';
import Like from '@/components/like/like';
import styles from './page.module.css';
import { PostInterface } from '@/interfaces/post.interface';
import { API, urlSearchPostsParams } from '@/app/api';
import { getUrlWithParams } from '@/helpers/getUrlWithParams';

async function getPosts(): Promise<PostInterface[]> {
  const res = await fetch(getUrlWithParams(API.posts, urlSearchPostsParams));
  return await res.json();
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <Card key={post.id} {...post} />
      ))}
      <Like border={true} size='md' />
    </main>
  );
}
