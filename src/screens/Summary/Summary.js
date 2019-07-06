import * as React from 'react';
import styles from './Summary.module.scss';

export default (class Summary extends React.PureComponent {
	state = {};

	componentDidMount() {}

	render() {
		return <div className={styles.main}>Summary</div>;
	}
});
