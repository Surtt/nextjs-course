'use client';

import cn from 'classnames';

import { LikeProps } from '@/components/like/like.props';
import { Typography } from '@/components';
import LikeIcon from './like.svg';

import styles from './like.module.css';
import { useEffect, useState } from 'react';

const Like = ({ number = '', border = false, size = 'sm' }: LikeProps) => {
  const [isLike, setIsLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleLike = async () => {
    setIsLoading(true);

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts/4');

      if (!res.ok) {
        throw new Error(`Error! status: ${res.status}`);
      }
      const data = await res.json();
      console.log(data);
      setIsLike((like) => !like);
    } catch (e) {
      if (e instanceof Error) {
        setErr(e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <div
          onClick={handleLike}
          className={cn(styles.like, {
            [styles.border]: border,
            [styles.fill]: isLike,
          })}
        >
          {err && <h2>{err}</h2>}
          {number && <Typography size='xs'>{number}</Typography>}
          <LikeIcon
            className={cn(styles.likeIcon, {
              [styles.sm]: size === 'sm',
              [styles.md]: size === 'md',
            })}
          />
        </div>
      )}
    </>
  );
};

export default Like;
