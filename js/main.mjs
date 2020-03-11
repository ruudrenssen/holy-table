import DummyTable from './dummyTable.mjs';
import StickyTable from './stickyTable.mjs';

let dummyTable = new DummyTable(100, 13, 3);
let tableElement = dummyTable.getTable();
let stickyTable = new StickyTable(tableElement, document.getElementById('sticky-table-controls'));

document.getElementById('table-module').appendChild(tableElement);