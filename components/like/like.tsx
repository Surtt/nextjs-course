'use client';

import cn from 'classnames';

import { LikeProps } from '@/components/like/like.props';
import { Typography } from '@/components';
import LikeIcon from './like.svg';

import styles from './like.module.css';
import { useState } from 'react';

const Like = ({ amount, border = false, size = 'sm' }: LikeProps) => {
  const [isLike, setIsLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const setLike = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/4');

    if (!res.ok) {
      throw new Error(`Error! status: ${res.status}`);
    }
    return res.json();
  };

  const handleLike = async () => {
    setIsLoading(true);

    try {
      await setLike();
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
          {amount && <Typography size='xs'>{amount}</Typography>}
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
