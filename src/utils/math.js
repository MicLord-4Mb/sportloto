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