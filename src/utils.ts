// csv string '25/10/2018' to a Date object

export const dateStringToDate = (dateString: string): Date => {
  const dateParts = dateString
    .split('/') // -> ['25', '10', '2018']
    .map((value: string): number => {
      return parseInt(value); // -> [25, 10, 2018]
    });
  // year, month-1 (Jan is 0), day
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

// console.log(dateStringToDate('25/10/2018'))   // -> Thu Oct 25 2018 00:00:00 GMT+0100 (British Summer Time)
