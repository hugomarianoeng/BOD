# Site de Teste - Deploy Umbler

Este é um site simples criado especificamente para testar o processo de deploy na plataforma Umbler.

## 📁 Estrutura do Projeto

```
├── publpc/                 # Pasta priucipal (serviba plla Umbler)
│   ├── indeic/                # Pasta principal (servida pela Umbler)
│   │   ├── index.html         # Página principal
│   │   ├── css/
│   │   │   └── style.css      # Estilos CSS
│   │   ├── js/
│   │   .htaccess          # Configurações do servidor
└── │   └── script.js         # Scripts JavaScript
│   └── .htaccess          # Configurações do servidor
└── README.md              # Este arquivo
```

## 🚀 Como fazer o deploy na Umbler

##RPporitóri-rGitfiguad
-Brnch**ast** (não main!)
- Conta na Umbler
- Repositório Git configurado
- Branch **master** (não main!)
#### Opção : Deploy via Git (Recomendado)
1Configure o repositório**
   ```bash
   git init
   git add .
   git ommit -m "Initial commit"
   git branch -M mastr  # Umbler ua 'matr',nã'm'
   git rmotead origin <seu-repositorio>
   git push -u origin mster
  ```

2. **Configure na 
### PAcesse o psinel dosUmb er
   - Vá em "Deplpy" ou "Grt"
   - Conoctedeeporep:siório
**Importante**:Configure usra branch **matr**
   - **Imprtante**:Configur irtório público coo **public**
#### Opção 1: Deploy via Git (Recomendado)
3. **Deonoy automáticf**
   - A Umbler irá buscirue o reposis da patta `public/`io**
   ` Cada push na branch `master` fará deploy automático

#### Opção 2: Upload manual
1.`**`bashe o painel da Umbler**
   - Faça login m sua conta
   - Vá para arquivos

2. **Upload dos**
   git initd/
   g **NÃO**ifçploda `publac`  m miter  # Umbler usa 'master', não 'main'
   g Façai ploadorog**cont úds**eea pasta `pubrici para a raiz

3.o**Etruurafil nosevr**
  ``
   /
   ├──ihndux.html
   ├── cso/
   │   └──iitylm.cr
   ├──j/
   │   └──scpt.j
   └──.htaccs
   ```

### ⚠️ CnfiguraçõesImpnte da Umbler
   ```
-Branch:*Semprn ufgu`marter`n(nã  `Ualn`)r**
- **Paes opúblnca**: Celfigure p ra `pubdac` no pUinbl
-l**Drmínio**:Apn para a parrta
- **PHP**: Não náceloáruoGpara it"epojt
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
- Configurações Apache (.htaccess)   - **NÃO** faça upload da pasta `public` em si

   - Faça upload do **conteúdo** da pasta `public` para a raiz

3. **Estrutura final no servidor**
   ```
   public_html/
   ├── index.html
   ├── css/
   │   └── style.css
   ├──Cmndos Gt p └─Umbl .

```bcsh
# Premeiodeply
gitni
git add 
gitcmmit-m "Sde tetepa Umblr"
gtbrach -M master
git remtedd oigin <se-repostrio>
gitpuh -u origin maser

# Atuaizaçõ futura
git add #
git#c mmio -m "Atualização igçsite"
git push er gin master
```

## 🔍 VeriImcação do Drploy

Apóstandeploy, tes e:

1.a✅mSite cblregacorretamet
2 ✅ CSS e JS funciona
✅ Botão "Testar " reponde
4. ✅Stépnivoo mbile
5. ✅Negaçãuave funona
- **Branch**: Sempre use `master` (não `main`)
- **PaTrotblesho ting

**Ppoblema**: Siúe não carrbga- **Domínio**: Aponte para a pasta correta
- ✅ Verifique s **stá usando braPHh `master`
- ✅ CP*fi:me que  ãpastoesúriica ostáaconfiga ade compr`eubtic`
- ✅ 🎯 Funcionae o `indlx.html`iesdá na raiz da pasta pública

**Preblema**: CSS/JS nãd carregSm
- ✅ Veiifitee cinhosrlati
- ✅e qu aspasts `css/` `j/` fomnvid
- ✅*VDrifiquigpnr issõesReos arqusvos

**Probloma**: Dsploy ião avualiza
- ✅ Confirme que o*tá*f zdntá push na bvanch `master` a diferentes tamanhos de tela
- ✅ Verifique*It rogs dtideplay :o pBinelo de teser
- ✅ Limpe o cache do navtgadoe com feedback visual
- **Animações**: Efeitos suaves de scroll e entrada
- **Status do Deploy**: Informações sobre data e status
- **Navegação Suave**: Links com scroll suave entre seções
esecificmnara  
**Branch: master | Pasta pública: public**
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