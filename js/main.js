'use strict';

const startGame = () => {

   //проверка значения на число
   const isNumber = n => {
      return !isNaN(parseFloat(n)) && isFinite(n);
   };

   //Получение случайного целого числа в заданном интервале, включительно
   const randomNumber = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
   };

   const getRandomNumber = randomNumber(1, 100); // получить рандомное число от 1 до 100


   const isTrue = () => {
      let getUserNumber = prompt('Угадай число от 1 до 100');
      if (isNumber(getUserNumber) || getUserNumber === null) {
         if (getRandomNumber < getUserNumber && getUserNumber < 101) {
            alert('Загаданное число меньше');
            return isTrue();
         } else if (getRandomNumber > getUserNumber && getUserNumber > 0) {
            alert('Загаданное число больше');
            return isTrue();
         } else if (!getUserNumber) {
            return alert('Игра окончена');
         } else if (getRandomNumber === +getUserNumber) {
            return alert('Поздравляю, Вы угадали!!!');
         } else {
            alert('Введите число от 1 до 100');
            return isTrue();
         }
      } else {
         alert('Введи число!');
         return isTrue();
      }
   };
   console.dir(isTrue);
   isTrue();
};
startGame();


