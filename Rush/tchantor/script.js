const components = [
	'navbar',
	'about',
    'education',
	'skills',
	'footer'
];
const path = './components';
for (const name of components) {
	fetch(`${path}/${name}.html`)
		.then(response => response.text())
		.then(data => {
			document.querySelector(`#${name}`).innerHTML = data;
		}); 
}
