import { TestApiLaravelPage } from './app.po';

describe('test-api-laravel App', () => {
  let page: TestApiLaravelPage;

  beforeEach(() => {
    page = new TestApiLaravelPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
