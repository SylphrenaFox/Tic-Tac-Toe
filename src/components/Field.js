import React from 'react';
import { FieldLayout } from './FieldLayout';
export const Field = ({ field, handleCellClick }) => {
	return <FieldLayout field={field} onCellClick={handleCellClick} />;
};
