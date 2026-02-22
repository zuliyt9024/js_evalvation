function runSequential(tasks, delay) {
  let results = [];

  return tasks
    .reduce((promise, task) => {
      return promise
        .then(
          () =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve(task());
              }, delay);
            }),
        )
        .then((result) => {
          results.push(result);
        });
    }, Promise.resolve())
    .then(() => results);
}
