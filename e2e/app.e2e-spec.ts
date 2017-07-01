import { ShoppingCartAppPage } from './app.po';

describe('shopping-cart-app App', () => {
  let page: ShoppingCartAppPage;

  beforeEach(() => {
    page = new ShoppingCartAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
