const currentIndex = document.querySelector(".current-index");

const welcomeSwiper = new Swiper(".welcome__swiper-container", {
	direction: "horizontal",
	loop: true,
	slidesPerView: 1,
	spaceBetween: 13,
	paginationClickable: true,

	pagination: {
		el: ".welcome__swiper-pagination",
		clickable: true,
	},

	navigation: {
		nextEl: ".welcome__swiper-button-next",
		prevEl: ".welcome__swiper-button-prev",
	},

	onAny(eventName, data) {
		if (eventName === "activeIndexChange") {
			currentIndex.innerText = `0${data.realIndex + 1} | 0${
				data.slides.length - 2
			}`;
		}
	},
});

const videoSwiper = new Swiper(".video-section__sliders-swiper", {
	direction: "horizontal",
	loop: true,
	slidesPerView: 3,
	// spaceBetween: 13,
	paginationClickable: true,

	pagination: {
		el: ".video-section__sliders-swiper-pagination",
		clickable: true,
	},

	navigation: {
		nextEl: ".video-section__sliders-swiper-next",
		prevEl: ".video-section__sliders-swiper-prev",
	},
});
