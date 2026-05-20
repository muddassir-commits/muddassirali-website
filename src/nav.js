export function initNav() {
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const line1 = document.getElementById('hamburger-line1');
  const line2 = document.getElementById('hamburger-line2');
  const line3 = document.getElementById('hamburger-line3');

  if (!navbar) return;

  // Track scroll position to toggle border
  const handleScroll = () => {
    if (window.scrollY > 80) {
      navbar.classList.add('nav-scrolled');
      navbar.style.borderBottom = '1px solid var(--color-border-mid)';
    } else {
      navbar.classList.remove('nav-scrolled');
      navbar.style.borderBottom = '1px solid transparent';
    }
  };
  window.addEventListener('scroll', handleScroll);
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
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const isHome = currentPath === '/' || currentPath.endsWith('index.html');
    const linkIsHome = href === '/' || href === 'index.html';

    const normalizedHref = href.replace(/^\//, '').replace('.html', '');
    const normalizedPath = currentPath.replace(/^\//, '').replace('.html', '');

    const isMatch = (isHome && linkIsHome) || 
                    (!isHome && !linkIsHome && normalizedPath.startsWith(normalizedHref) && normalizedHref !== '');

    if (isMatch) {
      link.classList.add('text-accent');
      link.style.color = 'var(--color-accent)';
      if (link.classList.contains('nav-link')) {
        link.style.borderBottom = '1px solid var(--color-accent)';
      }
    } else {
      link.classList.remove('text-accent');
      link.style.color = '';
      if (link.classList.contains('nav-link')) {
        link.style.borderBottom = '1px solid transparent';
      }
    }
  });
}
