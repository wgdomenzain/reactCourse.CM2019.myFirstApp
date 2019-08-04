import * as React from 'react';
import styles from './Users.module.scss';
import WebServices from '../../WebServices/WebServices';
import Pdf from 'react-to-pdf';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';
import { PDFViewer } from '@react-pdf/renderer';

const ref = React.createRef();

const styles2 = StyleSheet.create({
	page: {
		flexDirection: 'row',
		backgroundColor: '#E4E4E4'
	},
	section: {
		margin: 10,
		padding: 10,
		flexGrow: 1
	}
});

const MyDocument = () => (
	<Document>
		<Page size="A4" style={styles2.page}>
			<View style={styles2.section}>
				<Text>Section #1</Text>
			</View>
			<View style={styles2.section}>
				<Text>Section #2</Text>
			</View>
		</Page>
	</Document>
);

export default (class Users extends React.PureComponent {
	state = {
		response: {},
		countries: [ 'mexico', 'canada', 'usa', 'india', 'china' ]
	};

	componentDidMount() {
		this.fetchData('mexico');
	}

	fetchData = async (country) => {
		try {
			const response = await WebServices.getCountryDetails({
				country: country
			});
			// const nextState = produce(this.state, (draft) => {
			// 	draft.response = response;
			// });
			// this.setState(nextState);
			this.setState({
				response: response[0]
			});

			console.log('TCL: fetchData -> response', response);
		} catch (e) {}
	};

	showData = (country) => {
		console.log('TCL: showData -> country', country);
		this.fetchData(country);
	};

	generatePDF = () => {
		console.log('TCL: generatePDF');
		return (
			<PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
				{({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
			</PDFDownloadLink>
		);
	};
	render() {
		const { response, countries } = this.state;
		return (
			<div className={styles.main}>
				<div ref={ref} className={styles.data}>
					<ul>
						{countries.map((country, i) => {
							return (
								<li key={i} className={styles.country} onClick={() => this.showData(country)}>
									{country}
								</li>
							);
						})}
					</ul>
					<ul>
						<li> País: {response && response.name}</li>
						<li> Capital: {response && response.capital}</li>
						<li> Población: {response && response.population}</li>
						<li>
							Idioma:
							{response &&
								response.languages &&
								response.languages.map((item, i) => {
									return response.languages.length > 1 && i !== response.languages.length - 1 ? ' ' + item.nativeName + ', ' : ' ' + item.nativeName;
								})}
						</li>
						<li> Región: {response && response.region}</li>
						<li>
							Monedas:
							{response &&
								response.currencies &&
								response.currencies.map((item, i) => {
									return response.currencies.length > 1 && i !== response.currencies.length - 1 ? ' ' + item.name + ', ' : ' ' + item.name;
								})}
						</li>
					</ul>
				</div>
				<div className={styles.container_button}>
					{/* <Pdf targetRef={ref} filename="code-example.pdf">
						{({ toPdf }) => (
							<button className={styles.button} onClick={toPdf}>
								PDF
							</button>
						)}
					</Pdf> */}

					<button className={styles.button} onClick={() => this.generatePDF()}>
						PDF
					</button>
				</div>
				<PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
					{({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Generar PDF!')}
				</PDFDownloadLink>
			</div>
		);
	}
});
