const CONFIG = {
const valG = document.getElementById('valor-gastos');
const valS = document.getElementById('valor-saldo');
const valA = document.getElementById('valor-arrecadado');
const addA = document.getElementById('add-arrecada');
const addG = document.getElementById('add-gasto');
const loginInput = document.getElementById('senha-comissao');
const loginBtn = document.getElementById('btn-login');

if(!addA || !addG) return;

function parseMoney(str){
    return Number(String(str).replace(/[^0-9,.-]/g,'').replace(',','.')) || 0;
}

function formatMoney(n){
    return 'R$ ' + n.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
}

// animação suave de números
function animateValue(element, start, end, duration = 500) {
    const startTime = performance.now();
    function update(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = start + (end - start) * progress;
        element.innerText = formatMoney(value);
        if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
}

// login com senha para comissão
loginBtn && loginBtn.addEventListener('click', ()=>{
    const senha = loginInput.value;
    if(senha === '12345'){ // exemplo de senha
        document.getElementById('comissao').style.display = 'block';
        document.getElementById('login-area').style.display = 'none';
    } else {
        alert('Senha incorreta!');
    }
});

addA.addEventListener('click', ()=>{
    const v = parseFloat(document.getElementById('input-arrecada').value) || 0;
    if(v<=0) return alert('Informe um valor válido');
    const curA = parseMoney(valA.innerText);
    const novo = curA + v;
    animateValue(valA, curA, novo);
    atualizarSaldo();
});

addG.addEventListener('click', ()=>{
    const v = parseFloat(document.getElementById('input-gasto').value) || 0;
    if(v<=0) return alert('Informe um valor válido');
    const curG = parseMoney(valG.innerText);
    const novo = curG + v;
    animateValue(valG, curG, novo);
    atualizarSaldo();
});

function atualizarSaldo(){
    const a = parseMoney(valA.innerText);
    const g = parseMoney(valG.innerText);
    const curS = parseMoney(valS.innerText);
    const novo = a - g;
    animateValue(valS, curS, novo);
}

// export CSV
const btnExport = document.getElementById('btn-export-csv');
btnExport && btnExport.addEventListener('click', ()=>{
    const a = valA.innerText.replace('R$ ','');
    const g = valG.innerText.replace('R$ ','');
    const s = valS.innerText.replace('R$ ','');
    const csv = 'Tipo,Valor\nArrecadado,'+a+'\nGastos,'+g+'\nSaldo,'+s+'\n';
    const blob = new Blob([csv], {type:'text/csv;charset=utf-8;'});
    const url = URL.createObjectURL(blob);
    const aLink = document.createElement('a');
    aLink.href = url;
    aLink.download = 'balanco_comissao.csv';
    aLink.click();
    URL.revokeObjectURL(url);
});

// Preenche lista de alunos (fade + slide)
function populateAlunos(){
    const lista = document.getElementById('lista-alunos');
    if(!lista) return;
    const nomes = ['GTV','Shay','Kaylla','Regis','Boyceta','Lucao','Renan','Bruna Crente','Helena','Dani','Ureia','Alfredo','Gabriel Souza','Sorriso','Mariana','Miguel','Rayane','Vitor','Luiza'];
    lista.innerHTML = '';
    nomes.forEach((n, i)=>{
        const li = document.createElement('li');
        li.innerText = n;
        li.style.opacity = 0;
        li.style.transform = 'translateX(-20px)';
        lista.appendChild(li);
        setTimeout(()=>{
            li.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            li.style.opacity = 1;
            li.style.transform = 'translateX(0)';
        }, i*100);
    });
}

// efeito fade-in para elementos ao aparecer
function initFadeInOnScroll(){
    const items = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {threshold:0.1});

    items.forEach(item=>{
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        observer.observe(item);
    });
}

// Inicialização geral
document.addEventListener('DOMContentLoaded', ()=>{
    startCountdown && startCountdown();
    initComissao && initComissao();
    initFinanceiro && initFinanceiro();
    populateAlunos();
    initFadeInOnScroll();
});
