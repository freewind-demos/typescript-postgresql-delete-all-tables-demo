import "reflect-metadata";

import {Client} from 'pg';

const dbName = 'typescript-postgresql-delete-all-tables-demo';

async function main() {
  console.log('### > main')

  const client = new Client({
    user: 'demo',
    host: 'localhost',
    database: dbName,
    password: '123456',
    port: 5432,
  })

  await client.connect()

  const tableNames = ['aaa', 'bbb', 'ccc']
  for (const tableName of tableNames) {
    console.log("### create table:", tableName);
    await client.query(`create table ${tableName} (id text PRIMARY KEY)`)
  }

  // clear all tables
  const sql = "SELECT table_name FROM information_schema.tables WHERE table_type='BASE TABLE' AND table_schema='public'";

  // [{ table_name: 'aaa' }, { table_name: 'bbb' }, { table_name: 'ccc' }]
  const result = await client.query<{ table_name: string }>(sql)

  const existingTableNames = result.rows.map(it => it.table_name)
  console.log('### existingTableNames', existingTableNames);

  for (const tableName of existingTableNames) {
    console.log("### delete table:", tableName);
    await client.query(`drop table ${tableName}`);
  }

  await client.end()
}

main()
