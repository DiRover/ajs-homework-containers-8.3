import Settings from '../Settings';

const settings = new Settings();

test('check settings 1', () => {
  const expected = [['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']];
  const received = settings.getUserSet('theme', 'dark');
  expect(received).toEqual(expected);
});

test('check settings 2', () => {
  const expected = [['theme', 'light'], ['music', 'trance'], ['difficulty', 'easy']];
  const received = settings.getUserSet('theme', 'light');
  expect(received).toEqual(expected);
});

test('check settings 3', () => {
  const expected = [['theme', 'light'], ['music', 'pop'], ['difficulty', 'easy']];
  const received = settings.getUserSet('music', 'pop');
  expect(received).toEqual(expected);
});

test('check settings 4', () => {
  const expected = [['theme', 'light'], ['music', 'pop'], ['difficulty', 'hard']];
  const received = settings.getUserSet('difficulty', 'hard');
  expect(received).toEqual(expected);
});

test('check settings 5', () => {
  const expected = 'Wrong data!';
  const received = settings.getUserSet('difficuly', 'hard');
  expect(received).toEqual(expected);
});
