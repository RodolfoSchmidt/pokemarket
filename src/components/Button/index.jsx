import styles from "./Button.module.scss";
const Button = ({ texto }) => {
  return <div className={styles.btn}>{texto}</div>;
};

export default Button;
