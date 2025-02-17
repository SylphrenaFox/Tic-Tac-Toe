import styles from './Game.module.css';
import { useEffect, useState } from 'react';
import { WIN_PATTERNS } from './assets/WIN_PATTERNS';
import { store } from './store';
import { Field } from './components/Field';
import { Information } from './components/Information';

export const Game = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const unsubscribe = store.subscribe(() => {
			setState(store.getState());
		});
		return () => unsubscribe();
	}, []);
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

	const handleResetButton = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<>
			<Field handleCellClick={handleCellClick} />
			<Information />
			<button className={styles.resetButton} onClick={handleResetButton}>
				Начать заново
			</button>
		</>
	);
};
