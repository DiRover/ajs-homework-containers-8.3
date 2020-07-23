class defSet {
  constructor() {
    this.arrSet = ['theme', 'dark', 'light', 'gray', 'music', 'trance', 'pop', 'rock', 'chillout', 'off', 'difficulty', 'easy', 'difficulty', 'normal', 'difficulty', 'hard', 'difficulty', 'nightmare'];
    this.set = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);
  }

  getUserSet(key, value) {
    if (this.arrSet.includes(key) && this.arrSet.includes(value)) {
      this.set.set(key, value);
      return Array.from(this.set); // this.set.entries()
    }
    return 'Wrong data!';
  }
}

export default defSet;
