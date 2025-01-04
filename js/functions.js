const checkStringLength = (str, length) => str.length <= length;

console.log(checkStringLength('Kalinka', 2));
console.log(checkStringLength('Ekaterinburg', 15));
console.log(checkStringLength('Pohod', 5));

function checkPalindrome (str) {
  const string = str.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < string.length / 2; i++) {
    if (string.at(i) !== string.at(-i - 1)) {
      return false;
    }
  }
  return true;
}

console.log(checkPalindrome('Kalinka'));
console.log(checkPalindrome('Paloma'));
console.log(checkPalindrome('Kayak'));
console.log(checkPalindrome('Лёша на полке клопа нашёл '));

/*
Напишите функцию, которая принимает время начала и конца рабочего дня,
 а также время старта и продолжительность встречи в минутах и возвращает true,
  если встреча не выходит за рамки рабочего дня, и false, если выходит.

Время указывается в виде строки в формате часы:минуты.
 Для указания часов и минут могут использоваться как две цифры, так и одна.
  Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

Продолжительность задаётся числом.
 Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.
*/

function intoMinutes (timeStr) {
  timeStr = timeStr.split(':');
  const minutes = Number(timeStr[0]) * 60 + Number(timeStr[1]);
  return minutes;
}

function checkWorkMeeting (start, end, meating, duration) {
  if (intoMinutes(start) <= intoMinutes(meating) &&
    (intoMinutes(end) - intoMinutes(meating)) >= duration) {
    return true;
  }

  return false;
}

console.log(checkWorkMeeting('08:00', '18:00', '16:30', 120));
console.log(checkWorkMeeting('10:0', '15:05', '14:30', 60));
