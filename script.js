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
  