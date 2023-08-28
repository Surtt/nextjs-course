import { ButtonOrLink, Title, Typography } from '@/components';

import styles from './card.module.css';
import Like from '@/components/like/like';
import ArrowIcon from '@/public/icons/arrow.svg';
import Image from 'next/image';
import { routes } from '@/constants/routes';
import { Post } from '@/interfaces/post.interface';

export const Card = ({ id, title, body }: Post) => {
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
        <Like amount={4} />
      </div>
      <div className={styles.middle}>
        <Title tag='h3'>{title}</Title>
        <Typography size='sm'>{body}</Typography>
      </div>
      <div className={styles.bottom}>
        <Typography size='xs'>3 минуты</Typography>

        <ButtonOrLink
          href={routes.post(id)}
          variant='text'
          icon={<ArrowIcon />}
          iconPosition='right'
        >
          Читать
        </ButtonOrLink>
      </div>
    </article>
  );
};
