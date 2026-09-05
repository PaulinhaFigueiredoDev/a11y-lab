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
* Testes manuais de acessibilidade
* Testes automatizados

## 🧑‍💻 Tecnologias

* HTML
* CSS
* JavaScript
* Chrome DevTools
* Lighthouse
* axe
* eslint-plugin-jsx-a11y

## 🔊 Tecnologias assistivas utilizadas

Os testes serão realizados principalmente com:

| Sistema | Navegador | Tecnologia assistiva |
| ------- | --------- | -------------------- |
| Windows | Chrome    | NVDA                 |
| macOS   | Safari    | VoiceOver             |
| iOS     | Safari    | VoiceOver             |
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

## 📂 Estrutura

```text
a11y-lab/
│
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

O projeto está disponível está em `fundamentals/`.

## ▶️ Como rodar o projeto

### Pré-requisitos

Instale previamente:

* Node.js 18 ou superior, com npm 9 ou superior;
* Python 3.

As versões de Node.js e npm são informadas no campo `engines` do `package.json`. Esse campo apenas documenta os requisitos: ele não instala nem atualiza as ferramentas automaticamente. O Python também não é instalado pelo npm.

#### macOS (Homebrew)

```bash
brew install node python
```

#### Ubuntu/Debian

```bash
sudo apt update
sudo apt install nodejs npm python3
```

#### Windows (WinGet)

No PowerShell:

```powershell
winget install OpenJS.NodeJS
winget install Python.Python.3
```

Confirme as versões instaladas:

```bash
node --version
npm --version
python3 --version
```

No Windows, o comando de verificação pode ser `python --version`, dependendo da instalação.

### Iniciar o laboratório

Na raiz do projeto, execute:

```bash
npm run dev
```

Depois, acesse <http://localhost:8000/>. O comando inicia um servidor Python na pasta `fundamentals`.

No Windows, use o script específico:

```powershell
npm run dev:windows
```

Também é possível abrir `fundamentals/index.html` diretamente no navegador, embora um servidor local seja útil para manter o mesmo contexto de execução.

O projeto não possui dependências npm externas no momento, portanto não é necessário executar `npm install`. Se quiser validar a configuração local, você pode executar `npm install` na raiz; isso não instalará pacotes adicionais.

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

## 🔗 Formação

A [Formação Prática — Acessibilidade para Dev Front-end](<./Formação Prática — Acessibilidade para Dev Front-end.md>) apresenta o passo a passo dos estudos, exercícios, trilhas de leitores de tela, checklists e critérios de validação.

## 🔗 Referências

* [WCAG 2.2](https://www.w3.org/TR/WCAG22/)
* [WCAG Quick Reference](https://www.w3.org/WAI/WCAG22/quickref/)
* [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
* [WebAIM](https://webaim.org/)
* [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
* [Android Accessibility](https://developer.android.com/accessibility)
* [Apple Accessibility](https://developer.apple.com/accessibility/)

## 🚧 Status

📚 Em desenvolvimento e estudo contínuo.

O repositório será atualizado conforme novos conceitos, componentes e testes forem realizados.

---

> Acessibilidade não é apenas fazer com que uma interface "funcione com leitor de tela".
> É garantir que diferentes pessoas consigam perceber, compreender, navegar e utilizar uma experiência digital.
