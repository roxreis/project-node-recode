const {query} = require ("../conexao/index")

const selectItens = (req,res) => {
    query('SELECT * FROM material_escritorio.material;', (error, result) => {
        res.render('index', {dados:result}); 
 
    })
}


const saveItens = (req,res) => {
    const { nome, quant, preco } = req.body
    query(`INSERT INTO material(nome_produto,quantidade,preco) VALUES ('${nome}','${quant}','${preco}')`,res.redirect('/'))
}


module.exports = {selectItens, saveItens}