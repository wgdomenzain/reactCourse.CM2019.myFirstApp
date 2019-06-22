import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import List from './components/List/List';
import Button from './components/Button/Button';

class App extends React.PureComponent {
	onHandleButton = () => {
		console.log('TCL: App -> onHandleButton -> onHandleButton');
	};

	render() {
		return (
			<div>
				<p>¡Bienvenidos al curso de programación de cómputo móvil!</p>
				<List items={[ 'Walter', 'Hola', 'oaxaca' ]} lastName={'Gonzalez'} />
				<Button style={styles.button_green} label={'Aceptar'} onClick={this.onHandleButton} />
			</div>
		);
	}
}

export default App;
