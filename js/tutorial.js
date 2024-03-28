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

var menu = document.querySelector('nav ul')
var menuIcon = document.querySelector('.menu-icon');

function abrirMenu(){
    menu.classList.toggle('open')
}


let listVideo = document.querySelectorAll('.video-list .vid');
let mainVideo = document.querySelector('.main-video video');
let title = document.querySelector('.main-video .title');

listVideo.forEach(video =>{
    video.onclick = () =>{
    listVideo.forEach(vid =>vid.classList.remove('active'));
    video.classList.add('active')
    if(video.classList.contains('active')){
        let src = video.children[0].getAttribute('src');
        mainVideo.src = src;
        let text = video.children[1].innerHTML;
        title.innerHTML = text;
    };
    };
});