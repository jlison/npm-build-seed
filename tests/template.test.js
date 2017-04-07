let Template = require('../src/modules/template').Template;

describe('Template class tests', () => {

  test('isString static method returns true when var is a string', () => (
    expect(
      Template.isString('this is a string')
    ).toBeTruthy()
  ));

  test('isString static method returns true when var is a string', () => (
    expect(
      Template.isString({ not : 'a string'})
    ).toBeFalsy()
  ));

});
