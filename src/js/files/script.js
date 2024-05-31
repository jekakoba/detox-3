// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";


function showHideHeader() {
	const header = document.getElementsByTagName('header');
	if (!header) return;
	let lastScrollTop = 0;
	window.addEventListener('scroll', function () {
		let scrollTop = window.scrollY || document.documentElement.scrollTop;
		if (scrollTop > 1) {
			document.documentElement.classList.add('scrolled-page');
			if (scrollTop > lastScrollTop) {
				document.documentElement.classList.add('scrolled-down');
			} else {
				document.documentElement.classList.remove('scrolled-down');
			}
		} else {
			document.documentElement.classList.remove('scrolled-page');
		}

		lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
	});
}
showHideHeader()