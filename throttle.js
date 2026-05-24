const throttle = function(cb, ms) {
  let ok = true

  return function(...a) {
    if (!ok) return
    ok = false
    cb(...a)
    setTimeout(function() {
      ok = true
    }, ms)
  }
}

const opThrottle = function (fn, delay, opts = {}) {

  var t = null
  var pending = null

  function kickTimer() {
    t = setTimeout(function() {

      t = null

      if (pending != null && opts.trailing) {
        //console.log(pending.args)
        fn.apply(pending.ctx, pending.args)
        kickTimer()
      }

      pending = null

    }, delay)
  }

  return function(...args) {
    //console.log('called')

    if (t === null) {
      if (opts.leading) {
        fn.apply(this, args)
      } else {
        pending = { args, ctx: this }
      }

      kickTimer()

    } else {
      pending = { args, ctx: this }
    }
  }
}