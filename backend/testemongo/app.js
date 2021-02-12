const app = require('./src/config/server.js');
const connection = require('./src/config/connection.js');
const Produtos = require ('./src/models/Produtos.js');
const mensagemSchema = require ('./src/models/Mensagem.js');
const mensagemModel = require('./src/models/Mensagem.js');

// SELECT - produtos
app.get("/produto", async (req, res) => {
    const resultado = await Produtos.find()

    res.json(resultado)
})

// select - mensagens 

app.get('/mensagem', async (req, res) => {
    res.json(await mensagemModel.find());
  });

  // insert - mensagens
  app.post('/mensagem', async (req, res) => {
    const { nome, msg } = req.body;
    res.json(await mensagemModel.create({ nome, msg }));
  });

  // ************************

// INSERT - produto
app.post("/produto", async (req, res) => {
    const { nome, preco } = req.body

    let resultado = await Produtos.create({ nome, preco })

    res.json(resultado)
})

// UPDATE - produto
app.put("/produto/:id", async (req, res) => {
    const { id } = req.params
    const { nome, preco } = req.body

    // 1 - condição
    let resultado = await Produtos.updateOne({ _id: id }, {
        nome, preco
    })

    res.json(resultado)
})

// DELETE - produto
app.delete("/produto", async (req, res) => {
    const { id } = req.body

    let resultado = await Produtos.deleteOne({ _id: id })

    res.json(
        resultado
    )
})

