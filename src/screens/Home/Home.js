import * as React from 'react';
import styles from './Home.module.scss';
import WebServices from '../../WebServices/WebServices';
import produce from 'immer/dist/immer';
import { aliases } from './Helper';

export default (class Home extends React.PureComponent {
	state = {
		response: {},
		cities: [ { name: 'Culiacán', id: 4012176 }, { name: 'Oaxaca', id: 3522507 }, { name: 'Guadalajara', id: 8133378 }, { name: 'Mazatlán', id: 3996322 }, { name: 'Monterrey', id: 3995465 } ],
		selectedCity: [ { name: 'Culiacán', id: '4012176' } ]
	};

	componentDidMount() {
		const { selectedCity } = this.state;
		this.getCityWeaether(selectedCity[0].id);
	}

	fetchData = async () => {
		try {
		} catch (e) {}
	};

	getCityWeaether = async (cityId) => {
		try {
			const response = await WebServices.getWeatherByCityId({
				cityId: cityId
			});
			const nextState = produce(this.state, (draft) => {
				draft.response = response;
			});
			this.setState(nextState);
			console.log('TCL: getCityWeaether -> response', response);
		} catch (e) {}
	};

	showWeaether = (cityId) => {
		console.log('TCL: showWeaether -> cityId', cityId);
		this.getCityWeaether(cityId);
	};

	getGOT = async () => {
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
		const { response, cities } = this.state;
		const iconUrl = response && response.weather && 'http://openweathermap.org/img/wn/' + response.weather[0].icon + '@2x.png';
		console.log('TCL: render -> iconUrl', iconUrl);
		console.log('TCL: Home -> render -> response', response);

		return (
			<div className={styles.main}>
				<ul>
					{cities.map((city) => {
						return (
							<li className={styles.city} onClick={() => this.showWeaether(city.id)}>
								{city.name}
							</li>
						);
					})}
				</ul>
				<div className={styles.results}>
					<ul>
						<li>Descripción: {response && response.weather && response.weather[0].description}</li>
						<li>Temperatura: {response && response.main && response.main.temp}</li>
						<li>Presión: {response && response.main && response.main.pressure}</li>
						<li>Humedad: {response && response.main && response.main.humidity}</li>
						<li>Temp Min: {response && response.main && response.main.temp_min}</li>
						<li>Temp Máx: {response && response.main && response.main.temp_max}</li>
					</ul>
					<img src={iconUrl} alt="" />
				</div>
			</div>
		);
	}
});

// <div>
// 					<p>Nombre: {response && response.name}</p>
// 				</div>

// 				{response &&
// 				response.playedBy &&
// 				response.playedBy.length > 0 && (
// 					<div>
// 						<p>Actores: </p>
// 						{response.playedBy.map((item) => {
// 							return <p>{item}</p>;
// 						})}
// 					</div>
// 				)}

// 				{response &&
// 				response.aliases &&
// 				response.aliases.length > 0 && (
// 					<div>
// 						<p>Actores: </p>
// 						{response.aliases.map((item) => {
// 							return <p>{item}</p>;
// 						})}
// 					</div>
// 				)}

// 				<div>
// 					<p>Apodos: {response && response.aliases}</p>
// 				</div>
