import styles from "./index.module.scss";

import cn from "classnames";
import Image from "next/image";
import iconDice from "../../assets/icon-dice.svg";
import dividerMobile from "../../assets/pattern-divider-mobile.svg";

const AdviceCard = ( data ) => {
  const { id, advice, loading, onClick } = data;

  return (
    <div
      className={cn(styles.AdviceCard, {
        [styles.loading]: loading,
      })}
    >
      {!loading && (
        <>
          <h2 className={styles.title}>
            <span>{id}</span>
          </h2>
          <div className={styles.advice}>
            <q>{advice}</q>
          </div>
        </>
      )}
      <Image src={dividerMobile} alt="divider" className={styles.divider} />
      <button type="button" className={styles.button} onClick={onClick}>
        <Image src={iconDice} alt={"Icon Dice"} width={30} height={30} />
      </button>
    </div>
  );
};

export default AdviceCard;
