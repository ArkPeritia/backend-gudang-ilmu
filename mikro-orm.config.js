import { defineConfig } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations'; 
import { PostgreSqlDriver } from '@mikro-orm/postgresql';

export default defineConfig({
  // ...
  extensions: [Migrator],
  driver: PostgreSqlDriver,
  user: 'postgres',
  password: 'mag123gany',
  dbName: 'Gudang-ilmu',
  host: 'localhost',
  port: '5432',
  entities: ['./dist/entities']
})