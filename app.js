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
			  ]
		};

	/* ======= Octopus ======= */

	let octopus = {

		init: function() {
			// set our current cat to the first one in the list
			model.currentImage = model.cats[0];
			// tell our views to initialize
			imageView.init();
			imageListView.init();
		},

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
			imageView.render();

		}
	};

	/* ======= View ======= */

	let imageView = {

		init: function() {
			// store pointers to our DOM elements for easy access later
	        this.catElem = document.getElementById('cat');
	        this.catNameElem = document.getElementById('cat-name');
	        this.catImageElem = document.getElementById('cat-img');
	        this.countElem = document.getElementById('cat-count');

	        // on click, increment the current cat's counter
	        this.catImageElem.addEventListener('click', function(){
	            octopus.incrementCounter();
	        });

	        // render this view (update the DOM elements with the right values)
	        this.render();
	    },

	    render: function() {
	        // update the DOM elements with values from the current cat
	        var currentImage = octopus.getCurrentImage();
	        this.countElem.textContent = currentImage.count;
	        this.catNameElem.textContent = currentImage.name;
	        this.catImageElem.src = currentImage.photo;
	    }
	};

	let imageListView = {
		init: function() {
		        // store the DOM element for easy access later
		        this.catListElem = document.getElementById('cat-list');

		        // render this view (update the DOM elements with the right values)
		        this.render();
		    },

		    render: function() {
		        var cat, elem, i;
		        // get the cats we'll be rendering from the octopus
		        var cats = octopus.getImage();

		        // empty the cat list
		        this.catListElem.innerHTML = '';

		        // loop over the cats
		        for (i = 0; i < cats.length; i++) {
		            // this is the cat we're currently looping over
		            cat = cats[i];

		            // make a new cat list item and set its text
		            elem = document.createElement('li');
		            elem.textContent = cat.name;

		            // on click, setCurrentCat and render the catView
		            // (this uses our closure-in-a-loop trick to connect the value
		            //  of the cat variable to the click event function)
		            elem.addEventListener('click', (function(catCopy) {
		                return function() {
		                    octopus.setCurrentImage(catCopy);
		                    imageView.render();
		                };
		            })(cat));

		            // finally, add the element to the list
		            this.catListElem.appendChild(elem);
		        }
		    }
    	}

// make it go!
octopus.init();

}());





