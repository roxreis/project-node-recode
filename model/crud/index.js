const {query} = require ("../conexao/index")

const selectItens = (req,res) => {
    query('SELECT * FROM material_escritorio.material;', (error, result) => {
        res.render('index', {dados:result}); 
 
    })
}
const saveItens = (req,res) => {
    const {material} = req.body
    query('INSERT INTO material SET ?', material, res.redirect('/'))
}

module.exports = {selectItens, saveItens}