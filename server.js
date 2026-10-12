const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// تنظیمات
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// فایل‌های سایت
app.use(express.static(path.join(__dirname, "public")));

// پاسخ هوشمند رایگان
function replyTo(message) {
  const text = String(message || "").trim().toLowerCase();

  if (!text) {
    return "لطفاً پیام خود را بنویسید 😊";
  }

  // سلام
  if (
    text.includes("سلام") ||
    text.includes("درود") ||
    text.includes("hello") ||
    text.includes("hi")
  ) {
    return `سلام 👋
خوش آمدید 🌟

من دستیار هوشمند برنامه‌نویسی و سرور هستم.

می‌توانم درباره این خدمات راهنمایی کنم:
🌐 طراحی سایت
💻 برنامه‌نویسی
🖥️ سرور و VPS
🤖 هوش مصنوعی
💰 قیمت خدمات
📋 ثبت سفارش

سؤال خودتان را بنویسید.`;
  }

  // طراحی سایت
  if (
    text.includes("سایت") ||
    text.includes("وب سایت") ||
    text.includes("وب‌سایت") ||
    text.includes("وردپرس") ||
    text.includes("wordpress")
  ) {
    return `🌐 خدمات طراحی سایت

طراحی و راه‌اندازی انواع سایت:
• سایت شرکتی
• سایت شخصی
• فروشگاه اینترنتی
• وردپرس
• سایت اختصاصی
• اتصال دامنه و هاست
• بهینه‌سازی و پشتیبانی

برای بررسی پروژه، جزئیات سایت موردنظرتان را ارسال کنید.`;
  }

  // برنامه نویسی
  if (
    text.includes("برنامه نویسی") ||
    text.includes("برنامه‌نویسی") ||
    text.includes("کدنویسی") ||
    text.includes("پروژه") ||
    text.includes("javascript") ||
    text.includes("جاوااسکریپت") ||
    text.includes("node") ||
    text.includes("python") ||
    text.includes("پایتون")
  ) {
    return `💻 خدمات برنامه‌نویسی

انجام پروژه‌های نرم‌افزاری و وب:
• JavaScript
• Node.js
• Python
• HTML / CSS
• API
• ربات و اتوماسیون
• پنل و سیستم‌های اختصاصی

اگر پروژه‌ای دارید، توضیحاتش را بفرستید تا بررسی شود.`;
  }

  // سرور و VPS
  if (
    text.includes("vps") ||
    text.includes("سرور") ||
    text.includes("لینوکس") ||
    text.includes("linux") ||
    text.includes("هاست") ||
    text.includes("ssh") ||
    text.includes("docker")
  ) {
    return `🖥️ خدمات سرور و VPS

خدمات قابل ارائه:
• راه‌اندازی VPS
• نصب Linux
• تنظیم SSH
• نصب Docker
• نصب Nginx
• راه‌اندازی سایت
• تنظیمات امنیتی پایه
• پشتیبانی و مدیریت سرور

نوع سرور و کاری که می‌خواهید انجام دهید را بگویید تا راهنمایی‌تان کنم.`;
  }

  // هوش مصنوعی
  if (
    text.includes("هوش مصنوعی") ||
    text.includes("ai") ||
    text.includes("چت بات") ||
    text.includes("چت‌بات") ||
    text.includes("ربات")
  ) {
    return `🤖 خدمات هوش مصنوعی

امکان طراحی و توسعه:
• چت‌بات
• دستیار هوشمند
• اتصال AI به سایت
• API
• اتوماسیون
• سیستم پاسخگویی هوشمند

اگر ایده‌ای دارید، توضیح دهید تا بررسی کنیم.`;
  }

  // قیمت
  if (
    text.includes("قیمت") ||
    text.includes("هزینه") ||
    text.includes("چقدر") ||
    text.includes("پول")
  ) {
    return `💰 قیمت خدمات

قیمت به نوع و امکانات پروژه بستگی دارد.

برای اعلام قیمت دقیق، این موارد را بفرستید:
1️⃣ نوع پروژه
2️⃣ امکانات موردنیاز
3️⃣ زمان تقریبی موردنظر

بعد از بررسی، قیمت مناسب پروژه اعلام می‌شود.`;
  }

  // سفارش
  if (
    text.includes("سفارش") ||
    text.includes("خرید") ||
    text.includes("ثبت") ||
    text.includes("میخوام") ||
    text.includes("می‌خوام")
  ) {
    return `📋 ثبت سفارش

برای شروع کافی است توضیح کوتاهی درباره پروژه‌تان بفرستید.

مثلاً:
«یک سایت فروشگاهی با وردپرس می‌خواهم»

یا:
«یک VPS برای اجرای Node.js می‌خواهم»

پروژه بررسی می‌شود و راهنمایی لازم را دریافت می‌کنید.`;
  }

  // تماس
  if (
    text.includes("تماس") ||
    text.includes("شماره") ||
    text.includes("پشتیبانی") ||
    text.includes("مشاوره")
  ) {
    return `📞 تماس و مشاوره

برای ارتباط مستقیم:

09100630762

می‌توانید از دکمه «📞 تماس» بالای صفحه نیز استفاده کنید.`;
  }

  // تشکر
  if (
    text.includes("ممنون") ||
    text.includes("مرسی") ||
    text.includes("متشکرم") ||
    text.includes("thanks")
  ) {
    return "خواهش می‌کنم 🌹 خوشحالیم که کمکتان می‌کنیم.";
  }

  // پاسخ پیش‌فرض
  return `متوجه درخواست شما شدم 🤖

برای اینکه بهتر راهنمایی‌تان کنم، می‌توانید درباره یکی از این موارد سؤال کنید:

🌐 طراحی سایت
💻 برنامه‌نویسی
🖥️ VPS و سرور
🤖 هوش مصنوعی
💰 قیمت
📋 ثبت سفارش

یا توضیح کامل پروژه‌تان را همینجا بنویسید.`;
}

// API چت
app.post("/api/chat", (req, res) => {
  try {
    const message = req.body?.message || "";
    const reply = replyTo(message);

    res.json({
      success: true,
      reply
    });
  } catch (error) {
    console.error("Chat error:", error);

    res.status(500).json({
      success: false,
      reply: "خطایی در پردازش پیام رخ داد. لطفاً دوباره تلاش کنید."
    });
  }
});

// خدمات
app.get("/api/services", (req, res) => {
  res.json({
    success: true,
    services: [
      "طراحی سایت",
      "برنامه‌نویسی",
      "VPS و سرور",
      "هوش مصنوعی",
      "پشتیبانی و مشاوره"
    ]
  });
});

// بررسی سلامت سرور
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "AI Programming Assistant is running"
  });
});

// شروع سرور
if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;