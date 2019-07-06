import * as React from 'react';
import styles from './Table.module.scss';

export default (class Table extends React.PureComponent {
	calculateFooter = (data, item) => {
		switch (item.footer) {
			case 'sum':
				return data.reduce((acc, row) => (acc += parseFloat(row[item.value])), 0);
			default:
				return item.footer;
		}
	};

	render() {
		const { headers, data } = this.props;
		return (
			<div className={styles.main}>
				<table className={styles.table}>
					<thead className={styles.mainHeader}>
						<tr className={styles.header}>
							{headers.map((header, i) => {
								return (
									<th key={i} className={styles.header_item}>
										{header.name}
									</th>
								);
							})}
						</tr>
					</thead>
					<tbody className={styles.body}>
						{data.map((item, i) => {
							return (
								<tr key={i} className={styles.row}>
									{headers.map((header, i) => {
										return (
											<td key={i} className={styles.row_item}>
												{item[header.value]}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
					<tfoot className={styles.footer}>
						<tr className={styles.footer_row}>
							{headers.map((header, i) => {
								return (
									<td key={i} className={styles.footer_item}>
										{this.calculateFooter(data, header)}
									</td>
								);
							})}
						</tr>
					</tfoot>
				</table>
			</div>
		);
	}
});
