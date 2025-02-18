import styles from './Field.module.css';
import { store } from '../store';
import { WIN_PATTERNS } from '../utils/WIN_PATTERNS';
import PropTypes from 'prop-types';

export const Field = () => {
	const state = store.getState();
	const { field, currentPlayer, isGameEnded } = state;

	const checkWinner = (field) => {
		return WIN_PATTERNS.some((pattern) => {
			const [a, b, c] = pattern;
			return field[a] && field[a] === field[b] && field[a] === field[c];
		});
	};

	const handleCellClick = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		store.dispatch({ type: 'SET_FIELD', payload: newField });

		if (checkWinner(newField)) {
			store.dispatch({ type: 'IS_GAME_ENDED', payload: true });
			return;
		}

		if (newField.every((cell) => cell)) {
			store.dispatch({ type: 'IS_DRAW', payload: true });
		} else {
			store.dispatch({
				type: 'SET_CURRENT_PLAYER',
				payload: currentPlayer === 'X' ? '0' : 'X',
			});
		}
	};

	return (
		<div className={styles.field}>
			{field.map((cell, index) => {
				return (
					<button
						className={`${styles.cell} ${cell === 'X' ? styles.x : cell === '0' ? styles.o : ''}`}
						key={index}
						onClick={() => handleCellClick(index)}
					>
						{cell}
					</button>
				);
			})}
		</div>
	);
};
Field.propTypes = {
	field: PropTypes.array,
	handleCellClick: PropTypes.func.isRequired,
};
