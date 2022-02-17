"use strict"

let N;
inputIntN(N);
let M;
inputIntM(M);
if (N > M) {
   alert("Неможливо порахувати суму!Введіть число N яке має бути меншим за М ")
   location.reload();
} else {
   let even = confirm("Пропускати парні?");
   let SUM = 0;
   for (let i = N; i <= M; i++) {
      if (even == false) {
         SUM += i;
      } else {
         if (i % 2 == 1) {
            SUM += i;
         }
      }
   }
   if (even == true) {

      document.querySelector('.result__text').innerHTML = "Сума всіх чисел без парних: " + SUM;
   } else {
      document.querySelector('.result__text').innerHTML = "Сума всіх чисел: " + SUM;
   }
}
function inputIntN() {
   N = +prompt("Введіть ціле число N");
   while (N % 1 !== 0) {
      N = +prompt("ВИ ВВЕЛИ НЕ ЦІЛЕ ЧИСЛО!!!Введіть ціле число заново");
   }
}
function inputIntM() {
   M = +prompt("Введіть ціле число M");
   while (M % 1 !== 0) {
      M = +prompt("ВИ ВВЕЛИ НЕ ЦІЛЕ ЧИСЛО!!!Введіть ціле число заново");
   }
}


