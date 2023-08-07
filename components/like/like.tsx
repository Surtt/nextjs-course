'use client';

import cn from 'classnames';

import { LikeProps } from '@/components/like/like.props';
import { Typography } from '@/components';
import LikeIcon from './like.svg';

import styles from './like.module.css';
import { useEffect, useState } from 'react';

const Like = ({ number = '', border = false, size = 'sm' }: LikeProps) => {
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    const updateNumberLikes = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts/4');
        if (res.ok && isLike) {
          const data = await res.json();
          console.log(data);
        }
      } catch (e) {
        console.log(e);
      }
    };
    updateNumberLikes();
  }, [isLike]);
  return (
    <div
      onClick={() => setIsLike(true)}
      className={cn(styles.like, {
        [styles.border]: border,
        [styles.fill]: isLike,
      })}
    >
      {number && <Typography size='xs'>{number}</Typography>}
      <LikeIcon
        className={cn(styles.likeIcon, {
          [styles.sm]: size === 'sm',
          [styles.md]: size === 'md',
        })}
      />
    </div>
  );
};

export default Like;
