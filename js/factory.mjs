function generateElement(elementName, classList, content) {
	const element = document.createElement(elementName);

	if(content) {
		element.innerText = content;
	}

	if(classList) {
		element.classList.add(...classList);
	}

	return element;
}

function randomDouble(digits = 10) {
	let value = Math.random();
	let digitCount = Math.trunc(Math.random() * digits) + 1;
	return new Intl.NumberFormat(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(value * Math.pow(10, digitCount));
}

function randomPercentage() {
	let value = Math.random();
	let digitCount = 2;
	return `${(new Intl.NumberFormat(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}).format(value * Math.pow(10, digitCount)))}%`;
}

function randomIsin() {
	const countryCodes = ['AF', 'AX', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ', 'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BA', 'BW', 'BV', 'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'KH', 'CM', 'CA', 'CV', 'KY', 'CF', 'TD', 'CL', 'CN', 'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CY', 'CZ', 'DK', 'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'ET', 'FK', 'FO', 'FJ', 'FI', 'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KR', 'KW', 'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MK', 'MG', 'MW', 'MY', 'MV', 'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'AN', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MP', 'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 'SN', 'RS', 'SC', 'SL', 'SG', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'ES', 'LK', 'SD', 'SR', 'SJ', 'SZ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW' ]

	const isinCountry = countryCodes[Math.floor(Math.random()*countryCodes.length)];
	const isinNumber = Math.round(Math.random() * Math.pow(10, 10));

	return `${isinCountry}${isinNumber}`;
}

function randomString(length = 3) {
	let value = '';
	const syllables = ['plu', 'ko', 'ven', 'dus', 'di', 'ma', 'za', 'fi', 'vak', 'op', 'tra', 'es', 'en', 'zat', 'ven', 'ro', 'tar', 'lo', 'wig', 'tu', 'sup', 'ip', 'ga', 'zon', 'fyr', 'ap', 'zet', 'pa', 'wa', 'com', 'ny', 'set', 'ting', 'stor', 'hom', 'voi', 'ce', 'pre', 'vue', 'bas', 'spel', 'bas'];
	while (length > 0) {
		value += syllables[Math.round(Math.random() * syllables.length)]
		length--;
	}
	return value.charAt(0).toUpperCase() + value.slice(1);
}

function dummyTableData(rows = 5, columns = 3, headerRows = 1) {
	const dataTypes = [randomIsin, randomDouble, randomPercentage, randomString, randomDouble, randomDouble, randomDouble, randomPercentage, randomString, randomDouble, randomDouble, randomDouble, randomPercentage, randomString, randomDouble, randomDouble, randomDouble, randomPercentage, randomString, randomDouble, randomDouble];
	let caption = randomString();
	let thead = new Array(headerRows);
	let tfoot = new Array(columns);
	let tbody = [new Array(rows)];

	for (let rowIndex = 0; rowIndex < headerRows; rowIndex++) {
		let row = new Array(columns);
		for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
			row[columnIndex] = 'Head';
		}
		thead.push(row);
	}


	for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
		tfoot[columnIndex] = 'Foot';
	}

	for(let rowIndex = 0; rowIndex < rows; rowIndex++) {
		let row = new Array(columns);
		for (let columnIndex = 0; columnIndex < columns; columnIndex++) {
			row[columnIndex] = dataTypes[columnIndex]();
		}
		tbody[rowIndex] = row;
	}

	return {
		caption: caption,
		thead: thead,
		tfoot: tfoot,
		tbody: tbody
	}
}

export {
	generateElement,
	randomDouble,
	randomIsin,
	randomPercentage,
	randomString,
	dummyTableData
};
