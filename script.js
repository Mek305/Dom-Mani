var quotes = [
  'I live my life a quarter mile at a time',
  'I said a ten-second car, not a ten-minute car',
  'You can have any brew you want... as long as it\'s a Corona.',
  'You almost had me? You never had me - you never had your car!',
  'I don\'t have friends. I have family.',
  'It don\'t matter if you win by an inch or a mile. Winning\'s winning.'
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  var randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
function changetitle(){
 var title = document.getElementById('main-title');
  console.log(title)
  title.innerHTML= "Welcome to Dom's Page!!!!"

}
changetitle();

  // Part 2
function backgroundChange(){
  var color = document.body.style.backgroundColor="green";

}
backgroundChange();

  // Part 3
  function domfavorite(){
    var remo = document.querySelector('.side-bar')
    
    let sel = remo.getElementsByTagName('li')
    
    sel[5].style.display ="none"
   
    console.log(sel[5])
  }
  domfavorite();
  // Part 4
function domRaces(){
  var titles = document.querySelectorAll('.special-title')
  console.log(titles)
  titles.forEach(title => titles[0].style.fontSize = "2rem")
}
domRaces();

  // Part 5
function pastRaces(){
  var sidebar = document.querySelectorAll('.side-bar')

  let races = sidebar[1]

  let places = races.getElementsByTagName('li') 

  for (var i = 0; i < places.length ; i++) {
   if(places[i].innerHTML == "Chicago"){
    places[i].style.display ="none"
   }
  }
}
pastRaces()

  // Part 6
function newLine(){
  var newNew = document.querySelector('.side-bar');
  var lineNew = document.createElement('li')
  lineNew.appendChild(document.createTextNode("New York"))

  
}
newLine()

  // Part 7


  // Part 8


  // Part 9




});