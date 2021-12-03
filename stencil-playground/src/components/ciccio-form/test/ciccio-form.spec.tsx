import { newSpecPage } from '@stencil/core/testing';
import { CiccioForm } from '../ciccio-form';

describe('ciccio-form', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CiccioForm],
      html: `<ciccio-form></ciccio-form>`,
    });
    expect(page.root).toEqualHtml(`
      <ciccio-form>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </ciccio-form>
    `);
  });
});
