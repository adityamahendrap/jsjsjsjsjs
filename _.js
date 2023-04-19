// let str = '0123'
// console.log(!isNaN(str));
// console.log(parseInt(str));

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

// var detectCapitalUse = function(word) {
//   let upOrLow = []
//   for(let i = 0; i < word.length; i++) {
//     if(word[i] == ' ') upOrLow.push('space')
//       if(!(word[i].charCodeAt() >= 65 && word[i].charCodeAt() <= 90))
//           upOrLow.push('low')
//       else upOrLow.push('up')
//   }
// };

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
  console.log(newWord);
};

// mergeAlternately('abcd', 'pq')

var isHappy = function (n) {
  let str = n.toString();
  let temp = 0;

  for (let i = 0; i < str.length; i++) {
    if (temp == 1) return true;
    temp += str[i] ** 2;

    if (str[i] == str.length - 1) {
      str = temp;
      temp = 0;
    }
  }
};

// console.log(isHappy(19));

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
  console.log(nums.length);
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
  console.log(majority);
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

var findWords = function(words) {
  let first_row = "qwertyuiop".split('')
  let second_row = "asdfghjkl".split('')
  let third_row = "zxcvbnm".split('')
  let check_in_row = []

  // words.forEach((word, i)  => {
  //   if(first_row.includes(words[i][0].toLowerCase())) check_in_row.push(1)
  //   if(second_row.includes(words[i][0].toLowerCase())) check_in_row.push(2)
  //   if(third_row.includes(words[i][0].toLowerCase())) check_in_row.push(3)
  // });

  for (let i = 0; i < words[2].length; i++) {
  }
}; 

// findWords(["Hello","Alaska","Dad","Peace"])

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

console.log(findMedianSortedArrays([1,2], [3,4]));