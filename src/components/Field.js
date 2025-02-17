import styles from './Field.module.css';
import { store } from '../store';
import PropTypes from 'prop-types';

export const Field = ({ handleCellClick }) => {
	const state = store.getState();
	const { field } = state;
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
