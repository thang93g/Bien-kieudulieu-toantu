let physics
let chemist
let math
physics = +prompt("nhap diem vat ly")
chemist = +prompt("nhap diem hoa hoc")
math = +prompt("nhap diem toan")

let average = (physics+chemist+math)/3
let total = physics+chemist+math
document.write("Diem trung binh la " + average )
document.write("Tong diem la " + total )