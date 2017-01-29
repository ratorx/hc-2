import { TrumpPage } from './app.po';

describe('trump App', function() {
  let page: TrumpPage;

  beforeEach(() => {
    page = new TrumpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
