const { text } = require("body-parser");

class Tabelas {
  init(conexao) {
    this.conexao = conexao;
    this.criarAtendimentos();
  }

  criarAtendimentos() {
    const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos ('
    +'  id int NOT NULL AUTO_INCREMENT, '
    +'  cliente varchar(50) NOT NULL, '
    +'  pet varchar(20),'
    +'  servico varchar(20) NOT null, '
    +'  data datetime not null, '
    +'  dataCriacao datetime not null, '
    +'  status varchar(20) NOT null, '
    +'  observacoes text, '
    +'  PRIMARY KEY(ID)'
    +')';

    this.conexao.query(sql, (erro) => {
      if(erro) 
        console.log(erro);
      else
        console.log('Tabela atendimentos criada');
    });
  }
}

module.exports = new Tabelas;