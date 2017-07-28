import { PatientsDetailsPage } from './app.po';

describe('patients-details App', () => {
  let page: PatientsDetailsPage;

  beforeEach(() => {
    page = new PatientsDetailsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
