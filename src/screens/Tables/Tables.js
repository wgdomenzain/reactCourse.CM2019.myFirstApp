import * as React from 'react';
import styles from './Tables.module.scss';

export default (class Tables extends React.PureComponent {
	state = {};

	componentDidMount() {}

	render() {
		return (
			<div className={styles.main}>
				<table className={styles.table}>
					<thead className={styles.mainHeader}>
						<tr className={styles.header}>
							<th className={styles.header_item}>Encabezado 1</th>
							<th className={styles.header_item}>Encabezado 2</th>
							<th className={styles.header_item}>Encabezado 3</th>
							<th className={styles.header_item}>Encabezado 4</th>
						</tr>
					</thead>
					<tbody className={styles.body}>
						<tr className={styles.row}>
							<td className={styles.row_item}>Item 1</td>
							<td className={styles.row_item}>Item 2</td>
							<td className={styles.row_item}>Item 3</td>
							<td className={styles.row_item}>Item 4</td>
						</tr>
						<tr className={styles.row}>
							<td className={styles.row_item}>Item 5</td>
							<td className={styles.row_item}>Item 6</td>
							<td className={styles.row_item}>Item 7</td>
							<td className={styles.row_item}>Item 8</td>
						</tr>
						<tr className={styles.row}>
							<td className={styles.row_item}>Item 1</td>
							<td className={styles.row_item}>Item 2</td>
							<td className={styles.row_item}>Item 3</td>
							<td className={styles.row_item}>Item 4</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
});
