import cn from 'classnames';
import styles from './textarea.module.css';
import { TextareaProps } from '@/components/textarea/textarea.props';

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return <textarea {...props} className={cn(className, styles.textarea)} />;
};
