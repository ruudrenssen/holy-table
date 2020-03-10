class StickyTable {
	constructor(tableElement, controlElement) {
		this.tableElement = tableElement;
		this.controlElement = controlElement;

		this.controlElement.addEventListener('change', (event) => {
			switch(event.target.dataset.control) {
				case 'toggle-sticky-table':
					this.toggleStickyTable(event.target);
					break;
				case 'toggle-sticky-header':
					this.toggleStickyHead(event.target.checked);
					break;
				case 'toggle-sticky-first-column':
					this.toggleStickyFirstColumn(event.target.checked);
					break;
				case 'toggle-sticky-footer':
					this.toggleStickyFooter(event.target.checked);
					break;
			}
		})

		this.toggleStickyTable(this.controlElement.querySelector("[data-control='toggle-sticky-table'"));
	}

	toggleStickyTable(target) {
		if(target.checked) {
			// enable other options
			this.tableElement.classList.add('sticky-table');
			this.controlElement.querySelectorAll("[data-control]").forEach(control => {
				if(control != target) {
					control.disabled = false;
				}
			});
		} else {
			// disable other options
			this.tableElement.classList.remove('sticky-table');
			this.controlElement.querySelectorAll("[data-control]").forEach(control => {
				if(control != target) {
					control.disabled = true;
				}
			});
		}
	}

	toggleStickyHead(value) {
		console.log(value);
	}

	toggleStickyFirstColumn(value) {
		console.log(value);
	}

	toggleStickyFooter(value) {
		console.log(value);
	}
}

export default StickyTable;