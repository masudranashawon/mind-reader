"use strict";
const getStartSec = document.getElementById("get-start-sec");
const userName = document.getElementById("user-name");
const thinkFruitNameSec = document.getElementById("think-fruit-name-sec");
const getUserName = document.getElementById("get-user-name");
const showUserName = document.getElementById("user-name-show");
const submitF = document.getElementById("submitf");
const scrollUp = document.getElementById("reset");
let errorModal = document.getElementById("error-modal");
let closeModal = document.getElementById("close");
let conditionAccept = document.getElementById("accept");
let errorModalTwo = document.getElementById("error-modal-two");
let closeModalTwo = document.getElementById("close-two");
let conditionAcceptTwo = document.getElementById("accept-two");
let mangoSectionPrint = document.getElementById("mango-section-print");
let appleSectionPrint = document.getElementById("apple-section-print");
let blueberrySectionPrint = document.getElementById("blueberry-section-print");
let jackfruitSectionPrint = document.getElementById("jackfruit-section-print");
let sweetOrangeSectionPrint = document.getElementById("sweet-orange-section-print");
let bananaSectionPrint = document.getElementById("bannna-section-print");
let guavaSectionPrint = document.getElementById("guava-section-print");
let lycheeSectionPrint = document.getElementById("lychee-section-print");
let watermelonSectionPrint = document.getElementById("watermelon-section-print");
let orangeSectionPrint = document.getElementById("orange-section-print");
let letters = /^[a-zA-Z ]+$/;

//Modal Section Open/Close & Scroll
closeModal.addEventListener("click", () => {
	errorModal.classList.remove("run-modal");
});
conditionAccept.addEventListener("click", () => {
	errorModal.classList.remove("run-modal");
});
closeModalTwo.addEventListener("click", () => {
	errorModalTwo.classList.remove("run-modal-two");
	selectFruitSec.style.display = "block";
});
conditionAcceptTwo.addEventListener("click", () => {
	errorModalTwo.classList.remove("run-modal-two");
	selectFruitSec.style.display = "block";
});
scrollUp.addEventListener("click", () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});
//Name Validaty and Show in other Site..............
getUserName.addEventListener("submit", (e) => {
	e.preventDefault();
	if (userName.value.trim().length > 0 && userName.value.length < 20 && userName.value.match(letters)) {
		showUserName.innerText = userName.value;
		document.getElementById("name-show-one").innerText = userName.value;
		document.getElementById("name-show-two").innerText = userName.value;
		document.getElementById("name-show-three").innerText = userName.value;
		document.getElementById("name-show-four").innerText = userName.value;
		document.getElementById("name-show-five").innerText = userName.value;
		document.getElementById("name-show-six").innerText = userName.value;
		document.getElementById("name-show-seven").innerText = userName.value;
		document.getElementById("name-show-eight").innerText = userName.value;
		document.getElementById("name-show-nine").innerText = userName.value;
		document.getElementById("name-show-ten").innerText = userName.value;
		document.getElementById("name-show-eleven").innerText = userName.value;
		document.getElementById("name-show-twelve").innerText = userName.value;
		document.getElementById("name-show-thirteen").innerText = userName.value;
		document.getElementById("name-show-fourteen").innerText = userName.value;
		document.getElementById("name-show-fifteen").innerText = userName.value;
		getStartSec.style.visibility = "none";
		getStartSec.style.opacity = "0";
		thinkFruitNameSec.style.visibility = "visible";
		thinkFruitNameSec.style.opacity = "1";
	} else {
		errorModal.classList.add("run-modal");
	}
});

//Name section Close & Fruit thinking Section Open.............
let fullFruitNameBtn = document.getElementById("think-done-btn");
let selectFruitSec = document.getElementById("select-fruit-sec");
fullFruitNameBtn.addEventListener("click", function() {
	thinkFruitNameSec.style.visibility = "none";
	thinkFruitNameSec.style.opacity = "0";
	thinkFruitNameSec.style.transition = "all .8s";
	selectFruitSec.style.opacity = "1";
	selectFruitSec.style.transform = "scale(1)";
	selectFruitSec.style.visibility = "visible";
});

//Fruit thinking CLose & Main Logic and Chaking user Checkmark............
submitF.addEventListener("click", (e) => {
	e.preventDefault();
	let storeOne = document.getElementById("one").checked;
	let storeTwo = document.getElementById("two").checked;
	let storeThree = document.getElementById("three").checked;
	let storeFour = document.getElementById("four").checked;
	let storeFive = document.getElementById("five").checked;
	let totalValue = "";

	if (storeOne == true) {
		totalValue = "1";
	}
	if (storeTwo == true) {
		totalValue += "2";
	}
	if (storeThree == true) {
		totalValue += "3";
	}
	if (storeFour == true) {
		totalValue += "4";
	}
	if (storeFive == true) {
		totalValue += "5";
	}

	//All fruite Detect end Showing condition .............
	if (totalValue == "135") {
		selectFruitSec.style.display = "none";
		mangoSectionPrint.classList.add("fruit-name-printed");
		getStartSec.style.display = "none";
	} else if (totalValue == "14") {
		selectFruitSec.style.display = "none";
		appleSectionPrint.classList.add("fruit-name-printed");
		getStartSec.style.display = "none";
	} else if (totalValue == "145") {
		selectFruitSec.style.display = "none";
		blueberrySectionPrint.classList.add("fruit-name-printed");
		getStartSec.style.display = "none";
	} else if (totalValue == "123") {
		selectFruitSec.style.display = "none";
		jackfruitSectionPrint.classList.add("fruit-name-printed");
		getStartSec.style.display = "none";
	} else if (totalValue == "25") {
		selectFruitSec.style.display = "none";
		sweetOrangeSectionPrint.classList.add("fruit-name-printed");
		getStartSec.style.display = "none";
	} else if (totalValue == "13") {
		selectFruitSec.style.display = "none";
		bananaSectionPrint.classList.add("fruit-name-printed");
		getStartSec.style.display = "none";
	} else if (totalValue == "245") {
		selectFruitSec.style.display = "none";
		guavaSectionPrint.classList.add("fruit-name-printed");
		getStartSec.style.display = "none";
	} else if (totalValue == "234") {
		selectFruitSec.style.display = "none";
		lycheeSectionPrint.classList.add("fruit-name-printed");
		getStartSec.style.display = "none";
	} else if (totalValue == "24") {
		selectFruitSec.style.display = "none";
		watermelonSectionPrint.classList.add("fruit-name-printed");
		getStartSec.style.display = "none";
	} else if (totalValue == "35") {
		selectFruitSec.style.display = "none";
		orangeSectionPrint.classList.add("fruit-name-printed");
		getStartSec.style.display = "none";
	} else {
		errorModalTwo.classList.add("run-modal-two");
		selectFruitSec.style.display = "none";
	}
	console.log(totalValue);
});

//Mouse Interection Author Tool Tip.......
function myFunction(e) {
	var x = e.clientX;
	var y = e.clientY;
	document.getElementById("tooltip").style.left = x + "px";
	document.getElementById("tooltip").style.top = y + "px";
}

//Block Right Menu & Other CTRL Commands...........
document.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
}
);

document.onkeydown = function(e) {
	if (event.keyCode == 123) {
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) {
		return false;
	}
	if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
		return false;
	}
};

//Stop Image Draging.......
window.onload = function() {
	let img;
	let images = document.getElementsByTagName('img');
	for (let i = 0; img = images[i++];) {
		img.ondragstart = function() {
			return false;
		};
	}
}