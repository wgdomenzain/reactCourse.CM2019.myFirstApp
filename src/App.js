import React from 'react';
import styles from './App.module.scss';
import Input from './components/Input/Input';
import Board from './Board/Board';
import Button from './components/Button/Button';
import produce from 'immer/dist/immer';

class App extends React.PureComponent {
	state = {
		family: {
			items: [ 'Walter', 'Rocio', 'Mia', 'Walter Jr' ],
			index: 0
		},
		sports: {
			items: [ 'Futbol', 'Beisbol', 'Basquetbol' ],
			index: 0
		},
		numbers: {
			items: [ 'Uno', 'Dos', 'Tres' ],
			index: 0
		},
		drinks: {
			items: [ 'Soda', 'Coffe' ],
			index: 0
		},
		input: ''
	};

	onHandleButton = (object) => {
		const nextState = produce(this.state, (draft) => {
			if (draft[object].items.length > draft[object].index + 1) draft[object].index = draft[object].index + 1;
			else draft[object].index = 0;
		});
		this.setState(nextState);
	};

	onAddButtonClick = () => {
		const { input } = this.state;
		const nextState = produce(this.state, (draft) => {
			draft.family.items = draft.family.items.concat(input);
			console.log('TCL: App -> nextState -> draft.family.items', draft.family.items);
		});
		this.setState(nextState);
	};

	onInputChange = (event) => {
		const value = event.target.value;
		console.log('TCL: App -> onInputChange -> value', value);
		const nextState = produce(this.state, (draft) => {
			draft.input = value;
		});
		this.setState(nextState);
	};

	render() {
		const { family, sports, numbers, drinks, input } = this.state;
		return (
			<div>
				<p className={styles.title}>¡Bienvenidos al curso de programación de cómputo móvil!</p>
				<div className={styles.container_add}>
					<Input value={input} onChange={this.onInputChange} />
					<Button label={'Agregar'} onClick={this.onAddButtonClick} />
				</div>

				<div className={styles.container_boards}>
					<Board items={family.items} index={family.index} label={'Siguiente'} onButtonClick={() => this.onHandleButton('family')} />
					<Board items={sports.items} index={sports.index} label={'Siguiente'} onButtonClick={() => this.onHandleButton('sports')} />
					<Board items={numbers.items} index={numbers.index} label={'Siguiente'} onButtonClick={() => this.onHandleButton('numbers')} />
					<Board items={drinks.items} index={drinks.index} label={'Siguiente'} onButtonClick={() => this.onHandleButton('drinks')} />
				</div>
				{
					<p className={styles.result}>
						Resultado: <br />
						<label> {family.items[family.index]} </label>
						<br />
						<label> {sports.items[sports.index]} </label>
						<br />
						<label> {numbers.items[numbers.index]} </label>
						<br />
						<label> {drinks.items[drinks.index]} </label>
						<br />
					</p>
				}
			</div>
		);
	}
}

export default App;
