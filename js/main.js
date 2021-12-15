thumb.onmousedown = function (event) {

	let shiftX = event.clientX - thumb.getBoundingClientRect().left;

	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);

	function onMouseMove(event) {

		let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;

		if (newLeft < 0) newLeft = 0;

		let rightSide = slider.offsetWidth - thumb.offsetWidth;

		if (newLeft > rightSide) {
			newLeft = rightSide;
		}

		/* ДОБАВЛЕНИЕ ФОНА СЛАЙДЕРА К ПРОМЕЖУТКУ ДО THUMB */
		let lengthBeforeThumb = event.clientX - slider.getBoundingClientRect().left;

		if (lengthBeforeThumb > slider.offsetWidth) {
			lengthBeforeThumb = slider.offsetWidth - thumb.offsetWidth;
		}

		if (newLeft == 0) {
			lengthBeforeThumb = 0;
		}

		background.style.width = lengthBeforeThumb + 'px';


		thumb.style.left = newLeft + 'px';
	}

	function onMouseUp() {
		document.removeEventListener('mousemove', onMouseMove);
	}

	thumb.ondragstart = function () {
		return false;
	}
}


slider.onclick = function (event) {

	if (event.target.className != 'slider') return;

	let lengthBeforeThumb = event.clientX - slider.getBoundingClientRect().left - 10;
	background.style.width = lengthBeforeThumb + 'px';


	thumb.style.left = event.clientX - slider.getBoundingClientRect().left - thumb.offsetWidth + 'px';
}


background.onclick = function (event) {
	if (event.target.className != 'background') return;

	let lengthBeforeThumb = event.clientX - slider.getBoundingClientRect().left - 10;
	background.style.width = lengthBeforeThumb + 'px';

	let coords = event.clientX - slider.getBoundingClientRect().left - thumb.offsetWidth;

	if (coords < 0) {
		coords = 0;
		background.style.width = 0 + 'px';
	}

	thumb.style.left = coords + 'px';
}