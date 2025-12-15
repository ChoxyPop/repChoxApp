const navButtons = document.querySelectorAll('[data-page]');
const content = document.getElementById('content');

function loadPage(page) {
  fetch(page)
    .then(res => res.text())
    .then(html => {
      content.innerHTML = html;
    });
}

// cargar sección inicial
loadPage('secciones/inicio.html');
document.querySelector('[data-page="secciones/inicio.html"]').click();


navButtons.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();

    // quitar indicador anterior
    navButtons.forEach(b => {
      b.classList.remove('text-sky-600');
      const ind = b.querySelector('.nav-indicator');
      if (ind) ind.remove();
    });

    // activar actual
    btn.classList.add('text-sky-600');

    const indicator = document.createElement('div');
    indicator.className =
      'nav-indicator absolute top-0 w-2 h-3 sm:h-full sm:left-0 sm:-ml-1 bg-sky-600 rounded';
    btn.appendChild(indicator);

    loadPage(btn.dataset.page);
  });
});