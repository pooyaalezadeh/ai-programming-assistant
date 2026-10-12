function addGamesSection() {
  const section = document.createElement("div");
  section.className = "games-section";

  section.innerHTML = `
    <div class="games-header">
      <div class="games-badge">🎮 GAMING</div>

      <h2>بازی‌های وبسایتی</h2>

      <p>
        طراحی و توسعه بازی‌های جذاب برای موبایل،
        کامپیوتر و اجرای مستقیم داخل مرورگر.
      </p>
    </div>

    <div class="games-grid">

      <!-- بازی‌های وب -->
      <div class="game-card">

        <img
          class="game-photo"
          src="https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=85"
          alt="بازی‌های کامپیوتری و گیمینگ"
        >

        <div class="game-info">

          <h3>🎮 بازی‌های تحت وب</h3>

          <p>
            بازی‌های جذاب و سرگرم‌کننده که مستقیماً
            داخل مرورگر موبایل و کامپیوتر اجرا می‌شوند.
          </p>

          <div class="game-features">
            <span>✓ موبایل</span>
            <span>✓ کامپیوتر</span>
            <span>✓ آنلاین</span>
          </div>

          <button
            class="game-button"
            onclick="showGameInfo('بازی‌های تحت وب')"
          >
            ▶️ مشاهده
          </button>

        </div>
      </div>


      <!-- برنامه نویسی بازی -->
      <div class="game-card">

        <img
          class="game-photo"
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85"
          alt="برنامه نویسی بازی"
        >

        <div class="game-info">

          <h3>💻 برنامه‌نویسی بازی</h3>

          <p>
            طراحی و توسعه بازی با HTML، CSS و JavaScript
            برای موبایل و دسکتاپ.
          </p>

          <div class="game-features">
            <span>✓ JavaScript</span>
            <span>✓ HTML/CSS</span>
            <span>✓ موبایل</span>
          </div>

          <button
            class="game-button"
            onclick="showGameInfo('برنامه‌نویسی بازی')"
          >
            ▶️ مشاهده
          </button>

        </div>
      </div>


      <!-- بازی داخل سایت -->
      <div class="game-card">

        <img
          class="game-photo"
          src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=85"
          alt="بازی داخل وبسایت"
        >

        <div class="game-info">

          <h3>🌐 بازی داخل وبسایت</h3>

          <p>
            ساخت بخش اختصاصی بازی داخل سایت و ارائه
            بازی‌های آنلاین به کاربران.
          </p>

          <div class="game-features">
            <span>✓ طراحی اختصاصی</span>
            <span>✓ امتیازدهی</span>
            <span>✓ کاربران</span>
          </div>

          <button
            class="game-button"
            onclick="showGameInfo('بازی داخل وبسایت')"
          >
            ▶️ مشاهده
          </button>

        </div>
      </div>

    </div>


    <div class="games-order">

      <div>
        <h3>🎮 ساخت بازی اختصاصی</h3>

        <p>
          برای سایت، کسب‌وکار یا پروژه شخصی شما
        </p>
      </div>

      <a href="tel:09100630762">
        📞 مشاوره و سفارش
      </a>

    </div>
  `;

  chat.insertBefore(section, typing);

  scrollToBottom();
}


function showGameInfo(gameName) {

  addMessage(
    `🎮 ${gameName}

برای دریافت اطلاعات بیشتر درباره این بخش،
می‌توانید جزئیات پروژه یا ایده خودتان را در چت بنویسید.`,
    "bot"
  );

}
