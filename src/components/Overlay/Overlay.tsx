import { useEffect, ReactNode } from "react";
import styles from './Overlay.module.css';

interface OverlayProps {
  isOpen: boolean,
  children: ReactNode
}

const Overlay = ({ isOpen, children }: OverlayProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('noscroll');
    }
    return () => {
      document.body.classList.remove('noscroll');
    }
  }, [isOpen])


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