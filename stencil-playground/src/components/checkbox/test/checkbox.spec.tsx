import { newSpecPage } from '@stencil/core/testing';
import { Checkbox } from '../checkbox';

describe('checkbox-van', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [Checkbox],
      html: `<checkbox-van></checkbox-van>`,
    });
    expect(page.root).toEqualHtml(`
      <checkbox-van>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </checkbox-van>
    `);
  });
});
