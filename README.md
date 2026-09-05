# ♿ A11y Lab

Laboratório prático de **acessibilidade web para Front-end**, criado para estudar e aplicar conceitos de acessibilidade durante o desenvolvimento de interfaces.

O projeto faz parte de uma trilha de estudos focada em entender não apenas as recomendações da WCAG, mas também **como navegadores e tecnologias assistivas interpretam os componentes que desenvolvemos**.

## 🎯 Objetivo

Aprender a desenvolver e validar interfaces acessíveis, entendendo o caminho entre:

**HTML → DOM → Accessibility Tree → navegador/sistema operacional → tecnologia assistiva → pessoa usuária**

Durante os estudos, os componentes serão avaliados utilizando diferentes combinações de navegadores e leitores de tela.

## 📚 Conteúdos estudados

* HTML semântico
* Accessibility Tree
* Accessible Name
* Role, State e Value
* Navegação por teclado
* Gerenciamento de foco
* WCAG 2.2
* WAI-ARIA
* ARIA Authoring Practices Guide
* Formulários acessíveis
* Mensagens de erro
* Live Regions
* Modais
* Accordions
* Tabs
* Menus
* Componentes React acessíveis
* Testes manuais de acessibilidade
* Testes automatizados

## 🧑‍💻 Tecnologias

* HTML
* CSS
* JavaScript
* React
* Next.js
* Chrome DevTools
* Lighthouse
* axe
* eslint-plugin-jsx-a11y

## 🔊 Tecnologias assistivas utilizadas

Os testes serão realizados principalmente com:

| Sistema | Navegador | Tecnologia assistiva |
| ------- | --------- | -------------------- |
| Windows | Chrome    | NVDA                 |
| macOS   | Safari    | VoiceOver            |
| iOS     | Safari    | VoiceOver            |
| Android | Chrome    | TalkBack             |

## 🧪 Como os componentes serão testados

Cada componente desenvolvido deverá passar por diferentes etapas de validação.

### 1. Navegação por teclado

Testar utilizando:

* `Tab`
* `Shift + Tab`
* `Enter`
* `Space`
* `Escape`
* Setas direcionais

Perguntas importantes:

* Todos os elementos interativos recebem foco?
* A ordem de foco faz sentido?
* O foco está visível?
* É possível executar todas as ações sem utilizar o mouse?

### 2. Accessibility Tree

Verificar no DevTools:

* **Name**
* **Role**
* **State**
* **Value**

### 3. Leitor de tela

Validar se o componente anuncia corretamente:

* nome
* função
* estado
* mudanças de conteúdo
* mensagens importantes

A pergunta não deve ser apenas:

> "O leitor de tela lê?"

Mas sim:

> "O leitor de tela anuncia a informação correta e permite que a pessoa interaja com o componente?"

### 4. WCAG

Relacionar problemas encontrados aos critérios da **WCAG 2.2**.

### 5. Testes automatizados

Utilizar ferramentas como:

* Lighthouse
* axe
* eslint-plugin-jsx-a11y

Testes automatizados complementam os testes manuais, mas não os substituem.

## 🧩 Componentes do laboratório

Durante os estudos serão desenvolvidos e avaliados componentes como:

* Button
* Link
* Form
* Accordion
* Tabs
* Modal / Dialog
* Dropdown / Menu
* Toast
* Alert
* Live Region

## 📂 Estrutura planejada

```text
a11y-lab/
│
├── components/
│   ├── Button/
│   ├── Accordion/
│   ├── Tabs/
│   ├── Modal/
│   ├── Dropdown/
│   ├── Form/
│   └── LiveRegion/
│
├── tests/
│   ├── keyboard.md
│   ├── nvda-chrome.md
│   ├── voiceover-safari.md
│   └── talkback-chrome.md
│
├── docs/
│   ├── accessibility-tree.md
│   ├── wcag-checklist.md
│   └── screen-reader-matrix.md
│
└── README.md
```

## 📅 Trilha de estudos

### Fundamentos

* Acessibilidade digital
* Tecnologias assistivas
* HTML semântico
* Accessibility Tree
* Name, Role, State e Value
* Navegação por teclado
* Gerenciamento de foco

### NVDA + Chrome

* Navegação com NVDA
* Browse Mode e Focus Mode
* Headings
* Landmarks
* Links
* Botões
* Formulários
* Mensagens de erro

### VoiceOver e TalkBack

**VoiceOver + Safari**

* navegação
* Rotor
* headings
* links
* formulários
* componentes interativos

**TalkBack + Chrome**

* navegação linear
* exploração por toque
* headings
* links
* controles
* formulários

### React / Next.js

Construção e validação de componentes reais:

* Button
* Form
* Accordion
* Tabs
* Modal
* Dropdown
* Toast
* Live Region

Os componentes serão testados em diferentes combinações de navegador e tecnologia assistiva.

## 📊 Matriz de testes

Exemplo de registro:

| Componente | NVDA + Chrome | VoiceOver + Safari | TalkBack + Chrome |
| ---------- | ------------- | ------------------ | ----------------- |
| Button     | ⬜             | ⬜                  | ⬜                 |
| Form       | ⬜             | ⬜                  | ⬜                 |
| Accordion  | ⬜             | ⬜                  | ⬜                 |
| Tabs       | ⬜             | ⬜                  | ⬜                 |
| Modal      | ⬜             | ⬜                  | ⬜                 |
| Menu       | ⬜             | ⬜                  | ⬜                 |

## 🔗 Referências

* [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
* [WCAG Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
* [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
* [WebAIM](https://webaim.org/)
* [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
* [Android Accessibility](https://developer.android.com/guide/topics/ui/accessibility)
* [Apple Accessibility](https://developer.apple.com/accessibility/)

## 🚧 Status

📚 Em desenvolvimento e estudo contínuo.

O repositório será atualizado conforme novos conceitos, componentes e testes forem realizados.

---

> Acessibilidade não é apenas fazer com que uma interface "funcione com leitor de tela".
> É garantir que diferentes pessoas consigam perceber, compreender, navegar e utilizar uma experiência digital.

