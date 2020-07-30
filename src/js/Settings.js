/* eslint-disable no-console */
class Settings { // создаём класс
  constructor(...option) { // опций может быть 0-3
    option.forEach((item) => { // проверям какую именно опцию ввёл юзер
      if (item === 'light' || item === 'dark' || item === 'grey') {
        this.theme = item;
      } else if (item === 'trance' || item === 'pop' || item === 'rock' || item === 'chillout' || item === 'off') {
        this.music = item;
      } else if (item === 'easy' || item === 'normal' || item === 'hard' || item === 'nightmare') {
        this.difficulty = item;
      }
    });
  }

  get getUserSet() {
    const set = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]); // создаём Мар с деф. настройками
    if (this.theme) { // если опция существует, её ввёл юзер (не равна udefined)
      set.set('theme', this.theme); // если нет, то будет дефолтная опция
    }
    if (this.music) { // тоже самое
      set.set('music', this.music);
    }
    if (this.difficulty) { // тоже самое
      set.set('difficulty', this.difficulty);
    }
    return Array.from(set); // возвращаем массив для теста
  }
}

const inst = new Settings('hard'); // строки для отладки в браузере
console.log(inst.getUserSet);

export default Settings;
