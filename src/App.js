import React from 'react';
import styles from './App.module.scss';
import List from './components/List/List';
import Button from './components/Button/Button';
import Board from './Board/Board';
import produce from 'immer/dist/immer';

class App extends React.PureComponent {
	state = {
		family: {
			items: [ 'Walter', 'Rocio', 'Mia', 'Walter Jr' ],
			index: 0
		},
		sports: {
			items: [ 'Futbol', 'Beisbol', 'Basquetbol', 'Golf' ],
			index: 0
		}
	};

	onHandleButton = (object) => {
		console.log('TCL: App -> onHandleButton -> object', object);
		const nextState = produce(this.state, (draft) => {
			if (draft[object].items.length > draft[object].index + 1) draft[object].index = draft[object].index + 1;
			else draft[object].index = 0;
		});
		this.setState(nextState);
	};

	render() {
		const { family, sports } = this.state;
		return (
			<div>
				<p className={styles.title}>¡Bienvenidos al curso de programación de cómputo móvil!</p>
				<div className={styles.container_boards}>
					<Board items={family.items} index={family.index} label={'Siguiente'} onButtonClick={() => this.onHandleButton('family')} />
					<Board items={sports.items} index={sports.index} label={'Siguiente'} onButtonClick={() => this.onHandleButton('sports')} />
					<Board items={sports.items} index={sports.index} label={'Siguiente'} onButtonClick={() => this.onHandleButton('sports')} />
					<Board items={sports.items} index={sports.index} label={'Siguiente'} onButtonClick={() => this.onHandleButton('sports')} />
					<Board items={sports.items} index={sports.index} label={'Siguiente'} onButtonClick={() => this.onHandleButton('sports')} />
				</div>
				{/* <p className={styles.result}>El nombre seleccionado es: {items[index]}</p> */}
			</div>
		);
	}
}

export default App;
