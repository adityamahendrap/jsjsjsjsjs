var myAtoi = function (s) {
  const str = s.trim();
  if (!isNaN(s)) return s;

  let res = [];
  let leading = [];
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      if (i != 0) leading.push(str[i - 1]);
      res.push(str[i]);
    }
  }
  if (leading[0] != "+" || leading[0] != "-" || isNaN(leading[0])) return 0;
  return res.join("");
};

// console.log(myAtoi("thui 123"));
// myAtoi("123")

var detectCapitalUse = function (word) {
  let subStr = word.split(" ");
  const firstLetterCapitalRegex = /^[A-Z][a-z]*$/;

  for (let i = 0; i < subStr.length; i++) {
    if (subStr[i] == subStr[i].toUpperCase()) {
    } else if (subStr[i] == subStr[i].toLowerCase()) {
    } else if (firstLetterCapitalRegex.test(subStr[i])) {
    } else return false;
  }
  return true;
};

// detectCapitalUse('test Test tEst')

var mergeAlternately = function (word1, word2) {
  const shortest = word1.length < word2.length ? word1 : word2;
  const longest = word1.length > word2.length ? word1 : word2;
  let newWord = "";

  for (let i = 0; i < shortest.length; i++) {
    newWord = newWord + word1[i] + word2[i];
  }
  newWord = newWord + longest.slice(shortest.length);
  return newWord
};

// mergeAlternately('abcd', 'pq')

var maximumDifference = function(nums) {
  let res = []
  let j
  for(let i = 0; i < nums.length - 1; i++) {
    for (j = i + 1; j < nums.length; j++) {
      // console.log(nums[j].toString() + ' - ' + nums[i].toString());
      res.push(nums[j] - nums[i])
    }
  }
  //  res.push(nums[1] - nums[0])
  //  res.push(nums[2] - nums[0])
  //  res.push(nums[3] - nums[0])
  //  res.push(nums[] - nums[1])

  let max = Math.max(...res)
  if(max <= 0) return -1
  return max
};

// console.log(maximumDifference([7,1,5,4]));

var maxProfit = function(prices) {
  let profit = []
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      profit.push(prices[j] - prices[i])
    }
  }

  let maxProfit = Math.max(...profit)
  if(maxProfit > 0) return maxProfit
  return 0
};

const maxProfit2 = function(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  return maxProfit;
};

// console.log(maxProfit2([7,6,4,3,1]));

var runningSum = function(nums) {
  let arr = []
  let temp = 0

  for (let i = 0; i < nums.length; i++) {
    temp += nums[i]
    arr.push(temp)
  }

  return arr
};

// runningSum([1,2,3,4])

// var removeDuplicates = function(nums) {
//   let uniqueArr = []

//   for (let i = 0; i < nums.length; i++) {
//       if(!uniqueArr.includes(nums[i])) uniqueArr.push(nums[i])
//   }
  
//   let fill = nums.length - uniqueArr.length
//   for (let i = 0; i < fill; i++) {
//     uniqueArr.push(-1)
//   }

//   return uniqueArr
// };

var removeDuplicates = function(nums) {
  let lengthOrigin = nums.length
  const uniqueArr = Array.from(new Set([...nums]))
  nums.splice(0, nums.length, uniqueArr)
  nums = nums.flat()

  let lengthNow = nums.length
  for (let i = 0; i < lengthOrigin - lengthNow; i++) {
    nums.push('')
  }
  return nums.length
};

// removeDuplicates([0,0,1,1,1,2,2,3,3,4])
// removeDuplicates([1,1,2])

var majorityElement = function(nums) {
  let uniqueArr = [...new Set(nums)]
  let count = 0
  let countResult = []

  for (let j = 0; j < uniqueArr.length; j++) {
    for (let i = 0; i < nums.length; i++) {
      if(uniqueArr[j] == nums[i]) {
        count++
      }
    }
    countResult.push(count)
    count = 0
  }
  // console.log(countResult);
  let maxCount = Math.max(...countResult)
  let maxIndex = countResult.indexOf(maxCount)
  let majority = uniqueArr[maxIndex]
  return majority
};

// majorityElement([3,2,3])

var containsDuplicate = function(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] == nums[j]) return true
    }
  }
  return false
};

// console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));

var containsNearbyDuplicate = function(nums, k) {

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if (nums[i] == nums[j] && j - i <= k) {
        return true
      }
    }
  }

  return false
};

// console.log(containsNearbyDuplicate([99,99], 2));

var moveZeroes = function(nums) {
  let length = nums.length
  nums = nums.filter((e) => e != 0)
  for (let i = 0; i < length - nums.length + 1; i++) {
    nums.push(0)
  }
};

// moveZeroes([0,1,0,3,12])

var thirdMax = function(nums) {
    const uArr = [...new Set(nums)]
    uArr.sort()
    return uArr[uArr.length - 3]
};

// thirdMax([2,2,3,1])

var findRelativeRanks = function(score) {
  let sortedScore = score.slice().sort((a, b) => b - a)
  let medals = ['Gold Medal', 'Silver Medal', 'Bronze Medal']

  let medalsLength = medals.length
  for (let j = 0; j < score.length -  medalsLength; j++) {
    medals.push((j + medalsLength + 1).toString())
  }

  for (let i = 0; i < score.length; i++) {
    let index = score.indexOf(sortedScore[i])
    score.splice(index, 1, medals[i])
  }

  return score
};

// console.log(findRelativeRanks([10,3,8,9,4]));

var findNumbers = function(nums) {
  let evenDigit = 0

  for (let i = 0; i < nums.length; i++) {
    if(nums[i].toString().split('').length % 2 == 0) evenDigit++
  }
  
  return evenDigit
};

// findNumbers([12,345,2,6,7896])

var mostWordsFound = function(sentences) {
  let maxWord = 0

  for (let i = 0; i < sentences.length; i++) {
    if(sentences[i].split(' ').length > maxWord) {
      maxWord = sentences[i].split(' ').length
    }
  }

  return maxWord
};

// mostWordsFound(["please wait", "continue to fight", "continue to win"])

var findMedianSortedArrays = function(nums1, nums2) {
  let nums = nums1.concat(nums2).sort()
  if(nums.length == 2) {
    return (nums[0] + nums[1])/2
  }
  if(nums.length % 2 != 0) { // ganjil
    return nums[(nums.length - 1) / 2]
  }
  return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2
};

// console.log(findMedianSortedArrays([1,2], [3,4]));

var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies)
  let withExtraCandies = []
  let result = []

  for (let i = 0; i < candies.length; i++) {
    withExtraCandies.push(candies[i] + extraCandies)
    result.push(withExtraCandies[i] >= max)
  }
  return result
};

// kidsWithCandies([2,3,5,1,3], 3)

var getConcatenation = function(nums) {
  // const lengthOrigin = nums.length
  // for (let i = 0; i < lengthOrigin; i++) {
  //   nums.push(nums[i])
  // }
  // return nums
  return nums.concat(nums)
};

// getConcatenation([1,2,1])

var buildArray = function(nums) {
  let ans = []

  for (let i = 0; i < nums.length; i++) {
    ans[i] = nums[nums[i]]
  }
  return ans
};

// buildArray([0,2,1,5,3,4])

var shuffle = function(nums, n) {
  let arr1 = nums.slice(0, nums.length/2)
  let arr2 = nums.slice(nums.length/2, nums.length)
  let res = []

  for (let i = 0; i < arr1.length; i++) {
    res.push(arr1[i])
    res.push(arr2[i])
  }
  
  return res
};

// shuffle([2,5,1,3,4,7], 3)

var finalValueAfterOperations = function(operations) {
  let x = 0

  for (let i = 0; i < operations.length; i++) {
    if(operations[i] == '++X' || operations[i] == 'X++') x++
    if(operations[i] == '--X' || operations[i] == 'X--') x--
  }

  return x
};

// finalValueAfterOperations(["--X","X++","X++"])

var numIdenticalPairs = function(nums) {
  let pair = 0
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i+1; j < nums.length; j++) {
      if(nums[i] == nums[j]) pair++
    }
  }
  return pair
};

// numIdenticalPairs([1,2,3,1,1,3])

var maximumWealth = function(accounts) {
  let sum = []

  for (let i = 0; i < accounts.length; i++) {
    sum.push(accounts[i].reduce((a, b) => a + b, 0))
  }

  return sum
};

// maximumWealth([[1,2,3],[3,2,1]])

var smallerNumbersThanCurrent = function(nums) {
  let smaller = []

  for (let i = 0; i < nums.length; i++) {
    let temp = nums.filter((num) => num < nums[i])
    smaller.push(temp.length)
  }

  return smaller
};

// smallerNumbersThanCurrent([8,1,2,2,3])

var createTargetArray = function(nums, index) {
  let target = nums.map(x => '_')

  for (let i = 0; i < nums.length; i++) {
    target.splice(index[i], 0, nums[i])
  }

  target.splice(nums.length)
  return target
};

// createTargetArray([0,1,2,3,4], [0,1,2,2,1])

var decompressRLElist = function(nums) {
  let res = []

  for (let i = 0; i < nums.length/2; i++) {
    let freq = nums[2*i]
    let value = nums[2*i+1]

    for (let j = 0; j < freq; j++) {
      res.push(value)
    }
  }

  return res
};

// decompressRLElist([1,2,3,4])

var restoreString = function(s, indices) {
  let temp = [...indices]

  for (let i = 0; i < s.length; i++) {
    temp[indices[i]] = s[i]
  }
  return temp.join('')
};

// restoreString("codeleet", [4,5,6,7,0,2,1,3])

var differenceOfSum = function(nums) {
  const elSum = nums.reduce((a, b) => a + b, 0)
  let digit = nums.join('').split('')
  let digitSum = 0

  for (let i = 0; i < digit.length; i++) {
    digitSum += parseInt(digit[i])
  }
  return elSum - digitSum
};

// differenceOfSum([1,15,6,3])

var arrayStringsAreEqual = function(word1, word2) {
  if(word1.join('') === word2.join('')) return true
  return false
};

// arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"])

var countMatches = function(items, ruleKey, ruleValue) {
  let count = 0

  for (let i = 0; i < items.length; i++) {
      if(ruleKey == 'type') 
        count = items[i][0] == ruleValue ? count+1 : count
      else if(ruleKey == 'color') 
        count = items[i][1] == ruleValue ? count+1 : count
      else 
        count = items[i][2] == ruleValue ? count+1 : count
  }

  return count
};

// countMatches([["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], "type", "phone")

var truncateSentence = function(s, k) {
  return s.split(' ').splice(0, k).join(' ')
};

// truncateSentence("Hello how are you Contestant", 4)

var checkIfPangram = function(sentence) {
  let uniq = new Set(sentence.split(''))
  if(uniq == 26) return true
  return false
};

// checkIfPangram("thequickbrownfoxjumpsoverthelazydog")

var vowelStrings = function(words, left, right) {
  let count = 0
  for (let i = left; i < right + 1; i++) {
    if(words[i][0] == 'a' || words[i][0] == 'i' || words[i][0] == 'u' || words[i][0] == 'e' || words[i][0] == 'o') {
      if(words[i][words[i].length - 1] == 'a' || words[i][words[i].length - 1] == 'i' || words[i][words[i].length - 1] == 'u' || words[i][words[i].length - 1] == 'e' || words[i][words[i].length - 1] == 'o') {
        count++
      }
    }
  };
  return count
};

// vowelStrings(["are","amy","u"], 0, 2)

var flipAndInvertImage = function(image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse()

    for (let j = 0; j < image[i].length; j++) {
      if(image[i][j] == 0) {
        image[i][j] = 1
      } else {
        image[i][j] = 0
      }
    }
  }
  return image
};

// flipAndInvertImage([[1,1,0],[1,0,1],[0,0,0]])

var uniqueMorseRepresentations = function(words) {
  let pool = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let morseResult = []

  for (let i = 0; i < words.length; i++) {
    let temp = words[i].split('').map(e => e.charCodeAt(0) - 97).map(e => pool[e]).join('')
    morseResult.push(temp)
  }

  let res = new Set([...morseResult])
  return res.size
};

// uniqueMorseRepresentations(["gin","zen","gig","msg"])

var separateDigits = function(nums) {
  return nums.join('').split('')
};

// separateDigits([13,25,83,77])

var numJewelsInStones = function(jewels, stones) {
  let count = 0

  for (let j = 0; j < jewels.length; j++) {
    for (let i = 0; i < stones.length; i++) {
      if(jewels[j] == stones[i]) count++
    }
  }
  return count
};

// numJewelsInStones("aA", "aAAbbbb")
