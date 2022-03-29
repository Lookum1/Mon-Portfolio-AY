//Menu burger coté css .show-nav
/* Menu mobile */

function menuMobile() {
    const btn = document.querySelector('.burger');
    const header = document.querySelector('.header');
    const links = document.querySelectorAll('.navbar a');
  
    btn.addEventListener('click', () => {
      header.classList.toggle('show-nav');
    });
  
    links.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('show-nav');
      });
    });
  }
  
  menuMobile();
  
// fin menu burger


// menu Compétences
// effets sur les compétences

const observerIntersectionAnimation = () => {
  
    const skills = document.querySelectorAll('.skills .bar');
  
    skills.forEach((elem, index) => {
  
      elem.style.width = "0";
      elem.style.transition = "all 1.6s";
    });

    let skillsObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let elem = entry.target;
          elem.style.width = elem.dataset.width + '%';
        }
      });
    });
  
    skills.forEach(skill => {
      skillsObserver.observe(skill);
    });
  }
  
  observerIntersectionAnimation();
  