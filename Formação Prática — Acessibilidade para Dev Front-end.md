# ♿ FORMAÇÃO PRÁTICA

## Acessibilidade para Dev Front-end

**WCAG • Accessibility Tree • NVDA • VoiceOver • TalkBack • HTML/CSS/JavaScript**

Formação de estudo e laboratório prático para aprender a desenvolver, inspecionar e validar interfaces acessíveis.

---

<a id="objetivo"></a>

## 🎯 Objetivo

Ser capaz de desenvolver um componente, inspecionar o que o navegador expõe para tecnologias assistivas e validar seu comportamento com:

- teclado;
- Accessibility Tree;
- leitores de tela;
- diferentes navegadores;
- diferentes sistemas operacionais;
- WCAG 2.2;
- ferramentas automatizadas.

A formação não exige que todas as pessoas tenham acesso aos mesmos sistemas operacionais ou dispositivos.

Depois dos fundamentos, cada pessoa pode seguir as trilhas correspondentes aos ambientes que possui.

---

<a id="indice"></a>

## 📑 Índice

| Seção | Conteúdo |
|---|---|
| [Objetivo](#objetivo) | Resultado esperado da formação |
| [Como a formação está organizada](#organizacao) | Visão geral das trilhas |
| [Como usar esta formação](#como-usar) | Orientações de estudo e prática |
| [Modelo mental central](#modelo-mental) | Caminho do HTML até a tecnologia assistiva |
| [Escolhendo sua trilha](#escolhendo-trilha) | Como escolher os ambientes de teste |
| [Matriz de ambientes](#matriz-ambientes) | Combinações recomendadas |
| [Projeto-laboratório](#projeto-laboratorio) | Estrutura do `a11y-lab` |
| [Recursos-base](#recursos-base) | Cursos, documentação e materiais |
| [Trilha 1 — Fundamentos](#trilha-fundamentos) | HTML, teclado, foco e Accessibility Tree |
| [Trilha 2A — macOS + VoiceOver](#trilha-macos) | Testes com Safari + VoiceOver |
| [Trilha 2B — Windows + NVDA](#trilha-windows) | Testes com Chrome + NVDA |
| [Trilha 3A — iOS + VoiceOver](#trilha-ios) | Testes mobile no ecossistema Apple |
| [Trilha 3B — Android + TalkBack](#trilha-android) | Testes mobile no Android |
| [Audit final](#audit-final) | Revisão completa da interface |
| [Checklist por componente](#checklist-componente) | Roteiro reutilizável de validação |
| [Matriz de testes](#matriz-testes) | Registro dos ambientes e resultados |
| [Registro de bug](#registro-bug) | Modelo para documentar falhas |
| [Como estudar WCAG](#estudar-wcag) | Método sem decorar a norma |
| [Regra de ouro do ARIA](#regra-aria) | Quando priorizar HTML nativo |
| [Automação](#automacao) | O que ferramentas detectam ou não |
| [Resultado esperado](#resultado-esperado) | Competências esperadas |
| [Checklist de conclusão](#checklist-conclusao) | Acompanhamento da formação |
| [Continuidade](#continuidade) | Evolução dos estudos |

---

<a id="organizacao"></a>

# 🗺️ Como a formação está organizada

```text
                    FUNDAMENTOS
                         │
                         ▼
              HTML • DOM • TECLADO
           ACCESSIBILITY TREE • WCAG
                         │
          ┌──────────────┴──────────────┐
          │                             │
          ▼                             ▼
     TRILHA macOS                  TRILHA WINDOWS
 Safari + VoiceOver                Chrome + NVDA
          │                             │
          └──────────────┬──────────────┘
                         │
               TRILHAS MOBILE
              ┌──────────┴──────────┐
              │                     │
              ▼                     ▼
             iOS                 ANDROID
     Safari + VoiceOver     Chrome + TalkBack
              │                     │
              └──────────┬──────────┘
                         │
                         ▼
              AUDIT E DOCUMENTAÇÃO
```

Você não precisa ter todos esses ambientes para começar ou concluir o núcleo da formação.

[↑ Voltar ao índice](#indice)

---

<a id="como-usar"></a>

# 📚 Como usar esta formação

Estude o conceito e aplique imediatamente no laboratório.

A prática é parte essencial da formação.

Não comece por ARIA.

Priorize:

**HTML semântico → comportamento nativo → teclado → Accessibility Tree → leitor de tela → WCAG → automação**

Teste primeiro sem mouse.

Depois:

1. inspecione a estrutura;
2. analise a Accessibility Tree;
3. teste com a tecnologia assistiva disponível;
4. relacione problemas encontrados à WCAG;
5. execute ferramentas automatizadas como apoio.

Registre diferenças entre plataformas.

O mesmo componente pode ser anunciado de formas diferentes dependendo da combinação:

**sistema operacional + navegador + tecnologia assistiva**

O objetivo não é fazer todos os leitores anunciarem exatamente as mesmas palavras.

O objetivo é garantir que a informação, o estado e a interação continuem compreensíveis.

[↑ Voltar ao índice](#indice)

---

<a id="modelo-mental"></a>

# 🧠 Modelo mental central

```text
HTML
  ↓
DOM
  ↓
Accessibility Tree
  ↓
API de acessibilidade do sistema
  ↓
Navegador + Tecnologia assistiva
  ↓
Informação percebida pela pessoa usuária
```

[↑ Voltar ao índice](#indice)

---

<a id="escolhendo-trilha"></a>

# 🖥️ Escolhendo sua trilha

## Núcleo obrigatório

Todos devem estudar:

- HTML semântico;
- DOM;
- Accessibility Tree;
- Accessible Name;
- Role;
- State;
- Value;
- teclado;
- foco;
- WCAG;
- testes manuais;
- testes automatizados.

Depois, escolha **pelo menos uma trilha de leitor de tela desktop**.

### 🍎 Se você usa Mac

Siga:

**macOS + Safari + VoiceOver**

Depois, se tiver iPhone:

**iOS + Safari + VoiceOver**

### 🪟 Se você usa Windows

Siga:

**Windows + Chrome + NVDA**

Depois, se tiver acesso a dispositivos móveis, escolha também iOS ou Android.

### 📱 Se você tem Android

Adicione:

**Android + Chrome + TalkBack**

### 📱 Se você tem iPhone

Adicione:

**iOS + Safari + VoiceOver**

[↑ Voltar ao índice](#indice)

---

<a id="matriz-ambientes"></a>

# 🌐 Matriz de ambientes

| Sistema | Navegador | Tecnologia assistiva | Classificação |
|---|---|---|---|
| macOS | Safari | VoiceOver | Trilha desktop |
| Windows | Chrome | NVDA | Trilha desktop |
| iOS | Safari | VoiceOver | Trilha mobile |
| Android | Chrome | TalkBack | Trilha mobile |
| Windows | Chrome / Edge | JAWS | Complementar |

### Para concluir o núcleo da formação

É recomendado realizar:

- fundamentos;
- teclado;
- Accessibility Tree;
- WCAG;
- componentes;
- pelo menos **uma trilha desktop com leitor de tela**.

### Para aprofundamento

Adicione:

- uma ou mais trilhas mobile;
- outra plataforma desktop;
- comparação multiplataforma.

[↑ Voltar ao índice](#indice)

---

<a id="projeto-laboratorio"></a>

# 🧪 Projeto-laboratório

Os exemplos e exercícios estão desenvolvidos nesse repositório:

[`a11y-lab`](https://github.com/PaulinhaFigueiredoDev/a11y-lab)

Estrutura:

```text
a11y-lab/

├── fundamentals/
│   ├── index.html
│   ├── styles.css
│   └── script.js
│
├── tests/
│   ├── keyboard.md
│   ├── nvda-chrome.md
│   ├── voiceover-macos-safari.md
│   ├── voiceover-ios-safari.md
│   └── talkback-android-chrome.md
│
├── docs/
│   ├── accessibility-tree.md
│   ├── wcag-checklist.md
│   └── screen-reader-matrix.md
│
└── README.md
```

[↑ Voltar ao índice](#indice)

---

<a id="recursos-base"></a>

# 📖 Recursos-base

### Fundamentos

[Alura — Acessibilidade: estudando com tecnologias assistivas](https://www.alura.com.br/curso-online-acessibilidade-estudando-tecnologias-assistivas)

[MDN — Accessibility Tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree)

[W3C — WCAG 2.2 Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)

[W3C — Test & Evaluate Web Accessibility](https://www.w3.org/WAI/test-evaluate/)

### Windows / NVDA

[Alura — Acessibilidade em HTML, CSS e JavaScript com NVDA](https://www.alura.com.br/curso-online-acessibilidade-html-css-javascript-projeto-nvda)

[WebAIM — Using NVDA to Evaluate Web Accessibility](https://webaim.org/articles/nvda/)

### macOS / VoiceOver

[WebAIM — Using VoiceOver to Evaluate Web Accessibility](https://webaim.org/articles/voiceover/)

[Apple — VoiceOver User Guide](https://support.apple.com/guide/voiceover/welcome/mac)

### iOS / VoiceOver

[WebAIM — VoiceOver on Mobile](https://webaim.org/articles/voiceover/)

[Apple Developer — VoiceOver](https://developer.apple.com/documentation/accessibility/accessibility-for-voiceover)

### Android / TalkBack

[WebAIM — Using TalkBack to Evaluate Web Accessibility](https://webaim.org/articles/talkback/)

[Android Developers — Accessibility Testing](https://developer.android.com/guide/topics/ui/accessibility/testing)

### Componentes

[Alura — WAI-ARIA e elementos interativos com JavaScript](https://www.alura.com.br/conteudo/acessibilidade-web-wai-aria-elementos-interativos-javascript)

[W3C — ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)


[↑ Voltar ao índice](#indice)

---

<a id="trilha-fundamentos"></a>

# 🟢 TRILHA 1 — FUNDAMENTOS

## Meta

Entender o que o navegador expõe para tecnologias assistivas antes de começar a testar com leitores de tela.

## Mapa da acessibilidade digital

### Objetivo

Entender quem utiliza tecnologias assistivas e por que acessibilidade precisa fazer parte do desenvolvimento.

### Estudo

- acessibilidade digital;
- barreiras digitais;
- tecnologias assistivas;
- introdução à WCAG.

### Links para estudar

- [W3C — Introdução à acessibilidade na Web](https://www.w3.org/WAI/fundamentals/accessibility-intro/)
- [W3C — Como as pessoas com deficiência usam a Web](https://www.w3.org/WAI/people-use-web/)
- [W3C — WCAG 2.2: visão geral e critérios](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [MDN — Acessibilidade na Web](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

### Prática

Se esta for sua primeira vez no projeto, siga antes as [instruções de execução no README](./README.md).

Abra a [tela inicial do laboratório](http://localhost:8000/).

Para acessar a página, inicie o projeto com `npm run dev` e abra [http://localhost:8000/](http://localhost:8000/). A implementação inicial está em `fundamentals/` e usa HTML, CSS e JavaScript puro.

Ela deve conter pelo menos:

- título;
- navegação;
- conteúdo;
- formulário;
- botão.

Use essa página como base para os próximos exercícios.

### Validação

Liste pelo menos cinco barreiras que poderiam existir mesmo quando a página visualmente parece correta.

---

## DOM x Accessibility Tree

### Objetivo

Entender que tecnologias assistivas não dependem apenas da aparência visual da interface.

### Estudo

Aprenda:

- DOM;
- Accessibility Tree;
- Accessible Name;
- Role;
- State;
- Value.

### Links para estudar

- [MDN — Accessibility Tree](https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree)
- [Chrome for Developers — Inspecionar a Accessibility Tree no DevTools](https://developer.chrome.com/docs/devtools/accessibility/reference)
- [W3C — Name, Role, Value (WCAG 4.1.2)](https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html)

### Prática

Inspecione no DevTools:

```html
<button>
<a>
<input>
<h1>
<img>
<div>
```

Anote:

- role;
- accessible name;
- states;
- propriedades disponíveis.

### Validação

Explique:

> Por que dois elementos visualmente idênticos podem possuir semântica completamente diferente?

---

## Accessible Name, Role, State e Value

Crie pares:

```text
button × div
checkbox × div
link × span
```

Compare os elementos na Accessibility Tree.

Registre quais informações aparecem nos elementos nativos e quais precisam ser implementadas manualmente nos elementos customizados.

### Links para estudar

- [W3C APG — Nomes e descrições acessíveis](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/)
- [MDN — Accessible name](https://developer.mozilla.org/en-US/docs/Glossary/Accessible_name)
- [W3C — Técnica H91: controles HTML e links](https://www.w3.org/WAI/WCAG20/Techniques/html/H91)

---

## HTML semântico primeiro

Estude:

- landmarks;
- headings;
- listas;
- links;
- buttons;
- labels;
- formulários.

### Links para estudar

- [MDN — HTML semântico](https://developer.mozilla.org/en-US/curriculum/core/semantic-html/)
- [MDN — Referência de elementos HTML](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements)
- [MDN — Formulários HTML](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
- [MDN — Elemento `<label>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/label)

Estruture uma página utilizando:

```html
<header>
<nav>
<main>
<section>
<form>
<label>
<button>
<footer>
```

### Validação

Remova o CSS temporariamente.

A estrutura ainda é compreensível?

---

## Navegação somente por teclado

Teste:

```text
Tab
Shift + Tab
Enter
Space
Escape
Setas
```

Registre:

- elementos que não recebem foco;
- elementos impossíveis de ativar;
- ordem de foco confusa.

### Links para estudar

- [MDN — Navegação acessível por teclado](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Understanding_WCAG/Keyboard)
- [W3C — Critério 2.1.1: Teclado](https://www.w3.org/WAI/WCAG22/Understanding/keyboard)
- [W3C — Técnica H91: controles HTML e links](https://www.w3.org/WAI/WCAG20/Techniques/html/H91)

### Validação

A tarefa principal pode ser concluída sem utilizar mouse?

---

## Foco visível e ordem de foco

Estude:

- ordem do DOM;
- focus indicator;
- `tabindex="0"`;
- `tabindex="-1"`;
- problemas de tabindex positivo.

### Links para estudar

- [MDN — atributo `tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/tabindex)
- [MDN — Widgets JavaScript navegáveis por teclado](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- [W3C — Critério 2.4.3: Ordem do foco](https://www.w3.org/WAI/WCAG22/Understanding/focus-order)
- [W3C — Critério 2.4.7: Foco visível](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)

Compare:

```html
tabindex="0"
tabindex="-1"
tabindex="1"
```

### Validação

O foco:

- está visível?
- segue uma ordem lógica?
- acompanha a estrutura da página?

---

## Mini-audit de fundamentos

Audite utilizando:

```text
sem mouse
↓
estrutura semântica
↓
Accessibility Tree
↓
ordem de foco
```

Registre cada problema com:

- causa;
- impacto;
- possível correção.

### Apoio para o mini-audit

- [W3C — Easy Checks: primeira revisão de acessibilidade](https://www.w3.org/WAI/test-evaluate/preliminary/)
- [W3C — Testar e avaliar acessibilidade](https://www.w3.org/WAI/test-evaluate/)

[↑ Voltar ao índice](#indice)

---

<a id="trilha-macos"></a>

# 🍎 TRILHA 2A — macOS + Safari + VoiceOver

Faça esta trilha se você utiliza Mac.

## Meta

Aprender a testar sistematicamente páginas web utilizando:

**macOS + Safari + VoiceOver**

## Configuração do VoiceOver

Estude:

- ativar e desativar VoiceOver;
- modificador VO;
- comandos de navegação;
- controle de fala;
- interação com grupos;
- Rotor.

No Mac, `VO` normalmente representa:

```text
Control + Option
```

Abra seu `a11y-lab` no Safari.

Tente navegar pela página sem utilizar o mouse.

### Validação

Você consegue identificar:

- headings;
- links;
- buttons;
- campos de formulário;

apenas utilizando o VoiceOver?

---

## Navegação estrutural

Pratique:

- headings;
- landmarks;
- links;
- buttons;
- form controls;
- Rotor.

### Validação

Você consegue chegar rapidamente às principais regiões da página?

---

## Links x Buttons

Compare:

```html
<a href="/perfil">Perfil</a>

<button>Salvar</button>

<div onclick="salvar()">Salvar</div>

<span role="button">Salvar</span>
```

Teste:

- foco;
- anúncio;
- Enter;
- Space;
- papel anunciado.

---

## Formulários

Crie um formulário com:

- nome;
- email;
- senha;
- checkbox;
- radio group.

Teste:

- labels;
- required;
- instruções;
- estados;
- mensagens de erro.

---

## Feedback dinâmico

Teste:

- mensagens de erro;
- mensagens de sucesso;
- `aria-describedby`;
- `role="status"`;
- `role="alert"`;
- live regions.

---

## Audit VoiceOver no Mac

Execute uma tarefa completa utilizando:

**Safari + VoiceOver + teclado**

Registre:

- comportamento esperado;
- comportamento observado;
- impacto;
- possível correção.

[↑ Voltar ao índice](#indice)

---

<a id="trilha-windows"></a>

# 🪟 TRILHA 2B — Windows + Chrome + NVDA

Faça esta trilha se você tiver acesso a Windows.

## Meta

Testar sistematicamente interfaces web com:

**Windows + Chrome + NVDA**

## Primeiro contato com NVDA

Aprenda:

- inicialização;
- parada;
- controle de fala;
- navegação básica.

Abra o `a11y-lab` no Chrome.

Tente navegar sem olhar para a tela.

---

## Browse Mode x Focus Mode

Teste:

- textos;
- links;
- inputs;
- componentes interativos.

Registre quando o comportamento muda.

---

## Headings e landmarks

Crie:

- uma página com hierarquia correta;
- uma página com hierarquia quebrada.

Navegue utilizando headings e regiões.

---

## Links x Buttons

Compare:

```html
<a href="/perfil">Perfil</a>

<button type="button">Salvar</button>

<!-- Elemento não nativo: exige foco, teclado e estado implementados. -->
<div role="button" tabindex="0">Salvar</div>
```

Teste:

- Tab;
- Enter;
- Space;
- nome anunciado;
- role anunciado.

---

## Inputs e Labels

Monte um formulário com:

- nome;
- email;
- senha;
- checkbox;
- radio group.

Teste com NVDA.

---

## Erros e feedback dinâmico

Estude:

- mensagens de erro;
- foco;
- `aria-describedby`;
- `status`;
- `alert`;
- live regions.

---

## Audit NVDA

Execute um fluxo completo utilizando:

**teclado + NVDA**

Registre:

- componente;
- comportamento esperado;
- comportamento observado;
- impacto;
- correção.

[↑ Voltar ao índice](#indice)

---

<a id="trilha-ios"></a>

# 📱 TRILHA 3A — iOS + Safari + VoiceOver

Faça esta trilha se você tiver acesso a iPhone ou iPad.

## Meta

Aprender navegação e validação de interfaces web utilizando VoiceOver no mobile.

## Gestos básicos

Estude:

- swipe direita/esquerda;
- double tap;
- exploração por toque.

Abra o `a11y-lab` no Safari e tente concluir uma tarefa.

---

## Rotor

Utilize o Rotor para navegar por:

- headings;
- links;
- buttons;
- formulários;
- landmarks.

---

## Formulários e erros

Force erros no formulário.

Tente corrigi-los utilizando apenas VoiceOver.

Verifique se o erro é:

- anunciado;
- associado ao campo;
- compreensível;
- fácil de corrigir.

---

## Componentes interativos

Teste:

- accordion;
- modal;
- menu;
- componentes expansíveis.

Observe:

- abertura;
- estado;
- foco;
- fechamento;
- retorno ao contexto anterior.

[↑ Voltar ao índice](#indice)

---

<a id="trilha-android"></a>

# 🤖 TRILHA 3B — Android + Chrome + TalkBack

Faça esta trilha se você tiver acesso a um dispositivo Android.

## Meta

Aprender testes utilizando:

**Android + Chrome + TalkBack**

## Gestos básicos

Estude:

- swipe;
- double tap;
- explore by touch.

Abra o mesmo projeto utilizado nas outras plataformas.

---

## Navegação estrutural

Teste:

- headings;
- links;
- buttons;
- formulários;
- controles.

---

## Comparação Android x iOS

Caso tenha os dois ambientes, teste o mesmo componente.

| Informação | VoiceOver | TalkBack |
|---|---|---|
| Nome | | |
| Role | | |
| Estado | | |
| Ordem | | |
| Interação | | |

Não considere automaticamente uma diferença de anúncio como bug.

Pergunte:

> A informação essencial continua disponível e compreensível?

[↑ Voltar ao índice](#indice)

---

<a id="audit-final"></a>

# 🔎 Audit final

Não existe obrigação de testar todos os sistemas.

Execute o audit nos ambientes aos quais você possui acesso.

Exemplos:

```text
macOS + Safari + VoiceOver
Windows + Chrome + NVDA
iOS + Safari + VoiceOver
Android + Chrome + TalkBack
```

Quanto mais plataformas forem testadas, maior será a compreensão das diferenças entre os ambientes.

[↑ Voltar ao índice](#indice)

---

<a id="checklist-componente"></a>

# ✅ Checklist reutilizável por componente

## 1. Sem mouse

- [ ] Tab e Shift+Tab alcançam os controles relevantes.
- [ ] Enter e Space funcionam quando apropriado.
- [ ] Escape funciona quando o padrão exige.
- [ ] Setas funcionam quando necessárias.
- [ ] A tarefa principal pode ser concluída sem mouse.

## 2. Foco

- [ ] O foco está visível.
- [ ] A ordem de foco é lógica.
- [ ] Não existem armadilhas indevidas.
- [ ] O foco entra corretamente em novos contextos.
- [ ] O foco retorna ao lugar esperado.

## 3. Accessibility Tree

- [ ] Accessible Name está correto.
- [ ] Role representa o propósito.
- [ ] State está exposto corretamente.
- [ ] Value está disponível quando necessário.
- [ ] Elementos decorativos não criam ruído.

## 4. Leitor de tela

- [ ] O controle pode ser encontrado.
- [ ] O nome é compreensível.
- [ ] O papel está correto.
- [ ] O estado é percebido.
- [ ] O elemento pode ser operado.
- [ ] Mudanças dinâmicas são anunciadas.
- [ ] A ordem de leitura faz sentido.

## 5. WCAG

- [ ] Identifiquei o critério relacionado.
- [ ] Registrei a evidência.
- [ ] Documentei o impacto.
- [ ] Diferenciei requisito de acessibilidade de preferência de UX.

## 6. Automação

- [ ] Executei axe, Lighthouse ou equivalente.
- [ ] Analisei os problemas encontrados.
- [ ] Corrigi violações reais.
- [ ] Não considerei “zero erros” como prova de acessibilidade.

[↑ Voltar ao índice](#indice)

---

<a id="matriz-testes"></a>

# 📊 Modelo de matriz de testes

| Componente | Ambiente | Resultado | Observações |
|---|---|---|---|
| Button / Link | | ⬜ OK ⬜ Falha | |
| Formulário | | ⬜ OK ⬜ Falha | |
| Accordion | | ⬜ OK ⬜ Falha | |
| Tabs | | ⬜ OK ⬜ Falha | |
| Modal | | ⬜ OK ⬜ Falha | |
| Dropdown / Menu | | ⬜ OK ⬜ Falha | |
| Toast / Status | | ⬜ OK ⬜ Falha | |

[↑ Voltar ao índice](#indice)

---

<a id="registro-bug"></a>

# 🐛 Modelo de registro de bug de acessibilidade

**Componente / tela:**

**Ambiente:**  
Sistema + navegador + tecnologia assistiva:

**Pré-condição:**

**Passos para reproduzir:**

1.
2.
3.

**Comportamento esperado:**

**Comportamento observado:**

**Impacto para a pessoa usuária:**

**Accessibility Tree**

- Name:
- Role:
- State:
- Value:

**Critério WCAG relacionado:**

**Correção proposta:**

**Reteste realizado em:**

[↑ Voltar ao índice](#indice)

---

<a id="estudar-wcag"></a>

# 📘 Como estudar WCAG sem decorar a norma

Utilize este fluxo:

```text
problema real
↓
impacto para a pessoa usuária
↓
semântica/comportamento incorreto
↓
critério WCAG relacionado
↓
correção
↓
reteste
```

### Processo

1. Encontre um problema durante o teste.
2. Descreva o impacto.
3. Identifique a propriedade ou comportamento incorreto.
4. Consulte o WCAG 2.2 Quick Reference.
5. Localize o critério relacionado.
6. Leia técnicas e falhas.
7. Corrija.
8. Repita o teste.

[↑ Voltar ao índice](#indice)

---

<a id="regra-aria"></a>

# 🏷️ Regra de ouro do ARIA

Prefira HTML nativo sempre que existir um elemento adequado.

ARIA pode adicionar:

- semântica;
- relacionamento;
- estados.

ARIA não cria automaticamente:

- comportamento de teclado;
- gerenciamento de foco;
- interação correta.

Antes de utilizar ARIA, pergunte:

> Existe um elemento HTML nativo que já resolve esse problema?

[↑ Voltar ao índice](#indice)

---

<a id="automacao"></a>

# 🤖 Automação

## O que ferramentas conseguem detectar

Ferramentas como axe e Lighthouse conseguem identificar várias violações objetivas, como:

- nomes acessíveis ausentes;
- atributos ARIA inválidos;
- relações incompletas;
- alguns problemas de contraste;
- padrões estruturais incorretos.

## O que automação não consegue garantir

Automação não consegue garantir que:

- a ordem de leitura faça sentido;
- o fluxo seja compreensível;
- o foco vá para o lugar correto;
- uma interação complexa seja confortável;
- a experiência seja realmente utilizável.

Por isso:

**automação complementa o teste manual.**

Ela não o substitui.

[↑ Voltar ao índice](#indice)

---

<a id="resultado-esperado"></a>

# 🎓 Resultado esperado

Ao concluir o núcleo da formação, você deve conseguir:

- desenvolver componentes semanticamente corretos;
- testar interfaces sem mouse;
- analisar foco;
- inspecionar Accessibility Tree;
- identificar Name, Role, State e Value;
- utilizar pelo menos um leitor de tela para avaliação web;
- validar componentes reais;
- identificar critérios relacionados da WCAG;
- utilizar ferramentas automáticas como complemento;
- registrar bugs de acessibilidade.

Você deve conseguir explicar:

> “Implementei o componente, validei teclado e foco, inspecionei Name, Role, State e Value na Accessibility Tree, testei com tecnologia assistiva e relacionei as falhas encontradas à WCAG.”

[↑ Voltar ao índice](#indice)

---

<a id="checklist-conclusao"></a>

# ✅ Checklist de conclusão

## Núcleo

- [ ] Entendo DOM x Accessibility Tree.
- [ ] Sei identificar Accessible Name, Role, State e Value.
- [ ] Consigo testar uma interface inteira utilizando teclado.
- [ ] Entendo gerenciamento e ordem de foco.
- [ ] Sei validar formulários e mensagens de erro.
- [ ] Sei testar accordion, tabs, modal e dropdown.
- [ ] Sei trabalhar com live regions, status e alert.
- [ ] Sei consultar a WCAG 2.2.
- [ ] Entendo quando utilizar HTML nativo.
- [ ] Entendo quando ARIA é necessário.
- [ ] Sei utilizar ferramentas automáticas sem depender exclusivamente delas.

## Leitor de tela desktop

Concluir pelo menos uma:

- [ ] macOS + Safari + VoiceOver
- [ ] Windows + Chrome + NVDA

## Trilhas mobile

Opcionais para aprofundamento:

- [ ] iOS + Safari + VoiceOver
- [ ] Android + Chrome + TalkBack

## Multiplataforma

- [ ] Testei o mesmo componente em mais de uma combinação.
- [ ] Registrei diferenças de comportamento.
- [ ] Sei diferenciar variação aceitável de falha real.
- [ ] Construí uma matriz de compatibilidade.
- [ ] Realizei um audit multiplataforma.

[↑ Voltar ao índice](#indice)

---

<a id="continuidade"></a>

# 🚀 Continuidade

A formação não possui prazo fixo.

Cada pessoa pode estudar no próprio ritmo e ampliar gradualmente sua matriz de ambientes.

O objetivo não é completar uma lista de tecnologias assistivas.

O objetivo é desenvolver a capacidade de:

**construir → inspecionar → testar → compreender → corrigir → retestar.**

Acessibilidade passa a fazer parte do processo de desenvolvimento, e não apenas de uma etapa de validação ao final.

[↑ Voltar ao índice](#indice)
