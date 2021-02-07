module.exports = function toReadable (number) {
   const newNumber = String(number).split('');

  const fromNumberToWord1 = new Map([
    [0, 'zero'],
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
    [4, 'four'],
    [5, 'five'],
    [6, 'six'],
    [7, 'seven'],
    [8, 'eight'],
    [9, 'nine'],
    [10, 'ten'],
    [11, 'eleven'],
    [12, 'twelwe'],
    [13, 'thirteen'],
    [14, 'fourteen'],
    [15, 'fifteen'],
    [16, 'sixteen'],
    [17, 'seventeen'],
    [18, 'eighteen'],
    [19, 'nineteen'],
    [20, 'twenty'],
    [30, 'thirty'],
    [40, 'forty'],
    [50, 'fifty'],
    [60, 'sixty'],
    [70, 'seventy'],
    [80, 'eighty'],
    [90, 'ninety'],
  ]);

  if (number >= 0 && number <= 20) {
    return fromNumberToWord1.get(number);
  }

  if (number > 20 && number <= 99) {
    return String(number).includes('0')
      ? fromNumberToWord1.get(number)
      : fromNumberToWord1.get(newNumber[0] * 10) +
          ' ' +
          fromNumberToWord1.get(+newNumber[1]);
  }

  if (number >= 100 && number <= 999) {
    if (String(number).includes('00')) {
      return fromNumberToWord1.get(+newNumber[0]) + ' hundred';
    }

    if (newNumber[2] == 0) {
      return (
        fromNumberToWord1.get(+newNumber[0]) +
        ' hundred ' +
        fromNumberToWord1.get(newNumber[1] * 10)
      );
    }
    if (newNumber[1] == 0) {
      return (
        fromNumberToWord1.get(+newNumber[0]) +
        ' hundred ' +
        fromNumberToWord1.get(+newNumber[2])
      );
    }
    if (newNumber[1] == 1) {
      return (
        fromNumberToWord1.get(+newNumber[0]) +
        ' hundred ' +
        fromNumberToWord1.get(+(newNumber[1] + newNumber[2]))
      );
    } else {
      return (
        fromNumberToWord1.get(+newNumber[0]) +
        ' hundred ' +
        fromNumberToWord1.get(newNumber[1] * 10) +
        ' ' +
        fromNumberToWord1.get(+newNumber[2])
      );
    }
  }
}
