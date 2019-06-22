import React from 'react';
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
				<Button label={'Aceptar'} onClick={this.onHandleButton} />
			</div>
		);
	}
}

export default App;
