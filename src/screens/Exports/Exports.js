import * as React from 'react';
import styles from './Exports.module.scss';
import WebServices from '../../WebServices/WebServices';

export default (class Exports extends React.PureComponent {
	state = {
		response: {}
	};

	render() {
		const { response, countries } = this.state;
		return <div className={styles.main}>Exportar</div>;
	}
});
