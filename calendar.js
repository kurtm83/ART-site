// Training Events Data
const trainingEvents = [
    {
        id: 6,
        title: "Level I - NURBS Modeling - MWF - A.M., 6 days",
        date: "2026-01-05",
        endDate: "2026-01-16",
        scheduleDays: [1, 3, 5], // Monday=1, Wednesday=3, Friday=5
        colorClass: "event-cyan",
        time: "Monday, Wednesday, Friday / 9am-1pm EST for 2 weeks (January 5-16, 2026)",
        instructor: "Kurt - Authorized Rhino Trainer",
        level: "Beginner",
        format: "Online",
        description: "This comprehensive 6-day Level I class covers the fundamentals of NURBS modeling in Rhino 3D. Perfect for beginners looking to master the basics of 3D modeling.",
        topics: [
            "Introduction to NURBS modeling concepts",
            "Basic Rhino interface and navigation",
            "Creating and editing curves and surfaces",
            "Essential modeling tools and techniques",
            "File management and organization"
        ],
        price: "US$595",
        rhinoUrl: "https://www.rhino3d.com/training/",
        courseOutline: "https://docs.mcneel.com/rhino/8/training-level1/en-us/Default.htm",
        contact: "kurt@rhino.training",
        contactUrl: "https://rhino.training/contact",
        language: "English",
        maxStudents: 6,
        currentStudents: 0
    },
    {
        id: 7,
        title: "Level I - NURBS Modeling - T-TH-S Evenings, 8 days",
        date: "2026-01-06",
        endDate: "2026-01-22",
        scheduleDays: [2, 4, 6], // Tuesday=2, Thursday=4, Saturday=6
        colorClass: "event-orange",
        time: "Tuesday, Thursday, Saturday / 6pm-9pm EST for 2.5 weeks (January 6-22, 2026)",
        instructor: "Kurt - Authorized Rhino Trainer",
        level: "Beginner",
        format: "Online",
        description: "This comprehensive 8-day Level I class covers the fundamentals of NURBS modeling in Rhino 3D. Perfect for beginners looking to master the basics of 3D modeling. Evening schedule designed for working professionals.",
        topics: [
            "Introduction to NURBS modeling concepts",
            "Basic Rhino interface and navigation",
            "Creating and editing curves and surfaces",
            "Essential modeling tools and techniques",
            "File management and organization",
            "Professional workflow development"
        ],
        price: "US$595",
        rhinoUrl: "https://www.rhino3d.com/training/",
        courseOutline: "https://docs.mcneel.com/rhino/8/training-level1/en-us/Default.htm",
        contact: "kurt@rhino.training",
        contactUrl: "https://rhino.training/contact",
        language: "English",
        maxStudents: 6,
        currentStudents: 0
    },
    {
        id: 11,
        title: "Level I - NURBS Modeling - T-TH-S Evenings, 8 days",
        date: "2026-02-24",
        endDate: "2026-03-12",
        scheduleDays: [2, 4, 6], // Tuesday=2, Thursday=4, Saturday=6
        colorClass: "event-blue",
        time: "Tuesday, Thursday, Saturday / 6pm-9pm EST for 2.5 weeks (February 24 - March 12, 2026)",
        instructor: "Kurt - Authorized Rhino Trainer",
        level: "Beginner",
        format: "Online",
        description: "In this 8-day Level I class you'll learn to create and edit accurate free-form 3-D NURBS models. This fast-moving class covers most of Rhino's functionality, including the most advanced surfacing commands. This is a 3-hour evening class that begins at 6pm Eastern Standard Time for folks with 9-5 jobs.",
        topics: [
            "Introduction to NURBS modeling concepts",
            "Basic Rhino interface and navigation",
            "Creating and editing curves and surfaces",
            "Essential modeling tools and techniques",
            "File management and organization",
            "Advanced surfacing commands"
        ],
        price: "US$595",
        rhinoUrl: "https://www.rhino3d.com/training/4060",
        courseOutline: "https://docs.mcneel.com/rhino/8/training-level1/en-us/Default.htm",
        contact: "kurt@rhino.training",
        contactUrl: "https://rhino.training/contact",
        language: "English",
        maxStudents: 6,
        currentStudents: 0
    },
    {
        id: 12,
        title: "Level I - NURBS Modeling - MWF - Evenings, 8 days",
        date: "2026-03-16",
        endDate: "2026-04-01",
        scheduleDays: [1, 3, 5], // Monday=1, Wednesday=3, Friday=5
        colorClass: "event-purple",
        time: "Monday, Wednesday, Friday / 6pm-9pm EST for 2.5 weeks (March 16 - April 1, 2026)",
        instructor: "Kurt - Authorized Rhino Trainer",
        level: "Beginner",
        format: "Online",
        description: "In this class you'll learn to create and edit accurate free-form 3-D NURBS models. This fast-moving class covers most of Rhino's functionality, including the most advanced surfacing commands. This is a 3-hour evening class that begins at 6pm Eastern Standard Time for folks with 9-5 jobs.",
        topics: [
            "Introduction to NURBS modeling concepts",
            "Basic Rhino interface and navigation",
            "Creating and editing curves and surfaces",
            "Essential modeling tools and techniques",
            "File management and organization",
            "Advanced surfacing commands"
        ],
        price: "US$595",
        rhinoUrl: "https://www.rhino3d.com/training/4084",
        courseOutline: "https://docs.mcneel.com/rhino/8/training-level1/en-us/Default.htm",
        contact: "kurt@rhino.training",
        contactUrl: "https://rhino.training/contact",
        language: "English",
        maxStudents: 6,
        currentStudents: 0
    },
    {
        id: 13,
        title: "Level I - NURBS Modeling - T-TH-S Evenings, 8 days",
        date: "2026-03-17",
        endDate: "2026-04-02",
        scheduleDays: [2, 4, 6], // Tuesday=2, Thursday=4, Saturday=6
        colorClass: "event-lime",
        time: "Tuesday, Thursday, Saturday / 6pm-9pm EST for 2.5 weeks (March 17 - April 2, 2026)",
        instructor: "Kurt - Authorized Rhino Trainer",
        level: "Beginner",
        format: "Online",
        description: "In this class you'll learn to create and edit accurate free-form 3-D NURBS models. This fast-moving class covers most of Rhino's functionality, including the most advanced surfacing commands. This is a 3-hour evening class that begins at 6pm Eastern Standard Time for folks with 9-5 jobs.",
        topics: [
            "Introduction to NURBS modeling concepts",
            "Basic Rhino interface and navigation",
            "Creating and editing curves and surfaces",
            "Essential modeling tools and techniques",
            "File management and organization",
            "Advanced surfacing commands"
        ],
        price: "US$595",
        rhinoUrl: "https://www.rhino3d.com/training/4060",
        courseOutline: "https://docs.mcneel.com/rhino/8/training-level1/en-us/Default.htm",
        contact: "kurt@rhino.training",
        contactUrl: "https://rhino.training/contact",
        language: "English",
        maxStudents: 6,
        currentStudents: 0
    },
    {
        id: 14,
        title: "Level II - Advanced Rhino 3D Modeling - M-W-F Evenings, 8 days",
        date: "2026-04-06",
        endDate: "2026-04-22",
        scheduleDays: [1, 3, 5], // Monday=1, Wednesday=3, Friday=5
        colorClass: "event-cyan",
        time: "Monday, Wednesday, Friday / 6pm-9pm EST for 2.5 weeks (April 6-22, 2026)",
        instructor: "Kurt - Authorized Rhino Trainer",
        level: "Advanced",
        format: "Online",
        description: "In this advanced 8-day class you will learn to take advantage of Rhino's advanced features. You will also learn tips and tricks for making high quality models faster and easier.",
        topics: [
            "Advanced Rhino features and capabilities",
            "Tips and tricks for efficient modeling",
            "High quality model creation techniques",
            "Advanced workflow optimization",
            "Professional modeling strategies",
            "Complex surface modeling"
        ],
        price: "US$595",
        rhinoUrl: "https://www.rhino3d.com/training/4085",
        courseOutline: "https://docs.mcneel.com/rhino/8/training-level2/en-us/Default.htm",
        contact: "kurt@rhino.training",
        contactUrl: "https://rhino.training/contact",
        language: "English",
        maxStudents: 6,
        currentStudents: 0
    },
    {
        id: 15,
        title: "Level II - Advanced Rhino 3D Modeling - T-TH-S Evenings, 8 days",
        date: "2026-04-07",
        endDate: "2026-04-23",
        scheduleDays: [2, 4, 6], // Tuesday=2, Thursday=4, Saturday=6
        colorClass: "event-orange",
        time: "Tuesday, Thursday, Saturday / 6pm-9pm EST for 2.5 weeks (April 7-23, 2026)",
        instructor: "Kurt - Authorized Rhino Trainer",
        level: "Advanced",
        format: "Online",
        description: "In this advanced 8-day class you will learn to take advantage of Rhino's advanced features. You will also learn tips and tricks for making high quality models faster and easier.",
        topics: [
            "Advanced Rhino features and capabilities",
            "Tips and tricks for efficient modeling",
            "High quality model creation techniques",
            "Advanced workflow optimization",
            "Professional modeling strategies",
            "Complex surface modeling"
        ],
        price: "US$595",
        rhinoUrl: "https://www.rhino3d.com/training/4038",
        courseOutline: "https://docs.mcneel.com/rhino/8/training-level2/en-us/Default.htm",
        contact: "kurt@rhino.training",
        contactUrl: "https://rhino.training/contact",
        language: "English",
        maxStudents: 6,
        currentStudents: 0
    }
];

// Calendar State - Always load current month
const now = new Date();
let currentMonth = now.getMonth(); // Current month (0-based)
let currentYear = now.getFullYear();

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
        // Calendar will stay on current month automatically
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
        
        // Debug for January 2026
        if (currentYear === 2026 && currentMonth === 0) {
            console.log(`🔍 Checking ${dateString} for events...`);
        }
        
        const eventsOnThisDay = trainingEvents.filter(event => {
            // Parse dates consistently to avoid timezone issues
            const [startYear, startMonth, startDay] = event.date.split('-').map(Number);
            const [endYear, endMonth, endDay] = (event.endDate || event.date).split('-').map(Number);
            const eventStart = new Date(startYear, startMonth - 1, startDay);
            const eventEnd = new Date(endYear, endMonth - 1, endDay);
            const currentDate = new Date(currentYear, currentMonth, day);
            
            // Check if current date falls within the event period
            if (currentDate < eventStart || currentDate > eventEnd) {
                return false;
            }
            
            // If event has scheduleDays (specific days of week), check if current day matches
            if (event.scheduleDays && event.scheduleDays.length > 0) {
                const dayOfWeek = currentDate.getDay(); // 0=Sunday, 1=Monday, ..., 6=Saturday
                return event.scheduleDays.includes(dayOfWeek);
            }
            
            // For events without scheduleDays (daily events), include all days in range
            return true;
        });

        if (eventsOnThisDay.length > 0) {
            console.log(`🎯 Found ${eventsOnThisDay.length} event(s) on ${dateString}:`, eventsOnThisDay.map(e => e.title));
            dayElement.classList.add('has-event');
            
            // Add color class for the primary event (first event if multiple)
            if (eventsOnThisDay[0].colorClass) {
                dayElement.classList.add(eventsOnThisDay[0].colorClass);
            }
            
            // Check if this is the start date of an event
            const isStartDate = eventsOnThisDay.some(event => {
                const [startYear, startMonth, startDay] = event.date.split('-').map(Number);
                const eventStartDate = new Date(startYear, startMonth - 1, startDay);
                const currentDateCheck = new Date(currentYear, currentMonth, day);
                return eventStartDate.getTime() === currentDateCheck.getTime();
            });
            
            if (isStartDate) {
                console.log(`🔴 ${dateString} is a start date`);
                dayElement.innerHTML = `
                    ${day}
                    <div class="event-dot ${eventsOnThisDay[0].colorClass || ''}"></div>
                `;
            } else {
                console.log(`📏 ${dateString} is a continuation date`);
                // For continuation days, add a different indicator
                dayElement.innerHTML = `
                    ${day}
                    <div class="event-continuation ${eventsOnThisDay[0].colorClass || ''}"></div>
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
        // Force event day styling while preserving color classes
        day.style.setProperty('font-weight', 'bold', 'important');
        day.style.setProperty('position', 'relative', 'important');
        
        // Apply color-specific styling
        if (day.classList.contains('event-red')) {
            day.style.setProperty('background-color', 'rgba(231, 76, 60, 0.15)', 'important');
            day.style.setProperty('border', '2px solid #e74c3c', 'important');
        } else if (day.classList.contains('event-blue')) {
            day.style.setProperty('background-color', 'rgba(52, 152, 219, 0.15)', 'important');
            day.style.setProperty('border', '2px solid #3498db', 'important');
        } else if (day.classList.contains('event-green')) {
            day.style.setProperty('background-color', 'rgba(46, 204, 113, 0.15)', 'important');
            day.style.setProperty('border', '2px solid #2ecc71', 'important');
        } else if (day.classList.contains('event-purple')) {
            day.style.setProperty('background-color', 'rgba(155, 89, 182, 0.15)', 'important');
            day.style.setProperty('border', '2px solid #9b59b6', 'important');
        } else if (day.classList.contains('event-cyan')) {
            day.style.setProperty('background-color', 'rgba(0, 188, 212, 0.15)', 'important');
            day.style.setProperty('border', '2px solid #00bcd4', 'important');
        } else if (day.classList.contains('event-orange')) {
            day.style.setProperty('background-color', 'rgba(255, 152, 0, 0.15)', 'important');
            day.style.setProperty('border', '2px solid #ff9800', 'important');
        } else if (day.classList.contains('event-lime')) {
            day.style.setProperty('background-color', 'rgba(50, 205, 50, 0.15)', 'important');
            day.style.setProperty('border', '2px solid #32cd32', 'important');
        }
        
        // Check if we're in cypherpunk theme and apply different colors
        if (document.body.classList.contains('cypherpunk-theme')) {
            if (day.classList.contains('event-red')) {
                day.style.setProperty('background-color', 'rgba(0, 255, 0, 0.15)', 'important');
                day.style.setProperty('border', '2px solid #00ff00', 'important');
            } else if (day.classList.contains('event-blue')) {
                day.style.setProperty('background-color', 'rgba(0, 255, 255, 0.15)', 'important');
                day.style.setProperty('border', '2px solid #00ffff', 'important');
            } else if (day.classList.contains('event-green')) {
                day.style.setProperty('background-color', 'rgba(255, 0, 255, 0.15)', 'important');
                day.style.setProperty('border', '2px solid #FF8080', 'important');
            } else if (day.classList.contains('event-purple')) {
                day.style.setProperty('background-color', 'rgba(255, 255, 0, 0.15)', 'important');
                day.style.setProperty('border', '2px solid #ffff00', 'important');
            } else if (day.classList.contains('event-cyan')) {
                day.style.setProperty('background-color', 'rgba(255, 20, 147, 0.15)', 'important');
                day.style.setProperty('border', '2px solid #ff1493', 'important');
            } else if (day.classList.contains('event-orange')) {
                day.style.setProperty('background-color', 'rgba(255, 255, 255, 0.15)', 'important');
                day.style.setProperty('border', '2px solid #ffffff', 'important');
            } else if (day.classList.contains('event-lime')) {
                day.style.setProperty('background-color', 'rgba(255, 0, 255, 0.15)', 'important');
                day.style.setProperty('border', '2px solid #ff00ff', 'important');
            }
        }
    });
    
    // Ensure dots and bars are visible with correct colors
    const dots = document.querySelectorAll('.event-dot');
    dots.forEach(dot => {
        dot.style.setProperty('display', 'block', 'important');
        dot.style.setProperty('position', 'absolute', 'important');
        dot.style.setProperty('z-index', '10', 'important');
        dot.style.setProperty('top', '4px', 'important');
        dot.style.setProperty('right', '4px', 'important');
        dot.style.setProperty('width', '8px', 'important');
        dot.style.setProperty('height', '8px', 'important');
        dot.style.setProperty('border-radius', '50%', 'important');
        
        // Apply color based on class
        if (dot.classList.contains('event-red')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#00ff00' : '#e74c3c';
            dot.style.setProperty('background-color', color, 'important');
        } else if (dot.classList.contains('event-blue')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#00ffff' : '#3498db';
            dot.style.setProperty('background-color', color, 'important');
        } else if (dot.classList.contains('event-green')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#FF8080' : '#2ecc71';
            dot.style.setProperty('background-color', color, 'important');
        } else if (dot.classList.contains('event-purple')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#ffff00' : '#9b59b6';
            dot.style.setProperty('background-color', color, 'important');
        } else if (dot.classList.contains('event-cyan')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#ff1493' : '#00bcd4';
            dot.style.setProperty('background-color', color, 'important');
        } else if (dot.classList.contains('event-orange')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#ffffff' : '#ff9800';
            dot.style.setProperty('background-color', color, 'important');
        } else if (dot.classList.contains('event-lime')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#ff00ff' : '#32cd32';
            dot.style.setProperty('background-color', color, 'important');
        }
    });
    
    const bars = document.querySelectorAll('.event-continuation');
    bars.forEach(bar => {
        bar.style.setProperty('display', 'block', 'important');
        bar.style.setProperty('position', 'absolute', 'important');
        bar.style.setProperty('z-index', '10', 'important');
        bar.style.setProperty('top', '4px', 'important');
        bar.style.setProperty('right', '4px', 'important');
        bar.style.setProperty('width', '12px', 'important');
        bar.style.setProperty('height', '3px', 'important');
        bar.style.setProperty('border-radius', '1px', 'important');
        
        // Apply color based on class
        if (bar.classList.contains('event-red')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#00ff00' : '#e74c3c';
            bar.style.setProperty('background-color', color, 'important');
        } else if (bar.classList.contains('event-blue')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#00ffff' : '#3498db';
            bar.style.setProperty('background-color', color, 'important');
        } else if (bar.classList.contains('event-green')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#FF8080' : '#2ecc71';
            bar.style.setProperty('background-color', color, 'important');
        } else if (bar.classList.contains('event-purple')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#ffff00' : '#9b59b6';
            bar.style.setProperty('background-color', color, 'important');
        } else if (bar.classList.contains('event-cyan')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#ff1493' : '#00bcd4';
            bar.style.setProperty('background-color', color, 'important');
        } else if (bar.classList.contains('event-orange')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#ffffff' : '#ff9800';
            bar.style.setProperty('background-color', color, 'important');
        } else if (bar.classList.contains('event-lime')) {
            const color = document.body.classList.contains('cypherpunk-theme') ? '#ff00ff' : '#32cd32';
            bar.style.setProperty('background-color', color, 'important');
        }
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
                        <button class="btn btn-signup" onclick="openSignupForm('${event.id}', '${event.title}', '${event.time}', '${event.price}')">
                            Sign Up for This Class
                        </button>
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