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

export {
	generateElement
};