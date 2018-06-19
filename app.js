const image = document.getElementById('image');
const clickCount = document.getElementById('click-count');
let count = 0;

image.addEventListener('click', function(){
  //the element has been clicked
	count ++;
	clickCount.innerHTML = `Click me: ${count}`
}, false);