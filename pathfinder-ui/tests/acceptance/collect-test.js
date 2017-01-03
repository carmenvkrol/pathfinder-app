import { test } from 'qunit';
import moduleForAcceptance from 'pathfinder-ui/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | collect');

test('collect page', function(assert) {
  visit('/collect');

  andThen(function() {
    assert.equal(
      currentURL(),
      '/collect',
      'Should go to /collect when visit /collect'
    );

    assert.equal(
      find('.clue-item-component').length,
      2,
      'There should be 2 clue items when 2 clue records are returned from api'
    );
  });
});
