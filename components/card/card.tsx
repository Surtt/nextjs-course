import { Button, Title, Typography } from '@/components';

import styles from './card.module.css';
import Like from '@/components/like/like';
import ArrowIcon from '@/public/icons/arrow.svg';
import Image from 'next/image';

export const Card = () => {
  return (
    <article className={styles.card}>
      <Image
        width={330}
        height={200}
        className={styles.img}
        src='https://fakeimg.pl/330x200'
        alt='placeholder'
      />
      <div className={styles.top}>
        <Typography>Front-end · 1 месяц назад</Typography>
        <Like number='4' />
      </div>
      <div className={styles.middle}>
        <Title tag='h3'>Как работать с CSS Grid</Title>
        <Typography size='sm'>
          Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
          сеток в CSS. Гриды подойдут и для верстки основных областей страницы..
        </Typography>
      </div>
      <div className={styles.bottom}>
        <Typography size='xs'>3 минуты</Typography>
        <Button variant='text' icon={<ArrowIcon />} iconPosition='right'>
          Читать
        </Button>
      </div>
    </article>
  );
};
