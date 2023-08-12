import cn from 'classnames';

import { CardProps } from '@/components/card/card.props';
import { Button, Title, Typography } from '@/components';

import styles from './card.module.css';
import Like from '@/components/like/like';
import ArrowIcon from '@/public/icons/arrow.svg';
import Image from 'next/image';

export const Card = ({ title, body }: CardProps) => {
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
        <Title tag='h3'>{title}</Title>
        <Typography size='sm'>{body}</Typography>
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
