# ♿ A11y Lab

Playground prático para aprender, praticar e validar acessibilidade na Web por meio de testes manuais.

A página reúne componentes interativos, orientações de navegação por teclado e leitor de tela, testes para Web e mobile, além de instruções para usar Lighthouse e axe como ferramentas de apoio.

## Objetivo

Praticar o caminho entre:

`HTML → DOM → Accessibility Tree → navegador → tecnologia assistiva → pessoa usuária`

O foco do projeto é entender se uma interface pode ser percebida, compreendida, navegada e operada por diferentes pessoas.

## O que existe no playground

A página principal contém exemplos funcionais para investigar:

- Formulários, labels, erros e validação
- Modal / Dialog
- Dropdown / Menu
- Tabs
- Accordion
- Autocomplete / Combobox
- Toast / Live Region
- Carrossel
- Tabela
- Foco e navegação por teclado

Cada exemplo apresenta estados e comportamentos para serem observados manualmente.

## Como estudar

### Testes Web

Use teclado físico e verifique:

- `Tab`: próximo componente interativo
- `Shift + Tab`: componente anterior
- `Enter` e `Espaço`: ativação
- Setas: navegação dentro de tabs, menus e autocomplete
- `Escape`: fechamento de diálogos, menus e sugestões
- `Home` e `End`: primeiro e último item, quando aplicável

Observe se o foco é visível, previsível e segue uma ordem lógica.

### Testes Web com leitor de tela

#### NVDA + Chrome

- Navegue por headings, landmarks, links e botões.
- Teste os campos e confirme label, valor e mensagem de erro.
- Confirme se estados como aberto, selecionado e fechado são anunciados.
- Verifique mensagens dinâmicas e mudanças de foco.

#### VoiceOver + Safari

- Navegue pelos itens usando o teclado do VoiceOver.
- Use o Rotor para headings, links, botões e campos.
- Teste formulários, diálogos, menus e conteúdo dinâmico.
- Confirme se o foco entra e retorna corretamente nos componentes.

O foco do navegador e a leitura do conteúdo devem permanecer coerentes. Quando um diálogo abre, o foco deve entrar nele; quando fecha, deve retornar ao controle que o abriu.

### Testes mobile

#### iPhone + VoiceOver

- Deslize para a direita ou esquerda para navegar.
- Toque para selecionar e toque duas vezes para ativar.
- Deslize com três dedos para rolar.
- Use o Rotor para mudar o tipo de navegação.

#### Android + TalkBack

- Deslize para a direita ou esquerda para mover o foco.
- Explore por toque para ouvir o item sob o dedo.
- Toque duas vezes para ativar.
- Deslize com dois dedos para rolar.
- Use os controles de leitura para headings, links, tabelas e campos.

Os gestos podem variar conforme sistema, versão, aparelho e configuração do leitor de tela.

## O que observar

Para cada componente, verifique:

- Todos os controles são alcançáveis pelo teclado?
- A ordem de foco é lógica?
- O foco permanece visível?
- O controle possui nome acessível?
- Nome, função, estado e valor são anunciados?
- Mensagens de erro são compreensíveis?
- Mudanças dinâmicas são anunciadas?
- O foco é gerenciado ao abrir e fechar componentes?
- A experiência continua compreensível sem depender de cor?
- A página funciona com zoom e em telas pequenas?

## Lighthouse e axe

As ferramentas automatizadas são usadas como apoio à investigação manual.

### Lighthouse

1. Abra o DevTools do navegador.
2. Acesse a aba Lighthouse.
3. Selecione a categoria Accessibility.
4. Gere um relatório para mobile ou desktop.
5. Investigue cada apontamento no código e na interface.

### axe

1. Abra a extensão ou o painel axe no DevTools.
2. Execute uma análise da página.
3. Leia cada resultado e sua recomendação.
4. Reproduza o problema usando teclado e leitor de tela.
5. Registre a decisão e a correção no seu roteiro de estudo.

Lighthouse e axe ajudam a encontrar problemas estruturais e de contraste, mas não substituem a validação manual de foco, ordem, contexto, operação e qualidade dos anúncios.

## Tecnologias

- HTML
- CSS
- JavaScript
- Chrome DevTools
- Lighthouse
- axe

## Tecnologias assistivas

| Plataforma | Navegador | Tecnologia assistiva |
| --- | --- | --- |
| Windows | Chrome | NVDA |
| macOS | Safari | VoiceOver |
| iOS | Safari | VoiceOver |
| Android | Chrome | TalkBack |

## Estrutura

```text
a11y-lab/
├── fundamentals/
│   ├── index.html
│   ├── styles.css
│   └── script.js
├── package.json
├── package-lock.json
└── README.md
```

## Como executar

### Pré-requisitos

- Node.js 18 ou superior
- npm 9 ou superior
- Python 3

O projeto não possui dependências npm externas.

### Iniciar

Na raiz do projeto, execute:

```bash
npm run dev
```

Acesse:

<http://localhost:8000/>

Também é possível abrir `fundamentals/index.html` diretamente no navegador.

## Referências oficiais

- [W3C WAI — Easy Checks](https://www.w3.org/WAI/test-evaluate/preliminary/)
- [W3C APG — Keyboard Interface](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)
- [W3C APG — Tabs](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/)
- [W3C APG — Accordion](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/)
- [W3C APG — Dialog](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/)
- [WCAG 2.2 — Focus Order](https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html)
- [W3C WAI — Visible Keyboard Focus](https://www.w3.org/WAI/test-evaluate/easy-checks/keyboard-focus/)
- [WebAIM — Testing with Screen Readers](https://webaim.org/articles/screenreader_testing/)
- [WebAIM — Using NVDA](https://webaim.org/articles/nvda/)
- [Apple — VoiceOver no Mac](https://support.apple.com/guide/voiceover/welcome/mac)
- [Apple — Gestos do VoiceOver no iPhone](https://support.apple.com/guide/iphone/iph3e2e2281/ios)
- [Google — TalkBack no Chrome](https://support.google.com/accessibility/android/answer/2633135?hl=pt-BR)
- [Google — Gestos do TalkBack](https://support.google.com/accessibility/android/answer/6151827?hl=pt-BR)

A validação pode variar conforme navegador, sistema operacional, versão do leitor de tela, configurações do dispositivo e tecnologia assistiva utilizada.

> Acessibilidade não é apenas fazer uma interface funcionar com um leitor de tela. É garantir que diferentes pessoas consigam perceber, compreender, navegar e utilizar uma experiência digital.
