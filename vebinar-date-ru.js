$(document).ready(function () {
  var t = new Date,
    e = new Date(t);
  
  var currentDay = t.getDay();

  if (currentDay !== 4 && currentDay !== 5) {
    e.setDate(t.getDate() + 1);
  } else if (currentDay === 4) {
    e.setDate(t.getDate() + 3);
  } else if (currentDay === 5) {
    e.setDate(t.getDate() + 2);
  }

  var n = new Date,
    // Получаем текущее время в UTC, прибавляем 2 часа
    a = n.getUTCHours() + (+2),

    r = new Array("января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября",
      "ноября", "декабря"),
    i = new Array("Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота");

  if (a >= 00) {
    $(".vebinar-data").text(i[e.getDay()] + ", " + e.getDate() + " " + r[e.getMonth()] +
      " в 19:45 по Киеву");
  } else {

    $(".vebinar-data").text(i[t.getDay()] + ", " + t.getDate() + " " + r[t.getMonth()] +
      " в 19:45 по Киеву");
  }
});
