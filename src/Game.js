import { useState } from 'react';
import { GameLayout } from './components/GameLayout';
import { WIN_PATTERNS } from './assets/WIN_PATTERNS';

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

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
		setField(newField);

		if (checkWinner(newField)) {
			setIsGameEnded(true);
			return;
		}

		if (newField.every((cell) => cell)) {
			setIsDraw(true);
		} else {
			setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X');
		}
	};

	const handleResetButton = () => {
		setCurrentPlayer('X');
		setIsDraw(false);
		setIsGameEnded(false);
		setField(Array(9).fill(''));
	};

	return (
		<GameLayout
			field={field}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			handleCellClick={handleCellClick}
			handleResetButton={handleResetButton}
		></GameLayout>
	);
};
