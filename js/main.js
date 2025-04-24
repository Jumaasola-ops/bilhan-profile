// Service Data
const services = [
    {
        title: "OHSE Training & ISO Certification",
        image: "images/services/iso-certification.jpg",
        description: "Comprehensive workplace training programs including ISO 14001, 9001, and 45001 certification. We ensure compliance and help build a strong safety culture in your organization.",
        duration: "40 hr",
        price: "Contact for Quote",
        category: "Certification",
        details: [
            "ISO 14001 Environmental Management",
            "ISO 9001 Quality Management",
            "ISO 45001 Safety Standards",
            "Safety Culture Development",
            "Compliance Training"
        ]
    },
    {
        title: "Environmental & Social Impact Assessment",
        image: "images/services/environmental-assessment.jpg",
        description: "Expert ESIA services and compliance audits for evaluating environmental and social risks across industries, with specialized focus on mining operations and industrial projects.",
        duration: "4-8 weeks",
        price: "Contact for Quote",
        category: "Environmental",
        details: [
            "Environmental Impact Assessment",
            "Social Risk Evaluation",
            "Mining Sector Expertise",
            "Industrial Compliance Audits",
            "Stakeholder Engagement"
        ]
    },
    {
        title: "OHSE Compliance & Strategy",
        image: "images/services/ohse-compliance.jpg",
        description: "Comprehensive OHSE regulatory compliance through detailed audits, strategic planning, and effective policy development for safer work environments.",
        duration: "2-4 weeks",
        price: "Contact for Quote",
        category: "Compliance",
        details: [
            "Regulatory Compliance Audits",
            "Strategy Development",
            "Policy Implementation",
            "Risk Assessment",
            "Safety Management Systems"
        ]
    },
    {
        title: "Legal Standards & Compliance",
        image: "images/services/legal-compliance.jpg",
        description: "Development of robust regulatory frameworks, comprehensive legal audits, and compliance gap analysis to enhance workplace safety and environmental standards.",
        duration: "2-3 weeks",
        price: "Contact for Quote",
        category: "Legal",
        details: [
            "Regulatory Framework Development",
            "Legal Compliance Audits",
            "Gap Analysis",
            "Standards Implementation",
            "Compliance Monitoring"
        ]
    },
    {
        title: "Behavioral Safety Change Management",
        image: "images/services/behavioral-safety.jpg",
        description: "Implementation of behavior-based safety programs to improve workplace compliance and risk management through cultural transformation and employee engagement.",
        duration: "12-16 weeks",
        price: "Contact for Quote",
        category: "Safety",
        details: [
            "Behavior Analysis",
            "Cultural Transformation",
            "Risk Management",
            "Employee Engagement",
            "Performance Monitoring"
        ]
    },
    {
        title: "Climate & Environmental Consultancy",
        image: "images/services/climate-consultancy.jpg",
        description: "Expert guidance on sustainability practices, climate resilience strategies, and environmental best practices for organizations committed to environmental responsibility.",
        duration: "Ongoing",
        price: "Contact for Quote",
        category: "Environmental",
        details: [
            "Sustainability Planning",
            "Climate Resilience Strategies",
            "Environmental Best Practices",
            "Carbon Footprint Analysis",
            "Environmental Management"
        ]
    },
    {
        title: "ISO Systems Audit & Procedures",
        image: "images/services/iso-audit.jpg",
        description: "Professional ISO compliance audits and development of structured workplace procedures for improved operational efficiency and safety compliance.",
        duration: "2-3 weeks",
        price: "Contact for Quote",
        category: "Certification",
        details: [
            "ISO Compliance Audits",
            "Procedure Development",
            "Efficiency Optimization",
            "Quality Assurance",
            "Documentation Systems"
        ]
    },
    {
        title: "Mining Operations Safety",
        image: "images/services/mining-safety.jpg",
        description: "Implementation of comprehensive health, safety, and environmental best practices in mine sites, including safety programs and compliance audits.",
        duration: "Ongoing",
        price: "Contact for Quote",
        category: "Mining",
        details: [
            "Mine Site Safety",
            "Risk Assessment",
            "Training Programs",
            "Compliance Audits",
            "Emergency Procedures"
        ]
    },
    {
        title: "Mine Planning & Rehabilitation",
        image: "images/services/mine-rehab.jpg",
        description: "Development of sustainable mine planning strategies and comprehensive rehabilitation plans for effective post-mining site management and ecological restoration.",
        duration: "3-6 months",
        price: "Contact for Quote",
        category: "Mining",
        details: [
            "Sustainable Planning",
            "Site Rehabilitation",
            "Ecological Restoration",
            "Post-Mining Management",
            "Environmental Monitoring"
        ]
    },
    {
        title: "Safety Curriculum Development",
        image: "images/services/curriculum-dev.jpg",
        description: "Design of comprehensive OHS and road safety training programs, emphasizing life-saving measures, accident prevention, and professional development.",
        duration: "4-6 weeks",
        price: "Contact for Quote",
        category: "Road Safety",
        details: [
            "OHS Program Design",
            "Road Safety Training",
            "Accident Prevention",
            "Professional Development",
            "Training Materials"
        ]
    }
];

// Booking Modal Functionality
function createBookingModal() {
    const modalHTML = `
        <div class="modal-overlay" id="bookingModal">
            <div class="modal">
                <span class="modal-close">&times;</span>
                <h2>Book Training Session</h2>
                <div class="modal-content">
                    <form id="bookingForm" class="booking-form">
                        <input type="hidden" id="courseTitle" name="courseTitle">
                        <div class="form-group">
                            <input type="text" name="name" placeholder="Your Full Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" placeholder="Email Address" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" name="phone" placeholder="Phone Number" required>
                        </div>
                        <div class="form-group">
                            <select name="participants" required>
                                <option value="">Number of Participants</option>
                                <option value="1">1 Person</option>
                                <option value="2-5">2-5 People</option>
                                <option value="6-10">6-10 People</option>
                                <option value="10+">More than 10</option>
                            </select>
                        </div>
                        <div class="available-dates">
                            <!-- Dates will be dynamically populated -->
                        </div>
                        <div class="form-group">
                            <textarea name="message" placeholder="Additional Notes" rows="3"></textarea>
                        </div>
                        <button type="submit" class="cta-button">Confirm Booking</button>
                    </form>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Initialize Booking System
function initializeBookingSystem() {
    createBookingModal();
    const modal = document.getElementById('bookingModal');
    const closeBtn = modal.querySelector('.modal-close');
    
    // Handle booking button clicks
    document.addEventListener('click', function(e) {
        if (e.target && e.target.classList.contains('book-button')) {
            const card = e.target.closest('.service-card');
            if (card) {
                const courseTitle = card.querySelector('h3').textContent;
                document.getElementById('courseTitle').value = courseTitle;
                openModal();
            }
        }
    });

    // Close modal when clicking close button or outside
    closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Handle booking form submission
    document.getElementById('bookingForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const bookingData = Object.fromEntries(formData.entries());

        // Format message for WhatsApp
        const whatsappMessage = `*New Training Booking Request*
Course: ${bookingData.courseTitle}
Name: ${bookingData.name}
Email: ${bookingData.email}
Phone: ${bookingData.phone}
Participants: ${bookingData.participants}
Message: ${bookingData.message}`;

        // Open WhatsApp with formatted message
        const whatsappUrl = `https://wa.me/254720930217?text=${encodeURIComponent(whatsappMessage)}`;
        window.open(whatsappUrl, '_blank');

        // Send confirmation email
        const mailtoUrl = `mailto:brokasoja@gmail.com?subject=Training Booking - ${bookingData.courseTitle}&body=${encodeURIComponent(whatsappMessage)}`;
        window.location.href = mailtoUrl;

        // Close modal and show success message
        closeModal();
        alert('Thank you for your booking! We will contact you shortly to confirm your session.');
    });
}

function openModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    populateAvailableDates();
}

function closeModal() {
    const modal = document.getElementById('bookingModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('bookingForm').reset();
}

function populateAvailableDates() {
    const datesContainer = document.querySelector('.available-dates');
    const dates = generateNextAvailableDates(5); // Generate next 5 available dates
    
    datesContainer.innerHTML = '<h4>Available Dates</h4>';
    dates.forEach(date => {
        const dateOption = document.createElement('div');
        dateOption.className = 'date-option';
        dateOption.textContent = date;
        dateOption.onclick = function() {
            document.querySelectorAll('.date-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        };
        datesContainer.appendChild(dateOption);
    });
}

function generateNextAvailableDates(count) {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= count; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);
        if (date.getDay() !== 0) { // Exclude Sundays
            dates.push(date.toLocaleDateString('en-GB', { 
                weekday: 'short', 
                day: '2-digit', 
                month: 'short' 
            }));
        }
    }
    return dates;
}

// Lazy Loading Implementation
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('lazy-image');
                
                img.onload = () => {
                    img.classList.add('loaded');
                    observer.unobserve(img);
                };
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    images.forEach(img => imageObserver.observe(img));
}

// Touch Gestures for Gallery
function initGallerySwipe() {
    const gallery = document.querySelector('.gallery-grid');
    if (!gallery) return;

    let touchStartX = 0;
    let touchEndX = 0;
    let currentIndex = 0;
    const items = gallery.querySelectorAll('.gallery-item');
    
    gallery.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    gallery.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && currentIndex < items.length - 1) {
                // Swipe left
                currentIndex++;
            } else if (diff < 0 && currentIndex > 0) {
                // Swipe right
                currentIndex--;
            }
            scrollToItem(currentIndex);
        }
    }

    function scrollToItem(index) {
        items[index].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
    }
}

// Performance Optimizations
function optimizePerformance() {
    // Debounce scroll handler
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) {
            window.cancelAnimationFrame(scrollTimeout);
        }
        scrollTimeout = window.requestAnimationFrame(() => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
            lastScroll = currentScroll;
        });
    }, { passive: true });

    // Optimize animations for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        document.documentElement.style.scrollBehavior = 'auto';
    }
}

// Loading States for Dynamic Content
function showLoading(element) {
    const spinner = document.createElement('div');
    spinner.className = 'loading-spinner';
    element.appendChild(spinner);
}

function hideLoading(element) {
    const spinner = element.querySelector('.loading-spinner');
    if (spinner) spinner.remove();
}

// Enhanced Service Card Population
function populateServices() {
    const servicesGrid = document.querySelector('.services-grid');
    if (!servicesGrid) return;

    showLoading(servicesGrid);

    const fragment = document.createDocumentFragment();
    services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        
        // Create image placeholder
        const imgPlaceholder = document.createElement('div');
        imgPlaceholder.className = 'image-placeholder';
        
        const img = document.createElement('img');
        img.dataset.src = service.image;
        img.alt = service.title;
        imgPlaceholder.appendChild(img);

        serviceCard.innerHTML = `
            ${imgPlaceholder.outerHTML}
            <div class="service-category">${service.category}</div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
            <div class="service-details">
                <span class="duration"><i class="fas fa-clock"></i> ${service.duration}</span>
                <span class="price">${service.price}</span>
            </div>
            <ul class="details-list">
                ${service.details.map(detail => `
                    <span><i class="fas fa-check"></i> ${detail}</span>
                `).join('')}
            </ul>
            <button class="cta-button book-button">Book Now</button>
        `;
        fragment.appendChild(serviceCard);
    });

    servicesGrid.innerHTML = '';
    servicesGrid.appendChild(fragment);
    hideLoading(servicesGrid);
    lazyLoadImages();
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateServices();
    initializeBookingSystem();
    
    // Initialize filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            filterServices(category);
        });
    });

    lazyLoadImages();
    initGallerySwipe();
    optimizePerformance();
    
    // Initialize loading states for dynamic content
    const dynamicSections = document.querySelectorAll('.services-grid, .gallery-grid');
    dynamicSections.forEach(section => {
        if (section.children.length === 0) {
            showLoading(section);
        }
    });
});

// Handle Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const message = this.querySelector('textarea').value;
    
    // Format message for WhatsApp
    const whatsappMessage = `Hello! I'm interested in BilahnIRS services.\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`;
    const whatsappUrl = `https://wa.me/254720930217?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Send email using mailto
    const mailtoUrl = `mailto:brokasoja@gmail.com?subject=BilahnIRS%20Inquiry&body=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = mailtoUrl;
    
    // Reset form
    this.reset();
});

// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Prevent body scroll when menu is open
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navLinks.classList.contains('active') && 
        !e.target.closest('.nav-links') && 
        !e.target.closest('.mobile-menu')) {
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Close mobile menu when clicking a link
navLinks.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
        navLinks.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 768) {
                navLinks.style.display = 'none';
            }
        }
    });
});

// Header Scroll Effect
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    if (currentScroll === 0) {
        header.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        header.style.background = '#ffffff';
    }
    
    lastScroll = currentScroll;
});

// Category Filter Functionality
function filterServices(category) {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        if (category === 'all' || card.querySelector('.service-category').textContent === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}