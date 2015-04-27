describe("Sacar dinheiro", function() {
  var operacao;

  beforeEach(function() {
    operacao = new OperacoesBancarias();

    /*
    // Mock
    operacao = jasmine.createSpyObj('OperacoesBancarias',
      [
        'set_valor_a_ser_sacado', 'get_valor_a_ser_sacado',
        'set_primeira_letra', 'set_segunda_letra', 'set_terceira_letra',
        'get_padrao_letra', 'get_verificar_letras',
        'sacar'
      ]);
      
    operacao.get_valor_a_ser_sacado.and.callFake(function(){
      return 10;
    });
    */

    spyOn(operacao, "get_saldo").and.callFake(function(){
      return 800;
    });

    spyOn(operacao, "get_padrao_letras_servidor").and.callFake(function(){
      return ["Jas","Mi","Ne"];
    });
  });

  it("Deve inserir o valor a ser sacado", function() {
    operacao.set_valor_a_ser_sacado(10);
    expect(operacao.get_valor_a_ser_sacado()).toBe(10);
    expect(operacao.get_valor_a_ser_sacado()).toEqual(jasmine.any(Number));
  });

  it("Deve inserir as letras de segurança", function() {
    operacao.set_primeira_letra("Jas");
    operacao.set_segunda_letra("Mi");
    operacao.set_terceira_letra("Ne");

    expect(operacao.get_padrao_letra()).toEqual(["Jas","Mi","Ne"]);
  });

  it("Deve verificar as letras de segurança", function() {
    operacao.set_primeira_letra("Jas");
    operacao.set_segunda_letra("Mi");
    operacao.set_terceira_letra("Ne");

    expect(operacao.get_verificar_letras()).toBe(true);
  });

  it("Deve sacar o dinheiro", function() {
    operacao.set_valor_a_ser_sacado(200);

    operacao.set_primeira_letra("Jas");
    operacao.set_segunda_letra("Mi");
    operacao.set_terceira_letra("Ne");

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
      operacao.set_primeira_letra("Jas");
      operacao.set_segunda_letra("Mu");
      operacao.set_terceira_letra("Ni");

      expect(operacao.get_verificar_letras()).not.toBe(true);
      expect(operacao.sacar()).toBe(false);
    });

    it("Não deve sacar o dinheiro se o saldo for insuficiente", function() {
      operacao.set_valor_a_ser_sacado(10000);

      operacao.set_primeira_letra("Jas");
      operacao.set_segunda_letra("Mi");
      operacao.set_terceira_letra("Ne");

      expect(operacao.get_valor_a_ser_sacado()).toBe(10000);
      expect(operacao.get_verificar_letras()).toBe(true);
      expect(operacao.sacar()).toBe(false);
    });
  });
});

describe("Consultar saldo", function() {
  it("Deve verificar as letras de segurança", function() {

  });

  xit("Deve exibir o saldo atual para o usuário", function() {

  });
});
