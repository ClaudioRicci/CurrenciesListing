export const twoDecimalPlaces = (value: number) => value.toFixed(2);

export const percentageIncrease = (
  initialValue: number,
  currentValue: number
) => {
  let increaseAmount: number = 100 - currentValue / (initialValue / 100);
  return increaseAmount.toFixed(3);
};

export const sortPercentages = (firstValue: number, secondValue: number) =>
  secondValue - firstValue;
