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



const cheketBlocks = document.querySelectorAll('.cheket__block')



// cheketBlocks.forEach(el => {
// 	el.addEventListener('click', function (e) {
// 		const self = e.currentTarget
// 		const header = self.querySelector('.cheket__header')
// 		const body = self.querySelector('.cheket__body')

// 		self.classList.toggle('cheket__body--active')
// 	})
// })

// function openCheketBody () {

// }
// openCheketBody()


// const filterItem = document.querySelectorAll('.filter__item')
// const filterBtns = document.querySelectorAll('.filter-btn__close')


// function deleteFilterItem () {
// 	filterItem.forEach(item => {
// 		item.addEventListener('click', function (e) {
// 			filterBtns.forEach(btn => {

// 			})
// 		})
// 	})
// }
// deleteFilterItem()