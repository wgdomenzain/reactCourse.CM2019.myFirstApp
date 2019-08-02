import * as React from 'react';
import styles from './Home.module.scss';
import WebServices from '../../WebServices/WebServices';

export default (class Home extends React.PureComponent {
	state = {};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		try {
			const character = '583';
			const response = await WebServices.getCharacter({
				character
			});
			console.log('TCL: Home -> fetchData -> response', response);
		} catch (e) {
			console.log('TCL: Home -> fetchData -> e', e);
		}
	};

	render() {
		return <div className={styles.main}>Home</div>;
	}
});
