import { Card } from '@/components';
import styles from './page.module.css';
import { Post } from '@/interfaces/post.interface';
import { API, urlSearchPostsParams } from '@/app/api';
import { getUrlWithParams } from '@/helpers/getUrlWithParams';

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    getUrlWithParams(API.posts, urlSearchPostsParams(0, 10)),
  );
  return await res.json();
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <Card key={post.id} {...post} />
      ))}
    </main>
  );
}
