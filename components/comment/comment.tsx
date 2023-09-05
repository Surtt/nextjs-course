import styles from './comment.module.css';
import { Typography } from '@/components';
import { Comment as CommentInterface } from '@/interfaces/comment.interface';

export const Comment = ({ name, email, body }: CommentInterface) => {
  return (
    <section className={styles.comment}>
      <div className={styles.commentInfo}>
        <Typography className={styles.name} size='xs'>
          {name}
        </Typography>
        <span>&bull;</span>
        <Typography size='xs'>{email}</Typography>
      </div>
      <Typography size='sm'>{body}</Typography>
    </section>
  );
};
