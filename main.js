// Is Prime Number Function
const isPrime = (num) => {
  // declare primeNum variable
  let primeNum = 1;

  // số nguyên tố là số lớn hơn 2, nếu < 2 => không phải là số nguyên tố
  if (num < 2) {
    primeNum = 0;
  } else {
    //! => phải trừ trường hợp i = n
    for (let i = 2; i < num; i++) {
      //! nếu chia được cho một trong các số từ 2 đến n - 1 => không phải số nguyên tố
      if (num % i == 0) {
        primeNum = 0;
      }
    }
  }
  return primeNum;
};

// Remove Duplicate
function removeDuplicates(arr) {
  // Khai báo mảng rỗng
  var newArr = [];

  arr.forEach((item, index) => {
    // nếu vị trí đầu tiên của item === vị trí của index chạy tăng dần từ 0
    if (arr.indexOf(item) === index) {
      newArr.push(item);
    }
  });
  return newArr;
}

//TODO ------------------------------- 1. TWO SUM ------------------------------- */
// Example 1: Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
const twoSum = () => {
  // Khai báo mảng chứa các number
  let numArr = [2, 7, 11, 15];

  // Khai báo target: tổng của 2 số bất kỳ
  let target = 9;

  // Khai báo biến tổng 2 number
  let sumTwoNumbers;

  // Khai báo mảng rỗng chứa kết quả
  let result = [];

  for (let i = 0; i < numArr.length; i++) {
    for (let j = numArr.length - 1; j > i; j--) {
      // Gán tổng 2 number vào sumTwoNumbers
      sumTwoNumbers = numArr[i] + numArr[j];

      //   Nếu tổng 2 number = target thì push vào mảng
      if (sumTwoNumbers == target) {
        result.push(i, j);
      }
    }
  }
  console.log(result);
};

//TODO ---------------------------- 9. Palindrome Number : số đảo ngược --------------------------- */
// Is Palinddrome Function
const isPalindrome = (num) => {
  // khai báo isPalindrome
  let palindromeNum;

  // Khai báo số đảo ngược
  let reverseNum = 0;

  // Khai báo biến lấy giá trị number cần kiểm tra
  let number = num;

  if (number < 0) {
    palindromeNum = 0;
  } else {
    // Nếu num khác 0 thì thực hiện
    while (number != 0) {
      // chia lấy dư
      let digit = parseInt(number % 10);

      // Tính số đảo ngược
      reverseNum = reverseNum * 10 + parseInt(digit);

      number = parseInt(number / 10);
    }
  }

  reverseNum == parseInt(num) ? (palindromeNum = 1) : (palindromeNum = 0);

  return palindromeNum;
};

// Check Palindrome Function
const checkPalindrome = () => {
  let inputNumber = document.getElementById("palindromeNumber").value;
  //   console.log(isPalindrome(inputNumber));

  console.log(isPalindrome(inputNumber));
};

//TODO -------------------------- 13. Roman to Integer -------------------------- */

// Code writing
const romanToInt = (roman) => {
  // Number cần đổi
  let romanNum = roman;

  // Khai báo list int Number
  let listNumber = [1, 5, 10, 50, 100, 500, 1000];

  // Khai báo list roman Number
  let listRoman = ["I", "V", "X", "L", "C", "D", "M"];

  // Khai báo biến kết quả
  let result = [];

  // Khai báo mảng và tách các ký tự thành mảng
  let romanLetter = romanNum.split("");

  // Khai báo mảng rỗng để chứa number được chuyển từ roman
  let transferNumber = [];

  for (let i = 0; i < romanLetter.length; i++) {
    for (let j = listRoman.length - 1; j >= 0; j--) {
      // Nếu ký tự của chuỗi nhập vào == ký tự trong danh sách roman
      if (romanLetter[i] == listRoman[j]) {
        // push int number tương ứng với roman number vào mảng transfer
        transferNumber.push(listNumber[j]);
      }
    }
  }

  // Kiểm tra các số ở vị trí thứ 4 và thứ 9
  // ví dụ:IV = 4, IX = 9, CM = 900, XC = 90
  for (let i = 0; i < transferNumber.length; i++) {
    // Nếu giá trị thứ i < giá trị thứ i+1 --> là số vị trí thứ 4 hoặc 9
    if (transferNumber[i] < transferNumber[i + 1]) {
      // Lấy giá trị sau - giá trị trước
      let number4th_9th = transferNumber[i + 1] - transferNumber[i];
      result.push(number4th_9th);

      // sau khi trừ bỏ qua 1 vị trí vì đã xét đến 2 ký tự
      // Ví dụ 10, 100 ==> 90 thì bỏ qua ko xét đến phần từ 100 sau phần tử 10
      i++;
    } else {
      result.push(transferNumber[i]);
    }
  }

  // Number kết quả
  let resultNumber = 0;
  for (let i = 0; i < result.length; i++) {
    // sum tất cả giá trị phần tử
    resultNumber += result[i];
  }
  return resultNumber;
};

//!! CODE khác xử lý nhanh ngắn hơn
let romanToIntSHORT = function (roman) {
  // Khai báo đối tượng định nghĩa ký tự roman và int tương ứng
  const romanNumber = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  // Khai báo biến kết quả
  let result = 0;
  for (let i = 0; i < roman.length; i++) {
    // Kiểm tra các số ở vị trí thứ 4 và thứ 9
    // ví dụ:IV = 4, IX = 9, CM = 900, XC = 90
    // Nếu giá trị thứ i < giá trị thứ i+1 --> là số vị trí thứ 4 hoặc 9
    if (romanNumber[roman[i]] < romanNumber[roman[i + 1]]) {
      result = result + romanNumber[roman[i + 1]] - romanNumber[roman[i]];

      // sau khi trừ bỏ qua 1 vị trí vì đã xét đến 2 ký tự
      // Ví dụ 10, 100 ==> thì là số 90, bỏ qua ko xét đến phần từ 100 sau phần tử 10
      i++;
    } else {
      result = result + romanNumber[roman[i]];
    }
  }
  return result;
};

// Hàm chuyển ký tự roman sang number
const transferRomanToIn = () => {
  let romanNumber = document.getElementById("romanNumber").value;

  document.getElementById("resultTransferRoman").innerHTML =
    romanToIntSHORT(romanNumber);
};

//TODO ------------------------ 14. Longest Common Prefix: Kiểm tra cụm từ chung ----------------------- */
const longestCommonPrefix = () => {
  let arr = ["flower", "flow", "flight", "flo"];

  // Khai báo biến kết quả
  let result = "";

  // lấy từ đầu tiên làm độ dài để check
  let lengthFirstArr = arr[0];

  // Khai báo biến nếu như tìm ra các letter giống nhau
  let match = true;

  for (let i = 0; i < lengthFirstArr.length; i++) {
    // Khai báo giá trị chứa giá trị là từng letter trong từ đầu tiên
    let value = lengthFirstArr[i];
    console.log(value);

    for (let j = 1; j < arr.length; j++) {
      // Khai báo biến chứa các từ còn lại (trừ từ đầu tiên)
      let checkString = arr[j];

      // Nếu từng letter đầu tiên trong từ tiếp theo khác với letter đầu tiên
      // của từ đầu tiên thì chuyển match = false
      if (checkString[i] !== value) {
        match = false;
        break;
      }
    }

    // nếu không khớp từ thì break thoát vòng lặp
    if (match === false) {
      break;
    }
    // ngươc lại sẽ cộng chuỗi từ giống lại với nhau
    else {
      result = result + value;
    }
  }

  return result;
};

document.getElementById(
  "longestCommonPrefix"
).innerHTML = `➜ Longest Common Prefix: <b>${longestCommonPrefix()}</b>`;
//TODO ------------------------ 20. Valid Parentheses ----------------------- */
// ------------------------ Kiểm tra mở ngoặc đóng ngoặc ----------------------- */
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6689f30 (27. Remove Element)
const isValid = () => {
  // Khai báo các dấu ngoặc cần kiểm tra
  let listParentheses = ["(", "{", "[", ")", "}", "]"];
  // let listParenthesesOpen = ["(", "{", "["];
  // let listParenthesesClose = [")", "}", "]"];
  let listParentheses01 = ["(", ")"];
  let listParentheses02 = ["{", "}"];
  let listParentheses03 = ["[", "]"];

  let string = "(){}(]";

  // Khai báo mảng chứa các dấu ngoặc lấy được trong string
  let arrayResult = [];

  // Khai báo biến kết quả
  let result;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < listParentheses.length; j++) {
      // Nếu tìm thấy dấu ngoặc trong string, push vào mảng kết quả
      if (string[i] == listParentheses[j]) arrayResult.push(listParentheses[j]);
    }
  }

  // for (let i = 0; i < arrayResult.length; i++) {
  //   for (let j = 0; j < listParentheses.length; j++) {
  //     console.log("i =", i, "; j =", j);
  //     console.log(arrayResult[i]);
  //     console.log(listParentheses[j]);
  //     console.log("----------------------------");
  //     if (arrayResult[i] == listParentheses[j]) {
  //       result = true;
  //     } else {
  //       result = false;
  //     }
  //   }
  // }

  for (let i = 0; i < listParentheses01.length; i++) {
    for (let j = 0; j < arrayResult.length; j++) {
      console.log("i =", i, "; j =", j);
      console.log(" ---------------------------- 1");
      console.log(listParentheses01[i]);
      console.log(arrayResult[j]);
      console.log("---------------------------- 2");
      console.log(listParentheses02[i]);
      console.log(arrayResult[j]);
      console.log("---------------------------- 3");
      console.log(listParentheses03[i]);
      console.log(arrayResult[j]);
      console.log("----------------------------");

      if (listParentheses01[i] == arrayResult[j]) {
        console.log(true);
        result = true;
      } else if (listParentheses02[i] == arrayResult[j]) {
        console.log(true);
        result = true;
      } else if (listParentheses03[i] == arrayResult[j]) {
        console.log(true);
        result = true;
      } else {
        console.log(false);
        console.log("----------------------------");

        result = false;
      }
    }
  }
  console.log(result);
};

isValid();

//TODO -------------------------- 27. Remove Element -------------------------- */

const removeNumber = () => {
  let arr = [0, 1, 2, 2, 3, 0, 4, 2];

  // Khai báo biến lấy giá trị input
  let number = document.getElementById("itemRemoveElement").value;

  for (let i = 0; i < arr.length; i++) {
    //? Nếu tìm thấy number trong mảng
    if (arr[i] == parseInt(number)) {
      // Remove element tại vị trí i
      arr.splice(i, 1);
      //! giảm i để kiểm tra vị trí sau khi đã remove còn tồn tại number đang tìm hay không
      // xử lý vấn đề 2 number giống nhau nằm kề nhau
      i--;
    }
  }

  document.getElementById("resultRemoveItem").innerHTML = `Result: ${arr}`;
};
<<<<<<< HEAD
=======

const isValid = (string) => {
  // Khai báo các cặp ngoặc
  let BRACKETS = [
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ];

  // Khai báo ngoặc mở
  let OPEN = BRACKETS.reduce((a, [o, c]) => ({ ...a, [o]: c }), {});

  // Khai báo ngoặc đóng
  let CLOSE = BRACKETS.reduce((a, [o, c]) => ({ ...a, [c]: o }), {});

  // Khai báo mảng rỗng
  let stack = [];

  for (const c of [...s]) {
    if (c in OPEN) stack.push(c);
    if (c in CLOSE && stack.pop() !== CLOSE[c]) return false;
  }

  return !stack.length;
};

//TODO ------------------------ 21. Merge Two Sorted Lists ----------------------- */
// ------------------------ Ghép mảng và sắp xếp tăng dần ----------------------- */

const mergeTwoSortLists = (list1, list2) => {
  // concat: ghép mảng
  let mergeList = list1.concat(list2);

  // khai báo biến swap
  let temp;

  for (let i = 0; i < mergeList.length; i++) {
    for (let j = mergeList.length - 1; j > i; j--) {
      //? Nếu phần tử đầu lớn hơn phần tử sau thì đổi vị trí của nó
      if (mergeList[i] > mergeList[j]) {
        // Gán phần tử i vào biến temp
        temp = mergeList[i];

        // sau đó phần tử i sẽ là giá trị của phần tử j
        mergeList[i] = mergeList[j];

        // Giá trị phần tử i đã gàn vào biến temp
        // Gán ngươc lại cho phần tử j
        mergeList[j] = temp;
      }
    }
  }
  return mergeList;
};

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];

console.log(mergeTwoSortLists(list1, list2));

//TODO ----------------- 26. Remove Duplicates from Sorted Array ---------------- */

const removeDuplicateBlankPosition = (arr) => {
  // Khai bảo mảng kết quả
  let result = removeDuplicates(arr);

  // Khai báo biến chứa đổ dài mảng kết quả
  let resultLength = result.length;

  // Khai báo biến chứa số ký tự blank
  let blanks;

  // ? Nếu độ dài của kết quả < độ dài của mảng ban đầu ==> đã có remove duplicate
  // và tổng các biến blank sẽ là độ dài mảng ban đầu - độ dài mảng kết quả
  if (resultLength < arr.length) {
    blanks = arr.length - resultLength;
  }

  // push tất cả blank vào mảng kết quả
  for (let i = 0; i < blanks; i++) {
    result.push("_");
  }

  return result;
};

let list3 = [1, 1, 2];
let list4 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

console.log(removeDuplicateBlankPosition(list4));
>>>>>>> 8b9e8a4f107e50b7277709287235b8b1ff5d39f4
=======
>>>>>>> 6689f30 (27. Remove Element)
