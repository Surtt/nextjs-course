'use client';

import { useForm } from 'react-hook-form';
import { IForm } from '@/interfaces/form.interface';
import { FormProps } from '@/components/form/form.props';
import styles from './form.module.css';
import { ButtonOrLink, Input, Textarea } from '@/components';
import cn from 'classnames';
import { API } from '@/app/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, { message: 'Fill your name' }),
  comment: z.string().min(10, { message: 'Fill your comment' }),
});

export const Form = ({ postId, className, ...props }: FormProps) => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitSuccessful },
    reset,
    clearErrors,
  } = useForm<IForm>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      comment: '',
    },
  });

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
        const data = res.json();
        reset();
        return data;
      }
      throw new Error('Something went wrong');
    } catch (e) {
      if (e instanceof Error) {
        setError('customError', {
          type: 'server side error',
          message: e.message,
        });
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
        {...register('name')}
        placeholder='Name'
        error={errors.name}
        aria-invalid={errors.name ? true : false}
        autoComplete='name'
      />
      <Textarea
        {...register('comment')}
        placeholder='Comment'
        error={errors.comment}
      />
      <ButtonOrLink variant='contained' onClick={() => clearErrors()}>
        Send
      </ButtonOrLink>
      {isSubmitSuccessful && (
        <div role='alert' className={cn(styles.panel, styles.success)}>
          <p className={styles.successTitle}>Your feedback has been sent</p>
          <p>Your review will be published after verification</p>
          <button
            aria-label='Close success notification'
            onClick={() => reset()}
            className={styles.closeIcon}
          >
            &#9587;
          </button>
        </div>
      )}
      {errors.customError && (
        <div className={cn(styles.panel, styles.error)} role='alert'>
          {errors.customError?.message}
          <button
            aria-label='Close error notification'
            onClick={() => clearErrors()}
            className={styles.closeIcon}
          >
            &#9587;
          </button>
        </div>
      )}
    </form>
  );
};
