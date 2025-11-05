# Upgrade Notes - v2.0.0

## Atualizações Realizadas

### Dependências Principais
- ✅ `commander`: 2.20.0 → 12.1.0 (atualização major)
- ✅ `cli-table`: substituído por `cli-table3` 0.6.5 (mais mantido e ativo)
- ✅ `clear`: removido (substituído por `console.clear()` nativo do Node.js)
- ✅ `osmosis`: substituído por `axios` + `cheerio` (osmosis não é compatível com Node.js 22+)

### DevDependencies
- ✅ `@fabiospampinato/bump`: removido (usar `npm version` nativo)
- ✅ `eslint`: adicionado na versão 9.16.0 com configuração moderna (flat config)

### Melhorias no Código
- ✅ Migrado para async/await (mais moderno e legível)
- ✅ Simplificado lógica de apresentação de resultados
- ✅ Melhor tratamento de erros
- ✅ Code moderno usando const/let em vez de var

### Configurações
- ✅ Adicionado `engines` no package.json (Node.js >= 18.0.0)
- ✅ Migrado ESLint para flat config (eslint.config.js)
- ✅ Atualizado scripts npm (lint, test)

### Package.json
- Lockfile atualizado de v1 para v3
- 0 vulnerabilidades de segurança
- Todas as dependências atualizadas para versões mantidas

## ⚠️ Problema Conhecido

O site bab.la implementou proteção anti-bot (provavelmente Cloudflare), retornando 403 Forbidden para requests automatizados.

### Possíveis Soluções Futuras:
1. Usar API oficial de conjugação (se existir)
2. Implementar com Puppeteer (mais pesado, mas contorna proteções)
3. Migrar para outro serviço de conjugação
4. Criar base de dados local de verbos irregulares

### Alternativas de APIs:
- [Reverso API](https://context.reverso.net/)
- [Words API](https://www.wordsapi.com/)
- [Free Dictionary API](https://dictionaryapi.dev/)

## Breaking Changes

### Para Desenvolvedores
- Requer Node.js >= 18.0.0
- `program` agora é importado como destructuring: `const { program } = require('commander')`
- Função `search()` agora é assíncrona

### Para Usuários
- Mesma interface de linha de comando
- Mesmo comportamento esperado (quando o site permitir acesso)

## Próximos Passos Sugeridos
1. ✅ Atualização de dependências
2. ⏳ Implementar testes unitários
3. ⏳ Adicionar GitHub Actions para releases automáticos
4. ⏳ Resolver problema de acesso ao bab.la
5. ⏳ Melhorias no código (TypeScript?)
