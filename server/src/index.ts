import { initGraphqlServer } from './app/server';

const PORT = process.env.PORT ?? 8080;

async function startServer() {
  const app = await initGraphqlServer()
  app.listen(PORT, () => {
    console.log(`> server is running on http://localhost:${PORT}`)
    console.log(`> graphql studio is live on http://localhost:${PORT}/graphql`)
  });
}

startServer()