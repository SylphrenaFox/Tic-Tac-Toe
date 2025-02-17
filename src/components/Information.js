import styles from './Information.module.css';
import { store } from '../store';
import PropTypes from 'prop-types';

export const Information = () => {
	const state = store.getState();
	const { currentPlayer, isGameEnded, isDraw } = state;
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

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
};
