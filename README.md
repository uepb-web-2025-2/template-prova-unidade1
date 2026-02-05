# 🎓 Avaliação 1: Programação Web - Unidade 1

**Professor:** Thiago Marques | **Universidade Estadual da Paraíba (UEPB)** |
**Duração:** 2 horas | **Valor:** 8,0 pontos

---

## ⚠️ Instruções Iniciais (Leia com Atenção)

1.  **Configuração do Repositório:**
    * Acesse o link do template fornecido no quadro.
    * Clique no botão verde **"Use this template"** > **"Create a new repository"**.
    * Nomeie o repositório como: `prova-web-SEUNOMECOMPLETO` (Ex: `prova-web-thiago-marques`).
    * **IMPORTANTE:** Defina a visibilidade como **🔒 PRIVATE** (Privado).
    * Após criar, vá em **Settings > Collaborators > Add people** e adicione o usuário do professor: `thiagomarques-uepb`.

2.  **Ambiente de Desenvolvimento:**
    * No seu novo repositório, clique no botão verde **< > Code**.
    * Vá na aba **Codespaces**.
    * Clique em **Create codespace on main**.
    * **Aguarde!** O terminal abrirá e instalará as dependências automaticamente (`npm install`). Isso leva cerca de 2 minutos.
    * Quando o terminal parar, digite: `npm run dev`.

3.  **Entrega:**
    * A entrega será validada pelo **último commit** feito antes do horário limite.
    * Não esqueça de fazer o `git add .`, `git commit -m "COMENTARIO"` e `git push` das suas alterações.
    * Copie a URL do seu repositório (Ex: github.com/joao/prova-web-joao).
    * Envie este link pela tarefa no **SUAP**.

---

## 📝 Parte 1: Teoria e Conceitos (1,0 Pontos)

*Abra o arquivo chamado `RESPOSTAS.md` na raiz do projeto e responda às questões abaixo:*

**Questão 1 (Paradigmas):**
No desenvolvimento Web tradicional (Vanilla JS), trabalhamos de forma **Imperativa** (dizendo passo-a-passo como manipular o DOM). Já no React/Next.js, o paradigma é **Declarativo** (focado no estado).
* **Pergunta (0,33 pts):** Explique, com suas palavras, qual a principal vantagem da abordagem Declarativa sobre a Imperativa quando uma aplicação começa a crescer.

**Questão 2 (Arquitetura Next.js):**
O Next.js utiliza o arquivo `layout.js` para envolver as páginas da aplicação.
* **Pergunta (0,33 pts):** Qual a vantagem técnica de colocar componentes como o "Cabeçalho" (Header) e o "Rodapé" (Footer) neste arquivo específico, em vez de importá-los manualmente em cada página?

**Questão 3 (CSS Box Model):**
Analise a classe CSS abaixo:

```css
.card {
    width: 200px;
    padding: 20px;
    border: 5px solid black;
    margin: 15px;
}
```
* **Pergunta (0,33 pts):** Qual é a **largura total** (espaço horizontal) que este elemento ocupará visualmente na tela (considerando conteúdo + preenchimento + borda)? Justifique seu cálculo.

---

## 🛠️ Parte 2: JavaScript "Raiz" & DOM (3,0 Pontos)

*Objetivo: Criar uma calculadora funcional sem usar React, demonstrando domínio do DOM.*

**Instruções:**
Dentro da pasta `public` do seu projeto, crie uma pasta chamada `calculadora`. Dentro dela, crie três arquivos: `index.html`, `style.css` e `main.js`.

**Enunciado da Questão:**
Crie uma calculadora simples para realizar as 4 operações matemáticas básicas.

**Requisitos:**

1.  **HTML (`index.html`) (1,25 pts):**
    * Dois campos de input (`type="number"`) para inserir os valores A e B.
    * Quatro botões para as operações: Somar (+), Subtrair (-), Multiplicar (*) e Dividir (/).
    * Uma área (`<h3>` ou `<span>`) para exibir o resultado.
    * Deve importar corretamente o CSS e o JS externos.

2.  **CSS (`style.css`) (0,5 pts):**
    * Centralize a calculadora na tela (use Flexbox no `body`).
    * Dê um espaçamento entre os botões e inputs.
    * Os botões devem mudar de cor ao passar o mouse (`:hover`).

3.  **JavaScript (`main.js`) (1,25 pts):**
    * Capture os cliques dos botões e os valores dos inputs (lembre-se de converter de ``String`` para ``Number`` usando ``parseFloat`` ou ``Number()``).
    * Realize a operação matemática correspondente.
    * Atualize a tela com o resultado.
    * **Validação:** Se algum campo estiver vazio, exiba um alerta.
    * **Bônus:** Se o usuário tentar dividir por zero, mostre uma mensagem de erro ou 'Inválido'."

---

## 🚀 Parte 3: Next.js, Componentes & Estilos (4,0 Pontos)

*Objetivo: Criar o "Portal de Eventos UEPB" utilizando React, CSS Modules e Componentes.*

**Arquivos de Trabalho:**
* `src/app/page.js` (Lógica principal)
* `src/app/page.module.css` (Estilos)
* `src/components/Footer.js` (Novo componente)

**Cenário:**
Copie e cole a seguinte lista de dados dentro do seu arquivo `page.js` (antes da função principal):

```javascript
const eventos = [
    { id: 1, nome: "Workshop de Next.js", data: "10/05", status: "aberto" },
    { id: 2, nome: "Palestra sobre IA", data: "12/05", status: "esgotado" },
    { id: 3, nome: "Hackathon UEPB", data: "15/05", status: "aberto" },
    { id: 4, nome: "Code Review ao Vivo", data: "20/05", status: "esgotado" },
];
```

**Requisitos da Implementação:**

1.  **Componente Estático (0,5 pt):**
    * Crie um componente chamado `<Footer />` em um arquivo separado (ex: `src/components/Footer.js`).
    * Ele deve retornar apenas uma tag `<footer>` com o texto: **"Prova de Web - Aluno: [Seu Nome]"**.
    * Importe e exiba este componente no final da sua página principal.

2.  **Estilização com CSS Modules (0,5 pts):**
    * **Não use estilos inline** para o layout principal (Grid e Cards).
    * Crie classes no arquivo `page.module.css` para estilizar a **grade de eventos** (container) e o **card do evento**.
    * Importe o CSS na página (`import styles from './page.module.css'`) e aplique as classes (ex: `className={styles.card}`).

3.  **Renderização de Listas (1,0 pts):**
    * Dentro do retorno da página, utilize o método `.map()` para percorrer o array `eventos`.
    * Para cada evento, desenhe um "Card" (uma `div` com borda/estilo) exibindo o **nome** e a **data**.
    
4.  **Renderização Condicional (1,0 pts):**
    * Dentro desse mesmo Card, verifique a propriedade `status`.
    * Se for **"aberto"**, exiba um botão verde com o texto "Inscrever-se".
    * Se for **"esgotado"**, exiba um texto vermelho escrito "Vagas Encerradas" (sem botão).
    * **Dica:** Use o operador ternário (`condicao ? verdadeiro : falso`).
5.  **Gerenciamento de Estado (1,0 pts):**
    * Crie um contador no topo da página: "Ingressos no Carrinho: 0".
    * Ao clicar no botão "Inscrever-se" de qualquer evento, o contador deve aumentar em 1 (Use `useState`).
    * Use o hook `useState` para controlar esse número.
---
**Boa Prova!**