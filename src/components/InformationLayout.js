import styles from './InformationLayout.module.css';

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<>
			{isDraw && <div className={`${styles.info} ${styles.draw}`}>Ничья</div>}
			{!isDraw && isGameEnded && (
				<div
					className={`${styles.info} ${currentPlayer === 'X' ? styles.winX : styles.winO}`}
				>
					Победа: {currentPlayer}
				</div>
			)}
			{!isDraw && !isGameEnded && (
				<div className={styles.info}>Ходит: {currentPlayer}</div>
			)}
		</>
	);
};
