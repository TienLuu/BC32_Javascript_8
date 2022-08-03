// Mảng số nguyên - (1)
let arrNumbers = [4, 4, 50, -1, -10, 40, 5];

// Mảng số thực - (2)
let arrRealNumbers = [];

// Hiển thị mảng số nguyên ra layout
dom("#showArray").innerHTML = `
      <span>Mảng số nguyên: ${arrNumbers.join(", ")}</span>
   `;

// DOM
function dom(id) {
   return document.querySelector(id);
}

// Hiển thị form để người dùng nhập vào khi chức năng đó cần thêm thông tin
function showFormField(id) {
   document.querySelector(id).className += " d-block";
}

// Nhập 1 số nguyên vào mảng
function addIntegerNumber() {
   let numberVal = +dom("#number").value;

   arrNumbers.push(numberVal);

   dom("#showArray").innerHTML = `
      <span>Mảng số nguyên: ${arrNumbers.join(", ")}</span>
   `;
}

// Tổng các số dương trong mảng (1)
function calcSumPositive() {
   let sumPositive = arrNumbers.reduce((total, value) => {
      return value >= 0 ? (total += value) : total;
   }, 0);

   dom("#showResult").innerHTML = `
      <span>Tổng các số dương trong mảng: ${sumPositive}</span>
   `;
}

// Đếm số dương trong mảng (1)
function countPositive() {
   let countPositive = 0;
   arrNumbers.forEach((value) => {
      if (value >= 0) {
         countPositive++;
      }
   });

   dom("#showResult").innerHTML = `
   <span>Số lượng số dương trong mảng: ${countPositive}</span>
  `;
}

// Tìm số nhỏ nhất trong mảng (1)
function findMinNumber() {
   let minNumber = arrNumbers[0];

   arrNumbers.forEach((value) => {
      if (value <= minNumber) {
         minNumber = value;
      }
   });

   dom("#showResult").innerHTML = `
   <span>Số nhỏ nhất trong mảng: ${minNumber}</span>
  `;
}

// Tìm số dương nhỏ nhất trong mảng (1)
function findMinPositive() {
   let minPositive;

   for (let i = 0; i < arrNumbers.length; i++) {
      if (arrNumbers[i] > 0) {
         minPositive = arrNumbers[i];
         break;
      }
   }

   if (!minPositive) {
      dom("#showResult").innerHTML = `
         <span>Mảng không có số dương</span>
      `;
      return;
   }

   arrNumbers.forEach((value) => {
      if (value > 0 && value <= minPositive) {
         minPositive = value;
      }
   });

   dom("#showResult").innerHTML = `
   <span>Số dương nhỏ nhất trong mảng: ${minPositive}</span>
  `;
}

// Tìm số chẵn cuối cùng trong mảng (1)
function findLastEvenNumber() {
   let indexOfLastEvenNumber;

   arrNumbers.forEach((value, index) => {
      if (value > 0 && value % 2 === 0) {
         indexOfLastEvenNumber = index;
      }
   });

   if (!indexOfLastEvenNumber) {
      dom("#showResult").innerHTML = `
         <span>Mảng không có giá trị chẵn: -1</span>
      `;
   } else {
      dom("#showResult").innerHTML = `
         <span>Giá trị số chẵn cuối cùng: ${arrNumbers[indexOfLastEvenNumber]}</span>
      `;
   }
}

// Hoán đổi vị trí của 2 phần tử (1)
// Hiển thị input để người dùng nhập vào vị trí
function swapPosition() {
   showFormField("#position");
}

// Hoán đổi vị trí giá trị vị trí 2 index vừa nhập vào
function getIndex() {
   let index1 = +dom("#position1").value;
   let index2 = +dom("#position2").value;

   let b = arrNumbers[index1];
   arrNumbers[index1] = arrNumbers[index2];
   arrNumbers[index2] = b;

   dom("#showResult").innerHTML = `
         <span>Mảng sau khi hoán đổi: ${arrNumbers.join(", ")}</span>
      `;
}

// Sắp xếp tăng dần (1)
function sortAscending() {
   arrNumbers.sort((a, b) => a - b);
   dom("#showResult").innerHTML = `
         <span>Mảng sau khi sắp xếp: ${arrNumbers.join(", ")}</span>
      `;
}

// Tìm số nguyên tố đầu tiền trong mảng (1)
// Kiểm tra số nguyên tố
function isPrimeNumber(n) {
   let square = Math.sqrt(n);
   for (let i = 2; i <= square; i++) {
      if (n % i == 0) {
         return 0;
      }
   }
   return 1;
}

// Tìm số nguyên tố
function findFirstPrimeNumber() {
   for (let i = 0; i < arrNumbers.length; i++) {
      for (let j = 2; j <= arrNumbers[i]; j++) {
         if (isPrimeNumber(arrNumbers[i]) === 1) {
            dom("#showResult").innerHTML = `
               <span>Số nguyên tố đầu tiên trong mảng: ${arrNumbers[i]} <br> Vị trí: ${i}</span>
            `;
            return;
         }
      }
   }

   return (dom("#showResult").innerHTML = `
               <span>Không có số nguyên tố: -1</span>
            `);
}

// Nhập mảng số thực
// Hiển thị input để người dùng nhập
function realNumber() {
   showFormField("#showRealNumber");
}

// Thêm số thực vừa nhập vào mảng
function addRealNumber() {
   let realNumberVal = +document.getElementById("realNumber").value;

   arrRealNumbers.push(realNumberVal);

   dom("#showResult").innerHTML = `
          <span>Mảng số thực: ${arrRealNumbers.join(", ")}</span>
      `;
}

// Tìm số nguyên trong mảng số thực vừa nhập (2)
function findIntegerNumber() {
   let count = 0;

   for (let i = 0; i < arrRealNumbers.length; i++) {
      if (Math.floor(arrRealNumbers[i]) === Math.ceil(arrRealNumbers[i])) {
         count++;
      }
   }

   dom("#showResult").innerHTML = `
         <span>Số lượng số nguyên trong mảng số thực: ${count}</span>
      `;
}

// So sánh số lượng số dương và số lương số âm
function compareNumber() {
   let countNegativeNumber = 0;
   let countPositiveNumber = 0;

   for (let i = 0; i < arrNumbers.length; i++) {
      if (arrNumbers[i] > 0) {
         countPositiveNumber++;
      } else if (arrNumbers[i] < 0) {
         countNegativeNumber++;
      }
   }

   if (countPositiveNumber > countNegativeNumber) {
      dom("#showResult").innerHTML = `
         <span>SL số dương lớn hơn SL số âm: ${
            countPositiveNumber - countNegativeNumber
         }</span>
      `;
   } else {
      dom("#showResult").innerHTML = `
         <span>SL số dương nhỏ hơn SL số âm: ${
            countNegativeNumber - countPositiveNumber
         }</span>
      `;
   }
}
