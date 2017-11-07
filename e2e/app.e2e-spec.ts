import { SaithinkPage } from './app.po';

describe('saithink App', () => {
  let page: SaithinkPage;

  beforeEach(() => {
    page = new SaithinkPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
