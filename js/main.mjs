import { generateElement } from './factory.mjs';

const table = generateElement('table');
const thead = generateElement('thead');
const tfoot = generateElement('tfoot');
const tbody = generateElement('tbody');

table.appendChild(thead);
table.appendChild(tfoot);
table.appendChild(tbody);

document.body.appendChild(table);