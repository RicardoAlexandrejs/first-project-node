const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

/* 
query params => meusite.com/users?name=ricardo&age=30 // exemplo de busca //Filtro 
Route params =>  /users/2 // utilizado para BUSCAR, DELETAR ou ATUALIZAR ALGO ESPECÍFICO
Request body => {"name":"Rodolfo", "Age":}

GET => Busca informação no back-end
POST => Cria informação no back -End
PUT / PATCH => Alterar / Atualizar informação no Back-end
DELETE => Deletar informação no back-end

Middleware => INTERCEPTADOR => Tem o poder de parar ou alterar dados de requisição

*/

// Trabalhando com Query params

app.get('/users', (request, response) => {
    /* const name = request.query.name
     const age = request.query.age*/
    const { name, age } = request.query // padrão Destructuring assignment abreviar código
    return response.json({ name: name, age: age })
})
// Trabalhando com Route params
app.get('/users/:id', (request, response) => { // dois ponto e o nome da variavel que será criada
        const {id} = request.params // padrão Destructuring assignment /criando uma variavel com a informação do params
        console.log(id)
        return response.json({id})
})

// Trabalhando com Request Body
app.get('/users', (request, response) => { 
    const {name, age} = request.body // requerindo as informação do body params
    
    return response.json({name, age})
})


app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})