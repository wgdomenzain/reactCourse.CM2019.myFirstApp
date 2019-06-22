import React from 'react';
import List from './components/List/List';
import Button from './components/Button/Button';

class App extends React.PureComponent {
	state = {
		items: [ 'Walter', 'Rocio', 'Mia', 'Walter Jr' ],
		index: 0
	};

	onHandleButton = () => {
		let { index, items } = this.state;
		if (items.length > index + 1) index++;
		else index = 0;
		this.setState({ index: index });
	};

	render() {
		const { items, index } = this.state;
		return (
			<div>
				<p>¡Bienvenidos al curso de programación de cómputo móvil!</p>
				<List items={items} lastName={'Gonzalez'} />
				<Button label={'Aceptar'} onClick={this.onHandleButton} />
				<p>El nombre seleccionado es: {items[index]}</p>
			</div>
		);
	}
}

export default App;
