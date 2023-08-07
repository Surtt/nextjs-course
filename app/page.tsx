import { Card } from '@/components';
import Like from '@/components/like/like';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Like border={true} size='md' />
    </main>
  );
}
