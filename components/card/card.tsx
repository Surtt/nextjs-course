'use client';

import { ButtonOrLink, Title, Typography } from '@/components';

import styles from './card.module.css';
import Like from '@/components/like/like';
import ArrowIcon from '@/public/icons/arrow.svg';
import Image from 'next/image';
import { routes } from '@/constants/routes';
import { Post } from '@/interfaces/post.interface';
import { motion } from 'framer-motion';

export const Card = ({ id, title, body }: Post) => {
  return (
    <motion.article
      initial={{ marginLeft: '-100%' }}
      transition={{ times: [0, 0.1, 1], duration: 1 }}
      animate={{ marginLeft: '0%' }}
      className={styles.card}
    >
      <Image
        width={330}
        height={200}
        className={styles.img}
        src='https://fakeimg.pl/330x200'
        alt='placeholder'
      />
      <div className={styles.top}>
        <Typography>Front-end · 1 месяц назад</Typography>
        <Like amount={4} postId={id} />
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
    </motion.article>
  );
};
