class Solution {
  constructor(num) {
    this.num = num
  }

  squareRootFinder() {
    let count = 1

    if (this.num === 1) {
      return 1
    }

    while (count < this.num) {
      if (this.num / count === count) {
        return count
      }
      count++
    }
  }
}

module.exports = {
  Solution:Solution
}