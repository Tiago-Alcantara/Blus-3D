# Next.js Docker Vercel

This is a minimal Next.js project configured for Docker and Vercel.

## Local dev

```bash
npm install
npm run dev
```

## Docker

```bash
docker build -t nextjs-docker-vercel .
docker run -p 3000:3000 nextjs-docker-vercel
```

## Vercel

Push this repo to GitHub and import it on Vercel.
