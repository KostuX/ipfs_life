export default class IntervalMng {
  intervals = [];

  constructor() {
    this.intervals = [];
  }

  startInterval(func, intervalTime) {
    const intervalId = setInterval(func, intervalTime);
    this.intervals.push(intervalId);
  }
  clearIntervalAll() {
    this.intervals.forEach((e) => {
      clearInterval(e);
    });
  }
}
