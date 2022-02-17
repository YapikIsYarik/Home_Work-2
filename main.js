"use strict"

document.querySelector('.button').addEventListener('click', () => {
   let N = +document.querySelector('.form__input').value;
   let M = +document.querySelector('.form__input-M').value;
   let even;
   let check = document.querySelector('.checkbox__input').value;
   if (document.querySelector('.checkbox__input').checked) {
      even = true;
   } else {
      even = false;
   }
   error = error();
   if (error === 0) {
      if (N > M || N == M) {
         alert("Неможливо порахувати суму!Введіть число N яке має бути меншим за М ");
      } else {
         let sum = 0;
         for (let i = N; i <= M; i++) {
            if (even == true) {
               if (i % 2 == 1) {
                  sum += i;

               }
            } else {
               sum += i;
            }
         }

         if (even == true) {
            document.querySelector('.result__text').innerHTML = "Сума всіх чисел без парних: " + sum;
         } else {
            document.querySelector('.result__text').innerHTML = "Сума всіх чисел: " + sum;
         }
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

