'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { IForm } from '@/interfaces/form.interface';
import { FormProps } from '@/components/form/form.props';
import styles from './form.module.css';
import { ButtonOrLink, Input, Textarea } from '@/components';
import { API } from '@/app/api';
import cn from 'classnames';

export const Form = ({ postId, className, ...props }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IForm>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>();

  const onSubmit = async (data: IForm) => {
    try {
      const res = await fetch(`${API.posts}/${postId}`, {
        method: 'PATCH',
        body: JSON.stringify({
          name: data.name,
          body: data.comment,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });

      if (res.ok) {
        setIsSuccess(true);
        reset();
        return res.json();
      } else {
        setError('Something went wrong');
      }
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  };

  return (
    <form
      {...props}
      className={cn(className, styles.form)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        {...register('name', {
          required: { value: true, message: 'Fill your name' },
        })}
        placeholder='Name'
        error={errors.name}
      />
      <Textarea
        {...register('comment', {
          required: { value: true, message: 'Write your comment' },
        })}
        placeholder='Comment'
        error={errors.comment}
      />
      <ButtonOrLink variant='contained'>Send</ButtonOrLink>
      {isSuccess && (
        <div className={cn(styles.panel, styles.success)}>
          <div className={styles.successTitle}>Your feedback has been sent</div>
          <div>Your review will be published after verification</div>
          <div onClick={() => setIsSuccess(false)} className={styles.closeIcon}>
            &#9587;
          </div>
        </div>
      )}
      {error && (
        <div className={cn(styles.panel, styles.error)}>
          {error}
          <div onClick={() => setError(undefined)} className={styles.closeIcon}>
            &#9587;
          </div>
        </div>
      )}
    </form>
  );
};
