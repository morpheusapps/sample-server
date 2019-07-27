import { runServer } from './server';

const port = process.env.PORT || 3000;

runServer({ url: 'http://localhost', port });
