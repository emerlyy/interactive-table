import { ReactNode } from "react";
import styles from './Overlay.module.css';

interface OverlayProps {
  isOpen: boolean,
  children: ReactNode
}

const Overlay = ({ isOpen, children }: OverlayProps) => {
  return (
    <>
      {isOpen && (
        <div className={styles.overlay}>
          {children}
        </div>
      )}
    </>
  )
}

export default Overlay;