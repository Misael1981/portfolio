/*============== Toggle Style Switcher =============*/
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener('click', () => {
    document.querySelector('.style-switcher').classList.toggle("open");
})
/*========== Hide Style Switcher on Scroll ==========*/
window.addEventListener("scroll", () => {
    if(document.querySelector('.style-switcher').classList.contains("open")) {
        document.querySelector('.style-switcher').classList.remove("open");
    }
})
/*============== Theme Colors =============*/
const alternateStyles = document.querySelectorAll(".alternate-style");

function setActiveStyle(color) {
  alternateStyles.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });

  // Verificar se todas as cores, exceto a color-1, estão desabilitadas
  const allOtherColorsDisabled = [...alternateStyles].slice(1).every(style => style.disabled);

  // Se todas as outras cores estiverem desabilitadas, habilitar a color-1
  if (allOtherColorsDisabled) {
    alternateStyles[0].removeAttribute("disabled");
  }
}
/*============= Theme Light and Dark Mode ============*/
const dayNight = document.querySelector(".day-night");

dayNight.addEventListener('click', () => {
  dayNight.querySelector("i").classList.toggle("fa-sun");
  dayNight.querySelector("i").classList.toggle("fa-moon");
  document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
  // Check local storage for preferred mode (optional)
  const preferredMode = localStorage.getItem('preferred-mode');
  if (preferredMode) {
    document.body.classList.add(preferredMode);
    dayNight.querySelector("i").classList.add(preferredMode === 'dark' ? 'fa-sun' : 'fa-moon');
  } else {
    // Start in dark mode by default
    document.body.classList.add('dark');
    dayNight.querySelector("i").classList.add("fa-sun");
  }
});

