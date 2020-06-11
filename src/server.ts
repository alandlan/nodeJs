import express from 'express';

const app = express();

app.get('/', (request, response) => response.json({ message: '🚀 Ok!' }));

app.listen('3333', () => {
  console.log('🚀 Server Started!');
});
