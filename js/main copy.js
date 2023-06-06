// Эл-ты формы
const squareInput = document.querySelector("#square-input");
const squareRange = document.querySelector("#square-range");
const inputs = document.querySelectorAll("input");

// Радиокнопки
const radioType = document.querySelectorAll("input[name='type']");
const radioBuilding = document.querySelectorAll("input[name='building']");
const radioRooms = document.querySelectorAll("input[name='rooms']");

// Чекбоксы
const ceiling = document.querySelectorAll("input[name='ceiling']");
const walls = document.querySelectorAll("input[name='walls']");
const floor = document.querySelectorAll("input[name='floor']");

const basePrise = 6000;
const totalPriceElement = document.querySelector("#total-price");

// Связка range c текстовым полем
// Слушаем событие input
squareRange.addEventListener("input", function () {
  squareInput.value = squareRange.value;
});

// связка текстового поля с range
squareInput.addEventListener("input", function () {
  squareRange.value = squareInput.value;
});

function calculate() {
  let totalPrice = basePrise * parseInt(squareInput.value);

  for (const radio of radioType) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }

  for (const radio of radioBuilding) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }

  for (const radio of radioRooms) {
    if (radio.checked) {
      totalPrice = totalPrice * parseFloat(radio.value);
    }
  }

  for (const check of ceiling) {
    if (check.checked) {
      totalPrice = totalPrice * parseFloat(check.value);
    }
  }

  for (const check of walls) {
    if (check.checked) {
      totalPrice = totalPrice * parseFloat(check.value);
    }
  }

  for (const check of floor) {
    if (check.checked) {
      totalPrice = totalPrice * parseFloat(check.value);
    }
  }

  const formatter = new Intl.NumberFormat("ru");
  totalPriceElement.innerText = formatter.format(totalPrice);
}

calculate();

for (const input of inputs) {
  input.addEventListener("input", function () {
    calculate();
  });
}
