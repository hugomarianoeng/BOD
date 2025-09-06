# Site de Teste - Deploy Umbler

Este é um site simples criado especificamente para testar o processo de deploy na plataforma Umbler.

## 📁 Estrutura do Projeto

```
├── public/                 # Pasta principal (servida pela Umbler)
│   ├── index.html         # Página principal
│   ├── css/
│   │   └── style.css      # Estilos CSS
│   ├── js/
│   │   └── script.js      # Scripts JavaScript
│   └── .htaccess          # Configurações do servidor
└── README.md              # Este arquivo
```

## 🚀 Como fazer o deploy na Umbler

### Pré-requisitos
- Conta na Umbler
- Repositório Git configurado
- Branch **master** (não main!)

### Passos para o deploy:

#### Opção 1: Deploy via Git (Recomendado)
1. **Configure o repositório**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M master  # Umbler usa 'master', não 'main'
   git remote add origin <seu-repositorio>
   git push -u origin master
   ```

2. **Configure na Umbler**
   - Acesse o painel da Umbler
   - Vá em "Deploy" ou "Git"
   - Conecte seu repositório
   - **Importante**: Configure para usar a branch **master**
   - **Importante**: Configure o diretório público como **public**

3. **Deploy automático**
   - A Umbler irá buscar os arquivos da pasta `public/`
   - Cada push na branch `master` fará deploy automático

#### Opção 2: Upload manual
1. **Acesse o painel da Umbler**
   - Faça login em sua conta
   - Vá para o gerenciador de arquivos

2. **Upload dos arquivos**
   - Faça upload de todos os arquivos da pasta `public/`
   - **NÃO** faça upload da pasta `public` em si
   - Faça upload do **conteúdo** da pasta `public` para a raiz

3. **Estrutura final no servidor**
   ```
   public_html/
   ├── index.html
   ├── css/
   │   └── style.css
   ├── js/
   │   └── script.js
   └── .htaccess
   ```

### ⚠️ Configurações Importantes da Umbler

- **Branch**: Sempre use `master` (não `main`)
- **Pasta pública**: Configure para `public` no painel
- **Domínio**: Aponte para a pasta correta
- **PHP**: Não necessário para este projeto

## 🎯 Funcionalidades do Site

- **Design Responsivo**: Adaptável a diferentes tamanhos de tela
- **Interatividade**: Botão de teste com feedback visual
- **Animações**: Efeitos suaves de scroll e entrada
- **Status do Deploy**: Informações sobre data e status
- **Navegação Suave**: Links com scroll suave entre seções

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com Flexbox e Grid)
- JavaScript (ES6+)
- Google Fonts (Inter)
- Configurações Apache (.htaccess)

## 📱 Compatibilidade

- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis

## 🔧 Comandos Git para Umbler

```bash
# Primeiro deploy
git init
git add .
git commit -m "Site de teste para Umbler"
git branch -M master
git remote add origin <seu-repositorio>
git push -u origin master

# Atualizações futuras
git add .
git commit -m "Atualização do site"
git push origin master
```

## 🔍 Verificação do Deploy

Após o deploy, teste:

1. ✅ Site carrega corretamente
2. ✅ CSS e JS funcionam
3. ✅ Botão "Testar Funcionalidade" responde
4. ✅ Site é responsivo no mobile
5. ✅ Navegação suave funciona

## 📞 Troubleshooting

**Problema**: Site não carrega
- ✅ Verifique se está usando branch `master`
- ✅ Confirme que a pasta pública está configurada como `public`
- ✅ Verifique se o `index.html` está na raiz da pasta pública

**Problema**: CSS/JS não carregam
- ✅ Verifique os caminhos relativos
- ✅ Confirme que as pastas `css/` e `js/` foram enviadas
- ✅ Verifique permissões dos arquivos

**Problema**: Deploy não atualiza
- ✅ Confirme que está fazendo push na branch `master`
- ✅ Verifique os logs de deploy no painel da Umbler
- ✅ Limpe o cache do navegador

---

**Desenvolvido especificamente para a Umbler** 🚀  
**Branch: master | Pasta pública: public**