import { TbTriangleFilled, TbTriangleInvertedFilled } from 'react-icons/tb'
import styles from './SortingButton.module.css';
import { SortingDirection } from '../../types';

interface SortingButtonProps {
  label: string,
  onButtonClick: () => void,
  direction: SortingDirection
}

const SortingButton = ({ label, onButtonClick, direction = null }: SortingButtonProps) => {
  let icon;

  if (direction)
    icon = direction === 'asc' ? <TbTriangleFilled className={styles.icon} /> : <TbTriangleInvertedFilled className={styles.icon} />

  return (
    <button
      className={styles.button}
      onClick={onButtonClick}>
      {label}{icon}
    </button>
  )
}

export default SortingButton;