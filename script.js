document.addEventListener("DOMContentLoaded", () => {
    const memes = document.querySelectorAll(".meme");
    memes.forEach((meme, i) => {
      setTimeout(() => {
        meme.classList.remove("hidden");
        meme.classList.add("show");
      }, 500 + i * 500);
    });
  
    const status = document.getElementById("status");
    const statuses = [
      "💬 'Живу, чтобы жить!'",
      "😂 'Часто могу поддержать разговор'",
      "🍀 'Могу поделиться удачей'",
      "🍓 'Обожаю клубнику'",
    ];
    let index = 0;
  
    status.addEventListener("click", () => {
      index = (index + 1) % statuses.length;
      status.textContent = statuses[index];
    });
  
    // 💡 Модальное окно
    const interestInfo = {
      "Игры": "Игры — это увлекательное и многогранное хобби, которое охватывает широкий спектр форматов и жанров. Они могут быть как настольными, так и видеоиграми, а также спортивными или ролевыми. Игры привлекают людей всех возрастов и культур, предоставляя возможность не только развлечься, но и развивать различные навыки.",
      "Фильмы": "Фильмы — это не просто развлечение, но и целый мир, который может стать увлекательным хобби и источником глубоких эмоций и знаний. Интерес к кино может проявляться в различных формах, и вот несколько аспектов, которые делают фильмы таким привлекательным увлечением.",
      "Музыка": "Музыка — это универсальный язык, который способен объединять людей, вызывать эмоции и вдохновлять на творчество. Увлечение музыкой может принимать множество форм и приносить радость и удовлетворение в жизни.",
      "Чтение": "Чтение — это одно из самых увлекательных и обогащающих хобби, которое может стать настоящим источником вдохновения и знаний. Оно открывает двери в новые миры, позволяет погружаться в различные эпохи и культуры, а также развивает воображение и критическое мышление."
    };
  
    const cards = document.querySelectorAll(".card");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDesc = document.getElementById("modal-description");
    const closeModal = document.getElementById("closeModal");
  
    cards.forEach(card => {
      card.addEventListener("click", () => {
        const title = card.textContent.trim();
        modalTitle.textContent = title;
        modalDesc.textContent = interestInfo[title] || "Информация скоро появится.";
        modal.style.display = "flex";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  });
  
// Ожидаем полной загрузки DOM-дерева
document.addEventListener('DOMContentLoaded', function() {
    // ========== 1. НАСТРОЙКИ ТАЙМЕРА ==========
    // Устанавливаем целевую дату (год, месяц-1, день, часы, минуты)
    // Например: 1 января 2025 года, 00:00:00
    const targetDate = new Date(2025, 7, 16, 0, 0, 0);
    
    // ========== 2. ПОЛУЧЕНИЕ ЭЛЕМЕНТОВ DOM ==========
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const completeMessage = document.getElementById('countdown-complete');
    const countdownDisplay = document.querySelector('.countdown-display');
    
    // ========== 3. ФУНКЦИЯ ОБНОВЛЕНИЯ ТАЙМЕРА ==========
    function updateCountdown() {
    // Получаем текущую дату и время (реальное, а не фиксированное)
    const currentDate = new Date(); // Исправлено: теперь используется текущее время
    
    // Вычисляем разницу между целевой и текущей датой в миллисекундах
    const timeRemaining = targetDate - currentDate;
    
    // Проверка завершения таймера
    if (timeRemaining <= 0) {
        countdownDisplay.style.display = 'none';
        completeMessage.style.display = 'block';
        clearInterval(countdownInterval);
        return;
    }
    
    // Расчет временных единиц
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    
    // Обновление интерфейса
    daysElement.textContent = days.toString().padStart(2, '0');
    hoursElement.textContent = hours.toString().padStart(2, '0');
    minutesElement.textContent = minutes.toString().padStart(2, '0');
    secondsElement.textContent = seconds.toString().padStart(2, '0');
    
    // Анимация при изменении секунд
    if (secondsElement.dataset.lastValue !== seconds.toString()) {
        secondsElement.style.transform = 'scale(1.2)';
        setTimeout(() => {
            secondsElement.style.transform = 'scale(1)';
        }, 300);
    }
    secondsElement.dataset.lastValue = seconds.toString(); // Сохраняем текущее значение
}
    
    // ========== 8. ИНИЦИАЛИЗАЦИЯ ТАЙМЕРА ==========
    // Сразу вызываем функцию, чтобы избежать задержки в 1 секунду
    updateCountdown();
    
    // Устанавливаем интервал обновления (каждую секунду)
    const countdownInterval = setInterval(updateCountdown, 1000);
    
    // ========== 9. ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ ==========
    // Функция для изменения целевой даты (пример)
    function setCustomDate(year, month, day, hours = 0, minutes = 0) {
        targetDate = new Date(2025, 7, 16, 0, 0, 0);
        // Сбрасываем отображение
        countdownDisplay.style.display = 'flex';
        completeMessage.style.display = 'none';
        // Перезапускаем интервал
        clearInterval(countdownInterval);
        countdownInterval = setInterval(updateCountdown, 1000);
        // Обновляем сразу
        updateCountdown();
    }
    
    // Пример использования:
    // setCustomDate(2025, 12, 31, 23, 59); // Установит дату на 31 декабря 2025, 23:59
});