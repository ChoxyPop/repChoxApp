const navButtons = document.querySelectorAll('[data-page]');
const content = document.getElementById('content');

function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
    });
}

function setActiveButton(activeBtn) {
  navButtons.forEach(btn => {
    btn.classList.remove('text-sky-600');
    const ind = btn.querySelector('.nav-indicator');
    if (ind) ind.remove();
  });

  activeBtn.classList.add('text-sky-600');

  const indicator = document.createElement('div');
  indicator.className =
    'nav-indicator absolute top-0 w-2 h-3 sm:h-full sm:left-0 sm:-ml-1 bg-sky-600 rounded';

  activeBtn.appendChild(indicator);
}

// listeners
navButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    setActiveButton(btn);
    loadPage(btn.dataset.page);
  });
});

// 👉 estado inicial
const homeBtn = document.querySelector('[data-page="secciones/inicio.html"]');
setActiveButton(homeBtn);
loadPage('secciones/inicio.html');