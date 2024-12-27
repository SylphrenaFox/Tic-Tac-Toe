import styles from './FieldLayout.module.css';

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
