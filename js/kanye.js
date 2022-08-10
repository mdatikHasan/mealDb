const loadQuotes= () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuoutes(data))
}

const displayQuoutes = (quote) =>{
    const quotes  = document.getElementById('quotes')
    quotes.innerText = quote.quote
    console.log(quote);
}