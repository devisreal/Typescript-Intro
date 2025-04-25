// pascal naming convention
// If you include const before the enum keyword, the compiler generates more optimized code
const enum ShirtSize {
  Small = 1,
  Medium,
  Large,
}
let mySize: ShirtSize = ShirtSize.Medium;
console.log(mySize);
