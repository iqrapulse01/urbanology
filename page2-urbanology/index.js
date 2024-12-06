const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show-items");
      } else {
        entry.target.classList.remove("show-items");
      }
    });
  }, { threshold: 0.5 });
  
  const elementsToAnimate = document.querySelectorAll('.scroll-scale, .scroll-bottom, .scroll-top');
  elementsToAnimate.forEach((el) => observer.observe(el));
  