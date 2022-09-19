var quotes = [];
var portraits = [];

window.onload = function prepareQuiz8()
{
	quotes = document.querySelectorAll('.quote');
	portraits = document.querySelectorAll('.portrait');
	portraits.forEach(portrait => {
  		portrait.addEventListener('mouseover', onHighlight);
	});
}

function onHighlight(e)
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
