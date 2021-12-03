import { newE2EPage } from '@stencil/core/testing';

describe('ciccio-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ciccio-form></ciccio-form>');

    const element = await page.find('ciccio-form');
    expect(element).toHaveClass('hydrated');
  });
});
