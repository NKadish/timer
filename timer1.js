const args = process.argv;
const slicedTimer = args.slice(2);
// first I want to sort the array by lowest to greatest number so that we can execute the commands at the proper times.
slicedTimer.sort(function(x, y) {
  return x - y;
});
// now the the numbers have been sorted, we can loop through the array and get it to do what it wants when it wants.
for (const time of slicedTimer) {
  if (isNaN(time) === false && time > 0) { // checks to make sure that the argument provided is a positive number
    let timeToJSTime = time * 100; // turns the seconds given to seconds in javascript
    setTimeout(() => {
      process.stdout.write('\x07'); // outputs the alarm sound
    }, timeToJSTime);
  }
}
