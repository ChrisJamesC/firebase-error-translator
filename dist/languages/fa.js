"use strict";
exports.__esModule = true;
var translations = {
    "auth/claims-too-large": "محموله ادعاهای ارائه شده به setCustomUserClaims() بیشتر از حداکثر اندازه مجاز از 1000 کلمه در ادامه متن.",
    "auth/email-already-exists": "ایمیل ارائه شده از قبل توسط کاربر موجود در حال استفاده است. هر کاربر باید یک ایمیل منحصر به فرد داشته باشد.",
    "auth/id-token-expired": "رمز شناسه Firebase ارائه شده منقضی شده است.",
    "auth/id-token-revoked": "رمز Firebase ID لغو شده است.",
    "auth/insufficient-permission": "اعتبار استفاده شده برای راه اندازی اولیه Admin SDK برای دسترسی به منبع تأیید اعتبار درخواستی کافی نیست. برای اشاره تنظیم یک پروژه فایربیس و مدارک در مورد چگونگی تولید یک گواهی نامه با مجوزهای مناسب و استفاده از آن به تصدیق SDK ها مدیریت.",
    "auth/internal-error": "هنگام تلاش برای پردازش درخواست ، سرور احراز هویت با خطایی غیرمنتظره روبرو شد. پیام خطا باید حاوی اطلاعات دریافت شده از سرور تأیید اعتبار باشد. اگر همچنان ادامه دارد خطا، لطفا گزارش مشکل را به ما گزارش اشکال کانال پشتیبانی می کند.",
    "auth/invalid-argument": "یک استدلال نامعتبر به یک روش احراز هویت ارائه شد. پیام خطا باید حاوی اطلاعات اضافی باشد.",
    "auth/invalid-claims": "ویژگی های این سفارشی ارائه شده به setCustomUserClaims() نامعتبر است.",
    "auth/invalid-continue-uri": "URL ادامه باید یک رشته URL معتبر باشد.",
    "auth/invalid-creation-time": "زمان ایجاد باید یک رشته تاریخ معتبر UTC باشد.",
    "auth/invalid-credential": "از اعتبارنامه مورد استفاده برای تأیید اعتبار SDK های Admin نمی توان برای انجام عمل مورد نظر استفاده کرد. روش های تأیید هویت خاص مانند createCustomToken() و verifyIdToken() نیاز به SDK با اعتبار گواهی دهی می شوند به عنوان یک نشانه یا برنامه اعتبارنامه پیش فرض تازه کردن مخالف است. مشاهده مقداردهی اولیه SDK برای اسناد را روی چگونگی احراز هویت SDK ها مدیریت با اعتبار گواهی.",
    "auth/invalid-disabled-field": "ارزش ارائه شده برای disabled اموال کاربر نامعتبر است. باید بولی باشد.",
    "auth/invalid-display-name": "ارزش ارائه شده برای displayName اموال کاربر نامعتبر است. این باید یک رشته غیر خالی باشد.",
    "auth/invalid-dynamic-link-domain": "دامنه پیوند پویا ارائه شده برای پروژه فعلی پیکربندی یا مجاز نیست.",
    "auth/invalid-email": "ارزش ارائه شده برای email اموال کاربر نامعتبر است. این باید یک آدرس ایمیل رشته ای باشد.",
    "auth/invalid-email-verified": "ارزش ارائه شده برای emailVerified اموال کاربر نامعتبر است. باید بولی باشد.",
    "auth/invalid-hash-algorithm": "الگوریتم هش باید با یکی از رشته های لیست الگوریتم های پشتیبانی شده مطابقت داشته باشد.",
    "auth/invalid-hash-block-size": "اندازه بلوک هش باید یک شماره معتبر باشد.",
    "auth/invalid-hash-derived-key-length": "طول کلید مشتق شده از هش باید یک عدد معتبر باشد.",
    "auth/invalid-hash-key": "کلید هش باید یک بافر معتبر بایت داشته باشد.",
    "auth/invalid-hash-memory-cost": "هزینه حافظه هش باید یک عدد معتبر باشد.",
    "auth/invalid-hash-parallelization": "موازی سازی هش باید یک عدد معتبر باشد.",
    "auth/invalid-hash-rounds": "دورهای هش باید یک عدد معتبر باشد.",
    "auth/invalid-hash-salt-separator": "قسمت جداکننده نمک الگوریتم هش باید یک بافر معتبر بایت باشد.",
    "auth/invalid-id-token": "رمز شناسه ارائه شده یک رمز معتبر Firebase ID نیست.",
    "auth/invalid-last-sign-in-time": "آخرین زمان ورود به سیستم باید یک رشته تاریخ UTC معتبر باشد.",
    "auth/invalid-page-token": "در صفحه بعد ارائه نشانه در listUsers() نامعتبر است. باید یک رشته معتبر غیر خالی باشد.",
    "auth/invalid-password": "ارزش ارائه شده برای password اموال کاربر نامعتبر است. این باید رشته ای باشد که حداقل شش کاراکتر داشته باشد.",
    "auth/invalid-password-hash": "هش رمز عبور باید یک بافر معتبر بایت باشد.",
    "auth/invalid-password-salt": "نمک رمز عبور باید یک بافر معتبر بایت باشد",
    "auth/invalid-phone-number": "ارزش ارائه شده برای phoneNumber نامعتبر است. باید یک رشته شناسه استاندارد سازگار استاندارد E.164 باشد.",
    "auth/invalid-photo-url": "ارزش ارائه شده برای photoURL اموال کاربر نامعتبر است. باید یک URL رشته باشد.",
    "auth/invalid-provider-data": "ProviderData باید یک آرایه معتبر از اشیا User UserInfo باشد.",
    "auth/invalid-provider-id": "ProviderId باید یک رشته شناسایی معتبر ارائه دهنده پشتیبانی شده باشد.",
    "auth/invalid-oauth-responsetype": "فقط دقیقا یک OAuth حفظ responseType باید به true تغییر دهید.",
    "auth/invalid-session-cookie-duration": "مدت زمان کوکی جلسه باید یک عدد معتبر در میلی ثانیه بین 5 دقیقه تا 2 هفته باشد.",
    "auth/invalid-uid": "ارائه uid باید یک رشته غیر خالی با حداکثر 128 کاراکتر باشد.",
    "auth/invalid-user-import": "سابقه کاربری برای وارد کردن نامعتبر است.",
    "auth/maximum-user-count-exceeded": "از حداکثر مجاز تعداد کاربران برای واردات بیشتر شده است.",
    "auth/missing-android-pkg-name": "در صورت نیاز به نصب برنامه Android ، باید نام Android Package ارائه شود.",
    "auth/missing-continue-uri": "یک URL ادامه معتبر باید در درخواست ارائه شود.",
    "auth/missing-hash-algorithm": "وارد کردن کاربران با هش گذرواژه مستلزم ارائه الگوریتم هش و پارامترهای آن است.",
    "auth/missing-ios-bundle-id": "در این درخواست شناسه Bundle iOS وجود ندارد.",
    "auth/missing-uid": "uid شناسه برای عملیات فعلی مورد نیاز است.",
    "auth/missing-oauth-client-secret": "برای فعال کردن جریان کد OIDC ، رمز سرویس گیرنده پیکربندی OAuth لازم است.",
    "auth/operation-not-allowed": "ارائه دهنده ورود به سیستم برای پروژه Firebase شما غیرفعال است. فعال کردن آن را از ثبت نام در روش بخش از کنسول فایربیس.",
    "auth/phone-number-already-exists": "ارائه phoneNumber در حال حاضر در استفاده توسط یک کاربر موجود است. هر کاربر باید یک منحصر به فرد داشته phoneNumber .",
    "auth/project-not-found": "هیچ پروژه Firebase برای اعتبارنامه مورد استفاده برای شروع اولیه SDK های مدیر یافت نشد. برای اشاره تنظیم یک پروژه فایربیس و مدارک در مورد چگونگی تولید یک گواهی نامه برای پروژه خود را و استفاده از آن به تصدیق SDK ها مدیریت.",
    "auth/reserved-claims": "یک یا چند ادعای کاربر سفارشی ارائه شده به setCustomUserClaims() محفوظ است. به عنوان مثال، OIDC ادعاهای خاص مانند (زیر، IAT، ISS، انتظار، AUD، auth_time، و غیره) باید به عنوان کلید برای ادعای سفارشی استفاده نمی شود.",
    "auth/session-cookie-expired": "کوکی جلسه Firebase ارائه شده منقضی شده است.",
    "auth/session-cookie-revoked": "کوکی جلسه Firebase لغو شده است.",
    "auth/uid-already-exists": "ارائه uid قبلا استفاده شده توسط یک کاربر موجود. هر کاربر باید یک منحصر به فرد داشته uid .",
    "auth/unauthorized-continue-uri": "دامنه URL ادامه در لیست سفید نیست. دامنه موجود در کنسول Firebase را در لیست سفید قرار دهید.",
    "auth/user-not-found": "هیچ سابقه کاربری مربوط به شناسه ارائه شده وجود ندارد.",
    "else": "خطای سرور."
};
exports["default"] = translations;
//# sourceMappingURL=fa.js.map