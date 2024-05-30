const Solution = require('../src/1a-1-s1').Solution

test("1a-1-s1 Test Case 1", () => {
  const s = new Solution(1)
  expect(s.squareRootFinder()).toStrictEqual(1)
})

test("1a-1-s1 Test Case 2", () => {
  const s = new Solution(4)
  expect(s.squareRootFinder()).toStrictEqual(2)
})

test("1a-1-s1 Test Case 3", () => {
  const s = new Solution(36)
  expect(s.squareRootFinder()).toStrictEqual(6)
})

test("1a-1-s1 Test Case 4", () => {
  const s = new Solution(10000)
  expect(s.squareRootFinder()).toStrictEqual(100)
})

test("1a-1-s1 Test Case 5", () => {
  const s = new Solution(8)
  expect(s.squareRootFinder()).toStrictEqual("This is not a square number")
})

// 0.167s on desktop
// 0.000s on laptop