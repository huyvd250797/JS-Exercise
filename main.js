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

  console.log(result);
};

longestCommonPrefix();
