import styles from './FieldLayout.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, onCellClick }) => {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => {
				return (
					<button
						className={`${styles.cell} ${cell === 'X' ? styles.x : cell === '0' ? styles.o : ''}`}
						key={index}
						onClick={() => onCellClick(index)}
					>
						{cell}
					</button>
				);
			})}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onCellClick: PropTypes.func,
};
