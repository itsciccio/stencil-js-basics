import { newSpecPage } from '@stencil/core/testing';
import { SubmitBtn } from '../submit-btn';

describe('submit-btn', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SubmitBtn],
      html: `<submit-btn></submit-btn>`,
    });
    expect(page.root).toEqualHtml(`
      <submit-btn>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </submit-btn>
    `);
  });
});
