// ===== Уровень A — Условные операторы =====

// Задание 136. Проверка заполненности накопителя
console.log("--- Задание 136 ---");
{
  function storageStatus(totalMemory, usedMemory) {
    if (totalMemory <= 0 || usedMemory < 0 || usedMemory > totalMemory) {
      return "Ошибка: некорректные данные";
    }
    let percent = usedMemory / totalMemory * 100;
    let text = percent.toFixed(1) + "% — ";
    if (percent < 50) {
      return text + "Достаточно места";
    } else if (percent < 90) {
      return text + "Память заполняется";
    } else {
      return text + "Память почти заполнена";
    }
  }
  let totalMemory = 64;
  let usedMemory = 48;
  console.log(usedMemory + " из " + totalMemory + " ГБ: " + storageStatus(totalMemory, usedMemory)); // 75% — заполняется
  [10, 32, 58, 64, 70, -1].forEach(function (used) {
    console.log(used + " из 64 ГБ: " + storageStatus(64, used));
  });
}

// Задание 137. Определение уровня сложности игры
console.log("--- Задание 137 ---");
{
  function gameLevel(wins) {
    if (wins < 0) {
      return "Ошибка: число побед не может быть отрицательным";
    } else if (wins < 5) {
      return "Новичок";
    } else if (wins < 15) {
      return "Любитель";
    } else if (wins < 30) {
      return "Профессионал";
    } else {
      return "Мастер";
    }
  }
  let wins = 18;
  console.log(wins + " побед: " + gameLevel(wins)); // Профессионал
  [0, 5, 15, 30].forEach(function (w) {
    console.log(w + " побед: " + gameLevel(w));
  });
}

// Задание 138. Проверка срока действия подписки
console.log("--- Задание 138 ---");
{
  function subscriptionStatus(daysLeft) {
    if (daysLeft < 0) {
      return "Ошибка данных";
    } else if (daysLeft === 0) {
      return "Подписка истекла";
    } else if (daysLeft <= 7) {
      return "Скоро закончится подписка";
    } else {
      return "Подписка активна";
    }
  }
  let daysLeft = 3;
  console.log("Осталось дней: " + daysLeft + " -> " + subscriptionStatus(daysLeft)); // Скоро закончится
  [10, 8, 7, 1, 0, -2].forEach(function (d) {
    console.log("Осталось дней: " + d + " -> " + subscriptionStatus(d));
  });
}

// Задание 139. Определение типа интернет-заказа
console.log("--- Задание 139 ---");
{
  function orderCategory(orderAmount) {
    if (typeof orderAmount !== "number" || isNaN(orderAmount) || orderAmount < 0) {
      return "Ошибка: некорректная сумма";
    } else if (orderAmount < 5000) {
      return "Малый заказ";
    } else if (orderAmount < 20000) {
      return "Средний заказ";
    } else if (orderAmount < 50000) {
      return "Крупный заказ";
    } else {
      return "VIP-заказ";
    }
  }
  let orderAmount = 25000;
  console.log(orderAmount + " ₸: " + orderCategory(orderAmount)); // Крупный заказ
  [4999, 5000, 19999, 20000, 49999, 50000, -1].forEach(function (a) {
    console.log(a + " ₸: " + orderCategory(a));
  });
}

// Задание 140. Проверка прав доступа к файлу
console.log("--- Задание 140 ---");
{
  function filePermissions(role, isBlocked) {
    if (isBlocked) {
      return "Доступ запрещён (пользователь заблокирован)";
    } else if (role === "admin") {
      return "Доступно: управление файлом";
    } else if (role === "editor") {
      return "Доступно: редактирование";
    } else if (role === "viewer") {
      return "Доступно: только просмотр";
    } else {
      return "Неизвестная роль — доступ запрещён";
    }
  }
  let role = "editor";
  let isBlocked = false;
  console.log(role + ": " + filePermissions(role, isBlocked)); // редактирование
  console.log("admin: " + filePermissions("admin", false));
  console.log("viewer: " + filePermissions("viewer", false));
  console.log("guest: " + filePermissions("guest", false));
  console.log("admin (заблокирован): " + filePermissions("admin", true));
}

// ===== Уровень B — Циклы, массивы и строки =====

// Задание 141. Подсчёт количества успешных попыток
console.log("--- Задание 141 ---");
{
  let attempts = [true, false, true, true, false, true, false];
  let success = 0;
  let failed = 0;
  for (let i = 0; i < attempts.length; i++) {
    if (attempts[i] === true) {
      success++;
    } else {
      failed++;
    }
  }
  console.log("Успешных: " + success + ", неуспешных: " + failed); // 4 и 3
  console.log("Процент успешных: " + (success / attempts.length * 100).toFixed(2) + "%"); // 57.14%
}

// Задание 142. Анализ времени работы компьютеров
console.log("--- Задание 142 ---");
{
  let hours = [5, 8, 3, 12, 7, 10, 4];
  let total = 0;
  let max = hours[0];
  let over8 = 0;
  for (let i = 0; i < hours.length; i++) {
    total += hours[i];
    if (hours[i] > max) max = hours[i];
    if (hours[i] > 8) over8++;
  }
  console.log("Общее время: " + total + " ч");                    // 49
  console.log("Среднее время: " + total / hours.length + " ч");    // 7
  console.log("Максимум: " + max + " ч");                          // 12
  console.log("Работали более 8 часов: " + over8 + " комп.");      // 2
}

// Задание 143. Замена запрещённых слов
console.log("--- Задание 143 ---");
{
  function censor(message) {
    return message.replaceAll(/bad/gi, "***");
  }
  let message = "This is a bad example. BAD words are not allowed.";
  console.log("Исходное: " + message);
  console.log("Новое: " + censor(message)); // This is a *** example. *** words are not allowed.
  let clean = "This is a good example.";
  console.log("Без запрещённых слов: " + censor(clean));
}

// Задание 144. Анализ результатов соревнований
console.log("--- Задание 144 ---");
{
  let results = [78, 96, 85, 92, 67, 88, 99, 74];
  let sorted = results.slice().sort(function (a, b) { return b - a; });
  let sum = 0;
  let from90 = 0;
  for (let i = 0; i < results.length; i++) {
    sum += results[i];
    if (results[i] >= 90) from90++;
  }
  console.log("Максимальный балл: " + sorted[0]);              // 99
  console.log("По убыванию: " + sorted.join(", "));
  console.log("Три лучших: " + sorted.slice(0, 3).join(", ")); // 99, 96, 92
  console.log("Средний балл: " + sum / results.length);        // 84.875
  console.log("Баллов не менее 90: " + from90);                // 3
}

// Задание 145. Массив случайных чисел
console.log("--- Задание 145 ---");
{
  let numbers = [];
  for (let i = 0; i < 10; i++) {
    numbers.push(Math.floor(Math.random() * 50) + 1);
  }
  let min = numbers[0];
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
    if (numbers[i] > max) max = numbers[i];
  }
  console.log("Массив: " + numbers.join(", "));
  console.log("Минимум: " + min + ", максимум: " + max);
}

// Задание 146. Сравнение двух списков студентов
console.log("--- Задание 146 ---");
{
  let groupA = ["Алия", "Арман", "Руслан", "Мадина"];
  let groupB = ["Руслан", "Данияр", "Алия", "Тимур"];
  let inBoth = groupA.filter(function (name) { return groupB.includes(name); });
  let onlyA = groupA.filter(function (name) { return !groupB.includes(name); });
  console.log("В обеих группах: " + inBoth.join(", "));   // Алия, Руслан
  console.log("Только в groupA: " + onlyA.join(", "));    // Арман, Мадина
}

// Задание 147. Подсчёт частоты чисел
console.log("--- Задание 147 ---");
{
  let numbers = [2, 4, 2, 5, 4, 2, 7, 5, 4];
  let frequency = {};
  for (let i = 0; i < numbers.length; i++) {
    let n = numbers[i];
    if (frequency[n] === undefined) {
      frequency[n] = 1;
    } else {
      frequency[n]++;
    }
  }
  console.log(frequency); // { 2: 3, 4: 3, 5: 2, 7: 1 }
  let maxCount = 0;
  for (let key in frequency) {
    if (frequency[key] > maxCount) maxCount = frequency[key];
  }
  let mostFrequent = [];
  for (let key in frequency) {
    if (frequency[key] === maxCount) mostFrequent.push(key);
  }
  // Числа 2 и 4 встречаются одинаково часто — выводим все такие числа
  console.log("Чаще всего встречается: " + mostFrequent.join(" и ") + " (по " + maxCount + " раза)");
}

// Задание 148. Фильтрация сообщений по длине
console.log("--- Задание 148 ---");
{
  let messages = ["Привет", "Изучаем программирование", "JavaScript", "Практическая работа", "Код"];
  let longMessages = messages.filter(function (m) { return m.length > 10; });
  console.log("Длиннее 10 символов: " + longMessages.join("; ")); // Изучаем программирование; Практическая работа
  console.log("Количество: " + longMessages.length);              // 2
}

// ===== Уровень C — Функции и объекты =====

// Задание 149. Расчёт среднего времени выполнения теста
console.log("--- Задание 149 ---");
{
  function calculateAverageTime(times) {
    if (!Array.isArray(times) || times.length === 0) {
      return null;
    }
    let sum = 0;
    for (let i = 0; i < times.length; i++) {
      sum += times[i];
    }
    return sum / times.length;
  }
  let testTimes = [12, 15, 10, 18, 14];
  console.log("Среднее время: " + calculateAverageTime(testTimes).toFixed(2) + " мин"); // 13.80
  console.log("Пустой массив: " + calculateAverageTime([]));                            // null
}

// Задание 150. Проверка уникальности логина
console.log("--- Задание 150 ---");
{
  let usernames = ["admin", "student", "teacher", "guest"];
  function isUsernameAvailable(username) {
    let lower = username.toLowerCase();
    for (let i = 0; i < usernames.length; i++) {
      if (usernames[i].toLowerCase() === lower) {
        return false;
      }
    }
    return true;
  }
  function tryRegister(username) {
    if (isUsernameAvailable(username)) {
      console.log(username + ": регистрация возможна");
    } else {
      console.log(username + ": логин занят");
    }
  }
  let newUsername = "Student";
  tryRegister(newUsername); // логин занят
  tryRegister("newuser");   // регистрация возможна
}

// Задание 151. Система начисления баллов за задания
console.log("--- Задание 151 ---");
{
  let tasks = [
    {title: "HTML", points: 10, completed: true},
    {title: "CSS", points: 15, completed: true},
    {title: "JavaScript", points: 20, completed: false},
    {title: "Database", points: 25, completed: true}
  ];
  function calculatePoints(tasks) {
    let total = 0;
    let notCompleted = 0;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].completed) {
        total += tasks[i].points;
      } else {
        notCompleted++;
      }
    }
    return { total: total, notCompleted: notCompleted };
  }
  let r = calculatePoints(tasks);
  console.log("Общая сумма баллов: " + r.total);                 // 50
  console.log("Невыполненных заданий: " + r.notCompleted);       // 1
}

// Задание 152. Анализ заказов интернет-магазина
console.log("--- Задание 152 ---");
{
  let orders = [
    {id: 1, amount: 12000, status: "paid"},
    {id: 2, amount: 8000, status: "pending"},
    {id: 3, amount: 25000, status: "paid"},
    {id: 4, amount: 15000, status: "cancelled"}
  ];
  let paid = orders.filter(function (o) { return o.status === "paid"; });
  let pending = orders.filter(function (o) { return o.status === "pending"; });
  let cancelled = orders.filter(function (o) { return o.status === "cancelled"; });
  let paidSum = 0;
  paid.forEach(function (o) { paidSum += o.amount; });
  let stats = {
    paidOrders: paid.map(function (o) { return o.id; }),
    paidSum: paidSum,
    pendingCount: pending.length,
    cancelledOrders: cancelled.map(function (o) { return o.id; })
  };
  console.log(stats);
  // paidOrders [1, 3], paidSum 37000, pendingCount 1, cancelledOrders [4]
}

// Задание 153. Поиск свободного оборудования
console.log("--- Задание 153 ---");
{
  let devices = [
    {name: "VR Headset", available: true},
    {name: "3D Printer", available: false},
    {name: "Laptop", available: true},
    {name: "Robot Kit", available: true}
  ];
  function getAvailableDevices() {
    return devices.filter(function (d) { return d.available; });
  }
  function setDeviceStatus(name, available) {
    let device = devices.find(function (d) { return d.name === name; });
    if (device) {
      device.available = available;
      console.log(name + ": " + (available ? "доступно" : "занято"));
    } else {
      console.log("Устройство не найдено: " + name);
    }
  }
  let free = getAvailableDevices();
  console.log("Доступно: " + free.map(function (d) { return d.name; }).join(", ")); // VR Headset, Laptop, Robot Kit
  console.log("Количество: " + free.length);                                         // 3
  setDeviceStatus("3D Printer", true);
  setDeviceStatus("Laptop", false);
  setDeviceStatus("Drone", true);
  free = getAvailableDevices();
  console.log("Теперь доступно: " + free.map(function (d) { return d.name; }).join(", ") + " (" + free.length + ")");
}

// Задание 154. Формирование электронного чека
console.log("--- Задание 154 ---");
{
  function generateReceipt(cart) {
    if (!Array.isArray(cart) || cart.length === 0) {
      return "Корзина пуста";
    }
    let lines = [];
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let cost = cart[i].price * cart[i].quantity;
      total += cost;
      lines.push(cart[i].name + " — " + cart[i].quantity + " шт. × " + cart[i].price + " ₸ = " + cost + " ₸");
    }
    lines.push("ИТОГО: " + total + " ₸");
    return lines.join("\n");
  }
  let cart = [
    {name: "Мышь", price: 5000, quantity: 2},
    {name: "Клавиатура", price: 12000, quantity: 1},
    {name: "Наушники", price: 8000, quantity: 1}
  ];
  console.log(generateReceipt(cart)); // итого 30000 ₸
  console.log(generateReceipt([]));   // Корзина пуста
}

// Задание 155. Учёт выполнения IT-проектов
console.log("--- Задание 155 ---");
{
  let projects = [
    {name: "AI Chatbot", progress: 90},
    {name: "Smart Campus", progress: 45},
    {name: "Mobile App", progress: 100},
    {name: "Web Platform", progress: 70}
  ];
  console.log("Проекты:");
  projects.forEach(function (p) {
    console.log(p.name + ": " + p.progress + "%");
  });
  let done = projects.filter(function (p) { return p.progress === 100; });
  let under50 = projects.filter(function (p) { return p.progress < 50; });
  let sum = 0;
  let lowest = projects[0];
  projects.forEach(function (p) {
    sum += p.progress;
    if (p.progress < lowest.progress) lowest = p;
  });
  console.log("Завершённые (100%): " + done.map(function (p) { return p.name; }).join(", "));   // Mobile App
  console.log("Прогресс менее 50%: " + under50.map(function (p) { return p.name; }).join(", ")); // Smart Campus
  console.log("Средний процент выполнения: " + sum / projects.length + "%");                    // 76.25%
  console.log("Наименьший прогресс: " + lowest.name + " (" + lowest.progress + "%)");           // Smart Campus
}

// ===== Уровень D — Веб-приложения =====
// (работают только в браузере)
if (typeof document !== "undefined") {

  // Задание 156. Таймер обратного отсчёта
  {
    let secondsInput = document.getElementById("timerSeconds");
    let display = document.getElementById("timerDisplay");
    let message = document.getElementById("timerMessage");
    let remaining = 0;
    let timerId = null;
    let paused = false;

    function showTime() {
      let m = Math.floor(remaining / 60);
      let s = remaining % 60;
      display.textContent = String(m).padStart(2, "0") + ":" + String(s).padStart(2, "0");
    }
    function stopTimer() {
      if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
      }
    }
    function tick() {
      remaining--;
      showTime();
      if (remaining <= 0) {
        stopTimer();
        paused = false;
        message.textContent = "Время вышло!";
      }
    }
    document.getElementById("timerStart").addEventListener("click", function () {
      if (timerId !== null) return;
      if (!paused) {
        let raw = secondsInput.value.trim();
        let value = Number(raw);
        if (raw === "" || !Number.isInteger(value) || value <= 0) {
          message.textContent = "Введите целое число секунд больше нуля";
          return;
        }
        remaining = value;
      }
      paused = false;
      message.textContent = "";
      showTime();
      timerId = setInterval(tick, 1000);
    });
    document.getElementById("timerPause").addEventListener("click", function () {
      if (timerId !== null) {
        stopTimer();
        paused = true;
        message.textContent = "Пауза";
      }
    });
    document.getElementById("timerReset").addEventListener("click", function () {
      stopTimer();
      paused = false;
      remaining = 0;
      showTime();
      message.textContent = "";
    });
    showTime();
  }

  // Задание 157. Интерактивная цветовая палитра
  {
    let picker = document.getElementById("colorPicker");
    let sample = document.getElementById("colorSample");
    let hexEl = document.getElementById("colorHex");
    let defaultColor = "#ffffff";

    function applyColor(hex) {
      sample.style.backgroundColor = hex;
      document.body.style.backgroundColor = hex;
      hexEl.textContent = hex.toUpperCase();
      // выбираем читаемый цвет текста по яркости фона
      let r = parseInt(hex.slice(1, 3), 16);
      let g = parseInt(hex.slice(3, 5), 16);
      let b = parseInt(hex.slice(5, 7), 16);
      let brightness = (r * 299 + g * 587 + b * 114) / 1000;
      document.body.style.color = brightness < 128 ? "#ffffff" : "#000000";
    }
    picker.addEventListener("input", function () {
      applyColor(picker.value);
    });
    document.getElementById("colorReset").addEventListener("click", function () {
      picker.value = defaultColor;
      applyColor(defaultColor);
    });
    applyColor(picker.value);
  }

  // Задание 158. Калькулятор стоимости поездки
  {
    let distanceInput = document.getElementById("tripDistance");
    let consumptionInput = document.getElementById("tripConsumption");
    let priceInput = document.getElementById("tripPrice");
    let result = document.getElementById("tripResult");
    document.getElementById("tripBtn").addEventListener("click", function () {
      let raws = [distanceInput.value.trim(), consumptionInput.value.trim(), priceInput.value.trim()];
      let distance = Number(raws[0]);
      let consumption = Number(raws[1]);
      let price = Number(raws[2]);
      let bad = raws.some(function (r) { return r === ""; }) ||
                isNaN(distance) || isNaN(consumption) || isNaN(price) ||
                distance <= 0 || consumption <= 0 || price <= 0;
      if (bad) {
        result.textContent = "Ошибка: введите три числа больше нуля";
        return;
      }
      let fuel = distance * consumption / 100;
      let cost = fuel * price;
      result.textContent = "Топлива потребуется: " + fuel.toFixed(2) + " л. Стоимость поездки: " + cost.toFixed(2) + " ₸";
    });
  }

  // Задание 159. Генератор случайных вопросов
  {
    let allQuestions = [
      "Чем отличаются let и const?",
      "Что такое замыкание в JavaScript?",
      "Какие бывают типы данных в JavaScript?",
      "Чем == отличается от ===?",
      "Что делает метод .filter()?",
      "Для чего нужен метод .map()?",
      "Что такое DOM?",
      "Как работает цикл for?",
      "Что вернёт typeof null?",
      "Чем функция-объявление отличается от стрелочной функции?"
    ];
    let remaining = allQuestions.slice();
    let shown = 0;
    let questionEl = document.getElementById("questionText");
    let counterEl = document.getElementById("questionCounter");

    document.getElementById("questionNext").addEventListener("click", function () {
      if (remaining.length === 0) {
        questionEl.textContent = "Вопросы закончились";
        counterEl.textContent = "";
        return;
      }
      let index = Math.floor(Math.random() * remaining.length);
      let question = remaining.splice(index, 1)[0];
      shown++;
      questionEl.textContent = question;
      counterEl.textContent = "Вопрос " + shown + " из " + allQuestions.length;
    });
    document.getElementById("questionReset").addEventListener("click", function () {
      remaining = allQuestions.slice();
      shown = 0;
      questionEl.textContent = "Нажмите «Следующий вопрос»";
      counterEl.textContent = "";
    });
  }

  // Задание 160. Система регистрации IT-проектов
  {
    let directions = ["Искусственный интеллект", "Веб-разработка", "Мобильные приложения", "Робототехника"];
    let statuses = ["На рассмотрении", "В работе", "Завершён"];
    let projects = [];
    let nextId = 1;

    let titleInput = document.getElementById("projTitle");
    let authorInput = document.getElementById("projAuthor");
    let directionSelect = document.getElementById("projDirection");
    let dateInput = document.getElementById("projDate");
    let searchInput = document.getElementById("projSearch");
    let msg = document.getElementById("projMessage");
    let body = document.getElementById("projBody");
    let statsEl = document.getElementById("projStats");

    directions.forEach(function (d) {
      let opt = document.createElement("option");
      opt.value = d;
      opt.textContent = d;
      directionSelect.appendChild(opt);
    });

    try {
      let saved = JSON.parse(localStorage.getItem("itProjects"));
      if (Array.isArray(saved)) {
        projects = saved;
        nextId = projects.reduce(function (m, p) { return Math.max(m, p.id); }, 0) + 1;
      }
    } catch (e) {
      // localStorage недоступен
    }
    function save() {
      try {
        localStorage.setItem("itProjects", JSON.stringify(projects));
      } catch (e) {
        // не удалось сохранить
      }
    }
    function renderStats() {
      statsEl.innerHTML = "";
      directions.forEach(function (d) {
        let count = projects.filter(function (p) { return p.direction === d; }).length;
        let li = document.createElement("li");
        li.textContent = d + ": " + count;
        statsEl.appendChild(li);
      });
    }
    function renderProjects() {
      let query = searchInput.value.trim().toLowerCase();
      let shown = projects.filter(function (p) {
        return p.title.toLowerCase().includes(query);
      });
      body.innerHTML = "";
      shown.forEach(function (p, index) {
        let tr = document.createElement("tr");
        [index + 1, p.title, p.author, p.direction, p.date].forEach(function (v) {
          let td = document.createElement("td");
          td.textContent = v;
          tr.appendChild(td);
        });
        let td = document.createElement("td");
        let select = document.createElement("select");
        statuses.forEach(function (s) {
          let opt = document.createElement("option");
          opt.value = s;
          opt.textContent = s;
          if (s === p.status) opt.selected = true;
          select.appendChild(opt);
        });
        select.addEventListener("change", function () {
          p.status = select.value;
          save();
        });
        td.appendChild(select);
        tr.appendChild(td);
        body.appendChild(tr);
      });
      renderStats();
    }
    document.getElementById("projAdd").addEventListener("click", function () {
      let title = titleInput.value.trim();
      let author = authorInput.value.trim();
      let direction = directionSelect.value;
      let date = dateInput.value;
      if (title === "" || author === "" || direction === "" || date === "") {
        msg.textContent = "Заполните все обязательные поля: название, ФИО, направление и дата";
        return;
      }
      projects.push({
        id: nextId++,
        title: title,
        author: author,
        direction: direction,
        date: date,
        status: "На рассмотрении"
      });
      msg.textContent = "Проект зарегистрирован";
      titleInput.value = "";
      authorInput.value = "";
      directionSelect.value = "";
      dateInput.value = "";
      save();
      renderProjects();
    });
    searchInput.addEventListener("input", renderProjects);
    renderProjects();
  }
}