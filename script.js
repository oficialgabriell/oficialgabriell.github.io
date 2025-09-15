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

   document.addEventListener("DOMContentLoaded", () => {
    const skillTexts = {
    html: "HTML é a base da web. Permite estruturar conteúdos e definir semântica, essencial para acessibilidade e SEO.",
    css: "CSS dá estilo e identidade às interfaces. Impacta diretamente na experiência do usuário e na usabilidade.",
    js: "JavaScript traz interatividade e dinamismo. É fundamental para criar aplicações web responsivas e funcionais.",
    react: "React é uma biblioteca poderosa para construir interfaces modernas e escaláveis, valorizada em times ágeis.",
    sheets: "Google Sheets, aliado ao App Script, permite automações e integrações rápidas, útil em processos de dados.",
    git: "Git/GitHub garantem versionamento, colaboração e rastreabilidade no desenvolvimento em equipe."
  };

  const skills = document.querySelectorAll(".skill");
  const skillInfo = document.getElementById("skill-info");

  skills.forEach(skill => {
    skill.addEventListener("click", () => {
      const key = skill.dataset.skill;
      skillInfo.innerHTML = `<p><strong>${skill.textContent}:</strong> ${skillTexts[key]}</p>`;
    });
  });
});






});





