import cn from 'classnames';

import { LikeProps } from '@/components/like/like.props';
import { Typography } from '@/components';
import LikeIcon from './like.svg';

import styles from './like.module.css';

export const Like = ({ children }: LikeProps) => {
  return (
    <div className={cn(styles.like)}>
      <Typography size='xs'>{children}</Typography>
      <LikeIcon />
    </div>
  );
};
