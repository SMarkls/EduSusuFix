// функция наблюдателя за панелью с курсами. при каждом изменении панели вызывает очистку от мусора.
const startObserver = () => {
	const observer = new MutationObserver(() => {
		window.document.querySelectorAll('.col-md-2').forEach(x => { x.remove() })
		window.document.querySelectorAll('.col-md-1').forEach(x => { x.classList.remove('col-md-1'); x.classList.add('col-md-3') })
		window.document.querySelectorAll('.card-img.dashboard-list-img.mw-100').forEach(x => { x.remove() })
	})
	const panel = document.querySelector('.container-fluid.p-0')
	if (panel != undefined) {
		observer.observe(panel, { subtree: true, characterData: true, childList: true })
	}
	else {
		panel = document.querySelector('.paged-content-page')
		if (panel != undefined) {
			observer.observe(panel, { subtree: true, characterData: true, childList: true })
		}
	}
}

startObserver()