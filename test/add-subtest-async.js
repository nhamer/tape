var test = require('../')

test('parent', function (t) {
  t.pass('parent');
  setTimeout(function () {
    t.test('child', function (g) {
      g.pass('child');
      g.end();
    });
    t.end();
  }, 100)
})
