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
