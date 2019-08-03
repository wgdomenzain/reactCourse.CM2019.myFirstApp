import axios from 'axios';
import WebService from './WebService';

const url = 'https://anapioficeandfire.com/api/characters';
const urlFakeApi = 'https://reqres.in/api/';

export default {
	async createFakeApi({ name, job }) {
		return await WebService.post(urlFakeApi + 'users', {
			name,
			job
		});
	},
	async getCharacter({ character }) {
		return await WebService.get(url + '/' + character);
	},
	async getListUsers() {
		return await WebService.get(urlFakeApi + 'users?page=2');
	}
};
