let image = document.getElementsByTagName('img');
let clickCount = document.getElementById('click-count');
let count = 0;
let images = [...image];
console.log(images);

// Loop through all images
for (let i = 0; i < images.length; i++) {
	let num = images[i];
	// addEventListener to image
	num.addEventListener('click', function(){
			// Click count
			count ++;
        	clickCount.innerHTML = `CLICK ME: ${count}`;
    });
};
	    
