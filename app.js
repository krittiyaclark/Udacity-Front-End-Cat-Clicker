let clickCount = document.getElementById('click-count');
let data = {
	cats: {
			names: ['cat-1', 'cat-2'],
			photos: ['image/cat-1.jpg', 'image/cat-2.jpg'],
			count: [0, 0]
		  }
	};

let imageUI = '';

const createImageItem = (index) => {
	// Loop through all images
	let UL = document.getElementById('list');
	let LI = document.createElement('li');
	let IMG = document.createElement('img');
	IMG.src = data.cats.photos[index];
	LI.appendChild(document.createTextNode(data.cats.names[index]));
	LI.appendChild(IMG);
	UL.appendChild(LI);
};

createImageItem(0);
createImageItem(1);

const imageEventListener = () => {
	// addEventListener to image
	createLI.addEventListener('click', function(){
			clickCount.innerHTML = `CLICK ME: ${count}`;
    });
};

const clickCounter = () => {
	// Click counter
	count ++;

}
	    
