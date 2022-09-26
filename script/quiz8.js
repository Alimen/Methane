var quotes = [];
var portraits = [];

window.addEventListener("load", prepareQuiz8);

function prepareQuiz8()
{
	quotes = document.querySelectorAll('.quote');
	portraits = document.querySelectorAll('.portrait');
	portraits.forEach(portrait => {
  		portrait.addEventListener('click', onHighlightQuiz8);
	});
}

function onHighlightQuiz8(e)
{
	portraits.forEach(portrait => {
		if (portrait.id == e.target.id) {
			portrait.classList.add('highlight');	
		} else {
			portrait.classList.remove('highlight');
		}
	});

	let quoteId = "quote_" + e.target.id.substring(9);
	quotes.forEach(quote => {
		if (quote.id == quoteId) {
			quote.classList.add('highlight');
		} else {
			quote.classList.remove('highlight');
		}
	});
}
