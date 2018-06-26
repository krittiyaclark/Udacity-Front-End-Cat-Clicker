(function() {

	/* ======= Model ======= */

	let model = {
		cats: [
				{
					name: 'cat-1',
					photo: 'image/cat-1.jpg',
					count: 0,
					alt: 'cat'
				},
				{
					name: 'cat-2',
					photo: 'image/cat-2.jpg',
					count: 0,
					alt: 'cat'
			  }
		};

	/* ======= Octopus ======= */

	let octopus = {

	};

	/* ======= View ======= */

	let view = {

	};

}());

 


let clickCount = document.getElementById('click-count');
let slideIndex = 1; 



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
	// Add class to images
	IMG.setAttribute('class', 'image');

	let i;

	// LI.setAttribute('class', 'mySlides');
	// let slide = document.getElementsByClassName('list');
	// if (index > slide.length) {
	// 	slideIndex = 1;
	// }
	// 	if (index < 1) {
	// 		slideIndex = slide.length;
	// 	}
	// 		for (i = 0; i < slide.length; i++) {
	// 			slide[i].style.display = 'none';
	// 		}
	// 		slide[slideIndex - 1].style.display = 'block';
};

createImageItem(slideIndex);


const imageEventListener = () => {
	const button = document.getElementsByClassName('button');
	let allImg = document.getElementsByTagName('img');
	// addEventListener to image
	button.addEventListener('click', function(){
		createImageItem(0);
		createImageItem(1);
		clickCount.innerHTML = `CLICK ME: ${clickCounter}`;
    });
};

const clickCounter = () => {
	// Click counter
	count ++;
}  

const currentImage = (n) => {
	createImageItem(slideIndex = n);
}

// const showImages = (n) => {
// 	createImageItem();
// 	let i;

// 	LI.setAttribute('class', 'mySlides');
// 	let slide = document.getElementsByClassName('list');
// 	if (n > slide.length) {
// 		slideIndex = 1;
// 	}
// 		if (n < 1) {
// 			slideIndex = slide.length;
// 		}
// 			for (i = 0; i < slide.length; i++) {
// 				slide[i].style.display = 'none';
// 			}
// 			slide[slideIndex - 1].style.display = 'block';
// }




