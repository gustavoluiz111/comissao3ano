# Comissão 3º Ano EAPC 2026 🎓


Site oficial da **Comissão do 3º Ano da Escola de Aplicação Professor Chaves (EAPC/UPE)**. Este projeto foi criado para centralizar informações importantes para os formandos de 2026 e permitir o controle da comissão sobre arrecadações, metas e eventos.


🔗 **Acesse o site:** [https://gustavoluiz111.github.io/comissao3ano/](https://gustavoluiz111.github.io/comissao3ano/)


---


## 🏫 Sobre o Projeto
O site foi desenvolvido para facilitar a comunicação entre os alunos e a comissão, contendo:


- Lista dos **alunos e formandos**;
- Informações sobre **dias de vendas** e **escalações**;
- Visualização da **camisa oficial** e uniformes;
- **Avisos gerais**, **micos de sexta-feira** e **eventos**;
- **Calendário de provas** e lembretes importantes;
- Acesso **restrito à comissão**, com:
- Controle de **valores arrecadados** e **gastos**;
- Registro de **quem comprou o quê**;
- **Metas financeiras** para a viagem de **Sirinhaém 2026**;
- **Gráficos e tabelas** de acompanhamento.


---


## 🎨 Identidade Visual
O design segue as cores e símbolos oficiais da escola e universidade:
- **Índigo escuro (#1A1E4B)**
- **Vermelho (#E31C25)**
- **Branco (#FFFFFF)**


### Logos e brasão
O site inclui:
- Brasão oficial da turma 3º Ano 2026;
- Logotipo da **EAPC**;
- Logotipo da **UPE (Universidade de Pernambuco)**.


---


## 🧱 Estrutura de Páginas


```
/
├── index.html → Página inicial (avisos e resumo)
├── alunos.html → Lista de alunos e formandos
├── vendas.html → Escalações, produtos e dias de venda
├── camisa.html → Design e informações da camisa oficial
├── eventos.html → Micos, eventos e provas
├── comissao.html → Área restrita da comissão
├── css/
│ └── style.css → Estilos principais
├── js/
│ └── script.js → Scripts de interação e controle
└── assets/
├── logo-eapc.png
├── logo-upe.png
└── brasao-2026.png
```


---


## 🔒 Acesso da Comissão
A área da comissão requer uma **senha** definida no arquivo `script.js`. Exemplo:


```js
const senhaCorreta = "eapc2026";
```


Basta alterar para a senha desejada e publicar.


---


## 🚀 Deploy no GitHub Pages


Para publicar o site:


1. Acesse o repositório no GitHub.
2. Vá em **Settings → Pages**.
3. Em **Branch**, selecione `main` e a pasta `/ (root)` ou `docs/`.
4. Clique em **Save**.


O site ficará disponível em:
> [https://gustavoluiz111.github.io/comissao3ano/](https://gustavoluiz111.github.io/comissao3ano/)


---


## 💡 Tecnologias Utilizadas
- **HTML5** — Estrutura
- **CSS3** — Estilo responsivo e layout moderno
- **JavaScript (Vanilla)** — Interatividade e controle de acesso


---


## 📅 Metas Futuras
- [ ] Sistema de login individual para membros da comissão
- [ ] Painel com gráficos de arrecadação (Chart.js)
- [ ] Modo escuro opcional
- [ ] Envio automático de avisos via e-mail ou WhatsApp


---


## 👨‍💻 Desenvolvido por
**Comissão do 3º Ano EAPC 2026**
Sob orientação da **UPE - Universidade de Pernambuco**.


📍 Projeto hospedado no GitHub Pages:
👉 [https://gustavoluiz111.github.io/comissao3ano/](https://gustavoluiz111.github.io/comissao3ano/)
