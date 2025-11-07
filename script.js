// ===== Menu mobile =====
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav');
hamburger && hamburger.addEventListener('click', ()=>{ nav.classList.toggle('active'); });

// ===== Contadores animados =====
function startCountdown(targetId, targetDate){
    const el = document.getElementById(targetId);
    if(!el) return;

    function updateCountdown(){
        const now = new Date();
        const t = new Date(targetDate) - now;
        if(t <= 0){ el.innerHTML = 'Evento já ocorreu!'; clearInterval(interval); return; }

        const dias = Math.floor(t / (1000*60*60*24));
        const horas = Math.floor((t/(1000*60*60))%24);
        const minutos = Math.floor((t/(1000*60))%60);
        const segundos = Math.floor((t/1000)%60);

        el.innerHTML = `
            <span class="count-num">${dias}</span>d 
            <span class="count-num">${horas}</span>h 
            <span class="count-num">${minutos}</span>m 
            <span class="count-num">${segundos}</span>s
        `;
    }

    updateCountdown();
    const interval = setInterval(updateCountdown,1000);
}

// Inicializa contadores
const hoje = new Date();
startCountdown('countdown', new Date(hoje.getTime() + 370*24*60*60*1000));
startCountdown('countdown-formatura','2026-12-19T00:00:00');

// ===== Financeiro =====
const valG = document.getElementById('valor-gastos');
const valS = document.getElementById('valor-saldo');
const valA = document.getElementById('valor-arrecadado');
const addA = document.getElementById('add-arrecada');
const addG = document.getElementById('add-gasto');
const loginInput = document.getElementById('senha-comissao');
const loginBtn = document.getElementById('btn-login');

function parseMoney(str){ return Number(String(str).replace(/[^0-9,.-]/g,'').replace(',','.'))||0; }
function formatMoney(n){ return 'R$ '+n.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2}); }
function animateValue(el,start,end,duration=500){
    const startTime = performance.now();
    function update(now){
        const elapsed = now-startTime;
        const progress = Math.min(elapsed/duration,1);
        const value = start + (end-start)*progress;
        el.innerText = formatMoney(value);
        if(progress<1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

loginBtn && loginBtn.addEventListener('click', ()=>{
    if(loginInput.value==='12345'){
        document.getElementById('comissao').style.display='block';
        document.getElementById('login-area').style.display='none';
    }else alert('Senha incorreta!');
});

addA && addA.addEventListener('click', ()=>{
    const v=parseFloat(document.getElementById('input-arrecada').value)||0;
    if(v<=0) return alert('Informe um valor válido');
    const curA=parseMoney(valA.innerText);
    animateValue(valA,curA,curA+v);
    atualizarSaldo();
});

addG && addG.addEventListener('click', ()=>{
    const v=parseFloat(document.getElementById('input-gasto').value)||0;
    if(v<=0) return alert('Informe um valor válido');
    const curG=parseMoney(valG.innerText);
    animateValue(valG,curG,curG+v);
    atualizarSaldo();
});

function atualizarSaldo(){
    const a=parseMoney(valA.innerText);
    const g=parseMoney(valG.innerText);
    const curS=parseMoney(valS.innerText);
    animateValue(valS,curS,a-g);
}

// Export CSV
const btnExport = document.getElementById('btn-export-csv');
btnExport && btnExport.addEventListener('click', ()=>{
    const a = valA.innerText.replace('R$ ','');
    const g = valG.innerText.replace('R$ ','');
    const s = valS.innerText.replace('R$ ','');
    const csv = 'Tipo,Valor\nArrecadado,'+a+'\nGastos,'+g+'\nSaldo,'+s+'\n';
    const blob = new Blob([csv],{type:'text/csv;charset=utf-8;'});
    const aLink = document.createElement('a');
    aLink.href = URL.createObjectURL(blob);
    aLink.download = 'balanco_comissao.csv';
    aLink.click();
});

// Lista de alunos
function populateAlunos(){
    const lista = document.getElementById('lista-alunos');
    if(!lista) return;
    const nomes=['GTV','Shay','Kaylla','Regis','Boyceta','Lucao','Renan','Bruna Crente','Helena','Dani','Ureia','Alfredo','Gabriel Souza','Sorriso','Mariana','Miguel','Rayane','Vitor','Luiza'];
    lista.innerHTML='';
    nomes.forEach((n,i)=>{
        const li=document.createElement('li');
        li.innerText=n;
        li.style.opacity=0;
        li.style.transform='translateX(-20px)';
        lista.appendChild(li);
        setTimeout(()=>{
            li.style.transition='opacity 0.5s ease, transform 0.5s ease';
            li.style.opacity=1;
            li.style.transform='translateX(0)';
        }, i*100);
    });
}

// Fade-in on scroll
function initFadeInOnScroll(){
    const items = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.style.transition='opacity 0.8s ease, transform 0.8s ease';
                entry.target.style.opacity=1;
                entry.target.style.transform='translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {threshold:0.1});

    items.forEach(item=>{
        item.style.opacity=0;
        item.style.transform='translateY(20px)';
        observer.observe(item);
    });
}

document.addEventListener('DOMContentLoaded',()=>{
    populateAlunos();
    initFadeInOnScroll();
});
