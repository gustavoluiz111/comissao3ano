const CONFIG = {
const valG = document.getElementById('valor-gastos');
const valS = document.getElementById('valor-saldo');


if(!addA || !addG) return;


function parseMoney(str){
return Number(String(str).replace(/[^0-9,.-]/g,'').replace(',','.')) || 0;
}
function formatMoney(n){
return 'R$ ' + n.toLocaleString('pt-BR', {minimumFractionDigits:2, maximumFractionDigits:2});
}


addA.addEventListener('click', ()=>{
const v = parseFloat(document.getElementById('input-arrecada').value) || 0;
if(v<=0) return alert('Informe um valor válido');
const curA = parseMoney(valA.innerText);
const novo = curA + v;
valA.innerText = formatMoney(novo);
atualizarSaldo();
});
addG.addEventListener('click', ()=>{
const v = parseFloat(document.getElementById('input-gasto').value) || 0;
if(v<=0) return alert('Informe um valor válido');
const curG = parseMoney(valG.innerText);
const novo = curG + v;
valG.innerText = formatMoney(novo);
atualizarSaldo();
});


function atualizarSaldo(){
const a = parseMoney(valA.innerText);
const g = parseMoney(valG.innerText);
valS.innerText = formatMoney(a - g);
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
}


// Preenche lista de alunos (edite os nomes aqui)
function populateAlunos(){
const lista = document.getElementById('lista-alunos');
if(!lista) return;
const nomes = ['GTV','Shay','Kaylla','Regis','Boyceta','Lucao','Renan','Bruna Crente','Helena','Dani','Ureia','Alfredo','Gabriel Souza','Sorriso','Mariana','Miguel','Rayane','Vitor','Luiza'];
lista.innerHTML = '';
nomes.forEach(n=>{ const li = document.createElement('li'); li.innerText = n; lista.appendChild(li); });
}


// Inicialização geral
document.addEventListener('DOMContentLoaded', ()=>{
startCountdown();
initComissao();
initFinanceiro();
populateAlunos();
});
