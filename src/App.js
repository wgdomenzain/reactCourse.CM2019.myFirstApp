import React from 'react';
import styles from './App.module.scss';
import List from './components/List/List';
import Button from './components/Button/Button';
import produce from 'immer/dist/immer';

class App extends React.PureComponent {
	state = {
		items: [ 'Walter', 'Rocio', 'Mia', 'Walter Jr' ],
		index: 0
	};

	onHandleButton = () => {
		const nextState = produce(this.state, (draft) => {
			if (draft.items.length > draft.index + 1) draft.index = draft.index + 1;
			else draft.index = 0;
		});
		this.setState(nextState);
	};

	render() {
		const { items, index } = this.state;
		return (
			<div>
				<p className={styles.title}>¡Bienvenidos al curso de programación de cómputo móvil!</p>
				<List items={items} index={index} />
				<Button label={'Aceptar'} onClick={this.onHandleButton} />
				<p className={styles.result}>El nombre seleccionado es: {items[index]}</p>
			</div>
		);
	}
}

export default App;
