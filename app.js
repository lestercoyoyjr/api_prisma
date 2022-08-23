const express = require('express')
const {PrismaClient} = require('@prisma/client')

const prism = new PrismaClient
const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.send('HOLA MUNDO')
})

// ENDPOINTS

app.listen(3001, () =>
    console.log(`Server ready at: http//:localhost:3001`)
)