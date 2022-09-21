var q9Texts = [];
var q9TextInputed = false;
var q10Finished = false;

window.onload = function prepareQuiz9()
{
	let collect = document.getElementById("quiz9-textarea-container").getElementsByTagName("textarea");
	q9Texts = [].slice.call(collect);
}

function onQuiz9AddBtn()
{
	let newText = q9Texts [0].cloneNode(true);
	q9Texts.push(newText);
	newText.placeholder = "方法 " + q9Texts.length;
	newText.value = "";

  	document.getElementById("quiz9-textarea-container").appendChild(newText);
}

function onQuiz9TextChange()
{
	let cnt = 0;
	q9Texts.forEach(t => {
		if (t.value) {
			cnt++;
		}
	});

	q9TextInputed = cnt >= 3;
	updateCheck();
}

function onQuiz10Ratio(disableInput)
{
	let textFld = document.getElementById("ans10");
	if (disableInput) {
		q10Finished = true;
	} else {
		if (textFld.value) {
			q10Finished = true;
		} else {
			q10Finished = false;
		}
	}
	textFld.disabled = disableInput;
	updateCheck();	
}

function onQuiz10TextChange()
{
	if (document.getElementsByName("quiz10radio")[1].checked) {		
		if (document.getElementById("ans10").value) {
			q10Finished = true;
		} else {
			q10Finished = false;
		}
	}
	updateCheck();
}

function quiz9Answer()
{
	var output = "";
	q9Texts.forEach(t => {
		if (t.value) {
			output += ", \"" + t.value + "\"";
		}
	});
	output = output.substring(2);
	return output;
}
