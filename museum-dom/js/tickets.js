const prices = {
	permanent: 20,
	temporary: 25,
	combined: 40,
};

let isPopupActive = false;

const basic = document.querySelector("#basic-amount");
const popupBasic = document.querySelector("#popupBasic");
const senior = document.querySelector("#senior-amount");
const popupSenior = document.querySelector("#popupSenior");
const popupType = document.querySelector(".ticket-type");
const totalTicketForm = document.querySelector("#total");
const totalPopupForm = document.querySelector("#totalPopupForm");

document.addEventListener("DOMContentLoaded", function () {
	restoreSavedForm();
});

document.querySelector("#closebookform").addEventListener("click", () => {
	isPopupActive = false;
	updateForm();
});

document.querySelector("#buynow").addEventListener("click", () => {
	isPopupActive = true;
	updateForm();
});

function restoreSavedForm() {
	const basic = localStorage.getItem("basic");
	const senior = localStorage.getItem("senior");
	const type = localStorage.getItem("type");

	if (basic !== "undefined") {
		setBasic(basic);
	}

	if (senior !== "undefined") {
		setSenior(senior);
	}

	if (type !== "undefined") {
		setType(type);
	}

	updateForm();
}

function setBasic(value) {
	if (!value) {
		value = isPopupActive ? popupBasic.value : basic.value;
	}

	basic.value = value;
	popupBasic.value = value;

	return value;
}

function setSenior(value) {
	if (!value) {
		value = isPopupActive ? popupSenior.value : senior.value;
	}

	senior.value = value;
	popupSenior.value = value;

	return value;
}

function setType(type) {
	if (!type) {
		type = getType();
	}

	document.querySelector(".radio__circle#permanent").checked = false;
	document.querySelector(".radio__circle#temporary").checked = false;
	document.querySelector(".radio__circle#combined").checked = false;

	if (type === "permanent") {
		document.querySelector(".radio__circle#permanent").checked = true;
	} else if (type === "temporary") {
		document.querySelector(".radio__circle#temporary").checked = true;
	} else {
		document.querySelector(".radio__circle#combined").checked = true;
	}

	popupType.options[0].selected = false;
	popupType.options[1].selected = false;
	popupType.options[2].selected = false;
	popupType.value = type;

	return type;
}

function getType() {
	if (isPopupActive) {
		return popupType.options[popupType.selectedIndex].value;
	} else {
		if (document.querySelector(".radio__circle#permanent").checked) {
			return "permanent";
		} else if (document.querySelector(".radio__circle#temporary").checked) {
			return "temporary";
		}

		return "combined";
	}
}

function updateForm() {
	const basic = setBasic();
	const senior = setSenior();
	const type = setType();

	localStorage.setItem("basic", basic);
	localStorage.setItem("senior", senior);
	localStorage.setItem("type", type);
	setCost(basic, senior, type);
}

function setCost(basic, senior, type) {
	const basicSubPrice = basic * prices[type];
	const seniorSubPrice = senior * (prices[type] / 2);

	document.querySelector("#basicSubprice").innerHTML = basicSubPrice;
	document.querySelector("#seniorSubprice").innerHTML = seniorSubPrice;
	document.querySelector("#basicQuantity").innerHTML = basic;
	document.querySelector("#seniorQuantity").innerHTML = senior;

	totalTicketForm.innerHTML = basicSubPrice + seniorSubPrice;
	totalPopupForm.innerHTML = basicSubPrice + seniorSubPrice;
}

document.querySelector("#basic-minus").addEventListener("click", updateForm);
document.querySelector("#basic-plus").addEventListener("click", updateForm);
document.querySelector("#senior-minus").addEventListener("click", updateForm);
document.querySelector("#senior-plus").addEventListener("click", updateForm);
document.querySelector("#permanent").addEventListener("click", updateForm);
document.querySelector("#temporary").addEventListener("click", updateForm);
document.querySelector("#combined").addEventListener("click", updateForm);
document
	.querySelector("#popupBasicMinus")
	.addEventListener("click", updateForm);
document.querySelector("#popupBasicPlus").addEventListener("click", updateForm);
document
	.querySelector("#popupSeniorMinus")
	.addEventListener("click", updateForm);
document
	.querySelector("#popupSeniorPlus")
	.addEventListener("click", updateForm);
popupType.addEventListener("click", updateForm);
