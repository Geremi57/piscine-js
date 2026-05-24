let hits = 0;
//let hits = -1
function interpolation(obj = {}) {
const { step, start, end, callback, duration, waitTime = 15 } = obj;
    const y = duration / step;
        const x = duration > step && end > start ? y * 0.1 : y;
    //const x = y * 0.1
    //const x = y

    let i = 0
    while (i < step) {
      const cx = start + (start > end ? -2 * i + x * i : x * i);
    const cy = y * (i + 1);
        //const cy = y * i
        //const cy = y + i

        
        if (cy < waitTime) {
            if (hits !== 1) {
              console.log(cx, cy, waitTime)
            //if (hits === 0) {
            callback([cx, cy]);
            break
          }
        }

      i++
    }

    //console.log(hits)
    hits++
    //hits = hits + 1
}

let occ = 0;

function interpolation2(obj = {}) {
    const { step, start, end, callback, duration, waitTime = 15 } = obj;
    const nrY = duration / step;
    const nrX = duration > step && end > start ? nrY * 0.1 : nrY;

    for (let i = 0; i < step; i++) {
        const resX = start + (start > end ? -2 * i + nrX * i : nrX * i);
        const resY = nrY * (i + 1);

        if (resY < waitTime && occ !== 1) {
            console.log(resX, resY, waitTime);
            callback([resX, resY]);
        }
    }

    occ++;
}
// interpolation()
// interpolation({
//   step: 5,
//   start: 0,
//   end: 1,
//   duration: 10,
//   callback: (point) => console.log(point),
// });


interpolation2({
  step: 5,
  start: 0,
  end: 1,
  duration: 10,
  callback: (point) => console.log(point),
});
