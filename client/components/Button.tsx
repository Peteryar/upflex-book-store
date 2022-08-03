import { memo, MouseEventHandler } from 'react';
import styles from '../styles/Button.module.css';

function Button({ title, handleClick, width }: Props) {
  return (
    <button style={{ width }} data-testid={title} className={styles.button} onClick={handleClick}>
      {title}
    </button>
  );
}

interface Props {
  width?: number;
  link?: string;
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export default memo(Button);
