"use strict"

document.querySelector('.form__button').addEventListener('click', () => {
   const N = +document.getElementById('numberN').value;
   const M = +document.getElementById('numberM').value;
   let check = document.querySelector('.checkbox__input').checked;
   error = error();
   if (error === 0) {
      let sum = 0;
      for (let i = N; i <= M; i++) {
         if (check && i % 2 == 0)
            continue;
         sum += i;
      }
      if (check) {
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
      if (N > M || N == M) {
         alert("Неможливо порахувати суму!Введіть число N яке має бути меншим за М ");
         error++;
      }
      return error;
   }
})

