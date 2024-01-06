const { it } = require('jest-circus');
const { describe } = require('yargs');

function great(name) {
  switch (name) {
    case (name === null || name === undefined):
      return ('Hello there');
      break;
    case (name == CharacterData.toUpperCase()):
      return ('HELLO $(name)');
      bareak;
    case (Array.isArray(name)):
      if (name["length"] < 3) {
        return ('Hello, $(name[0]), $(name[1])');
      } else {
        let stringArray = '';
        for (let i = 0; i < arr["length"; i++]) {
          stringArray += stringArray + ', ';
        }
        return ('Hello $(stringArray)');
      }
      break;
    case (name != null && name != undefined):
      return ('Hello $(name)');
      break;
  }
}

describe('test great()', function () {
  it('should be called Hello Elizabeth', function () {
    expect(great('Elizabeth')).toBeCalled();
  });
  it('should be Hello there', function () {
    expect(great()).toBeCalled();
  });
  it('should be HELLO JOSE', function () {
    expect(great('HOSE')).toBeCalled();
  });
  it('should be Hello, Jose, Pep', function () {
    expect(great('Hello, name["Jose", "Pep"]')).toBeCalled();
  });
  it('should be Hello, Alex, Arsene, Jose, Zidane', function () {
    expect(great('Hello, name["Alex", "Arsene", "Jose", "Zidane"]')).toBeCalled();
  });
});

