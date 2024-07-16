import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-tutorial/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | rental', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a rental property', async function (assert) {
    await render(hbs`<Rental />`);

    assert.dom('article').hasClass('rental');
    assert.dom('article h3').hasText('Grand Old Mansion');
    assert.dom('article .detail.owner').includesText('Veruca Salt');
    assert.dom('article .detail.type').includesText('Standalone');
    assert.dom('article .detail.location').includesText('San Francisco');
    assert.dom('article .detail.bedrooms').includesText('15');
  });

  // eslint-disable-next-line qunit/no-commented-tests
  // test('it renders a rental property with dynamic data', async function (assert) {
  //   // 假設我們有一個模擬的租賃物業數據
  //   this.set('rental', {
  //     title: 'Amazing Apartment',
  //     owner: 'Veruca Salt',
  //     city: 'San Francisco',
  //     category: 'Condo',
  //     bedrooms: 3,
  //     image: 'fake-image-url.jpg',
  //     description: 'A stunning three-bedroom condo in the heart of the city.',
  //   });

  //   await render(hbs`<Rental @rental={{this.rental}} />`);

  //   assert
  //     .dom('article h3')
  //     .hasText('Amazing Apartment', 'The rental title is displayed');
  //   assert
  //     .dom('article .owner')
  //     .hasText('Owned by Veruca Salt', 'The owner name is displayed');
  //   assert
  //     .dom('article .city')
  //     .hasText('In San Francisco', 'The city is displayed');
  //   assert
  //     .dom('article .category')
  //     .hasText('Condo', 'The category is displayed');
  //   assert
  //     .dom('article .bedrooms')
  //     .hasText('3 bedrooms', 'The number of bedrooms is displayed');
  //   assert
  //     .dom('article img')
  //     .hasAttribute('src', 'fake-image-url.jpg', 'The image is displayed');
  //   assert
  //     .dom('article .description')
  //     .hasText(
  //       'A stunning three-bedroom condo in the heart of the city.',
  //       'The description is displayed'
  //     );
  // });
});
