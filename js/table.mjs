import { generateElement } from './factory.mjs';
import { randomDouble } from './factory.mjs';
import { randomIsin } from './factory.mjs';

class Table {
	constructor() {
		const tableEl = generateElement('table', ['advanced-table']);
		const theadEl = generateElement('thead');
		const tfootEl = generateElement('tfoot');
		const tbodyEl = generateElement('tbody');

		tableEl.appendChild(theadEl);
		tableEl.appendChild(tfootEl);
		tableEl.appendChild(tbodyEl);

		this._element = tableEl;

		console.log(randomDouble());
		console.log(randomIsin());
	}

	get element () {
		return this._element;
	}
}

export default Table;