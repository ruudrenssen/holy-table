import { generateElement } from './factory.mjs';
import { dummyTableData } from './factory.mjs';

class DummyTable {
	constructor(rows, cols, headerRows) {
		const tableEl = generateElement('table');
		this._element = tableEl;
		this.populate(dummyTableData(rows, cols, headerRows));
	}

	getTable () {
		return this._element;
	}

	populate (data) {
		this._element.innerHTML = "";

		let caption = null;
		let thead = this.generateHeader([...data.thead]);
		let tfoot = null;
		let tbody = null;

		if(data.caption) {
			caption = generateElement('caption', undefined, data.caption);
		}

		if(data.tfoot) {
			tfoot = generateElement('tfoot');
			data.tfoot.forEach((cell, index) => {
				if (index === 0) {
					const th = generateElement('th', undefined, 'Total')
					tfoot.appendChild(th);
				} else {
					const td = generateElement('td', undefined, cell);
					tfoot.appendChild(td);
				}
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

	generateHeader(data, element = null) {
		const rowCount = data.length;
		if(rowCount === 0) {
			return element;
		} else {
			if(!element) {
				const trFirst = generateElement('tr');
				const thFirst = generateElement('th', undefined, 'entity');
				thFirst.setAttribute('rowSpan', rowCount + 1);
				trFirst.appendChild(thFirst);

				const thSecond = generateElement('th', undefined, 'properties');
				thSecond.setAttribute('colSpan', data[0].length - 1);
				trFirst.appendChild(thSecond);

				data.forEach(row => {
					row.shift();
				});

				element = generateElement('thead');
				element.appendChild(trFirst);
			}

			const tr = generateElement('tr');
			const rowData = data.shift();

			if(rowCount === 0) {
				rowData.forEach((cell, index) => {
					tr.appendChild(generateElement('th', undefined, cell));
				});
			} else {
				// render single cells
				const singleCount = rowData.length % rowCount;
				const multipleCount = Math.floor(rowData.length / rowCount);
				let th = undefined;
				for(let i = 0; i < singleCount; i++) {
					th = generateElement('th', undefined, `${rowCount}-${i + 1}`);
					tr.appendChild(th);
				}
				for(let i = 0; i < multipleCount; i++) {
					th = generateElement('th', undefined, `${rowCount}-${i + 1}`);
					th.setAttribute('colspan', rowCount);
					tr.appendChild(th);
				}
			}
			element.appendChild(tr);

			return this.generateHeader(data, element);
		}
	}
}

export default DummyTable;