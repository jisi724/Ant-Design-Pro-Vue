function chart(method) {
  let res = null;
  switch (method) {
    case "GET":
      res = [];
      for (let i = 0; i < 6; i++) {
        res.push(Math.random() * 100);
      }
      break;
    default:
      res = null;
  }
  return res;
}

module.exports = chart;
