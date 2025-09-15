// Scroll suave já implementado pelo CSS, mas podemos adicionar animações simples
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.style.opacity = 0;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.style.transition = "opacity 1s, transform 0.8s";
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => {
    card.style.transform = "translateY(30px)";
    observer.observe(card);
  });
  
  particlesJS("particles-js", {
  particles: {
    number: { value: 180 },
    color: { value: "#00b4d8" },
    size: { 
      value: 2, // tamanho das partículas
      random: true // define se o tamanho será aleatório
    },
    line_linked: {
      enable: true,
      color: "#00b4d8"
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: false, mode: "push" }
    }
  },
  retina_detect: true
});


});






