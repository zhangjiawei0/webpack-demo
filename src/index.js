import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';
import printMe from './print.js';

function component() {
	var element = document.createElement('div');
	var btn = document.createElement('button');

	// Lodash, now imported by this script
	element.innerHTML = _.join(['Hello', 'webpack'], ' ');
	element.classList.add('hello');
	
	// Add the image to our existing div.
	var myIcon = new Image();
	myIcon.src = Icon;
	element.appendChild(myIcon);

	console.log(Data);

	btn.innerHTML = 'Click me!';
	btn.onclick = printMe;
	element.appendChild(btn);

	return element;
}

document.body.appendChild(component());