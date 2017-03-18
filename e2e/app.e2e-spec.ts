import { BoarPage } from './app.po';

describe('boar App', () => {
  let page: BoarPage;

  beforeEach(() => {
    page = new BoarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
