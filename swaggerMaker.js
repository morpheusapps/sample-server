module.exports = {
  info: {
    title: 'COMMON-ENTITIES',
    version: '1.0.0',
    description: 'COMMON-ENTITIES'
  },
  host: 'localhost:3000',
  basePath: '/',
  tags: [
    {
      name: 'General'
    }
  ],
  apis: ['./src/routes/**/*.ts']
};
