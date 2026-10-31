<img src="assets/banner.png" alt="SoundBoard Pro — бесплатный саундборд для Windows" width="100%">

<div align="center">

# 🔊 SoundBoard Pro

**Бесплатный саундборд для Windows.** Звук из хоткея уходит прямо в микрофон — собеседники в Discord, зрители в OBS и игроки в голосовом чате слышат его так же, как твой голос.

<p>
  <a href="https://github.com/Null1x/SoundBoard-Pro/releases/latest"><img src="https://img.shields.io/badge/%D0%9F%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0-Windows_10%2F11-f97316?logo=windows&logoColor=white&labelColor=1a1726&style=for-the-badge" alt="Windows 10 / 11"></a>
  <a href="https://github.com/Null1x/SoundBoard-Pro/releases/latest"><img src="https://img.shields.io/badge/%D0%A6%D0%B5%D0%BD%D0%B0-%D0%91%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-22c55e?logoColor=white&labelColor=1a1726&style=for-the-badge" alt="Цена: бесплатно"></a>
  <a href="https://t.me/soundboardpro"><img src="https://img.shields.io/badge/Telegram-@soundboardpro-2CA5E0?logo=telegram&logoColor=white&labelColor=1a1726&style=for-the-badge" alt="Telegram @soundboardpro"></a>
  <a href="https://www.donationalerts.com/r/nullix"><img src="https://img.shields.io/badge/%D0%94%D0%BE%D0%BD%D0%B0%D1%82-DonationAlerts-eab308?labelColor=1a1726&style=for-the-badge" alt="Донат"></a>
</p>
<p>
  <a href="https://github.com/Null1x/SoundBoard-Pro/releases/latest"><img src="https://img.shields.io/github/v/release/Null1x/SoundBoard-Pro?label=%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%8F&color=8b5cf6&labelColor=1a1726&style=for-the-badge&logo=github&logoColor=white" alt="Версия"></a>
  <a href="https://github.com/Null1x/SoundBoard-Pro/releases"><img src="https://img.shields.io/github/downloads/Null1x/SoundBoard-Pro/total?label=%D1%81%D0%BA%D0%B0%D1%87%D0%B8%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9&color=6d28d9&labelColor=1a1726&style=for-the-badge&logo=download&logoColor=white" alt="Скачиваний"></a>
  <a href="https://github.com/Null1x/SoundBoard-Pro/stargazers"><img src="https://img.shields.io/github/stars/Null1x/SoundBoard-Pro?label=%D0%B7%D0%B2%D1%91%D0%B7%D0%B4%D1%8B&color=eab308&labelColor=1a1726&style=for-the-badge&logo=github&logoColor=white" alt="Звёзды"></a>
  <a href="https://github.com/Null1x/SoundBoard-Pro/commits/main"><img src="https://img.shields.io/github/last-commit/Null1x/SoundBoard-Pro?label=%D0%BE%D0%B1%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%BE&color=6d28d9&labelColor=1a1726&style=for-the-badge&logo=git&logoColor=white" alt="Обновлено"></a>
  <a href="https://github.com/Null1x/SoundBoard-Pro/blob/main/LICENSE"><img src="https://img.shields.io/github/license/Null1x/SoundBoard-Pro?label=%D0%BB%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F&color=22c55e&labelColor=1a1726&style=for-the-badge" alt="Лицензия"></a>
</p>

[🇷🇺 Русский](#-русский) · [🇬🇧 English](#-english) · [📢 Telegram](https://t.me/soundboardpro) · [🌐 Сайт](https://null1x.github.io/SoundBoard-Pro/)

</div>

---

## 🇷🇺 Русский

> ### ⬇️ [Скачать SoundBoard Pro 1.1](https://github.com/Null1x/SoundBoard-Pro/releases/latest)
> Windows 10 / 11 · бесплатно · установка 5 минут (нужен бесплатный виртуальный кабель VB-CABLE)

### Что нового в 1.1 🎃

- **Halloween-тема**: чёрно-фиолетовая палитра, оранжевые акценты и анимированный фон. Шестерёнка настроек теперь тыква.
- **Отмена удаления (Ctrl+Z)**: до 20 последних удалений, включая массовые.
- **Плавная остановка**: «Стоп» и Panic теперь затухают, а не обрывают звук.
- **Автонастройка устройств** и **мастер настройки аудио** с проверкой VB-CABLE, наушников и микрофона.
- **Установка VB-CABLE прямо из приложения.**
- Исправления зависаний, сбоев автовоспроизведения и ошибок VB-CABLE. Меньше нагрузки на CPU и RAM.

### Что это

SoundBoard Pro — саундборд для Windows на PyQt6. Нажимаешь хоткей — звук уходит в микрофон: Discord, OBS, голосовой чат в игре. Никаких подписок, никаких прав администратора, никакого запуска «от имени администратора», чтобы хоткеи работали в игре.

Сделано как бесплатная замена Soundpad: те же задачи, без оплаты.

### Возможности

| | Возможность | Что даёт |
|---|---|---|
| ⚡ | **Нулевая задержка** | Воспроизведение через `sounddevice` — звук стартует мгновенно |
| ⌨ | **Глобальные хоткеи** | Работают из игр и других приложений, права администратора не нужны |
| 🎧 | **Двойная маршрутизация** | Звук идёт одновременно в наушники и в виртуальный кабель: слышишь сам и слышат другие |
| ◉ | **Виртуальный кабель** | Автопоиск VB-Audio при запуске — руками ничего настраивать не надо |
| ✦ | **Наложение звуков** | Несколько звуков играют одновременно и накладываются друг на друга |
| 🎨 | **8 тем оформления** | Тема и язык переключаются на ходу, без перезапуска программы |
| 🔍 | **Поиск по звукам** | Мгновенный поиск по всем категориям |
| 🗂 | **Категории** | Библиотека по папкам, отдельная громкость и усиление для каждой |

### Скриншоты

| Главное окно | Настройки |
|---|---|
| <img src="assets/screenshot-main.png" width="520"> | <img src="assets/screenshot-settings.png" width="300"> |
| <sub>Категории, устройства и воспроизведение</sub> | <sub>Тема, язык, экспериментальные функции</sub> |

### Установка (5 минут)

**1. Скачай установщик**

Возьми `SoundBoardPro-Setup-1.1.exe` из [последнего релиза](https://github.com/Null1x/SoundBoard-Pro/releases/latest) и запусти его.

**2. Поставь VB-CABLE** — бесплатный виртуальный аудиокабель, без него звук не попадёт в микрофон

1. Скачай с [vb-audio.com/Cable](https://vb-audio.com/Cable/)
2. Распакуй архив и запусти `VBCABLE_Setup_x64.exe` **от имени администратора**
3. Перезагрузи компьютер

**3. Заведи свой микрофон в кабель**

Нажми `Win + R`, впиши `mmsys.cpl`, Enter — откроется окно «Звук».

1. Вкладка **Запись** → выбери **свой настоящий микрофон** (не CABLE) → **Свойства**
2. Вкладка **Прослушать** → поставь галочку **«Прослушивать с данного устройства»**
3. В списке ниже, **«Воспроизводить с данного устройства»**, выбери **CABLE Input (VB-Audio Virtual Cable)**
4. **Применить** → **ОК**

Теперь в кабель идёт и твой голос, и звуки из SoundBoard Pro. Без этого шага собеседник услышит только звуки — голоса не будет.

**4. Запусти SoundBoard Pro**

Программа сама найдёт кабель. Если не нашла — выбери в поле трансляции **CABLE Input (VB-Audio Virtual Cable)**, а в поле «Для себя» свои наушники или колонки, чтобы слышать звуки самому.

**5. Поставь `CABLE Output` микрофоном там, куда транслируешь**

| Куда | Что нажать |
|---|---|
| **Discord** | Настройки → Голос и видео → Устройство ввода → `CABLE Output (VB-Audio Virtual Cable)` |
| **OBS** | Источник «Захват входного аудиопотока» → устройство `CABLE Output` |
| **Игра** | В настройках голосового чата выбери микрофоном `CABLE Output` |

**6. В Discord выключи шумодав**

Настройки → Голос и видео → выключи **«Эхоподавление»**, **«Шумоподавление»** (Krisp) и **«Автоматическая регулировка усиления»**. Discord считает звуки из саундборда фоновым шумом и режет их. Если звуки слышно тихо или они обрываются — проверяй это первым делом.

### Частые вопросы

<details>
<summary><b>Windows пишет «Windows защитила ваш компьютер»</b></summary>

Это SmartScreen. Он срабатывает на любом неподписанном `.exe`, а сертификат подписи стоит денег — установщик пока не подписан. Нажми «Подробнее» → «Выполнить в любом случае». Проверить файл можно на [VirusTotal](https://www.virustotal.com/).

</details>

<details>
<summary><b>Программа не видит VB-Cable</b></summary>

Убедись, что кабель установлен именно от имени администратора и что компьютер перезагружен после установки. Затем нажми в программе кнопку обновления списка устройств.

</details>

<details>
<summary><b>Собеседник слышит звуки, но не слышит меня</b></summary>

Пропущен шаг 3 — микрофон не заведён в кабель. `Win + R` → `mmsys.cpl` → вкладка **Запись** → свой микрофон → **Свойства** → вкладка **Прослушать** → поставь галочку **«Прослушивать с данного устройства»** и выбери в списке `CABLE Input (VB-Audio Virtual Cable)`.

</details>

<details>
<summary><b>Звуки слышно тихо или они обрываются</b></summary>

Это шумодав Discord. Настройки → Голос и видео → выключи «Эхоподавление», «Шумоподавление» (Krisp) и «Автоматическая регулировка усиления».

</details>

<details>
<summary><b>В игре не работают хоткеи</b></summary>

Проверь, что хоткей не занят самой игрой. Если игра запущена от администратора, запусти от администратора и SoundBoard Pro.

</details>

<details>
<summary><b>Антивирус ругается на установщик</b></summary>

Ложное срабатывание: сборки PyInstaller часто попадают в эвристику антивирусов. Файл можно проверить на [VirusTotal](https://www.virustotal.com/).

</details>

<details>
<summary><b>Требования</b></summary>

Windows 10 или 11 (x64). Больше ничего не нужно.

</details>

### Обратная связь

**Напиши, что не работает.** Проект делает один человек, и любой отзыв — это буквально то, из-за чего выходят обновления.

📧 **Почта для багов, жалоб и идей:** [limora342@gmail.com](mailto:limora342@gmail.com)
📢 **Новости и обновления:** [t.me/soundboardpro](https://t.me/soundboardpro)

Что полезно указать: версия Windows и версия программы, что делал, что ожидал, что получилось вместо этого, скриншот или короткое видео, если можно.

### Поддержать проект

SoundBoard Pro был бесплатным и останется бесплатным. Если он тебе пригодился — [поддержи разработку](https://www.donationalerts.com/r/nullix) или просто поставь ⭐ этому репозиторию: звёзды помогают другим людям его найти.

## 🇬🇧 English

> ### ⬇️ [Download SoundBoard Pro 1.1](https://github.com/Null1x/SoundBoard-Pro/releases/latest)
> Windows 10 / 11 · free · 5-minute setup (requires the free VB-CABLE virtual audio cable)

### What's new in 1.1 🎃

- **Halloween theme**: black and purple palette, orange accents and an animated background. The settings gear is now a pumpkin.
- **Undo delete (Ctrl+Z)**: up to 20 recent deletions, including bulk deletes.
- **Smooth stop**: "Stop" and Panic now fade out instead of cutting off.
- **Audio auto-setup** and an **audio setup wizard** that checks VB-CABLE, headphones and microphone.
- **Install VB-CABLE from inside the app.**
- Fixes for freezes, autoplay crashes and VB-CABLE errors. Lower CPU and RAM usage.

### What it is

SoundBoard Pro is a soundboard for Windows built with PyQt6. Hit a hotkey — the sound goes into your microphone, so people on Discord, your OBS viewers or players in game voice chat hear it exactly like your voice. No subscription, no admin rights, no "run as administrator" just to make hotkeys work in a game.

Built as a free replacement for Soundpad: same job, no payment.

### Features

| | Feature | What it does |
|---|---|---|
| ⚡ | **Zero latency** | Playback through `sounddevice` — sounds start instantly |
| ⌨ | **Global hotkeys** | Work from inside games and other apps, no administrator needed |
| 🎧 | **Dual routing** | The sound goes to your headphones *and* to the virtual cable at the same time |
| ◉ | **Virtual cable** | VB-Audio is detected automatically on startup |
| ✦ | **Sound overlay** | Several sounds can play and layer at the same time |
| 🎨 | **8 themes** | Theme and language switch instantly, no restart |
| 🔍 | **Instant search** | Search across every category |
| 🗂 | **Categories** | Organise your library, per-category volume and gain |

### Install

**1. Download the installer** — `SoundBoardPro-Setup-1.1.exe` from the [latest release](https://github.com/Null1x/SoundBoard-Pro/releases/latest).

**2. Install VB-CABLE** — free virtual audio cable: [vb-audio.com/Cable](https://vb-audio.com/Cable/). Run `VBCABLE_Setup_x64.exe` **as administrator**, then reboot.

**3. Route your own microphone into the cable**

Press `Win + R`, type `mmsys.cpl`, hit Enter.

1. **Recording** tab → select **your real microphone** (not CABLE) → **Properties**
2. **Listen** tab → tick **"Listen to this device"**
3. Under **"Playback through this device"** pick **CABLE Input (VB-Audio Virtual Cable)**
4. **Apply** → **OK**

Now the cable carries both your voice and the sounds from SoundBoard Pro. Skip this step and people will hear the sounds but not you.

**4. Launch SoundBoard Pro** — it finds the cable and sets it as the broadcasting output automatically. If it doesn't, pick **CABLE Input (VB-Audio Virtual Cable)** as the broadcasting device and your headphones as the monitor device.

**5. Select `CABLE Output (VB-Audio Virtual Cable)` as the input device** in Discord (Voice & Video → Input Device), OBS (Audio Input Capture) or your game's voice chat settings.

**6. Turn off Discord's noise suppression** — Settings → Voice & Video → disable **Echo Cancellation**, **Noise Suppression** (Krisp) and **Automatic Gain Control**. Discord treats soundboard audio as background noise and cuts it. If sounds come through too quiet or get chopped up, check this first.

### FAQ

<details>
<summary><b>Windows SmartScreen warns me about the installer</b></summary>

It flags any unsigned `.exe`, and code signing certificates cost money — the build isn't signed yet. Click "More info" → "Run anyway". You can scan the file on [VirusTotal](https://www.virustotal.com/).

</details>

<details>
<summary><b>VB-Cable isn't detected</b></summary>

Make sure it was installed as administrator and that you rebooted afterwards. Then hit the device refresh button in the app.

</details>

<details>
<summary><b>People hear the sounds but not my voice</b></summary>

Step 3 is missing — your microphone isn't routed into the cable. `Win + R` → `mmsys.cpl` → **Recording** tab → your microphone → **Properties** → **Listen** tab → tick **"Listen to this device"** and select `CABLE Input (VB-Audio Virtual Cable)`.

</details>

<details>
<summary><b>Sounds are too quiet or keep cutting out</b></summary>

That's Discord's noise suppression. Settings → Voice & Video → disable Echo Cancellation, Noise Suppression (Krisp) and Automatic Gain Control.

</details>

<details>
<summary><b>Requirements</b></summary>

Windows 10 or 11 (x64). Nothing else.

</details>

### Feedback

**Tell me what's broken.** This is a one-person project — every report is literally what decides the next update.

📧 **Bugs, complaints and ideas:** [limora342@gmail.com](mailto:limora342@gmail.com)
📢 **News and updates:** [t.me/soundboardpro](https://t.me/soundboardpro)

Useful details: your Windows and app version, what you did, what you expected, what happened instead, plus a screenshot if you can.

### Support

SoundBoard Pro is free and stays free. If it's useful to you, [support development](https://www.donationalerts.com/r/nullix) or just ⭐ this repo — stars are how other people find it.

<img src="assets/cta.png" alt="Скачать SoundBoard Pro бесплатно" width="100%">

<div align="center">
<sub><b>SoundBoard Pro</b> · <a href="https://github.com/Null1x/SoundBoard-Pro/releases/latest">Скачать</a> · <a href="https://t.me/soundboardpro">Telegram</a> · <a href="https://null1x.github.io/SoundBoard-Pro/">Сайт</a> · <a href="https://www.youtube.com/@NullixYT">YouTube</a> · <a href="mailto:limora342@gmail.com">limora342@gmail.com</a><br>
Сделано <a href="https://github.com/Null1x">Nullix</a></sub>
</div>
Press `Win + R`, type `mmsys.cpl`, hit Enter.

1. **Recording** tab → select **your real microphone** (not CABLE) → **Properties**
2. **Listen** tab → tick **
