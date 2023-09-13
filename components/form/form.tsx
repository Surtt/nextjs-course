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
    clearErrors,
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
        aria-invalid={errors.name ? true : false}
      />
      <Textarea
        {...register('comment', {
          required: { value: true, message: 'Write your comment' },
        })}
        placeholder='Comment'
        error={errors.comment}
        aria-label='Comment'
        aria-invalid={errors.comment ? true : false}
      />
      <ButtonOrLink variant='contained' onClick={() => clearErrors()}>
        Send
      </ButtonOrLink>
      {isSuccess && (
        <div role='alert' className={cn(styles.panel, styles.success)}>
          <p className={styles.successTitle}>Your feedback has been sent</p>
          <p>Your review will be published after verification</p>
          <button
            aria-label='Close success notification'
            onClick={() => setIsSuccess(false)}
            className={styles.closeIcon}
          >
            &#9587;
          </button>
        </div>
      )}
      {error && (
        <div className={cn(styles.panel, styles.error)} role='alert'>
          {error}
          <button
            aria-label='Close error notification'
            onClick={() => setError(undefined)}
            className={styles.closeIcon}
          >
            &#9587;
          </button>
        </div>
      )}
    </form>
  );
};
