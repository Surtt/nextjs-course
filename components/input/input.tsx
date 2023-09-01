import { InputProps } from '@/components/input/input.props';
import cn from 'classnames';
import styles from './input.module.css';

export const Input = ({ className, ...props }: InputProps) => {
  return <input {...props} className={cn(className, styles.input)} />;
};
