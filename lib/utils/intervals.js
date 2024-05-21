export default class Intervals {
    intervals = [];
     startInterval(func, intervalTime) {
      const intervalId = setInterval(func, intervalTime);
      intervals.push(intervalId);
    }
  
     clearIntervalAll() {
      intervals.forEach((e) => {
        clearInterval(e);
      });
    }
}