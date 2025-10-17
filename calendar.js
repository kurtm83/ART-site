// Training Events Data
const trainingEvents = [
    {
        id: 1,
        title: "Level I - NURBS Modeling",
        date: "2025-11-10",
        endDate: "2025-11-15",
        time: "Monday-Saturday/9am-1pm EST (November 10-15, 2025)",
        instructor: "Kurt - Authorized Rhino Trainer",
        level: "Beginner",
        format: "Online",
        description: "In this class you'll learn to create and edit accurate free-form 3-D NURBS models. This fast-moving class covers most of Rhino's functionality, including the most advanced surfacing commands.",
        topics: [
            "NURBS modeling fundamentals",
            "Creating accurate free-form 3-D models", 
            "Advanced surfacing commands",
            "Model editing and refinement",
            "Professional workflow techniques"
        ],
        price: "US$595",
        rhinoUrl: "https://www.rhino3d.com/training/4036/?lang=en&format=Online",
        courseOutline: "https://docs.mcneel.com/rhino/8/training-level1/en-us/Default.htm",
        contact: "kurt@rhino.training",
        contactUrl: "https://rhino.training/contact",
        language: "English"
    },
    {
        id: 2,
        title: "Level II - Advanced Rhino 3D Modeling",
        date: "2025-11-03",
        endDate: "2025-11-08", 
        time: "Monday-Saturday/9am-1pm EST (November 3-8, 2025)",
        instructor: "Kurt - Authorized Rhino Trainer",
        level: "Intermediate",
        format: "Online",
        description: "In this advanced 6-day class you will learn to take advantage of Rhino's advanced features. You will also learn tips and tricks for making high quality models faster and easier.",
        topics: [
            "Advanced Rhino features and capabilities",
            "Tips and tricks for efficient modeling",
            "High quality model creation techniques",
            "Advanced workflow optimization",
            "Professional modeling strategies"
        ],
        price: "US$595",
        rhinoUrl: "https://www.rhino3d.com/training/4038/?lang=en&format=Online",
        courseOutline: "https://docs.mcneel.com/rhino/8/training-level2/en-us/Default.htm#topics/00_introduction.htm",
        contact: "kurt@rhino.training",
        contactUrl: "https://rhino.training/contact",
        language: "English"
    }
];

// Calendar State
let currentMonth = 9; // October (0-based, so 9 = October)
let currentYear = 2025;

// Initialize calendar when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🗓️ Initializing dynamic calendar...');
    console.log('📊 Training events loaded:', trainingEvents);
    
    // Debug event dates
    trainingEvents.forEach((event, index) => {
        console.log(`Event ${index + 1}: ${event.title}`);
        console.log(`  Start date: ${event.date} -> ${new Date(event.date)}`);
        console.log(`  End date: ${event.endDate} -> ${new Date(event.endDate)}`);
    });
    
    // Add a longer delay to ensure all DOM elements are ready and themes are applied
    setTimeout(() => {
        console.log('🎯 Starting calendar initialization...');
        initializeCalendar();
        createEventModal();
        // Additional delay for setting the correct month
        setTimeout(() => {
            console.log('🎯 Auto-setting calendar month...');
            setCalendarToEventMonth();
        }, 100);
    }, 500);
});

function initializeCalendar() {
    const calendarContainer = document.querySelector('.calendar-container');
    if (!calendarContainer) {
        console.error('❌ Calendar container not found');
        return;
    }

    // Replace static calendar with dynamic version
    calendarContainer.innerHTML = `
        <h2 class="calendar-title">Upcoming Training Sessions</h2>
        <div class="calendar">
            <div class="calendar-header">
                <button class="calendar-nav" id="prev-month">‹</button>
                <h3 class="calendar-month" id="calendar-month">${getMonthName(currentMonth)} ${currentYear}</h3>
                <button class="calendar-nav" id="next-month">›</button>
            </div>
            <div class="calendar-grid" id="calendar-grid">
                <!-- Calendar will be populated by JavaScript -->
            </div>
        </div>
    `;

    // Add event listeners for navigation
    document.getElementById('prev-month').addEventListener('click', () => {
        changeMonth(-1);
    });
    
    document.getElementById('next-month').addEventListener('click', () => {
        changeMonth(1);
    });

    renderCalendar();
}

function changeMonth(direction) {
    currentMonth += direction;
    
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    
    document.getElementById('calendar-month').textContent = `${getMonthName(currentMonth)} ${currentYear}`;
    renderCalendar();
}

function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    if (!grid) {
        console.error('❌ Calendar grid not found');
        return;
    }

    console.log(`📅 Rendering calendar for ${getMonthName(currentMonth)} ${currentYear}`);

    // Clear existing content
    grid.innerHTML = '';

    // Add day headers
    const dayHeaders = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    dayHeaders.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-day-header';
        header.textContent = day;
        grid.appendChild(header);
    });

    // Get first day of month and number of days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    console.log(`📊 Month ${currentMonth + 1}/${currentYear}: First day: ${firstDay}, Days in month: ${daysInMonth}`);

    // Add empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day empty';
        grid.appendChild(emptyDay);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;

        // Check if this day has an event (including multi-day events)
        const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const eventsOnThisDay = trainingEvents.filter(event => {
            const eventStart = new Date(event.date);
            const eventEnd = new Date(event.endDate || event.date);
            const currentDate = new Date(dateString);
            
            // Check if current date falls within the event period
            return currentDate >= eventStart && currentDate <= eventEnd;
        });

        if (eventsOnThisDay.length > 0) {
            console.log(`🎯 Found ${eventsOnThisDay.length} event(s) on ${dateString}:`, eventsOnThisDay.map(e => e.title));
            dayElement.classList.add('has-event');
            
            // Check if this is the start date of an event
            const isStartDate = eventsOnThisDay.some(event => event.date === dateString);
            
            if (isStartDate) {
                console.log(`🔴 ${dateString} is a start date`);
                dayElement.innerHTML = `
                    ${day}
                    <div class="event-dot"></div>
                `;
            } else {
                console.log(`📏 ${dateString} is a continuation date`);
                // For continuation days, add a different indicator
                dayElement.innerHTML = `
                    ${day}
                    <div class="event-continuation"></div>
                `;
            }
            
            // Add click handler for days with events
            dayElement.addEventListener('click', () => {
                console.log(`🖱️ Clicked on event day: ${dateString}`);
                console.log('Events for this day:', eventsOnThisDay);
                showEventModal(eventsOnThisDay, dateString);
            });
            dayElement.style.cursor = 'pointer';
        }

        grid.appendChild(dayElement);
    }

    console.log(`📅 Rendered calendar for ${getMonthName(currentMonth)} ${currentYear}`);
    
    // Ensure event styling is applied after rendering
    enhanceEventStyling();
    
    // Apply corporate styling if in corporate mode
    const body = document.body;
    if (body.classList.contains('corporate-theme')) {
        setTimeout(() => {
            if (typeof forceCorporateCalendarStyles === 'function') {
                forceCorporateCalendarStyles();
            }
        }, 50);
    }
}

function enhanceEventStyling() {
    // Add extra styling to ensure event indicators are visible
    const eventDays = document.querySelectorAll('.calendar-day.has-event');
    eventDays.forEach(day => {
        // Force event day styling
        day.style.setProperty('background-color', 'rgba(231, 76, 60, 0.1)', 'important');
        day.style.setProperty('border', '1px solid #e74c3c', 'important');
        day.style.setProperty('font-weight', 'bold', 'important');
        day.style.setProperty('position', 'relative', 'important');
    });
    
    // Ensure dots and bars are visible
    const dots = document.querySelectorAll('.event-dot');
    dots.forEach(dot => {
        dot.style.setProperty('display', 'block', 'important');
        dot.style.setProperty('position', 'absolute', 'important');
        dot.style.setProperty('background-color', '#e74c3c', 'important');
        dot.style.setProperty('z-index', '10', 'important');
    });
    
    const bars = document.querySelectorAll('.event-continuation');
    bars.forEach(bar => {
        bar.style.setProperty('display', 'block', 'important');
        bar.style.setProperty('position', 'absolute', 'important');
        bar.style.setProperty('background-color', '#e74c3c', 'important');
        bar.style.setProperty('z-index', '10', 'important');
    });
    
    console.log(`✅ Enhanced styling for ${eventDays.length} event days, ${dots.length} dots, ${bars.length} bars`);
}

function getMonthName(month) {
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return months[month];
}

function createEventModal() {
    // Create modal HTML structure
    const modalHtml = `
        <div id="event-modal" class="event-modal">
            <div class="event-modal-content">
                <button class="modal-close" id="close-event-modal">×</button>
                <div id="event-modal-body">
                    <!-- Event details will be populated here -->
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Add close event listener
    document.getElementById('close-event-modal').addEventListener('click', hideEventModal);
    document.getElementById('event-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            hideEventModal();
        }
    });
}

function showEventModal(events, date) {
    const modal = document.getElementById('event-modal');
    const modalBody = document.getElementById('event-modal-body');

    if (!modal || !modalBody) {
        console.error('❌ Event modal elements not found');
        return;
    }

    // Format date for display - use the actual event start date instead of clicked date
    const eventStartDate = events.length > 0 ? events[0].date : date;
    // Parse date string to avoid timezone issues
    const [year, month, day] = eventStartDate.split('-').map(Number);
    const dateObj = new Date(year, month - 1, day); // month is 0-indexed
    const formattedDate = dateObj.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    let modalContent = `<h2>Training Sessions - ${formattedDate}</h2>`;

    events.forEach(event => {
        modalContent += `
            <div class="event-details">
                <h3>${event.title}</h3>
                <div class="event-info">
                    <p><strong>Level:</strong> ${event.level}</p>
                    <p><strong>Format:</strong> ${event.format}</p>
                    <p><strong>Dates:</strong> ${event.time}</p>
                    <p><strong>Language:</strong> ${event.language}</p>
                    <p><strong>Instructor:</strong> ${event.instructor}</p>
                    <p><strong>Description:</strong> ${event.description}</p>
                    
                    <div class="event-topics">
                        <strong>Topics Covered:</strong>
                        <ul>
                            ${event.topics.map(topic => `<li>${topic}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="event-pricing">
                        <p><strong>Price:</strong> ${event.price}</p>
                    </div>
                    
                    <div class="event-actions">
                        <a href="${event.rhinoUrl}" target="_blank" class="btn event-link-btn">
                            Rhino3D.com Link
                        </a>
                        ${event.courseOutline ? `<a href="${event.courseOutline}" target="_blank" class="btn btn-secondary">Course Outline</a>` : ''}
                    </div>
                </div>
            </div>
        `;
    });

    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    
    // Force corporate styling if in corporate theme
    const body = document.body;
    if (body.classList.contains('corporate-theme')) {
        forceCorporateModalStyles();
    }
    
    console.log(`📝 Showing event modal for ${date} with ${events.length} event(s)`);
}

function hideEventModal() {
    const modal = document.getElementById('event-modal');
    if (modal) {
        modal.classList.remove('active');
    }
}

function scrollToContact() {
    hideEventModal();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Force corporate modal styling
function forceCorporateModalStyles() {
    const modal = document.getElementById('event-modal');
    const modalContent = modal?.querySelector('.modal-content');
    const eventDetails = modal?.querySelectorAll('.event-details');
    const eventHeadings = modal?.querySelectorAll('.event-details h3');
    const eventText = modal?.querySelectorAll('.event-info p');
    const eventStrong = modal?.querySelectorAll('.event-info strong');
    const eventLinks = modal?.querySelectorAll('.event-links a');
    const eventButtons = modal?.querySelectorAll('.event-actions .btn');
    const closeButton = modal?.querySelector('.close-modal');
    
    if (modalContent) {
        modalContent.style.setProperty('background-color', '#fff', 'important');
        modalContent.style.setProperty('border', '2px solid #e74c3c', 'important');
        modalContent.style.setProperty('color', '#333', 'important');
        modalContent.style.setProperty('max-height', '80vh', 'important');
        modalContent.style.setProperty('overflow-y', 'auto', 'important');
    }
    
    eventDetails?.forEach(detail => {
        detail.style.setProperty('background-color', '#f9f9f9', 'important');
        detail.style.setProperty('border', '1px solid #ddd', 'important');
        detail.style.setProperty('color', '#333', 'important');
    });
    
    eventHeadings?.forEach(heading => {
        heading.style.setProperty('color', '#e74c3c', 'important');
        heading.style.setProperty('border-bottom', '1px solid #ddd', 'important');
    });
    
    eventText?.forEach(text => {
        text.style.setProperty('color', '#333', 'important');
    });
    
    eventStrong?.forEach(strong => {
        strong.style.setProperty('color', '#e74c3c', 'important');
    });
    
    eventLinks?.forEach(link => {
        link.style.setProperty('color', '#e74c3c', 'important');
        link.style.setProperty('border', '1px solid #e74c3c', 'important');
    });
    
    eventButtons?.forEach(button => {
        button.style.setProperty('color', '#e74c3c', 'important');
        button.style.setProperty('border', '1px solid #e74c3c', 'important');
        button.style.setProperty('background-color', 'transparent', 'important');
    });
    
    if (closeButton) {
        closeButton.style.setProperty('color', '#e74c3c', 'important');
    }
}

// Set calendar to show month with events on page load
function setCalendarToEventMonth() {
    console.log('🎯 Setting calendar to event month...');
    if (trainingEvents.length > 0) {
        // Get the month of the first event
        const firstEventDate = new Date(trainingEvents[0].date);
        console.log('📅 First event date:', firstEventDate);
        currentMonth = firstEventDate.getMonth();
        currentYear = firstEventDate.getFullYear();
        console.log(`📅 Setting calendar to month ${currentMonth} (${getMonthName(currentMonth)}) year ${currentYear}`);
        
        const monthElement = document.getElementById('calendar-month');
        if (monthElement) {
            monthElement.textContent = `${getMonthName(currentMonth)} ${currentYear}`;
            renderCalendar();
        } else {
            console.error('❌ Calendar month element not found');
        }
    } else {
        console.log('❌ No training events found');
    }
}

// Initialize modal event listeners
function initializeModalEventListeners() {
    const modal = document.getElementById('event-modal');
    const closeButton = document.querySelector('.close-modal');
    
    // Close modal when clicking the X button
    if (closeButton) {
        closeButton.addEventListener('click', hideEventModal);
    }
    
    // Close modal when clicking outside the modal content
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideEventModal();
            }
        });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideEventModal();
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeModalEventListeners();
});