let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{

    logoSpan.forEach((span, idx)=>{
        setTimeout(()=>{
            span.classList.add('active');
        }, (idx + 1)*400)
    })

    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{

            setTimeout(()=>{
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx+1)*50)
        })
    },2000);

        setTimeout(()=>{
            intro.style.top = '-100vh'; 
        },1800)
    })
})

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

function emailredefinir(){
    Swal.fire('Acesse o link enviado para o seu email para cadastrar nova senha')
}

var menu = document.querySelector('nav ul')
var menuIcon = document.querySelector('.menu-icon');

function abrirMenu(){
    menu.classList.toggle('open')
}
