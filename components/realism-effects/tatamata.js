document.addEventListener('DOMContentLoaded', function() {
//     const toc = document.getElementById('table-of-contents');
//     const tocLinks = toc.querySelectorAll('.toc-link');
	const toc = document.getElementById('table-of-contents');
if (toc) {
    const tocLinks = toc.querySelectorAll('.toc-link');
    const newLocation = document.getElementById('new-location');
    const accordionHeader = document.createElement('div');
    accordionHeader.classList.add('accordion-header');
    accordionHeader.innerHTML =
        '<div class="accordion-header-content"><div>Contents: Go directly to...</div><img alt="toc-arrow" src="https://alkpro.ca/wp-content/uploads/2024/10/angle-left-1.png"></div>';
    const accordionContent = document.createElement('div');
    accordionContent.classList.add('accordion-content');
    accordionContent.style.display = 'none';
    tocLinks.forEach(function(link) {
        const clonedLink = link.cloneNode(true);
        accordionContent.appendChild(clonedLink);
    });
    newLocation.appendChild(accordionHeader);
    newLocation.appendChild(accordionContent);
    function closeTOC() {
        accordionContent.style.display = 'none';
    }
    accordionHeader.addEventListener('click', function() {
        const isVisible = accordionContent.style.display === 'block';
        accordionContent.style.display = isVisible ? 'none' : 'block';
    });
    tocLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            closeTOC();
        });
    });
    window.addEventListener('scroll', function() {
        if (accordionContent.style.display === 'block') {
            closeTOC();
        }
    });
    const sections = Array.from(tocLinks).map(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const sectionId = href.substring(1);
            return document.getElementById(sectionId);
        }
        return null;
    }).filter(Boolean);
    function removeActiveClass() {
        tocLinks.forEach(link => link.style.fontWeight = 'normal');
    }
    function updateActiveLink() {
        const scrollPosition = window.scrollY + window.innerHeight * 0.3; // Offset slightly for better experience
        let activeIndex = -1;
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeIndex = index;
            }
        });
        if (activeIndex !== -1) {
            removeActiveClass();
            tocLinks[activeIndex].style.fontWeight = 'bold';
        }
    }
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink();
}
	
});