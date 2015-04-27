function OperacoesBancarias() {
  this.valor_a_ser_sacado = null;
  this.primeira_letra = "";
  this.segunda_letra = "";
  this.terceira_letra = "";

  this.set_valor_a_ser_sacado = function(valor) {
    this.valor_a_ser_sacado = valor;
  };

  this.get_valor_a_ser_sacado = function() {
    return this.valor_a_ser_sacado;
  };

  this.set_primeira_letra = function(primeira_letra) {
    this.primeira_letra = primeira_letra;
  };

  this.set_segunda_letra = function(segunda_letra) {
    this.segunda_letra = segunda_letra;
  };

  this.set_terceira_letra = function(terceira_letra) {
    this.terceira_letra = terceira_letra;
  };

  this.get_padrao_letra = function() {
    return [this.primeira_letra, this.segunda_letra, this.terceira_letra];
  }

  this.get_padrao_letras_servidor = function() {
    // deve fazer uma requisição ao servidor para saber quais são as letras padrões
  };

  this.get_verificar_letras = function() {
    return this.get_padrao_letras_servidor().equals(this.get_padrao_letra());
  };

  this.get_saldo = function() {
    // deve fazer uma requisição ao servidor para saber qual o saldo atual
  }

  this.sacar = function() {
    return (this.valor_a_ser_sacado > 0 && this.valor_a_ser_sacado <= this.get_saldo() && this.get_verificar_letras());
  };
}
