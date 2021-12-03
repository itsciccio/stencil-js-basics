import { newE2EPage } from '@stencil/core/testing';

describe('submit-btn', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<submit-btn></submit-btn>');

    const element = await page.find('submit-btn');
    expect(element).toHaveClass('hydrated');
  });
});
