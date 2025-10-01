document.addEventListener('DOMContentLoaded',()=>{
  const links=document.querySelectorAll('nav a');
  const path=location.pathname.split('/').pop()||'index.html';
  links.forEach(a=>{if(a.getAttribute('href')===path)a.classList.add('active')});

  // Smooth scrolling for nav links
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });

  // Back to top button
  const backToTop = document.createElement('button');
  backToTop.textContent = '↑';
  backToTop.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:10px;background:#0b5fa5;color:#fff;border:none;border-radius:50%;cursor:pointer;display:none;z-index:100;';
  document.body.appendChild(backToTop);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'block';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});