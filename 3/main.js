let month = +prompt("Nhập vào tháng");
let year = +prompt("Nhập vào năm");
if (
  Number.isInteger(month) &&
  Number.isInteger(year) &&
  month > 0 &&
  month < 13 &&
  year > 0
) {
  let result = 0;
  if (
    month === 1 ||
    month === 3 ||
    month === 5 ||
    month === 7 ||
    month === 8 ||
    month === 10 ||
    month === 12
  ) {
    result = 31;
  }
  if (month === 4 || month === 6 || month === 9 || month === 11) {
    result = 30;
  }
  if (month === 2) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      result = 29;
    } else {
      result = 28;
    }
  }
  alert("Số ngày trong tháng đó là " + result);
} else {
  alert("Giá trị nhập vào không hợp lệ!");
}
