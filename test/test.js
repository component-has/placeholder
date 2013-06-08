
describe('component-has/textarea-placeholder', function(){
  var has = require('placeholder');
  it('should export a boolean', function(){
    assert('boolean' == typeof has);
  })

  function assert(expr){
    if (!expr) throw new Error('expected a boolean to be exported');
  }
});
