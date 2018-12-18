

describe('ucFirst', function() {
  it('Первая буква заглавная в слове Привет ', function(){
    assert.equal(ucFirst('привет'), 'Привет');
  });
  it('Проверка на пустую строку ', function(){
    assert.equal(ucFirst(''), '');
  });
});
