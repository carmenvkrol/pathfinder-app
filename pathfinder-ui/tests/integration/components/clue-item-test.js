import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('clue-item', 'Integration | Component | clue item', {
  integration: true
});

test('it renders', function(assert) {
  this.set('clue', {
    desc: 'Must involve technology',
    category: 'gold',
    tags: ['tech'],
    datetime: '2016-11-28T00:00:00Z'
  });

  this.render(hbs`{{clue-item clue=clue categorizing=true}}`);

  assert.equal(
    this.$('span:first-child').text().trim(),
    this.get('clue.desc'),
    'Item should include desc');

  assert.equal(
    this.$('span:nth-child(2)').text().trim(),
    this.get('clue.category'),
    'When categorizing property is enabled, item should include category'
  );

  assert.equal(
    this.$('span:nth-child(3)').text().trim(),
    this.get('clue.tags')[0],
    'Item should include tag'
  );

  assert.equal(
    this.$('em').text().trim(),
    'Modified ' + this.get('clue.datetime'),
    'Item should include datetime'
  );
});
