'use client';

import cn from 'classnames';

import { LikeProps } from '@/components/like/like.props';
import { Typography } from '@/components';
import LikeIcon from './like.svg';

import styles from './like.module.css';
import { useState } from 'react';
import { setLike } from '@/app/api';

const Like = ({
  postId,
  amount,
  border = false,
  size = 'sm',
  className,
  ...props
}: LikeProps) => {
  const [isLike, setIsLike] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleLike = async () => {
    setIsLoading(true);

    try {
      await setLike(postId);
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
        <button
          {...props}
          onClick={handleLike}
          className={cn(styles.like, className, {
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
        </button>
      )}
    </>
  );
};

export default Like;
