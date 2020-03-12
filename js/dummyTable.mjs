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

		let caption, captionContent, thead, tfoot, tbody;
		thead = this.generateHeader([...data.thead]);

		if(data.caption) {
			caption = generateElement('caption', undefined);
			captionContent = generateElement('span', undefined, 'Caption');
			caption.appendChild(captionContent);
		}

		if(data.tfoot) {
			tfoot = generateElement('tfoot');
			const tr = generateElement('tr');
			data.tfoot.forEach((cell, index) => {
				if (index === 0) {
					const th = generateElement('th', undefined, 'Total')
					th.setAttribute('scope', 'row');
					tr.appendChild(th);
				} else {
					const td = generateElement('td', undefined, cell);
					tr.appendChild(td);
				}
			});
			tfoot.appendChild(tr);
		}

		if(data.tbody.length) {
			tbody = generateElement('tbody');
			data.tbody.forEach(row => {
				const tr = generateElement('tr');
				row.forEach((cell, index) => {
					if (index === 0) {
						const th = generateElement('th', undefined, cell);
						th.setAttribute('scope', 'row');
						tr.appendChild(th);
					} else {
						const td = generateElement('td', undefined, cell);
						tr.appendChild(td);
					}
				});
				tbody.appendChild(tr);
			});

		}

		this._element.appendChild(caption);
		this.generateCols(data.tbody[0].length).forEach(colgroup => {
			this._element.appendChild(colgroup);
		})
		this._element.appendChild(thead);
		this._element.appendChild(tfoot);
		this._element.appendChild(tbody);
	}

	generateCols(cols, colgroup = 3) {
		const firstGroup = cols % colgroup;
		const nextGroups = Math.floor(cols / colgroup);
		let colgroups = [];

		const colgroupElement = generateElement('colgroup');
		for(let i = 0; i < firstGroup; i++) {
			colgroupElement.appendChild(generateElement('col'));
		}
		colgroups.push(colgroupElement);

		for(let i=0; i < nextGroups; i++) {
			const nextColgroup = generateElement('colgroup');
			for (let j = 0; j < colgroup; j++) {
				const col = generateElement('col');
				nextColgroup.appendChild(col);
			}
			colgroups.push(nextColgroup);
		}

		return colgroups;
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
				thFirst.setAttribute('scope', 'col');
				trFirst.appendChild(thFirst);

				const thSecond = generateElement('th', undefined, 'properties');
				thSecond.setAttribute('colSpan', data[0].length - 1);
				thSecond.setAttribute('scope', 'col');
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
					th.setAttribute('scope','col');
					tr.appendChild(th);
				}
				for(let i = 0; i < multipleCount; i++) {
					th = generateElement('th', undefined, `${rowCount}-${i + 1}`);
					th.setAttribute('colspan', rowCount);
					th.setAttribute('scope','col');
					tr.appendChild(th);
				}
			}
			element.appendChild(tr);

			return this.generateHeader(data, element);
		}
	}
}

export default DummyTable;