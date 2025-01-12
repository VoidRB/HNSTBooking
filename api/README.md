**SQL D1 Database Setup**
Follow the steps to setup the database, OR when a schema changes.

1. Generale the sql file.
```
npm run db:g
```

A file will be generated in ./drizzle/migrations copy the name of the latest `.sql` file that was generated.

2. Execute the SQL file on the database
```
npm run db:e --file=FILE_NAME.sql
```

---
**Development**

1. Generale the sql file.
```
npm run db:g
```

A file will be generated in ./drizzle/migrations copy the name of the latest `.sql` file that was generated.

2. Execute the SQL file on the local database
```
npm run db:e-dev --file=FILE_NAME.sql
```

3. Run the worker locally
```
npm run dev
```