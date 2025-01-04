import { Field } from './Field';
import { Information } from './Information';
import styles from './GameLayout.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({
	field,
	isDraw,
	isGameEnded,
	currentPlayer,
	handleCellClick,
	handleResetButton,
}) => {
	return (
		<>
			<Information
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<Field
				field={field}
				isGameEnded={isGameEnded}
				handleCellClick={handleCellClick}
			/>
			<button className={styles.resetButton} onClick={handleResetButton}>
				Начать заново
			</button>
		</>
	);
};

GameLayout.propTypes = {
	handleResetButton: PropTypes.func,
};
