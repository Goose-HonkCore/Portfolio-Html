// Encrypted footer credit
(function() {
    const _0x3a4e=['innerText','Goose','footer-signature','target','Made\x20By\x20','querySelectorAll','getElementsByTagName','createElement','querySelectorAll','Goose','a','appendChild','querySelector','log','length','indexOf','href','getAttribute','style','https://github.com/Goose-HonkCore'];
    
    // This function will check and restore the footer credit if removed
    function _0x397b(_0x41b9x2,_0x41b9x3){return _0x397b=function(_0x41b9x4,_0x41b9x5){_0x41b9x4=_0x41b9x4-0x1a3;let _0x41b9x6=_0x3a4e[_0x41b9x4];return _0x41b9x6},_0x397b(_0x41b9x2,_0x41b9x3)}
    
    // Check if footer exists with correct credit
    function checkFooterCredit() {
        const footerSignature = document.getElementById('footerSignature');
        if (!footerSignature || footerSignature.textContent.indexOf(_0x3a4e[1]) === -1) {
            restoreFooterCredit();
        }
        
        // Also check for any attempt to hide the credit
        const computedStyle = window.getComputedStyle(footerSignature);
        if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden' || 
            computedStyle.opacity === '0' || parseInt(computedStyle.opacity) === 0) {
            footerSignature.style.display = 'block';
            footerSignature.style.visibility = 'visible';
            footerSignature.style.opacity = '1';
        }
    }
    
    // Restore footer credit if missing
    function restoreFooterCredit() {
        let footer = document.querySelector('footer');
        if (!footer) {
            footer = document.createElement('footer');
            document.body.appendChild(footer);
        }
        
        let footerContent = footer.querySelector('.footer-content');
        if (!footerContent) {
            footerContent = document.createElement('div');
            footerContent.className = 'footer-content';
            footer.appendChild(footerContent);
        }
        
        let copyrightText = footerContent.querySelector('p');
        if (!copyrightText) {
            copyrightText = document.createElement('p');
            copyrightText.textContent = `© ${new Date().getFullYear()} ChangeMeToYourName. All Rights Reserved.`;
            footerContent.appendChild(copyrightText);
        }
        
        let footerSignature = document.getElementById('footerSignature');
        if (!footerSignature) {
            footerSignature = document.createElement('div');
            footerSignature.id = 'footerSignature';
            footerSignature.className = 'footer-signature';
            footerContent.appendChild(footerSignature);
        }
        
        footerSignature.innerHTML = `${_0x3a4e[4]} <a href="${_0x3a4e[19]}" target="_blank">${_0x3a4e[1]}</a>`;
    }
    
    // Print message to console
    function printConsoleMessage() {
        console.log("%c Made By Goose", "color: #6d28d9; font-size: 16px; font-weight: bold;");
        console.log("%c https://github.com/Goose-HonkCore", "color: #94a3b8; font-size: 14px;");
    }
    
    // Run checks periodically
    setInterval(checkFooterCredit, 60000); // Check every minute
    setInterval(printConsoleMessage, 60000); // Print to console every minute
    
    // Initial execution
    document.addEventListener('DOMContentLoaded', function() {
        checkFooterCredit();
        printConsoleMessage();
    });
})();

// Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Create mobile nav if it doesn't exist
            let mobileNav = document.querySelector('.mobile-nav');
            if (!mobileNav) {
                mobileNav = document.createElement('div');
                mobileNav.className = 'mobile-nav';
                document.body.appendChild(mobileNav);
                
                // Clone nav links to mobile nav
                const navLinkClones = navLinks.cloneNode(true);
                mobileNav.appendChild(navLinkClones);
            }
            
            // Toggle mobile nav visibility
            mobileNav.classList.toggle('active');
            
            // Animate hamburger
            hamburger.classList.toggle('active');
            if (hamburger.classList.contains('active')) {
                hamburger.querySelector('.line:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
                hamburger.querySelector('.line:nth-child(2)').style.opacity = '0';
                hamburger.querySelector('.line:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                hamburger.querySelector('.line:nth-child(1)').style.transform = 'none';
                hamburger.querySelector('.line:nth-child(2)').style.opacity = '1';
                hamburger.querySelector('.line:nth-child(3)').style.transform = 'none';
            }
        });
    }
    
    // Close mobile nav when clicking a link
    document.addEventListener('click', function(event) {
        const mobileNav = document.querySelector('.mobile-nav');
        if (mobileNav && mobileNav.classList.contains('active')) {
            if (event.target.tagName === 'A' && mobileNav.contains(event.target)) {
                mobileNav.classList.remove('active');
                
                // Reset hamburger
                if (hamburger.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    hamburger.querySelector('.line:nth-child(1)').style.transform = 'none';
                    hamburger.querySelector('.line:nth-child(2)').style.opacity = '1';
                    hamburger.querySelector('.line:nth-child(3)').style.transform = 'none';
                }
            }
        }
    });
});

// Typewriter Effect
document.addEventListener('DOMContentLoaded', function() {
    const typingText = document.getElementById('typing-text');
    if (!typingText) return;
    
    const roles = [
        "Full Stack Developer",
        "UI/UX Designer",
        "Problem Solver",
        "JavaScript Enthusiast",
        "Web Developer"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    let erasingDelay = 75;
    let newTextDelay = 1000;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = erasingDelay;
        } else {
            typingText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 150;
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            // Pause at the end of writing
            isDeleting = true;
            typingDelay = newTextDelay;
        } else if (isDeleting && charIndex === 0) {
            // Move to next role
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500;
        }
        
        setTimeout(type, typingDelay);
    }
    
    // Start the typewriter effect
    setTimeout(type, newTextDelay);
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Update active nav link
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
                
                // Smooth scroll to target
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});

// Animate skill bars on scroll
document.addEventListener('DOMContentLoaded', function() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const barPosition = bar.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (barPosition < screenPosition) {
                const width = bar.getAttribute('style').match(/width:\s*(\d+)/)[1];
                bar.style.width = `${width}%`;
            } else {
                bar.style.width = '0';
            }
        });
    }
    
    // Initial check
    setTimeout(animateSkillBars, 500);
    
    // Check on scroll
    window.addEventListener('scroll', animateSkillBars);
});

// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Collect form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // This would normally send data to a server
            // For demo purposes, we'll just log it and show a success message
            console.log('Form submitted:', formData);
            
            // Show success message
            const formGroups = contactForm.querySelectorAll('.form-group');
            formGroups.forEach(group => {
                group.style.display = 'none';
            });
            
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.style.display = 'none';
            
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.innerHTML = `
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <button class="btn btn-primary" id="resetForm">Send Another Message</button>
            `;
            
            contactForm.appendChild(successMessage);
            
            // Reset form button
            document.getElementById('resetForm').addEventListener('click', function() {
                contactForm.reset();
                successMessage.remove();
                formGroups.forEach(group => {
                    group.style.display = 'block';
                });
                submitButton.style.display = 'block';
            });
        });
    }
});

// Update active navigation link based on scroll position
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('load', updateActiveLink);
});