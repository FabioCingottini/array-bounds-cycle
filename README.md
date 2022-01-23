# Array bounds cycle

### Description

Often, on websites where a dev can train himself by implementing difficult algorithms, one can found problems where an
item in array should be accessed by using an index `i` such as
`i > array.length`.   
In these kinds of situations one should access the item of the like the array is an infinite array `X` that is a
repetition of the initial array:

```javascript
const array = [0, 1, 2, 3];
// array[0] is 0
// array[1] is 1
// array[2] is 2
// array[3] is 3
// array[4] is 0
// array[5] is 1
// array[6] is 2
// array[7] is 3
// array[8] is 0
...
```

In this repository into `index.js` there is a function `getElement` such as:

```javascript
getElement([0, 1, 2, 3], 1) // ->  1
getElement([0, 1, 2, 3], 7) // ->  3
getElement([0, 1, 2, 3], 5) // ->  1
```

#### Disclaimer

I didn't discovery America with this, but after the 287348nth time I forgot this I finally decided to have it on my
GitHub :)