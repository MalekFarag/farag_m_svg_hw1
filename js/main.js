////var = variable      use ="___" to name it
//var firstName = "Malek";


////this is a method (already built in function in js)
//alert("Hello " + firstName);


////modern js   "``" is the same thing as """ but better?
//alert(`Hello ${firstName}`);

//console message!
console.log('JavaScript file is linked.');


(() => {  //anonymous function***

	console.log('boi');

	var badge = document.querySelector('img') //'querySelector'slects 1st tag or if you use '.' or '#', selects class or id.
	//'querySelctorAll' selects all '____'
	function logBadgeId() {
		console.log(this.id);
		debugger; // 'dubugger' stops code from executing so you can look at it!
	}

	badge.addEventListener('click', logBadgeId); //every time you 'click' it plays the function (for the var 'badge' badge = 1st 'img' tag)
	
 })();