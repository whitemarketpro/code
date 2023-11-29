$(document).ready(function () {
  var t = new Date,
    e = new Date(t);

  var currentDay = t.getDay();

  if (currentDay !== 5 && currentDay !== 6) {
    e.setDate(t.getDate() + 1);
  } else if (currentDay === 5) {
    e.setDate(t.getDate() + 3);
  } else if (currentDay === 6) {
    e.setDate(t.getDate() + 2);
  }

  var n = new Date,
    // Получаем текущее время в UTC, прибавляем 2 часа
    a = n.getUTCHours() + (+2),

    r = new Array("січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня",
      "листопада", "грудня"),
    i = new Array("Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота");

  if (a >= 00) {
    $(".vebinar-data").text(i[e.getDay()] + ", " + e.getDate() + " " + r[e.getMonth()] +
      " о 19:45 за київським часом");
  } else {
    $(".vebinar-data").text(i[t.getDay()] + ", " + t.getDate() + " " + r[t.getMonth()] +
      " о 19:45 за київським часом");
  }
});
