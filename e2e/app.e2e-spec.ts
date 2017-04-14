import { ShrikarWebNgPage } from './app.po';

describe('shrikar-web-ng App', () => {
  let page: ShrikarWebNgPage;

  beforeEach(() => {
    page = new ShrikarWebNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
