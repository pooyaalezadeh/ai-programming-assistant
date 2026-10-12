function addServersSection() {
  const section = document.createElement("div");
  section.className = "servers-section";

  section.innerHTML = `
    <div class="servers-header">
      <div class="servers-badge">🖥️ SERVER & NETWORK</div>

      <h2>🖥️ سرور و تجهیزات شبکه</h2>

      <p>
        معرفی سرورهای فیزیکی، تجهیزات شبکه،
        فایروال و راهکارهای زیرساختی.
      </p>
    </div>


    <div class="server-grid">

      <!-- Physical Server -->

      <div class="server-product-card">

        <img
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85"
          alt="سرور فیزیکی دیتاسنتر"
        >

        <div class="server-product-info">

          <h3>🖥️ سرورهای فیزیکی</h3>

          <p>
            سرورهای مناسب برای میزبانی سایت،
            نرم‌افزار، دیتابیس، مجازی‌سازی و سرویس‌های سازمانی.
          </p>

          <div class="server-specs">
            <span>⚙️ CPU</span>
            <span>🧠 RAM</span>
            <span>💾 Storage</span>
            <span>🔗 Network</span>
            <span>🛡️ RAID</span>
          </div>

          <button
            class="server-button"
            onclick="showServerInfo('سرورهای فیزیکی')"
          >
            ℹ️ مشخصات و قیمت
          </button>

        </div>
      </div>


      <!-- Cisco -->

      <div class="server-product-card">

        <img
          src="https://images.unsplash.com/photo-1551703599-6b3e8379aa8a?auto=format&fit=crop&w=900&q=85"
          alt="تجهیزات شبکه"
        >

        <div class="server-product-info">

          <h3>🌐 Cisco</h3>

          <p>
            تجهیزات شبکه Cisco برای شبکه‌های سازمانی،
            سوئیچ، روتر و زیرساخت شبکه.
          </p>

          <div class="server-specs">
            <span>🔀 Switch</span>
            <span>📡 Router</span>
            <span>🌐 Network</span>
            <span>🔐 Security</span>
          </div>

          <button
            class="server-button"
            onclick="showServerInfo('Cisco')"
          >
            ℹ️ مشخصات و قیمت
          </button>

        </div>
      </div>


      <!-- Fortinet -->

      <div class="server-product-card">

        <img
          src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=900&q=85"
          alt="فایروال و امنیت شبکه"
        >

        <div class="server-product-info">

          <h3>🛡️ Fortinet Firewall</h3>

          <p>
            راهکارهای امنیت شبکه و فایروال
            برای کنترل ترافیک و حفاظت از زیرساخت.
          </p>

          <div class="server-specs">
            <span>🔥 Firewall</span>
            <span>🔐 VPN</span>
            <span>🛡️ Security</span>
            <span>🌐 Network</span>
          </div>

          <button
            class="server-button"
            onclick="showServerInfo('Fortinet')"
          >
            ℹ️ مشخصات و قیمت
          </button>

        </div>
      </div>


      <!-- Server Hardware -->

      <div class="server-product-card">

        <div class="hardware-visual">
          ⚙️
          <span>SERVER HARDWARE</span>
        </div>

        <div class="server-product-info">

          <h3>⚙️ سخت‌افزار سرور</h3>

          <p>
            بررسی و انتخاب قطعات مناسب برای ساخت
            یا ارتقای سرور.
          </p>

          <div class="server-specs">
            <span>🧠 CPU</span>
            <span>🧮 RAM</span>
            <span>💿 SSD/NVMe</span>
            <span>🔋 PSU</span>
            <span>❄️ Cooling</span>
          </div>

          <button
            class="server-button"
            onclick="showServerInfo('سخت‌افزار سرور')"
          >
            ℹ️ مشاوره
          </button>

        </div>
      </div>

    </div>


    <div class="server-contact-box">

      <div>
        <h3>💰 قیمت و مشاوره</h3>

        <p>
          برای دریافت قیمت روز تجهیزات،
          مشخصات موردنیاز خود را ارسال کنید.
        </p>
      </div>

      <a href="tel:09100630762">
        📞 تماس برای قیمت
      </a>

    </div>
  `;

  chat.insertBefore(section, typing);

  scrollToBottom();
}


function showServerInfo(type) {

  addMessage(
    `🖥️ ${type}

برای دریافت اطلاعات دقیق‌تر، نوع کاربرد،
تعداد کاربران و مشخصات موردنیاز خود را ارسال کنید.

💰 قیمت تجهیزات و مدل مناسب پس از بررسی اعلام می‌شود.

📞 تماس:
09100630762`,
    "bot"
  );

}
