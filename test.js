describe("multiplyNumeric", function() {
  it("умножает численные свойства на 2", function() {
    var menu = {
      width: 200,
      height: '300',
      title: 'menu'
    };
    multiplyNumeric(menu);
    assert.equal(menu.width, 400);
    assert.equal(menu.height, 600);
    assert.equal(menu.title, 'menu');
  });
});


describe('isEmpty', function() {
  it('Пустой обьект - true ', function(){
    assert.isTrue(isEmpty({}));
  });
  it('Любое свойство - false ', function(){
    assert.isFalse(isEmpty({
      anything: false
    }));
  });
});

describe('ucFirst', function() {
  it('Первая буква заглавная в слове Привет ', function(){
    assert.equal(ucFirst('привет'), 'Привет');
  });
  it('Проверка на пустую строку ', function(){
    assert.equal(ucFirst(''), '');
  });
});

describe('checkSpam', function() {
  it('Строка содоржит слово viagra ', function(){
    assert.equal(checkSpam('buy ViAgRA now'), true);
  });
  it('Строка содоржит слово XXX ', function(){
    assert.equal(checkSpam('free xxxxx'), true);
  });
  it('Строка НЕ содоржит слово XXX или viagra', function(){
    assert.equal(checkSpam('free x1x2x3x'), false);
  });
});

describe('truncate', function() {
  it('Строка должна быть обрезана', function(){
    assert.equal(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20),'Вот, что мне хоте...');
  });
  it('Строка НЕ должна быть обрезана', function(){
    assert.equal(truncate('Всем привет!', 20), 'Всем привет!');
  });
});

describe('truncate', function() {
  it('извлекаемм 120 из $120', function(){
    assert.equal(extractCurrencyValue('$120'),120);
  });
});
