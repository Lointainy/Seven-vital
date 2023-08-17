import React from 'react';

import styles from './Dropdown.module.scss';

const DropdownField = ({ position, children }) => {
	return <div className={`${styles.field} ${styles[position]}`}>{children}</div>;
};

export default DropdownField;

