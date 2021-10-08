module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 3002,
  username: 'postgres',
  password: 'TempPassword',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
