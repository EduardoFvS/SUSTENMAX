const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
    ? 'bx bx-x'
    : 'bx bx-menu'
}




let boxBuscar = document.querySelector('.buscar-box')
let lupa = document.querySelector('.lupa-buscar')
let btnFechar = document.querySelector('.btn-fechar')

lupa.addEventListener('click', ()=> {
    boxBuscar.classList.add('ativar')
})

btnFechar.addEventListener('click', ()=> {
    boxBuscar.classList.remove('ativar')
})




var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 4){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true
}

window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Altere este valor conforme necessário
        header.classList.add('fixo');
    } else {
        header.classList.remove('fixo');
    }
});


async function criarConta() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const res = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nome, email: email, password: senha })
    });
  
    const data = await res.json();
    if (res.ok) {
    document.getElementById("registerButton").addEventListener("click", login);
      alert("Conta criada com sucesso!");
      window.location.href = "/login.html";
    } else {
      alert("Erro: " + data.error);
    }
  }

  async function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    const res = await fetch("http://localhost:8080/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email, password: senha })
    });
  
    const data = await res.json();
    if (res.ok) {
        document.getElementById("loginButton").addEventListener("click", login);
      alert("Bem-vindo, " + data.name);
      window.location.href = "/produtos/produtos.html";
    } else {
      alert("Erro: " + data.error);
    }
  }
  
