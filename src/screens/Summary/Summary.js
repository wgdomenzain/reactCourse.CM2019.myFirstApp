import * as React from 'react';
import styles from './Summary.module.scss';
import Table from '../../components/Table/Table';
import summaryHeaders from '../../resources/jsons/summaryHeaders.json';
import summaryData from '../../resources/jsons/summaryData.json';
import { IconTable, IconChart } from '../../resources/svg/Icons';
import produce from 'immer/dist/immer';
export default (class Summary extends React.PureComponent {
	state = {
		selected: {
			table: true,
			chart: false
		}
	};

	componentDidMount() {}

	onHandleIcon = (item) => {
		const nextState = produce(this.state, (draft) => {
			draft.selected.table = false;
			draft.selected.chart = false;
			draft.selected[item] = true;
		});
		this.setState(nextState);
	};
	render() {
		const { selected } = this.state;
		const headers = summaryHeaders;

		return (
			<div className={styles.main}>
				<div className={styles.icons}>
					<div className={styles.container_icon} onClick={() => this.onHandleIcon('table')}>
						<IconTable className={selected.table ? styles.icon_selected : styles.icon} />
					</div>
					<div className={styles.container_icon} onClick={() => this.onHandleIcon('chart')}>
						<IconChart className={selected.chart ? styles.icon_selected : styles.icon} />
					</div>
				</div>
				{selected.table && (
					<div className={styles.table}>
						{summaryData.map((data, i) => {
							data.summary.forEach((item, i) => {
								item.total = item.sold + item.courtesies + item.promos;
							});
							return (
								<div key={i}>
									<p className={styles.title}>{data.name}</p>
									<Table data={data.summary} headers={headers} />
								</div>
							);
						})}
					</div>
				)}
				{selected.chart && <div className={styles.chart}>Gráfica</div>}
			</div>
		);
	}
});
