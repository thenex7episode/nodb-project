const express = require('express')
const bodyParser = require('body-parser')
const PORT = 3050
const ctrl = require ('./controller')

const app = express()
app.use(bodyParser.json())

app.get('/api/genre/:genre', ctrl.read)
app.post('/api/create', ctrl.create)
app.put('/api/update/:id', ctrl.update)
app.delete('/api/delete/:id', ctrl.delete)
app.listen(PORT, () => console.log('And we are live on Port:' + PORT))