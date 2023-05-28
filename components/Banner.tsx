import styles from './banner.module.css';

const Banner = ({ buttonText, handleOnClick }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.container}>
        <span>Coffee</span>
        <span>Connoisseur</span>
      </h1>
      <p>Discover your locla coffee shops</p>
      <button className={styles.button} onClick={handleOnClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Banner;
