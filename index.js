const custemExpress = require('./config/customExpress');

const app = custemExpress();

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
})

