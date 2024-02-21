import './modules/slider'
const btnsNav = document.querySelectorAll('.btn-nav')

btnsNav.forEach(btnNav => {
	btnNav.addEventListener('click', function (e) {
		if (e.currentTarget) {
			btnsNav.forEach(el => {
				el.classList.remove('btn-nav--active')
			})
			btnNav.classList.add('btn-nav--active')
		}
	})
})

// console.log(btnNav)
const sortBtn = document.querySelector('.sort-btn')
const sortMenu = document.querySelector('.sort-menu')



function openSortMenu () {
	sortBtn.addEventListener('click', function () {
		sortMenu.classList.toggle('visually-hidden')
	})
}
openSortMenu()