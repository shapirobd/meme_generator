let arrayOfMemes = [];

let main = document.querySelector('#main');
let btn = document.querySelector('#submit-button');
let memeSpot = document.querySelector('#meme-spot');
let form = document.querySelector('#form');
let x = 0;

//When a 'submit' occurs in the form, we declare a new meme object. Then we retreive all of the info from the form and create a new img & top meme text & bottom meme text & remove button. We also create an empty 'div' and append that div to the section where memes will go. We then append the content of the meme plus the remove button into that div. We then give the new meme object the keys 'img', 'topText', and 'bottomText' that match the content of the meme. This object is then added to the arrayOfMemes array that was created on line 1 of this file. We then reset the values of the textboxes in the form.
form.addEventListener('submit', function (e) {
	const newMeme = {};
	if (x === 0) {
		let hr = document.createElement('hr');
		hr.className = 'gen-hr';
		form.appendChild(hr);
	}
	e.preventDefault();
	let imgTextBox = document.querySelector('#link-textbox');
	let img = imgTextBox.value;
	let topTextBox = document.querySelector('#top-textbox');
	let topText = topTextBox.value;
	let bottomTextBox = document.querySelector('#bottom-textbox');
	let bottomText = bottomTextBox.value;

	let memeDiv = document.createElement('div');
	memeDiv.className = 'meme-div';
	let genImg = document.createElement('img');
	genImg.src = img;
	genImg.className = 'memeImg';
	let genTopText = document.createElement('h2');
	genTopText.innerText = topText;
	genTopText.className = 'topMemeText';
	let genBottomText = document.createElement('h2');
	genBottomText.innerText = bottomText;
	genBottomText.className = 'bottomMemeText';
	let removeBtn = document.createElement('input');
	removeBtn.type = 'button';
	removeBtn.value = 'Remove Meme';
	removeBtn.className = 'remove-btn';

	memeSpot.appendChild(memeDiv);
	memeDiv.appendChild(genImg);
	memeDiv.appendChild(genTopText);
	memeDiv.appendChild(genBottomText);
	memeDiv.appendChild(removeBtn);

	newMeme.img = img;
	newMeme.topText = topText;
	newMeme.bottomText = bottomText;

	arrayOfMemes.push(newMeme);

	imgTextBox.value = '';
	topTextBox.value = '';
	bottomTextBox.value = '';
	x++;
});

//When a 'click' occurs on an input (which could only be a button) in memeSpot (the section where new memes go on our webpage), we check to see if the contents of the meme within the parent div match the respective contents of each meme object in arrayOfObjects. Once we find a match, we remove the entire 'div' that contains the meme that has the matching information.
memeSpot.addEventListener('click', function (e) {
	if (e.target.tagName === 'INPUT') {
		let clickedBtn = e.target;
		let parentDiv = clickedBtn.parentElement;
		for (let i = 0; i < arrayOfMemes.length; i++) {
			let topAndBottom = arrayOfMemes[i].topText + arrayOfMemes[i].bottomText;
			let thisImg = arrayOfMemes[i].img;
			if (topAndBottom === parentDiv.textContent && thisImg === parentDiv.querySelector('img').src) {
				parentDiv.remove();
				arrayOfMemes.splice(i, 1);
				x--;
			}
		}
		if (x === 0) {
			let hr = document.querySelector('.gen-hr');
			hr.remove();
		}
	}
});
