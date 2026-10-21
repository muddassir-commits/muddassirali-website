export function initNav() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const line1 = document.getElementById('hamburger-line1');
  const line2 = document.getElementById('hamburger-line2');
  const line3 = document.getElementById('hamburger-line3');

  if (!navbar) return;

  // Track scroll position to toggle border and frosted background
  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('nav-scrolled');
    } else {
      navbar.classList.remove('nav-scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial check

  // Mobile menu interaction
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      const isActive = mobileMenu.classList.toggle('active');

      if (isActive) {
        line1.style.transform = 'translateY(8px) rotate(45deg)';
        line2.style.opacity = '0';
        line3.style.transform = 'translateY(-8px) rotate(-45deg)';
        document.body.style.overflow = 'hidden';
      } else {
        line1.style.transform = 'none';
        line2.style.opacity = '1';
        line3.style.transform = 'none';
        document.body.style.overflow = '';
      }
    });

    const mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link');
    mobileLinks.forEach((link) => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        line1.style.transform = 'none';
        line2.style.opacity = '1';
        line3.style.transform = 'none';
        document.body.style.overflow = '';
      });
    });
  }

  // Highlight active link based on current path
  const currentPath = (window.location.pathname || '/').toLowerCase();
  const isHome = currentPath === '/' || 
                 currentPath.endsWith('/index.html') || 
                 currentPath === '/index.html' || 
                 currentPath === '';

  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#')) return;

    const linkIsHome = href === '/' || href === 'index.html' || href === '/index.html';

    const normalizedHref = href.replace(/^\//, '').replace(/\.html$/, '').replace(/\/$/, '');
    const normalizedPath = currentPath.replace(/^\//, '').replace(/\.html$/, '').replace(/\/$/, '');

    const isMatch = (isHome && linkIsHome) || 
                    (!isHome && !linkIsHome && normalizedPath === normalizedHref);

    if (isMatch) {
      link.classList.add('active-nav-link', 'text-blue-600', 'font-semibold');
      link.classList.remove('text-slate-600');
    } else {
      link.classList.remove('active-nav-link', 'text-blue-600', 'font-semibold');
      if (!link.classList.contains('btn') && !link.classList.contains('mobile-nav-link')) {
        link.classList.add('text-slate-600');
      }
    }
  });
}
