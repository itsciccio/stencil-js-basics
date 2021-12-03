import { newE2EPage } from '@stencil/core/testing';

describe('checkbox-van', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<checkbox-van></checkbox-van>');

    const element = await page.find('checkbox-van');
    expect(element).toHaveClass('hydrated');
  });
});
