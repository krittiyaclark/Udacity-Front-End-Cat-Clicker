(function() {

	/* ======= Model ======= */

	let model = {
		currentImage: null,
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

		init: function() {
			// set our current cat to the first one in the list
			model.currentImage = model.cats[0];
		},
		// tell our views to initialize

		// getCurrentImage
		getCurrentImage: function() {
			return model.currentImage;
		},
		// getImage
		getImage: function() {
			return model.cats;
		},
		// setCurrentImage
		setCurrentImage: function(cat) {
			model.currentImage = cat;
		},
		// incrementCounter
		incrementCounter: function() {
			model.currentImage.count++;

		}
	};

	/* ======= View ======= */

	let imageView = {

		init: function() {
			// store pointers to our DOM elements for easy access later
			let DOMstrings = {
				containerElem: '#cat',
				nameElem: '#cat-name',
				imageElem: '#cat-img',
				countElem: '#cat-count'
			},

			this.catElem = document.getElementById(DOMstrings.containerElem);
	        this.catNameElem = document.getElementById(DOMstrings.nameElem);
	        this.catImageElem = document.getElementById(DOMstrings.imageElem);
	        this.countElem = document.getElementById(DOMstrings.countElem);

			// on click, increment the current cat's counter
			this.catImageElem.addEventListener('click', function() {
				octopus.incrementCounter();
			});
			
			// render this view (update the DOM elements with the right values)

		}


		render: function() {
        // update the DOM elements with values from the current cat

    	}
	};

	let imageList = {

		// store the DOM element for easy access later

		// render this view (update the DOM elements with the right values)

		// get the cats we'll be rendering from the octopus

		// empty the cat list

		 // loop over the cats

		 // this is the cat we're currently looping over

		 // make a new cat list item and set its text

		 // on click, setCurrentCat and render the catView
         // (this uses our closure-in-a-loop trick to connect the value
         //  of the cat variable to the click event function)

         // finally, add the element to the list
	}

}());

// make it go!

 


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




