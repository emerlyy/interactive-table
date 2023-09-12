import styles from './Button.module.css';

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button = ({ ...props }: ButtonProps) => (
  <button
    className={styles.button}
    {...props}
  />
)

export default Button;