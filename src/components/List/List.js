import * as React from 'react';
import styles from './List.module.scss';

class List extends React.Component {
	state = {
		items: [ 'Walter', 'Rocio', 'Mia', 'Walter Jr' ],
		name: '',
		index: 0,
		object: {}
	};

	componentDidMount() {}

	render() {
		const { items, lastName } = this.props;
		return (
			<div className={styles.main}>
				{lastName}
				<ul className={styles.list}>{items.map((item) => <li className={styles.item}>{item}</li>)}</ul>
			</div>
		);
	}
}

export default List;
