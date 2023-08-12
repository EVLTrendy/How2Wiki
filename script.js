function applyGlowingEffect(link) {
    link.style.color = '#ffaa00'; // Apply the glowing color
    link.style.animation = 'glowing 1s infinite';
    const span = link.querySelector('.SpanPageTitle');
    if (span) {
        span.style.color = '#ffaa00'; // Change the span color
    }
}

function setActiveLink(activeLinkId) {
    const links = document.querySelectorAll('.nav-link');
    
    links.forEach(link => {
        link.classList.remove('active');
        link.style.color = ''; // Reset color and animation
        link.style.animation = '';
        const span = link.querySelector('.SpanPageTitle');
        if (span) {
            span.style.color = ''; // Reset span color
        }
    });
    
    const activeLink = document.querySelector(`#${activeLinkId}`);
    if (activeLink) {
        activeLink.classList.add('active');
        applyGlowingEffect(activeLink); // Apply the glowing effect to the clicked link
        localStorage.setItem('glowingLink', activeLink.id); // Store active link in local storage
    }
}

window.onload = function () {
    const glowingLink = localStorage.getItem('glowingLink');
    if (glowingLink) {
        const linkElement = document.querySelector(`#${glowingLink}`);
        if (linkElement) {
            applyGlowingEffect(linkElement); // Apply the glowing effect to the stored active link
        }
    }
};
