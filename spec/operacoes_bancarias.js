describe("Sacar dinheiro", function() {
  var operacao;

  beforeEach(function() {
    operacao = new OperacoesBancarias();
  });

  it("Deve inserir o valor a ser sacado", function() {
    operacao.set_valor_a_ser_sacado(10);
    expect(operacao.get_valor_a_ser_sacado()).toEqual(jasmine.any(Number));
  });

  it("Deve inserir as letras de segurança", function() {
    operacao.set_primeiro_padrao_letra("Jas");
    operacao.set_segunda_padrao_letra("Mi");
    operacao.set_terceira_padrao_letra("Ne");

    expect(operacao.get_padrao_letra()).toBe(["Jas","Mi","Ne"]);
  });

  it("Deve verificar as letras de segurança", function() {
    operacao.set_primeiro_padrao_letra("Jas");
    operacao.set_segunda_padrao_letra("Mi");
    operacao.set_terceira_padrao_letra("Ne");

    expect(operacao.get_verificar_letras()).toBe(true);
  });

  it("Deve sacar o dinheiro", function() {
    operacao.set_valor_a_ser_sacado(200);

    operacao.set_primeiro_padrao_letra("Jas");
    operacao.set_segunda_padrao_letra("Mi");
    operacao.set_terceira_padrao_letra("Ne");

    expect(operacao.get_valor_a_ser_sacado()).toEqual(jasmine.any(Number));
    expect(operacao.get_verificar_letras()).toBe(true);
    expect(operacao.sacar()).toBe(true);
  });

  describe("Quando houver algum erro", function() {

    it("Não deve sacar o dinheiro se o valor não for informado", function() {
      expect(operacao.get_valor_a_ser_sacado()).not.toEqual(jasmine.any(Number));
      expect(operacao.sacar()).toBe(false);
    });

    it("Não deve sacar o dinheiro se as letras de segurança não forem válidas", function() {
      operacao.set_primeiro_padrao_letra("Jas");
      operacao.set_segunda_padrao_letra("Mu");
      operacao.set_terceira_padrao_letra("Ni");

      expect(operacao.get_verificar_letras()).not.toBe(true);
      expect(operacao.sacar()).toBe(false);
    });

    it("Não deve sacar o dinheiro se o saldo for insuficiente", function() {
      operacao.set_valor_a_ser_sacado(10000);

      operacao.set_primeiro_padrao_letra("Jas");
      operacao.set_segunda_padrao_letra("Mi");
      operacao.set_terceira_padrao_letra("Ne");

      expect(operacao.get_valor_a_ser_sacado()).toBe(10000);
      expect(operacao.get_verificar_letras()).toBe(true);
      expect(operacao.sacar()).toBe(false);
    });
  });
});

describe("Consultar saldo", function() {
  it("Deve verificar as letras de segurança", function() {
    
  });
  
  it("Deve exibir o saldo atual para o usuário", function() {
    
  });
});