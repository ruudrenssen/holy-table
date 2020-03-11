class StickyTable {
	constructor(tableElement, controlElement) {
		this.tableElement = tableElement;
		this.controlElement = controlElement;

		this.controlElement.addEventListener('change', (event) => {
			switch(event.target.dataset.control) {
				case 'toggle-sticky-table':
					this.toggleStickyTable(event.target);
					break;
				case 'toggle-sticky-caption':
					this.toggleStickyCaption(event.target.checked);
					break;
				case 'toggle-sticky-header':
					this.toggleStickyHeader(event.target.checked);
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
		this.toggleStickyCaption(this.controlElement.querySelector("[data-control='toggle-sticky-caption'"));
		this.toggleStickyHeader(this.controlElement.querySelector("[data-control='toggle-sticky-header'").checked);
		this.toggleStickyFirstColumn(this.controlElement.querySelector("[data-control='toggle-sticky-first-column'").checked);
		this.toggleStickyFooter(this.controlElement.querySelector("[data-control='toggle-sticky-footer'").checked);
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

	toggleStickyCaption(value) {
		if(value) {
			this.tableElement.classList.add('sticky-caption');
		} else {
			this.tableElement.classList.remove('sticky-caption');
		}
	}

	toggleStickyHeader(value) {
		if(value) {
			this.tableElement.classList.add('sticky-header');
		} else {
			this.tableElement.classList.remove('sticky-header');
		}
	}

	toggleStickyFirstColumn(value) {
		if(value) {
			this.tableElement.classList.add('sticky-first-column');
		} else {
			this.tableElement.classList.remove('sticky-first-column');
		}
	}

	toggleStickyFooter(value) {
		if(value) {
			this.tableElement.classList.add('sticky-footer');
		} else {
			this.tableElement.classList.remove('sticky-footer');
		}
	}
}

export default StickyTable;