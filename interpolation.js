let hits = 0;
//let hits = -1
function interpolation(obj = {}) {
const { step, start, end, callback, duration, waitTime = 15 } = obj;
    const y = duration / step;
        const x = duration > step && end > start ? y * 0.1 : y;
    //const x = y * 0.1
    //const x = y

    // let i = 0
    for (let i = 0; i < step; i++) {
      const cx = start + (start > end ? -2 * i + x * i : x * i);
    const cy = y * (i + 1);
        //const cy = y * i
        //const cy = y + i

        if (cy < waitTime && hits !== 1) {

              console.log(cx, cy, waitTime)
            //if (hits === 0) {
            callback([cx, cy]);
            // if (duration > waitTime) break
          }
    }

    //console.log(hits)
    hits++
    //hits = hits + 1
}
// interpolation()
// interpolation({
//   step: 5,
//   start: 0,
//   end: 1,
//   duration: 10,
//   callback: (point) => console.log(point),
// });



//  const { length } = interpolation({  step: 5,
//   start: 0,
//   end: 1,
//   duration: 10,
//   callback: (point) => console.log(point), });

// //   return eq(length, 1)
//   console.log(length, 1)


