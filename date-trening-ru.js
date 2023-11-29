// Получаем элемент с классом "date-trening"
var dateTreningElement = document.querySelector('.date-trening');

// Проверяем, что элемент найден
if (dateTreningElement) {
  // Заменяем текстовое значение на "тест"
  dateTreningElement.textContent = 'тест';
} else {
  // Выводим сообщение об ошибке, если элемент не найден
  console.error('Элемент с классом "date-trening" не найден.');
}
