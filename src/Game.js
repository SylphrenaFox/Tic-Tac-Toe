import styles from './Game.module.css';
import { useEffect, useState } from 'react';
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

	const handleResetButton = () => {
		store.dispatch({ type: 'RESTART_GAME' });
	};

	return (
		<>
			<Field />
			<Information />
			<button className={styles.resetButton} onClick={handleResetButton}>
				Начать заново
			</button>
		</>
	);
};
