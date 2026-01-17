# Blus-3D

Projeto Next.js com Tailwind CSS.

## Estrutura do projeto

- `app/`: rotas e layout da aplicacao (App Router).
- `app/page.jsx`: pagina inicial.
- `app/layout.jsx`: layout base.
- `app/globals.css`: estilos globais.
- `next.config.js`: configuracao do Next.js.
- `tailwind.config.js` e `postcss.config.js`: configuracao do Tailwind e PostCSS.
- `Dockerfile` e `.dockerignore`: build e runtime com Docker.
- `package.json`: scripts e dependencias.

## Como usar

### Requisitos

- Node.js 18+ e npm

### Rodar localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

### Build e producao

```bash
npm run build
npm run start
```

### Docker

```bash
docker build -t blus-3d .
docker run -p 3000:3000 blus-3d
```

## Deploy

Suba o repositorio no GitHub e importe no Vercel.
