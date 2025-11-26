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
	console.log('Setting theme to:', theme);
	if (theme === 'corporate') {
		body.classList.add('corporate-theme');
		localStorage.setItem('siteTheme', 'corporate');
		logo.src = 'images/corporate/rtLogo-corp.svg';
		if (servicesImg) servicesImg.src = 'images/corporate/services-corp.png';
		console.log('Corporate theme applied. Body classes:', body.className);
		
		// FORCE calendar styling for corporate theme
		forceCorporateCalendarStyles();
	} else {
		body.classList.remove('corporate-theme');
		localStorage.setItem('siteTheme', 'cypherpunk');
		logo.src = 'images/cypherpunk/rtLogo.svg';
		if (servicesImg) servicesImg.src = 'images/cypherpunk/services.png';
		console.log('Cypherpunk theme applied. Body classes:', body.className);
		
		// Remove forced styles for cypherpunk theme
		removeForcedCalendarStyles();
	}
}

function forceCorporateCalendarStyles() {
	// Force calendar headers to be dark text
	const headers = document.querySelectorAll('.calendar-day-header');
	headers.forEach(header => {
		header.style.color = '#222 !important';
		header.style.background = '#f5f5f5 !important';
	});
	
	// Force calendar days to be dark text on white background, but preserve event colors
	const days = document.querySelectorAll('.calendar-day');
	days.forEach(day => {
		day.style.setProperty('color', '#000', 'important');
		
		// Only set default background if it's NOT an event day
		if (!day.classList.contains('has-event')) {
			day.style.background = '#fff';
			day.style.border = '1px solid rgba(0,0,0,0.1)';
		}
	});
	
	// Force calendar title to be dark
	const title = document.querySelector('.calendar-title');
	if (title) {
		title.style.setProperty('color', '#000', 'important');
	}
	
	// Force calendar container to have white background
	const container = document.querySelector('.calendar');
	if (container) {
		container.style.background = 'rgba(255,255,255,0.95) !important';
		container.style.border = '1px solid rgba(0,0,0,0.1) !important';
	}
	
	console.log('Forced corporate calendar styles applied');
	
	// Re-enhance event styling after forced styling
	if (typeof enhanceEventStyling === 'function') {
		setTimeout(enhanceEventStyling, 50);
	}
}

function removeForcedCalendarStyles() {
	// Remove inline styles to restore cypherpunk theme
	const headers = document.querySelectorAll('.calendar-day-header');
	headers.forEach(header => {
		header.style.color = '';
		header.style.background = '';
	});
	
	const days = document.querySelectorAll('.calendar-day');
	days.forEach(day => {
		// Remove forced color styling from all days
		day.style.color = '';
		// Only remove background/border from non-event days to preserve event styling
		if (!day.classList.contains('has-event')) {
			day.style.background = '';
			day.style.border = '';
		}
	});
	
	const title = document.querySelector('.calendar-title');
	if (title) {
		title.style.color = '';
	}
	
	const container = document.querySelector('.calendar');
	if (container) {
		container.style.background = '';
		container.style.border = '';
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

// Dynamic Carousel functionality
let currentSlide = 0;
let slides = [];

async function loadCarouselImages() {
    const carouselTrack = document.getElementById('carousel-track');

    if (!carouselTrack) return;

    // Add CSS to ensure only active slides are visible
    const style = document.createElement('style');
    style.textContent = `
        .carousel-slide {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }
        .carousel-slide.active {
            opacity: 1 !important;
        }
    `;
    document.head.appendChild(style);

    console.log('🔄 Loading carousel images from JSON list...');

    try {
        // Load the JSON file with all image filenames
        const response = await fetch('carousel-images.json');
        const imageData = await response.json();
        const imageList = imageData.images || [];

        if (imageList.length === 0) {
            carouselTrack.innerHTML = '<div class="carousel-slide active">No images found in carousel-images.json</div>';
            console.log('❌ No images listed in carousel-images.json');
            return;
        }

        console.log(`📂 Loading ${imageList.length} images from JSON list...`);

        // Clear existing content
        carouselTrack.innerHTML = '';

        let loadedCount = 0;

        // Load each image from the JSON list
        imageList.forEach((imageName, index) => {
            const img = new Image();
            img.onload = () => {
                loadedCount++;
                console.log(`✅ Loaded: ${imageName}`);

                // Create slide with proper absolute positioning
                const slide = document.createElement('div');
                slide.className = `carousel-slide ${index === 0 ? 'active' : ''}`;
                slide.style.cssText = `
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    opacity: ${index === 0 ? '1' : '0'};
                    visibility: ${index === 0 ? 'visible' : 'hidden'};
                    transition: opacity 0.5s ease-in-out, visibility 0.5s ease-in-out;
                    z-index: ${index === 0 ? '2' : '1'};
                `;

                const imgElement = document.createElement('img');
                imgElement.src = `images/carousel/${imageName}`;
                imgElement.alt = `Image ${index + 1}`;
                imgElement.className = 'carousel-image';
                imgElement.style.cssText = `
                    max-width: 100%;
                    max-height: 100%;
                    width: auto;
                    height: auto;
                    object-fit: contain;
                    display: block;
                    border-radius: 8px;
                    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
                `;

                slide.appendChild(imgElement);
                carouselTrack.appendChild(slide);

                // Start cycling when all images are loaded
                if (loadedCount === imageList.length) {
                    slides = document.querySelectorAll('.carousel-slide');
                    console.log(`🎉 Carousel ready with ${slides.length} images from JSON!`);
                    startCarousel();
                }
            };

            img.onerror = () => {
                console.log(`❌ Failed to load: ${imageName}`);
            };

            img.src = `images/carousel/${imageName}`;
        });

    } catch (error) {
        console.log('❌ Error loading carousel-images.json:', error);
        carouselTrack.innerHTML = '<div class="carousel-slide active">Error loading image list</div>';
    }
}

function startCarousel() {
    setInterval(() => {
        // Get all slides
        const slides = document.querySelectorAll('.carousel-slide');

        // Hide current slide
        slides[currentSlide].style.opacity = '0';
        slides[currentSlide].style.visibility = 'hidden';
        slides[currentSlide].style.zIndex = '1';

        // Move to next slide
        currentSlide = (currentSlide + 1) % slides.length;

        // Show next slide
        slides[currentSlide].style.opacity = '1';
        slides[currentSlide].style.visibility = 'visible';
        slides[currentSlide].style.zIndex = '2';
    }, 5000); // Change every 5 seconds
}

// Initialize carousel when page loads
document.addEventListener('DOMContentLoaded', function() {
	loadCarouselImages();
	
	// Venmo modal functionality
	const venmoButton = document.getElementById('venmo-button');
	const venmoModal = document.getElementById('venmo-modal');
	const venmoClose = document.getElementById('venmo-close');
	
	// Open Venmo modal
	if (venmoButton) {
		venmoButton.addEventListener('click', function() {
			venmoModal.style.display = 'flex';
		});
	}
	
	// Close Venmo modal
	if (venmoClose) {
		venmoClose.addEventListener('click', function() {
			venmoModal.style.display = 'none';
		});
	}
	
	// Signup modal functionality
	const signupModal = document.getElementById('signup-modal');
	const signupClose = document.getElementById('signup-close');
	const signupForm = document.getElementById('signup-form');
	
	// Close signup modal
	if (signupClose) {
		signupClose.addEventListener('click', function() {
			signupModal.style.display = 'none';
		});
	}
	
	// Handle signup form submission
	if (signupForm) {
		signupForm.addEventListener('submit', function(e) {
			e.preventDefault();
			processSignup();
		});
	}
	
	// Close modal when clicking outside
	window.addEventListener('click', function(event) {
		if (event.target === venmoModal) {
			venmoModal.style.display = 'none';
		}
		if (event.target === signupModal) {
			signupModal.style.display = 'none';
		}
	});
});

// Signup system
let currentSignup = {
	classId: null,
	className: null,
	classTime: null,
	classPrice: null
};

// Open signup form
function openSignupForm(classId, className, classTime, price) {
	currentSignup.classId = classId;
	currentSignup.className = className;
	currentSignup.classTime = classTime;
	currentSignup.classPrice = price;
	
	// Update class info display
	document.getElementById('signup-class-info').innerHTML = `
		<h4>${className}</h4>
		<p><strong>Schedule:</strong> ${classTime}</p>
		<p><strong>Price:</strong> ${price}</p>
	`;
	
	// Reset form
	document.getElementById('signup-form').reset();
	
	// Show modal
	document.getElementById('signup-modal').style.display = 'flex';
}

// Process signup
function processSignup() {
	const name = document.getElementById('signup-name').value.trim();
	const email = document.getElementById('signup-email').value.trim();
	
	if (!name || !email) {
		alert('Please fill in all required fields');
		return;
	}
	
	// Check for duplicates
	if (checkDuplicateSignup(email, currentSignup.classId)) {
		alert('This email is already registered for this class!');
		return;
	}
	
	// Store signup data (pending payment)
	const signupData = {
		timestamp: new Date().toISOString(),
		classId: currentSignup.classId,
		className: currentSignup.className,
		classTime: currentSignup.classTime,
		price: currentSignup.classPrice,
		name: name,
		email: email,
		paid: false,
		paypalTransactionId: null
	};
	
	// Store in localStorage temporarily
	storeSignup(signupData);
	
	// Send email notification
	sendSignupEmail(signupData);
	
	// Close signup modal
	document.getElementById('signup-modal').style.display = 'none';
	
	// Redirect to PayPal with custom data
	initiatePayPalPayment(signupData);
}

// Check for duplicate signups
function checkDuplicateSignup(email, classId) {
	const signups = JSON.parse(localStorage.getItem('rhinoSignups') || '[]');
	return signups.some(signup => signup.email === email && signup.classId === classId);
}

// Store signup in localStorage
function storeSignup(signupData) {
	const signups = JSON.parse(localStorage.getItem('rhinoSignups') || '[]');
	signups.push(signupData);
	localStorage.setItem('rhinoSignups', JSON.stringify(signups));
}

// Send email notification via Formspree
async function sendSignupEmail(signupData) {
	const emailData = {
		subject: 'New Rhino Training Signup',
		message: `
New training signup details:

Class: ${signupData.className}
Schedule: ${signupData.classTime}
Price: ${signupData.price}

Student Information:
Name: ${signupData.name}
Email: ${signupData.email}

Status: Pending Payment
Signup Time: ${new Date(signupData.timestamp).toLocaleString()}

Please verify payment completion.
		`,
		name: signupData.name,
		email: signupData.email,
		class: signupData.className,
		price: signupData.price
	};
	
	try {
		const response = await fetch('https://formspree.io/f/xdkogqnw', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(emailData)
		});
		
		if (response.ok) {
			console.log('Signup email sent successfully');
		}
	} catch (error) {
		console.error('Error sending signup email:', error);
	}
}

// Initiate PayPal payment
function initiatePayPalPayment(signupData) {
	// Store current signup for PayPal callback
	sessionStorage.setItem('pendingSignup', JSON.stringify(signupData));
	
	// Close any open modals
	const eventModal = document.getElementById('event-modal');
	if (eventModal) {
		eventModal.classList.remove('active');
		eventModal.style.display = 'none';
	}
	
	// Scroll to PayPal button and highlight it
	const paypalSection = document.querySelector('.payment-options');
	if (paypalSection) {
		paypalSection.scrollIntoView({ behavior: 'smooth' });
		
		// Add visual indicator
		const paypalOption = document.querySelector('.payment-option:last-child');
		if (paypalOption) {
			paypalOption.style.border = '3px solid #00ff00';
			paypalOption.style.animation = 'pulse 2s infinite';
			
			// Show message
			const message = document.createElement('div');
			message.innerHTML = `
				<div style="background: var(--color-lime); color: var(--color-terminal-bg); padding: 1rem; margin: 1rem 0; border-radius: 8px; text-align: center; font-weight: bold;">
					Complete your signup by paying below ↓
				</div>
			`;
			paypalOption.parentElement.insertBefore(message, paypalOption);
			
			// Remove highlight after 10 seconds
			setTimeout(() => {
				paypalOption.style.border = '';
				paypalOption.style.animation = '';
				message.remove();
			}, 10000);
		}
	}
}
