// SMOOTH SCROLL

//poner espacio en en el str  -> sin espacio no funciona en ie9
var navbarItems = document.getElementsByClassName('navbar-item');
//evt click 
for (var i = 0; i < navbarItems.length; i++){
	navbarItems[i].addEventListener('click', function(evt){	

		deleteActiveClass();

		if (Modernizr.classList) {
			this.classList.add('active');
		} else {
			//espacio clase para ie9
			this.classList += ' active';
		}

		var sectionToGo = this.getElementsByTagName('a')[0].href.split('#');
		
		if(sectionToGo.length > 1) {
			evt.preventDefault();
			var goTo = sectionToGo[sectionToGo.length - 1];
			getElementByIdAndScroll(goTo);
		}
	});
}

function getElementByIdAndScroll(name) {
	var elem;
	if (name == '') {
		elem = document.getElementsByClassName('header')[0];
	} else {
		elem = document.getElementById(name);
	}

	scrollToElement(elem);
}

function scrollToElement(element) {
	var jump = parseInt(element.getBoundingClientRect().top * .3);
	document.body.scrollTop += jump;
	document.documentElement.scrollTop += jump;

	if (!element.lastJump || element.lastJump > Math.abs(jump)) {
		element.lastJump = Math.abs(jump);

		setTimeout(function() {
			scrollToElement(element);
		}, "60");

	} else {
		element.lastJump = null;
	}
}

// CHANGE ACTIVE ITEM
var cumulativeOffset = function(element) {
	var top = 0;
    do {
        top += element.offsetTop  || 0;
        element = element.offsetParent;
    } while(element);

    return top;
};

var offsetQuienSoy = cumulativeOffset(document.getElementById('quien-soy')) - 50;
var offsetEstudios = cumulativeOffset(document.getElementById('estudios')) - 50;
var offsetExperiencia = cumulativeOffset(document.getElementById('experiencia')) - 50;
var offsetInfoMe = cumulativeOffset(document.getElementById('info-me')) - 50;
var navbar = document.getElementsByClassName('navbar')[0];

window.addEventListener('scroll', changeMenuStyle);

function changeMenuStyle(evt){
	var previous;

	if (window.pageYOffset >= 0 && window.pageYOffset < offsetQuienSoy) {
		if(!previous) {
			previous = 1;
		} else if (previous == 1) {
			return false;
		}

		navbar.style.backgroundColor = '#4C6DEF';
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href="#"]').parentNode.classList.add("active");
		} else {
			//espacio clase para ie9
			document.querySelector('a[href="#"]').parentNode.className += " active";
		}
	} else if (window.pageYOffset >= offsetQuienSoy && window.pageYOffset < offsetEstudios){
		if(!previous) {
			previous = 2;
		} else if (previous == 2) {
			return false;
		}
		navbar.style.backgroundColor = '#4C6DEF';
		deleteActiveClass()
		if (Modernizr.classList) {
			document.querySelector('a[href$="quien-soy"]').parentNode.classList.add("active-reverse");
		} else { 
			document.querySelector('a[href$="quien-soy"]').parentNode.className += " active-reverse";
		}
	} else if (window.pageYOffset >= offsetEstudios && window.pageYOffset < offsetExperiencia){
		if(!previous) {
			previous = 3;
		} else if (previous == 3) {
			return false;
		}
		navbar.style.backgroundColor = '#4C6DEF';
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="estudios"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href$="estudios"]').parentNode.className += " active";
		}
	} else if(window.pageYOffset >= offsetExperiencia && window.pageYOffset < offsetInfoMe){
		if(!previous) {
			previous = 3;
		} else if (previous == 3) {
			return false;
		}
		navbar.style.backgroundColor = '#4C6DEF';
		deleteActiveClass();
		if (Modernizr.classList) {
			document.querySelector('a[href$="experiencia"]').parentNode.classList.add("active");
		} else {
			document.querySelector('a[href$="experiencia"]').parentNode.className += " active";
		}
	}

}

function deleteActiveClass() {
	for(var i = 0; i < navbarItems.length; i++){
		if (Modernizr.classList) {
			navbarItems[i].classList.remove('active');
			navbarItems[i].classList.remove('active-reverse');
		} else {
			navbarItems[i].className = 'navbar-item';
		}
	}
}









