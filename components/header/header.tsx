import { HeaderProps } from '@/components/header/header.props';
import styles from './header.module.css';

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>.my_blog</span>
      {children}
    </header>
  );
};
