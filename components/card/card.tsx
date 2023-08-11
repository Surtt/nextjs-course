import Image from 'next/image';
import cn from 'classnames';

import { CardProps } from '@/components/card/card.props';
import { Button, Like, Title, Typography } from '@/components';

import styles from './card.module.css';

export const Card = ({}: CardProps) => {
  return (
    <div className={cn(styles.card)}>
      <img src='https://placehold.co/330x200' alt='placeholder' />
      <div className={cn(styles.top)}>
        <Typography>Front-end · 1 месяц назад</Typography>
        <Like>4</Like>
      </div>
      <div className={cn(styles.middle)}>
        <Title tag='h3'>Как работать с CSS Grid</Title>
        <Typography size='sm'>
          Грид-раскладка (CSS Grid Layout) представляет собой двумерную систему
          сеток в CSS. Гриды подойдут и для верстки основных областей страницы..
        </Typography>
      </div>
      <div className={cn(styles.bottom)}>
        <Typography size='xs'>3 минуты</Typography>
        <Button variant='text' arrow='right'>
          Читать
        </Button>
      </div>
    </div>
  );
};
