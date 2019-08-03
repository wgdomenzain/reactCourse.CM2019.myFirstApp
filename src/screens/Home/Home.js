import * as React from 'react';
import styles from './Home.module.scss';
import WebServices from '../../WebServices/WebServices';
import produce from 'immer/dist/immer';
import { aliases } from './Helper';

export default (class Home extends React.PureComponent {
	state = {
		response: {}
	};

	componentDidMount() {
		this.fetchData();
	}

	fetchData = async () => {
		try {
			const character = '583';
			const name = 'morpheus';
			const job = 'leader';
			const response = await WebServices.getCharacter({
				character
			});

			const response2 = await WebServices.getListUsers({});
			console.log('TCL: Home -> fetchData -> response2', response2);

			const response3 = await WebServices.createFakeApi({
				name: 'walter',
				job
			});
			console.log('TCL: Home -> fetchData -> response3', response3);
			const nextState = produce(this.state, (draft) => {
				draft.response = response;
			});
			this.setState(nextState);
			aliases(response.aliases);
		} catch (e) {
			console.log('TCL: Home -> fetchData -> e', e);
		}
	};

	render() {
		const { response } = this.state;
		console.log('TCL: Home -> render -> response', response);

		return (
			<div className={styles.main}>
				<div>
					<p>Nombre: {response && response.name}</p>
				</div>

				{response &&
				response.playedBy &&
				response.playedBy.length > 0 && (
					<div>
						<p>Actores: </p>
						{response.playedBy.map((item) => {
							return <p>{item}</p>;
						})}
					</div>
				)}

				{response &&
				response.aliases &&
				response.aliases.length > 0 && (
					<div>
						<p>Actores: </p>
						{response.aliases.map((item) => {
							return <p>{item}</p>;
						})}
					</div>
				)}

				<div>
					<p>Apodos: {response && response.aliases}</p>
				</div>
			</div>
		);
	}
});
