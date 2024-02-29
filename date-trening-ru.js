var dateTreningElement = document.querySelector('.date-trening');

if (dateTreningElement) {
  // Заменяем дату. Она должна быть в одинарных кавычках 
  dateTreningElement.textContent = '26 марта 2024';
} else {
  // Выводим сообщение об ошибке, если элемент не найден
  console.error('Элемент с классом "date-trening" не найден.');
}
