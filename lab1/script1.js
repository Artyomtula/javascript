document.getElementById("pensionForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const age = parseInt(document.getElementById("age").value, 10);
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const result = document.getElementById("result");

  if (age > 0 && age <= 17) {
    result.value = "Вам работать ещё рано — учитесь";
    return;
  }

  if (gender === "male") {
    if (age > 18 && age <= 59) result.value = "Вам ещё работать и работать";
    else if (age > 60 && age <= 64) result.value = "Скоро пенсия!";
    else if (age > 65) result.value = "Вам пора на пенсию";
    else result.value = "Да кто ты такой??";
  } else {
    if (age > 18 && age <= 54) result.value = "Вам ещё работать и работать";
    else if (age > 55 && age <= 59) result.value = "Скоро пенсия!";
    else if (age > 60) result.value = "Вам пора на пенсию";
    else result.value = "Да кто ты такой??";
  }
});
