import Settings from '../Settings';

test('check settings 1', () => {
  const settings = new Settings();
  const expected = [['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']];
  const received = settings.getUserSet;
  expect(received).toEqual(expected);
});

test('check settings 2', () => {
  const settings = new Settings('light');
  const expected = [['theme', 'light'], ['music', 'trance'], ['difficulty', 'easy']];
  const received = settings.getUserSet;
  expect(received).toEqual(expected);
});

test('check settings 3', () => {
  const settings = new Settings('light', 'pop');
  const expected = [['theme', 'light'], ['music', 'pop'], ['difficulty', 'easy']];
  const received = settings.getUserSet;
  expect(received).toEqual(expected);
});

test('check settings 4', () => {
  const settings = new Settings('light', 'house', 'hard');
  const expected = [['theme', 'light'], ['music', 'trance'], ['difficulty', 'hard']];
  const received = settings.getUserSet;
  expect(received).toEqual(expected);
});

test('check settings 5', () => {
  const settings = new Settings('grey', 'you will die');
  const expected = [['theme', 'grey'], ['music', 'trance'], ['difficulty', 'easy']];
  const received = settings.getUserSet;
  expect(received).toEqual(expected);
});

test('check settings 6', () => {
  const settings = new Settings('hard');
  const expected = [['theme', 'dark'], ['music', 'trance'], ['difficulty', 'hard']];
  const received = settings.getUserSet;
  expect(received).toEqual(expected);
});
