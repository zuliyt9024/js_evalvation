
function mySetInterval(callback, delay) {
  let timerId;
  let isCleared = false;

  function repeat() {
    if (isCleared) return;
    callback();
    timerId = setTimeout(repeat, delay);
  }

  timerId = setTimeout(repeat, delay);

  return timerId;
}

function myClearInterval(id) {
  clearTimeout(id);
}