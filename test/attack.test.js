const Attack = require('../attack.js');
const test = require('tape');

test('Attack damage roll single die', t => {
  c = new Attack(6, 1);
  d = c.damageRoll(1);
  if(d <= 1 || d > 7){
    t.fail('Damage roll out of valid range');
  } else {
    t.pass('Damage roll within valid range');
  }
  t.end();
});

test('Attack damage roll multiple dice', t => {
  c = new Attack(6, 3);
  d = c.damageRoll(1);
  if(d <= 4 || d > 19){
    t.fail('Damage roll out of valid range');
  } else {
    t.pass('Damage roll within valid range');
  }
  t.end();
});
