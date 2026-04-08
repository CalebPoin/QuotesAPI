const API_URL = "https://zenquotes.io/api/quotes/kindness";

const quotes = [
  { quote: "Be kind whenever possible. It is always possible.", author: "Dalai Lama" },
  { quote: "No act of kindness is ever wasted.", author: "Aesop" },
  { quote: "Kindness is a language the blind can see.", author: "Mark Twain" },
  { quote: "Carry out a random act of kindness.", author: "Princess Diana" },
  { quote: "Kindness begins with understanding.", author: "Charles Glassman" },
  { quote: "A warm smile is the universal language of kindness.", author: "William Arthur Ward" },
  { quote: "Kindness is free. Sprinkle it everywhere.", author: "Unknown" },
  { quote: "Act with kindness but do not expect gratitude.", author: "Confucius" },
  { quote: "Kindness makes you beautiful.", author: "Unknown" },
  { quote: "There is always an opportunity for kindness.", author: "Seneca" }
];

loadQuotes();
function loadQuotes() {

  const container = document.getElementById("quotes-container");
  container.innerHTML = "";

  for (let i = 0; i < quotes.length; i++) {
    let quoteblock = quotes[i];

    let card = `<div class="card"> <p>"${quoteblock.quote}"</p> <p class="text"> - ${quoteblock.author}</p> </div>`;

    container.innerHTML += card;
  }
}