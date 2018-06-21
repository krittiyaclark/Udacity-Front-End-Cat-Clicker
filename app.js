let clickCount = document.getElementById('click-count');
let data = {
	cat-1: {
				name: 'cat-1',
				photo: 'image/cat-1.jpg',
				count: 0
			},
	cat-2: {
				name: 'cat-2',
				photo: 'image/cat-2.jpg',
				count: 0
			}
	};
	

// console.log(imageArray);
// let images = [...imageArray];
let imageUI = '';


const createImageItem = () => {
	// Loop through all images
	for (let i = 0; i < imageArray.length; i++) {
		// console.log(imageArray);
		// let createImage = document.getElementsByClassName('list');
		let img = document.createElement("img");
 
		img.src = imageArray;
		let src = document.getElementsByClassName('list');
		 
		src.appendChild(img);
		// createImage.appendChild(createLI);
		// let num = image[i];
	};
};

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

createImageItem();
	    
