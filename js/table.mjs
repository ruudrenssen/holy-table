import { generateElement } from './factory.mjs';
import { dummyTableData } from './factory.mjs';

class Table {
	constructor() {
		const tableEl = generateElement('table', ['advanced-table']);
		this._element = tableEl;
		this.populate(dummyTableData(100,12,3));
	}

	get element () {
		return this._element;
	}

	populate (data) {
		this._element.innerHTML = "";

		let caption = null;
		let thead = null;
		let tfoot = null;
		let tbody = null;

		if(data.caption) {
			caption = generateElement('caption', undefined, data.caption);
		}

		if(data.thead) {
			console.log(data.thead);
			thead = generateElement('thead');
			data.thead.forEach((row, index) => {
				const tr = generateElement('tr');
				row.forEach((cell, index) => {
					const th = generateElement('th', undefined, cell);
					tr.appendChild(th);
				});
				thead.appendChild(tr);
			})
		}

		if(data.tfoot) {
			tfoot = generateElement('tfoot');
			data.tfoot.forEach(cell => {
				const td = generateElement('td', undefined, cell);
				tfoot.appendChild(td);
			})
		}

		if(data.tbody.length) {
			tbody = generateElement('tbody');
			data.tbody.forEach(row => {
				const tr = generateElement('tr');
				row.forEach((cell, index) => {
					let element;
					if (index === 0) {
						element = 'th';
					} else {
						element = 'td';
					}
					const td = generateElement(element, undefined, cell);
					tr.appendChild(td);
				});
				tbody.appendChild(tr);
			});

		}

		this._element.appendChild(caption);
		this._element.appendChild(thead);
		this._element.appendChild(tfoot);
		this._element.appendChild(tbody);
	}
}

export default Table;