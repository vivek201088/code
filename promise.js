function fetch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = Math.random();
      if (data > 0.5) {
        resolve(data);
      } else {
        reject("error:daa too low");
      }
    }, 2000);
  });
}

fetch()
  .then((result) => {
    console.log("fulfilled", result);
  })
  .catch((error) => {
    console.log("Reject", error);
  });
