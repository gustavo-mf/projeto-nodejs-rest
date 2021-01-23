const custemExpress = require('./config/customExpress');
const conexao = require('./infraestrutura/conexao');
const Tabelas = require('./infraestrutura/tabelas');

conexao.connect((erro) => {
  if(erro) {
    console.log(erro);
  } else {
    console.log('conectou com sucesso');
    Tabelas.init(conexao);
    const app = custemExpress();

    app.listen(3000, () => {
      console.log('Servidor rodando na porta 3000');
    })
  }
});
