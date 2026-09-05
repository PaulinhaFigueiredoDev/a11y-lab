# Guia de contribuição

## Nomeação de branches

Use o formato:

```text
<tipo>/<descricao-curta>
```

A descrição deve ser escrita em minúsculas, sem acentos, usando hífen para separar as palavras.

### Tipos permitidos

| Tipo | Uso |
| --- | --- |
| `feature` | Nova funcionalidade ou componente |
| `fix` | Correção de um problema |
| `docs` | Alterações exclusivamente em documentação |
| `test` | Criação ou alteração de testes |
| `refactor` | Refatoração sem mudança de comportamento |
| `style` | Formatação ou ajustes visuais |
| `chore` | Configurações, dependências e tarefas de manutenção |
| `hotfix` | Correção urgente em produção |

### Exemplos

```text
feature/componente-accordion
fix/foco-do-modal
docs/guia-de-testes
test/button-acessivel
chore/configurar-next
```

### Boas práticas

- Mantenha a branch pequena e relacionada a uma única tarefa.
- Evite nomes genéricos como `teste`, `mudancas` ou `nova-branch`.
- Não use espaços, letras maiúsculas, acentos ou caracteres especiais.
- Não inclua nomes de pessoas ou datas sem necessidade.
- Atualize a branch antes de começar o trabalho:

  ```bash
  git switch main
  git pull origin main
  git switch -c feature/nome-da-tarefa
  ```

- Antes de abrir o pull request, sincronize a branch novamente com `main` e confirme que os testes passam.

## Commits

Sempre que possível, use mensagens no padrão Conventional Commits:

```text
<tipo>(<escopo>): <descricao>
```

Exemplos:

```text
feat(accordion): adiciona controle de teclado
fix(modal): corrige gerenciamento de foco
chore(config): adiciona ferramentas de acessibilidade
docs(readme): atualiza instrucoes de instalacao
```
