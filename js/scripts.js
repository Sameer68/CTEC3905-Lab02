const myParagraph = document.getElementById('clickable');
const myButton = document.getElementById('button');

function eventHandler(ev) {
  console.log("I have been clicked")
  ev.target.textContent = "You have been clicked"
}

myParagraph.addEventListener('click', eventHandler);
myButton.addEventListener('click', eventHandler);
