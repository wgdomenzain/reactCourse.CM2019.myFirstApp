import * as React from 'react';
import styles from './Tables.module.scss';
import cashoutHeader from '../../resources/jsons/cashoutHeader.json';
import cashoutData from '../../resources/jsons/cashoutData.json';
export default (class Tables extends React.PureComponent {
	state = {};

	componentDidMount() {}

	render() {
		console.log(cashoutHeader);
		console.log(cashoutData);
		const headers = cashoutHeader;
		const data = cashoutData[0].cashout;
		console.log('TCL: Tables -> render -> data', data);
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
										return <td className={styles.row_item}>{item[header.value]}</td>;
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		);
	}
});
