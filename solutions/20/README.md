# [AdventJS](https://adventjs.dev/) - Challenge #20: More challenging trips

Santa Claus has realized that even with the collaboration of all the elves he will not be able to deliver all the gifts in time. That's why he will ask for help from his friends at Autentia.

From Autentia they have indicated that they need a program to know which team of reindeer to send to each country. There are different types of reindeer and each one of them can carry a weight of gifts. For example:

```js
const reindeerTypes = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]
```

In Santa Claus' list of gifts, the weight of each gift and its destination country are expressed. The weight of the gifts is always a natural number. For example:

Autentia tells us that, for the team of reindeer to send to each country to be optimal, we should:

Send the maximum number of reindeer possible of greater load capacity
Make the most of the weight that each reindeer can carry.
The reindeer have a rather strange character and do not accept that in the team there are more reindeer of a type than reindeer of the next type in descending order of load capacity.
For example. To France (17) you would not send seventeen diesel reindeer (17 _ 1). There are reindeer with greater load capacity, but you would not send a nuclear reindeer (50), since you would be wasting its capacity. An electric reindeer (10) would be sent, one gasoline (5) and two diesel (2 _ 1).

To Spain (37) you could not send a team made up of three electric reindeer (3 _ 10), one gasoline (5) and two diesel (2 _ 1), since there cannot be more electric reindeer than gasoline. Nor two electric reindeer (2 _ 10), three gasoline (3 _ 5) and two diesel (2 _ 1), since there cannot be more gasoline than diesel. You would have to send two electric reindeer (2 _ 10), two gasoline (2 _ 5) and seven diesel (7 _ 1).
