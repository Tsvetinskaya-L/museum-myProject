mapboxgl.accessToken =
	"pk.eyJ1IjoidHN2ZXRpbnNrYXlhbGlkaXlhIiwiYSI6ImNrdTJ3eXhwNzEzYzQyd3Q5cXdvanF4dnYifQ.-cJRSbOoKSENY2Gt77N2Aw";
const map = new mapboxgl.Map({
	container: "map",
	style: "mapbox://styles/mapbox/streets-v11",
	center: [2.3364, 48.86091],
	zoom: 15,
});

new mapboxgl.Marker({
	color: "red",
})
	.setLngLat([2.3364, 48.86091])
	.addTo(map);
new mapboxgl.Marker({
	color: "red",
})
	.setLngLat([2.3333, 48.8602])
	.addTo(map);
new mapboxgl.Marker({
	color: "red",
})
	.setLngLat([2.3397, 48.8607])
	.addTo(map);
new mapboxgl.Marker({
	color: "red",
})
	.setLngLat([2.333, 48.8619])
	.addTo(map);
new mapboxgl.Marker({
	color: "red",
})
	.setLngLat([2.3365, 48.8625])
	.addTo(map);

const galleryContainer = document.querySelector(".picture-inner-container");

const galleryPics = [
	"./assets/img/galery/galery1.jpg",
	"./assets/img/galery/galery2.jpg",
	"./assets/img/galery/galery3.jpg",
	"./assets/img/galery/galery4.jpg",
	"./assets/img/galery/galery5.jpg",
	"./assets/img/galery/galery5.jpg",
	"./assets/img/galery/galery6.jpg",
	"./assets/img/galery/galery7.jpg",
	"./assets/img/galery/galery8.jpg",
	"./assets/img/galery/galery9.jpg",
	"./assets/img/galery/galery10.jpg",
	"./assets/img/galery/galery11.jpg",
	"./assets/img/galery/galery12.jpg",
	"./assets/img/galery/galery13.jpg",
	"./assets/img/galery/galery14.jpg",
	"./assets/img/galery/galery15.jpg",
];

shuffle(galleryPics).forEach((item) => addGalleryPicture(item));

function addGalleryPicture(src) {
	const img = document.createElement("img");
	img.classList.add("gallery-img");
	img.src = src;
	img.alt = "gallery-img";
	galleryContainer.append(img);
}

function shuffle(array) {
	return array.sort((a, b) => Math.random() - 0.5);
}

const bookForm = document.querySelector("#buynow");
const closeBookForm = document.querySelector("#closebookform");

bookForm.addEventListener("click", () => {
	document.querySelector("#bookform").style.width = "100%";
	document.querySelector("#bookform").style.left = "0";
});

closeBookForm.addEventListener("click", () => {
	document.querySelector("#bookform").style.width = "0";
});
