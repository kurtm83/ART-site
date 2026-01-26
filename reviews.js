// Reviews management and carousel functionality using Firebase

// Add a new review to Firebase
async function addReview(reviewData) {
    try {
        const newReview = {
            name: reviewData.name,
            organization: reviewData.organization || null,
            review: reviewData.review,
            email: reviewData.email, // Stored but not displayed
            date: firebase.firestore.FieldValue.serverTimestamp(),
            approved: true // Auto-approve for now
        };
        
        const docRef = await db.collection('reviews').add(newReview);
        console.log('✅ Review added to Firebase:', docRef.id);
        return { id: docRef.id, ...newReview, date: new Date().toISOString() };
    } catch (error) {
        console.error('❌ Error adding review to Firebase:', error);
        throw error;
    }
}

// Get all approved reviews from Firebase
async function getReviews() {
    try {
        const snapshot = await db.collection('reviews')
            .where('approved', '==', true)
            .get();
        
        const reviews = [];
        snapshot.forEach(doc => {
            const data = doc.data();
            reviews.push({
                id: doc.id,
                ...data,
                date: data.date?.toDate?.()?.toISOString() || new Date().toISOString()
            });
        });
        
        // Sort by date in JavaScript instead (avoids needing Firestore index)
        reviews.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        console.log(`✅ Loaded ${reviews.length} reviews from Firebase`);
        return reviews;
    } catch (error) {
        console.error('❌ Error loading reviews from Firebase:', error);
        return [];
    }
}

// Display reviews in carousel
async function displayReviews() {
    const reviewsTrack = document.getElementById('reviews-track');
    const reviewsDots = document.getElementById('reviews-dots');
    
    if (!reviewsTrack) return;

    // Show loading state
    reviewsTrack.innerHTML = `
        <div class="review-card">
            <p class="review-text">Loading reviews...</p>
        </div>
    `;

    const reviews = await getReviews();
    
    if (reviews.length === 0) {
        reviewsTrack.innerHTML = `
            <div class="review-card">
                <p class="review-text">"Coming soon! Be the first to leave a review."</p>
                <div class="review-author">
                    <strong>Rhino.Training</strong>
                </div>
            </div>
        `;
        return;
    }

    reviewsTrack.innerHTML = reviews.map(review => `
        <div class="review-card">
            <p class="review-text">"${escapeHtml(review.review)}"</p>
            <div class="review-author">
                <strong>${escapeHtml(review.name)}</strong>
                ${review.organization ? `<span class="review-org">${escapeHtml(review.organization)}</span>` : ''}
            </div>
            <div class="review-date">${formatDate(review.date)}</div>
        </div>
    `).join('');

    // Create dots for navigation
    if (reviews.length > 1) {
        reviewsDots.innerHTML = reviews.map((_, index) => 
            `<span class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></span>`
        ).join('');
        
        initializeCarousel(reviews.length);
    }
}

// Initialize carousel auto-scroll
function initializeCarousel(totalReviews) {
    let currentIndex = 0;
    const track = document.getElementById('reviews-track');
    const dots = document.querySelectorAll('.carousel-dot');

    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalReviews;
        updateCarousel();
    }

    // Auto-scroll every 6 seconds
    const intervalId = setInterval(nextSlide, 6000);

    // Manual navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            currentIndex = parseInt(dot.dataset.index);
            updateCarousel();
        });
    });
}

// Handle review form submission
if (document.getElementById('review-submission-form')) {
    document.getElementById('review-submission-form').addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;
        
        const formData = {
            name: document.getElementById('reviewer-name').value,
            organization: document.getElementById('reviewer-org').value,
            email: document.getElementById('reviewer-email').value,
            review: document.getElementById('review-text').value
        };

        try {
            await addReview(formData);
            
            // Show success message
            document.getElementById('success-message').style.display = 'block';
            this.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                document.getElementById('success-message').style.display = 'none';
            }, 5000);
        } catch (error) {
            alert('Error submitting review. Please try again or contact us directly.');
            console.error(error);
        } finally {
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });
}

// Helper functions
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long' };
    return date.toLocaleDateString('en-US', options);
}

// Initialize reviews on page load
if (document.getElementById('reviews-track')) {
    document.addEventListener('DOMContentLoaded', function() {
        displayReviews();
    });
}
