console.log("Script is running!");

document.addEventListener("DOMContentLoaded", function () {
	// Get navigation elements
	const navLinks = document.querySelectorAll(".navbar .nav-link");
	const sections = document.querySelectorAll(".section");

	// Function to update active nav based on scroll position
	function updateActiveNav() {
		console.log("Scroll event triggered.");
		let current = "";

		sections.forEach((section) => {
			const sectionTop = section.offsetTop - 100; // Adjust for navbar height
			const sectionBottom = sectionTop + section.offsetHeight;
			console.log(`Checking section: ${section.id}, Top: ${sectionTop}, Bottom: ${sectionBottom}`);
			if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
				current = section.getAttribute("id");
				console.log(`Current section: ${current}`);
			}
		});

		navLinks.forEach((link) => {
			link.classList.remove("active");
			if (link.getAttribute("href") === `#${current}`) {
				link.classList.add("active");
				console.log(`Active link: ${link.getAttribute("href")}`);
			}
		});
	}

	// Click event for nav links
	navLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();

			// Remove active from all
			navLinks.forEach((l) => l.classList.remove("active"));
			// Add active to clicked
			this.classList.add("active");

			// Scroll to target
			const target = document.querySelector(this.getAttribute("href"));
			if (target) {
				// Special handling for services section to center on image
				if (this.getAttribute("href") === "#services") {
					const servicesImage = target.querySelector(".services-img");
					if (servicesImage) {
						const imageRect = servicesImage.getBoundingClientRect();
						const targetY = window.pageYOffset + imageRect.top - window.innerHeight / 2 + imageRect.height / 2;
						window.scrollTo({ top: targetY, behavior: "smooth" });
					} else {
						target.scrollIntoView({ behavior: "smooth", block: "center" });
					}
				} else {
					target.scrollIntoView({ behavior: "smooth", block: "center" });
				}
			}
		});
	});

	// Initialize navigation on load
	updateActiveNav();
	window.addEventListener("scroll", updateActiveNav);

	// Debug: force pink color on cypherpunk active nav-link if cypherpunk theme is active
	function debugForcePinkActiveNav() {
		if (document.body.classList.contains('cypherpunk-theme')) {
			var activeLink = document.getElementById('debug-cypherpunk-active');
			if (activeLink) {
				activeLink.style.color = '#FF8080';
				activeLink.style.fontWeight = 'bold';
				activeLink.style.background = 'none';
				activeLink.style.textDecoration = 'none';
				activeLink.style.border = '2px dashed #FF8080';
				console.log('DEBUG: Forced pink on cypherpunk active nav-link.');
			}
		}
	}
	debugForcePinkActiveNav();
	window.addEventListener('scroll', debugForcePinkActiveNav);
	window.addEventListener('click', debugForcePinkActiveNav);
});

// Theme toggle logic
var logo = document.getElementById('theme-logo');
var body = document.body;
var servicesImg = document.querySelector('.services-img');
function setTheme(theme) {
	if (theme === 'corporate') {
		body.classList.add('corporate-theme');
		localStorage.setItem('siteTheme', 'corporate');
		logo.src = 'images/corporate/rtLogo-corp.svg';
		if (servicesImg) servicesImg.src = 'images/corporate/services-corp.png';
	} else {
		body.classList.remove('corporate-theme');
		localStorage.setItem('siteTheme', 'cypherpunk');
		logo.src = 'images/cypherpunk/rtLogo.svg';
		if (servicesImg) servicesImg.src = 'images/cypherpunk/services.png';
		console.log('DEBUG: Cypherpunk theme activated.');
	}
}

// Always start in corporate theme unless cypherpunk is saved

// On page load, set theme from localStorage or default to corporate
var savedTheme = localStorage.getItem('siteTheme');
if (savedTheme === 'cypherpunk') {
	setTheme('cypherpunk');
} else {
	setTheme('corporate');
}

var logoClickCount = 0;
logo.addEventListener('click', function() {
	logoClickCount++;
	if (logoClickCount >= 3) {
		var isCorporate = body.classList.contains('corporate-theme');
		setTheme(isCorporate ? 'cypherpunk' : 'corporate');
		logoClickCount = 0;
	}
});
