"use strict"

document.querySelector('.form__button').addEventListener('click', () => {
   let N = +document.getElementById('numberN').value;
   let M = +document.getElementById('numberM').value;
   let isEven;
   document.querySelector('.checkbox__input').value;
   if (document.querySelector('.checkbox__input').checked) {
      isEven = true;
   } else {
      isEven = false;
   }
   error = error();
   if (error === 0 && N > M || N == M) {
      alert("Неможливо порахувати суму!Введіть число N яке має бути меншим за М ");
   } else {
      let sum = 0;
      for (let i = N; i <= M; i++) {
         if (isEven && i % 2 == 0)
            continue;
         sum += i;
      }
      if (isEven == true) {
         document.querySelector('.without-pairs').innerHTML += sum + " , ";
      } else {
         document.querySelector('.all-number ').innerHTML += sum + " , ";
      }
   }
   function error() {
      let error = 0;
      if (N % 1 !== 0) {
         alert("ВИ ВВЕЛИ НЕ ЦІЛЕ ЧИСЛО N!!!Введіть ціле число заново")
         error++;
      } else if (M % 1 !== 0) {
         alert("ВИ ВВЕЛИ НЕ ЦІЛЕ ЧИСЛО M!!!Введіть ціле число заново")
         error++;
      }
      return error;
   }
})

