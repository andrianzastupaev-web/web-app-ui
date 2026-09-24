/* Circles i18n: мова застосунку. За замовчуванням українська. */
(function () {
    var I18N = {
        ua: {
            // ── Спільне ──
            nav_search: "Пошук анкет", nav_profile: "Мій профіль", nav_bottle: "Пляшечка",
            close: "Закрити", cancel: "Скасувати", member: "Учасник",
            scr_register_title: "Спочатку — анкета",
            scr_register_text: "Заповни свою анкету, щоб почати знайомитися",
            scr_register_btn: "Заповнити анкету",
            scr_mod_title: "Анкета на модерації",
            scr_mod_text: "Адмін перевіряє твою анкету. Скоро все буде!",
            scr_mod_text2: "Адмін перевіряє твою анкету.<br>Це зазвичай займає кілька хвилин.",
            scr_loading_title: "Завантажую...", scr_loading_profile: "Завантажую профіль...",
            scr_load_err_title: "Не вдалося завантажити",
            scr_load_err_text: "Закрий і відкрий додаток ще раз",

            // ── Профіль ──
            p_title: "— мій профіль",
            p_edit: "✏️ Редагувати анкету",
            p_top: "🏆 ТОП учасників",
            p_lang: "🌐 Мова",
            p_hint: "Так тебе бачать інші учасники",
            p_create_title: "Створи свою анкету",
            p_create_text: "Додай фото, ім'я та пару слів про себе — і починай знайомитися",
            p_gifts_title: "🎁 Подарунки",
            p_gifts_empty: "Ще ніхто не подарував 🙈",
            p_gifts_from: "Подарунки",
            p_like_sent: "❤️ Лайк надіслано",
            p_lang_title: "Мова / Language",

            // ── Пошук ──
            s_title: "🔍 Пошук", s_filter: "⚙️ Фільтр",
            s_age_from: "Вік від", s_age_to: "до", s_show: "Показувати",
            s_all: "Всіх", s_males: "Хлопців", s_females: "Дівчат",
            s_seekers: "Учасники, що шукають", s_any: "Будь-що",
            s_dating: "Стосунки 💞", s_friends: "Дружбу 🤝", s_chat: "Спілкування 💬",
            s_apply: "Застосувати фільтр",
            s_mod_text: "Адмін перевіряє твою анкету. Скоро все буде!",
            s_no_more_title: "Анкети закінчились",
            s_no_more_text: "Ти переглянув усі нові анкети",
            s_show_again: "🔄 Показати ще раз",
            s_loading_deck: "Завантажую анкети...",
            s_report_title: "Поскаржитись на анкету",
            s_r_spam: "🚫 Спам або реклама", s_r_nude: "🔞 Непристойні фото",
            s_r_abuse: "🤬 Образи або агресія", s_r_fake: "🎭 Фейк / шахрайство",
            s_reported: "Скаргу надіслано ✅", s_reported_already: "Ти вже поскаржився на цю анкету",
            s_report_fail: "Не вдалося надіслати 😕",
            s_gift_title: "Подарувати", s_balance: "Твій рейтинг: ",
            s_g_rose: "🌹 Троянда", s_g_choco: "🍫 Шоколадка",
            s_g_teddy: "🧸 Ведмедик", s_g_ring: "💍 Кільце",
            s_gift_sent: "Подарунок надіслано ", s_gift_fail: "Не вдалося надіслати 😕",
            s_no_rating: "Не вистачає рейтингу (треба ⭐",

            // ── Пляшечка ──
            b_game_full_title: "Гра повна",
            b_game_full_text: "За столом уже 4 гравці. Спробуй пізніше!",
            b_loading: "Завантажую гру...",
            b_need_reg_text: "Грають лише зареєстровані учасники",
            b_table: "Стіл", b_players: "Гравців",
            b_wait_more: "Чекаємо ще гравців (", b_wait_need: "⏳ Чекаємо гравців (потрібно 2+)",
            b_turn: "Крутить: ", b_spin: "🍾 Крутити!", b_spinning_wait: " крутить...",
            b_pointed_at: "Пляшечка вказала на ", b_choose_action: "! Обери дію:",
            b_choosing: " обирає дію для ", b_next_spin: "Наступним крутить: ",
            b_a_kiss: "😘 {a} поцілував(ла) {b}!", b_a_heart: "❤️ {a} віддає сердечко {b}",
            b_a_dislike: "👎 {a} ставить дизлайк {b}", b_a_tomato: "🍅 {a} кидає помідор у {b}!",
            b_you_liked: "❤️ Ти лайкнув {n}!",
            b_leave: "🚪 Залишити гру",
            b_like_btn: "❤️ Лайкнути", b_back: "← Назад",
            b_g_reg_title: "Спочатку — анкета", b_g_reg_text: "Грають лише зареєстровані учасники",

            // ── ТОП ──
            t_title: "Circles TOP", t_sub: "🔥 Найпопулярніші цього тижня",
            t_my_pos: "👤 Твоя позиція", t_to_reset: "До нового тижня:", t_days: "д", t_hours: "г", t_min: "хв", t_rating: "Рейтинг",

            // ── Редагування ──
            e_photos: "Фотографії", e_photo_hint: "Перше фото — головне",
            e_name: "Ім'я", e_age: "Вік", e_city: "Місто",
            e_gender: "Стать", e_male: "Хлопець", e_female: "Дівчина",
            e_look: "Кого шукаєш", e_about: "Про себе",
            e_about_hint: "Кілька слів, щоб тебе запам'ятали",
            e_show_username: "Показувати @username в анкеті",
            e_save: "Зберегти анкету",
            e_err_name: "Вкажи ім'я 🙂", e_err_age: "Вік має бути від 16 до 99",
            e_err_gender: "Вкажи свою стать 👤", e_err_save: "Не вдалося зберегти анкету 😔 Спробуй ще раз",
            e_saving: "Зберігаю... ⏳", e_uploading: "Завантажую фото... 📷",
            e_ok_title: "Анкету збережено! 🎉",
            e_ok_text: "Тебе вже видно іншим учасникам. Гарного знайомства!",
            e_go_search: "🔍 Дивитися анкети",
            e_mod_title: "Анкета на модерації",
            e_mod_text: "Ми перевіряємо твою анкету — це займе кілька хвилин.",
            e_title: "✏️ Редагування анкети",
            e_photo_hint2: "Натисни на рамку, щоб додати або замінити фото",
            e_ph_name: "Як тебе звати?",
            e_choose: "— обери —",
            e_looking: "Що шукаю"
        },
        en: {
            nav_search: "Search profiles", nav_profile: "My profile", nav_bottle: "Bottle game",
            close: "Close", cancel: "Cancel", member: "Member",
            scr_register_title: "Profile first",
            scr_register_text: "Fill in your profile to start meeting people",
            scr_register_btn: "Create profile",
            scr_mod_title: "Profile under review",
            scr_mod_text: "Admin is checking your profile. Almost there!",
            scr_mod_text2: "Admin is checking your profile.<br>It usually takes a few minutes.",
            scr_loading_title: "Loading...", scr_loading_profile: "Loading profile...",
            scr_load_err_title: "Failed to load",
            scr_load_err_text: "Close and reopen the app",

            p_title: "— my profile",
            p_edit: "✏️ Edit profile",
            p_top: "🏆 Top members",
            p_lang: "🌐 Language",
            p_hint: "This is how others see you",
            p_create_title: "Create your profile",
            p_create_text: "Add photos, your name and a few words — and start meeting people",
            p_gifts_title: "🎁 Gifts",
            p_gifts_empty: "No gifts yet 🙈",
            p_gifts_from: "Gifts",
            p_like_sent: "❤️ Like sent",
            p_lang_title: "Language / Мова",

            s_title: "🔍 Search", s_filter: "⚙️ Filters",
            s_age_from: "Age from", s_age_to: "to", s_show: "Show",
            s_all: "Everyone", s_males: "Guys", s_females: "Girls",
            s_seekers: "Members looking for", s_any: "Anything",
            s_dating: "Relationships 💞", s_friends: "Friendship 🤝", s_chat: "Chatting 💬",
            s_apply: "Apply filters",
            s_mod_text: "Admin is checking your profile. Almost there!",
            s_no_more_title: "No more profiles",
            s_no_more_text: "You've seen all the new profiles",
            s_show_again: "🔄 Show again",
            s_loading_deck: "Loading profiles...",
            s_report_title: "Report profile",
            s_r_spam: "🚫 Spam or ads", s_r_nude: "🔞 Inappropriate photos",
            s_r_abuse: "🤬 Abuse or aggression", s_r_fake: "🎭 Fake / scam",
            s_reported: "Report sent ✅", s_reported_already: "You already reported this profile",
            s_report_fail: "Failed to send 😕",
            s_gift_title: "Send a gift", s_balance: "Your rating: ",
            s_g_rose: "🌹 Rose", s_g_choco: "🍫 Chocolate",
            s_g_teddy: "🧸 Teddy bear", s_g_ring: "💍 Ring",
            s_gift_sent: "Gift sent ", s_gift_fail: "Failed to send 😕",
            s_no_rating: "Not enough rating (need ⭐",

            b_game_full_title: "Game is full",
            b_game_full_text: "4 players are already at the table. Try again later!",
            b_loading: "Loading game...",
            b_need_reg_text: "Only registered members can play",
            b_table: "Table", b_players: "Players",
            b_wait_more: "Waiting for players (", b_wait_need: "⏳ Waiting for players (2+ needed)",
            b_turn: "Spinning: ", b_spin: "🍾 Spin!", b_spinning_wait: " is spinning...",
            b_pointed_at: "The bottle points to ", b_choose_action: "! Choose an action:",
            b_choosing: " is choosing an action for ", b_next_spin: "Next spin: ",
            b_a_kiss: "😘 {a} kissed {b}!", b_a_heart: "❤️ {a} gives a heart to {b}",
            b_a_dislike: "👎 {a} dislikes {b}", b_a_tomato: "🍅 {a} throws a tomato at {b}!",
            b_you_liked: "❤️ You liked {n}!",
            b_leave: "🚪 Leave game",
            b_like_btn: "❤️ Like", b_back: "← Back",
            b_g_reg_title: "Profile first", b_g_reg_text: "Only registered members can play",

            t_title: "Circles TOP", t_sub: "🔥 Most popular this week",
            t_my_pos: "👤 Your position", t_to_reset: "Until next week:", t_days: "d", t_hours: "h", t_min: "m", t_rating: "Rating",

            e_photos: "Photos", e_photo_hint: "The first photo is the main one",
            e_name: "Name", e_age: "Age", e_city: "City",
            e_gender: "Gender", e_male: "Male", e_female: "Female",
            e_look: "Looking for", e_about: "About you",
            e_about_hint: "A few words to be remembered",
            e_show_username: "Show @username in profile",
            e_save: "Save profile",
            e_err_name: "Enter your name 🙂", e_err_age: "Age must be between 16 and 99",
            e_err_gender: "Select your gender 👤", e_err_save: "Couldn't save profile 😔 Try again",
            e_saving: "Saving... ⏳", e_uploading: "Uploading photos... 📷",
            e_ok_title: "Profile saved! 🎉",
            e_ok_text: "You're now visible to others. Happy matching!",
            e_go_search: "🔍 Browse profiles",
            e_mod_title: "Profile under review",
            e_mod_text: "We're checking your profile — it takes a few minutes.",
            e_title: "✏️ Edit profile",
            e_photo_hint2: "Tap a frame to add or replace a photo",
            e_ph_name: "What's your name?",
            e_choose: "— choose —",
            e_looking: "Looking for"
        }
    };

    function getLang() {
        try { return localStorage.getItem('circles_lang') || 'ua'; }
        catch (e) { return 'ua'; }
    }

    function setLang(l) {
        try { localStorage.setItem('circles_lang', l); } catch (e) {}
        location.reload();
    }

    function t(key) {
        var lang = getLang();
        return (I18N[lang] && I18N[lang][key]) || I18N.ua[key] || key;
    }

    function applyI18n(root) {
        var els = (root || document).querySelectorAll('[data-i18n]');
        els.forEach(function (el) {
            el.textContent = t(el.getAttribute('data-i18n'));
        });
        var phs = (root || document).querySelectorAll('[data-i18n-ph]');
        phs.forEach(function (el) {
            el.placeholder = t(el.getAttribute('data-i18n-ph'));
        });
    }

    window.CIRCLES_I18N = { t: t, getLang: getLang, setLang: setLang, applyI18n: applyI18n };
    window.t = t;
    document.addEventListener('DOMContentLoaded', function () { applyI18n(); });
})();
