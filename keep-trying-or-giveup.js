const retry  = function (attempts = 3, fn = async () => {}) {
  return async function (...a) {
    try {
      const r = await fn(...a)
      return r
    } catch (err) {
        //console.log(attempts, err)
      if (attempts > 0) {
          return retry(attempts - 1, fn)(...a)
        } else {
        throw err
      }
    }
  }
}



const unstableTask = async (x) => {
  if (Math.random() < 0.7) throw new Error("Failed!");
  return `Success with ${x}`;
};

const reliableTask = retry(3, unstableTask);

reliableTask("data").then(console.log).catch(console.error);
