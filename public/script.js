document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio Loaded Successfully!");
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation to resume download
    const resumeBtn = document.querySelector('.btn');
    if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
            resumeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Downloading...';
            setTimeout(() => {
                resumeBtn.innerHTML = '<i class="fas fa-download"></i> Download My Resume';
            }, 2000);
        });
    }
});
