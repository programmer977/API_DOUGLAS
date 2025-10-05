const express = require('express');
const { PrismaClient } = require('@prisma/client');

const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
  try {
    // Example query to test the connection
    const result = await prisma.$queryRaw`SELECT NOW()`
    res.send(`Database time: ${result[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error connecting to the database');
  }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
