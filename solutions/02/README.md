# [AdventJS](https://adventjs.dev/) - Challenge #2: Nobody wants to do extra hours at work

A millionaire has bought a social network and it doesn't bring good news. He has announced that each time a working day is lost due to a holiday, it will have to be compensated with two extra hours another day of the same year.

Obviously the people who work in the company have not made the slightest joke and are preparing a program that tells them the number of extra hours they would do in the year if the new rule were applied.

Since it is office work, their working hours are from Monday to Friday. So you only have to worry about the holidays that fall on those days.

Given a year and an array with the dates of the holidays, return the number of extra hours that would be done that year:

```js
const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // formato MM/DD

// 01/06 es el 6 de enero, jueves. Cuenta.
// 04/01 es el 1 de abril, un viernes. Cuenta.
// 12/25 es el 25 de diciembre, un domingo. No cuenta.

countHours(year, holidays) // 2 días -> 4 horas extra en el año
```

Things to keep in mind:

- The year can be a leap year. Make the checks you need for it, if necessary.
- Although the holiday is December 31, the extra hours will be done the same year.
- Date.getDay() method returns the day of the week of a date. 0 is Sunday, 1 is Monday, etc.
