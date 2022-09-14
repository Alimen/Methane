const itemValues = [105, 188, 34, 167, 64, 33, 515];
var itemSource;
var itemConsume;
var itemSum;

window.onload = function prepareQuiz7()
{
	itemSource = document.getElementById('item_source');
	itemConsume = document.getElementById('item_consume');
	itemSum = document.getElementById('item_sum');

	let dragSources = document.querySelectorAll('[draggable="true"]')
	dragSources.forEach(dragSource => {
  		dragSource.addEventListener('dragstart', dragStart);
  		dragSource.addEventListener('dragend', dragEnd);
	});

	let dropTargets = document.querySelectorAll('.container');
	dropTargets.forEach(dropTarget => {
		dropTarget.addEventListener('drop', dropped);
		dropTarget.addEventListener('dragenter', cancelDefault);
		dropTarget.addEventListener('dragover', dragOver);
    		dropTarget.addEventListener('dragleave', dragLeave);
	});

	let ch4TotalFld = document.getElementById('ch4_total');
	ch4TotalFld.addEventListener('input', updateCh4Total);
}

function cancelDefault(e)
{
	e.preventDefault();
	e.stopPropagation();
	return false;
}

function dragStart(e)
{
	this.classList.add('dragging');
	e.dataTransfer.setData('text/plain', this.id);
}

function dragEnd(e)
{
	this.classList.remove('dragging');
}

function dropped(e)
{
	cancelDefault(e);
	this.classList.remove('hover');

	if (e.target.classList.contains('container')) {
		let id = e.dataTransfer.getData('text/plain');
		e.target.appendChild(document.querySelector('#' + id));
		updateAnswer();
	}
}

function dragOver(e)
{
	cancelDefault(e);
	this.classList.add('hover');
}

function dragLeave(e)
{
	this.classList.remove('hover');
}

function updateAnswer()
{
	let sourceLst = [];
	let consumeLst = [];
	let curVal = 0;

	const sourceItems = Array.from(itemSource.children);
	sourceItems.forEach(item => {
		curVal += getItemValue(item.id);
		sourceLst.push(item.id);
	});
	resetItemContainerStyle(itemSource, sourceItems.length);

	const consumeItems = Array.from(itemConsume.children);
	consumeItems.forEach(item => {
		curVal -= getItemValue(item.id);
		consumeLst.push(item.id);
	});
	resetItemContainerStyle(itemConsume, consumeItems.length);

	if (curVal < 0) {
		itemSum.innerHTML = "每年甲烷變化量：<br>" + curVal.toString() + " 百萬噸/年";
	} else {
		itemSum.innerHTML = "每年甲烷變化量：<br>+" + curVal.toString() + " 百萬噸/年";
	}
	parent.quiz7UpdateItems(sourceLst, consumeLst);
}

function getItemValue(item)
{
	item = item.substring(5);
	let id = parseInt(item, 10);
	return itemValues [id];
}

function resetItemContainerStyle(container, itemCnt)
{
	container.classList.remove('container_1');
	container.classList.remove('container_2');
	container.classList.remove('container_3');
	container.classList.remove('container_4');
	container.classList.remove('container_full');

	if (itemCnt < 2) {
		container.classList.add('container_1');
	} else if (itemCnt < 3) {
		container.classList.add('container_2');
	} else if (itemCnt < 4) {
		container.classList.add('container_3');
	} else if (itemCnt < 5) {
		container.classList.add('container_4');
	} else {
		container.classList.add('container_full');
	}
}

function updateCh4Total(e)
{
	window.parent.quiz7UpdateCh4Total(e.target.value);
}
