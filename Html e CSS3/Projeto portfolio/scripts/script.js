const botao = document.getElementById('botao-tema');
const body = document.body;

// Detecta o modo escuro do navegador
const ModoEscuroDoNavegadorAtivado = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
// Persistência do tema
const temasalvo = localStorage.getItem('tema');
temaEscuro(temasalvo === 'escuro');

// Função para ativar o tema claro
function temaClaroAtivo() {
  // Implemente a lógica para ativar o tema claro
  let MudarCordosBotoes = document.querySelectorAll(".botoes-menu");
    MudarCordosBotoes.forEach(botoes => {
      botoes.style.color = 'white';
    });
}
// Função para ativar o tema escuro
function temaEscuroAtivo() {
  // Implemente a lógica para ativar o tema escuro
  let MudarCordosBotoes = document.querySelectorAll(".botoes-menu");
  MudarCordosBotoes.forEach(botoes => {
    botoes.style.color = 'black';
  });
}
// Aplica o tema escuro se o modo escuro do navegador estiver ativado ao carregar a página
if (ModoEscuroDoNavegadorAtivado) {
  body.classList.add('escuro');
  botao.innerHTML = '<abbr title="Modo Claro"><i class="fa-solid fa-sun botoes-menu" style="color: black;"  onmouseenter="this.style.color=\'yellow\'" onmouseleave="this.style.color=\'black\'"></i></abbr>';
  temaEscuroAtivo();
}
// Função para alternar entre tema claro e escuro
function temaEscuro(tipo) {
  if (tipo == true) {
    body.classList.add('escuro');
    botao.innerHTML = '<abbr title="Modo Claro"><i class="fa-solid fa-sun botoes-menu" style="color: black;"  onmouseenter="this.style.color=\'yellow\'" onmouseleave="this.style.color=\'black\'"></i></abbr>';
    temaEscuroAtivo();
  } else {
    body.classList.remove('escuro');
    botao.innerHTML = '<abbr title="Modo Escuro"><i class="fa-solid fa-moon botoes-menu" style="color: black;"  onmouseenter="this.style.color=\'black\'" onmouseleave="this.style.color=\'white\'"></i></abbr>';
    temaClaroAtivo();
  }
}

botao.addEventListener('click', () => {
  const isescuro = body.classList.toggle('escuro');
  temaEscuro(isescuro);
  localStorage.setItem('tema', isescuro ? 'escuro' : 'claro');
});

// Scroll suave para links de navegação
const navLinks = document.querySelectorAll('#menu ul a.link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const headerHeight = document.querySelector('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight - 20;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});