export const getMin = (arr) => Math.min(...arr);
export const getMax = (arr) => Math.max(...arr);
export const getAverage = (arr) => arr.reduce((sum, num) => sum + num, 0) / arr.length;

export const getStatistic = (arr) => {
  const evenCount = arr.filter(num => num % 2 === 0).length;
  const oddCount = arr.length - evenCount;
  return { 
    min: getMin(arr),
    max: getMax(arr),
    average: getAverage(arr),
    even: evenCount,
    odd: oddCount
  };
};

export const getRandomNumbers = (count, min=1, max=36) => {
  const pool = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  // Fisher-Yates shuffle
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const numbers = pool.slice(0, count).sort((a, b) => b - a);
  return numbers;
};