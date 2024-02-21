import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'

const sliderPrice = document.querySelector('.slider-price')
noUiSlider.create(sliderPrice, {
	start: [234, 8800],
	connect: true,
	range: {
		min: 234,
		max: 9999,
	},
})
const sliderThc = document.querySelector('.slider-thc')
noUiSlider.create(sliderThc, {
	start: [0, 65],
	connect: true,
	range: {
		min: 0,
		max: 100,
	},
})
const sliderCbd = document.querySelector('.slider-cbd')
noUiSlider.create(sliderCbd, {
	start: [0, 65],
	connect: true,
	range: {
		min: 0,
		max: 100,
	},
})



