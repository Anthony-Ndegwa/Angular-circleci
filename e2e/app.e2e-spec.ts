import { CircleCiTestPage } from './app.po';

describe('circle-ci-test App', () => {
  let page: CircleCiTestPage;

  beforeEach(() => {
    page = new CircleCiTestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
