

const toggleBtn = document.querySelector('.btn-toggle');
const body = document.body;
const logo = document.getElementById('logo-sudoku');
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');


body.classList.remove('oscuro');
body.classList.add('claro');

if (logo) {
  logo.src = "imagenes/LogoFC.png";
}

if (toggleBtn) {
 
  toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
}


if (menuToggle && sidebar) {
  menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
  });
}


if (toggleBtn) {
  toggleBtn.addEventListener('click', () => {
    if (body.classList.contains('oscuro')) {
      
      body.classList.remove('oscuro');
      body.classList.add('claro');
      if (logo) logo.src = "imagenes/LogoFC.png";
      toggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
     
      body.classList.remove('claro');
      body.classList.add('oscuro');
      if (logo) logo.src = "imagenes/LogoFO.png";
      toggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
  });
}
