function parseF(s){
    let n = parseFloat(s);
    if (Number.isNaN(n)) {
    n = null;
  }
    return n;
  }
  
console.log(parseF("1")); // 1.0
console.log(parseF("s")); // null
console.log(parseF("2.5")); // 2.5