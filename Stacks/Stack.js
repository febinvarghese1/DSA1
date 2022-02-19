class Stack {
  constructor() {
    this.buffer = [];
  }

  push(data) {
    this.buffer.push(data);
  }
  pop() {
    return this.buffer.pop();
  }
  checkLength() {
    return this.buffer.length;
  }
  isEmpty() {
    return this.checkLength === 0;
  }
  printElements() {
    this.buffer.forEach((elements) => console.log(elements));
  }
}

const s = new Stack();

const checkPlaindrome = (string) => {
  for (let i = 0; i < string.length; i++) {
    s.push(string[i]);
  }

  let rev_str = "";
  for (let i = 0; i < string.length; i++) {
    rev_str += s.pop();
  }
  return string == rev_str
};

console.log(checkPlaindrome("Hello"));
console.log(checkPlaindrome("racecar"));
