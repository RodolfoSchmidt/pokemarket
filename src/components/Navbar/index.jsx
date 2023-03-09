import styles from "./navbar.module.scss";
const Navbar = ({ icono }) => {
  return (
    <div className={styles.container}>
      <p>Home</p>
      <p>contact</p>
      <p>
        <img src={icono} alt="market" width="36" height="36" />
        {"3"}
      </p>
    </div>
  );
};

export default Navbar;
