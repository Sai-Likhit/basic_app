const { Pool } = require('pg');

const pool = new Pool({ connectionString: "postgresql://postgres:9809@localhost:5432/registrationdb" });

pool.connect()
  .then(() => console.log('Connected to PostgreSQL'))
  .catch(err => {
    console.error('PostgreSQL connection error:', err);
    process.exit(1);
  });

module.exports = pool;