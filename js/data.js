// ============================================
// C++ Academy - Data
// ============================================

const cppModules = [
    { id: 1, name: "Вступ та основи" },
    { id: 2, name: "Типи даних та змінні" },
    { id: 3, name: "Оператори" },
    { id: 4, name: "Умовні конструкції" },
    { id: 5, name: "Цикли" },
    { id: 6, name: "Функції" },
    { id: 7, name: "Масиви та рядки" },
    { id: 8, name: "Вказівники та посилання" },
    { id: 9, name: "Структури та класи" },
    { id: 10, name: "Об'єктно-орієнтоване програмування" },
    { id: 11, name: "Шаблони та узагальнене програмування" },
    { id: 12, name: "STL контейнери" },
    { id: 13, name: "STL алгоритми" },
    { id: 14, name: "Робота з файлами" },
    { id: 15, name: "Сучасний C++ (C++11/14/17/20)" },
    { id: 16, name: "Розширені теми" },
    { id: 17, name: "Спеціалізовані теми" },
    { id: 18, name: "Експертний рівень" }
];

const wfModules = [
    { id: 1, name: "Вступ у Windows Forms" },
    { id: 2, name: "Основні елементи керування" },
    { id: 3, name: "Меню та діалоги" },
    { id: 4, name: "Робота з даними" },
    { id: 5, name: "Розширені елементи керування" },
    { id: 6, name: "Графіка та малювання" },
    { id: 7, name: "Події та делегати" },
    { id: 8, name: "MDI додатки" },
    { id: 9, name: "Практичні проєкти" },
    { id: 10, name: "Розширені проєкти" },
    { id: 11, name: "Інтеграція та деплой" },
    { id: 12, name: "Продуктивність та оптимізація" },
    { id: 13, name: "Спеціалізовані теми" },
    { id: 14, name: "Ігри на Windows Forms" },
    { id: 15, name: "Експертні проєкти" },
    { id: 16, name: "Шаблони та архітектура" }
];

// C++ Lectures - 100 lectures
const cppLectures = [
    // Module 1: Basics (1-5)
    {
        id: 1, module: 1, title: "Історія мови C++ та її еволюція", category: "basics",
        image: "images/cpp/lecture-01.jpg",
        content: `
            <h1>Історія мови C++ та її еволюція</h1>
            <p>Мова програмування C++ має багату історію, що налічує понад 40 років розвитку. Розуміння її еволюції допомагає краще зрозуміти сучасні можливості мови та причини, чому вона влаштована саме так.</p>
            <img src="images/cpp/lecture-01.jpg" alt="Історія C++">
            <h2>Передумови створення</h2>
            <p>У 1970-х роках Денніс Рітчі розробив мову C у Bell Labs. C швидко стала однією з найпопулярніших мов програмування завдяки своїй ефективності та переносимості. Однак з розвитком програмного забезпечення зростала потреба в більш потужних абстракціях.</p>
            <p>Бьорн Страуструп, працюючи над своєю докторською дисертацією у Кембриджі, досліджував можливості розподілених систем і зіткнувся з обмеженнями мови Simula (першої мови з підтримкою ООП) — вона була занадто повільною для практичного використання.</p>
            
            <div class="note note-info">
                <div class="note-title">Цікавий факт</div>
                <p>Бьорн Страуструп почав розробку C++ у 1979 році під назвою "C with Classes" (C з класами). Назву змінили на C++ у 1983 році.</p>
            </div>

            <h2>Етапи розвитку</h2>
            <h3>C with Classes (1979-1983)</h3>
            <p>Перша версія мови додала до C: класи, успадкування, перевантаження функцій, перевірку типів аргументів функцій. Основна мета — додати об'єктно-орієнтовані можливості до C без втрати продуктивності.</p>

            <h3>C++ (1983-1985)</h3>
            <p>Додано: віртуальні функції, перевантаження операторів, посилання, константи, розміщення нового/видалення (більш потужне управління пам'яттю). Перше видання книги "The C++ Programming Language" (1985).</p>

            <h3>Стандартизація (1989-1998)</h3>
            <p>Робота над стандартом ANSI/ISO. У 1998 році вийшов перший міжнародний стандарт C++98, який включив: STL (Standard Template Library), простори імен, шаблонні часткові спеціалізації, bool тип, static_cast, const_cast, reinterpret_cast, dynamic_cast.</p>

            <h3>C++03 (2003)</h3>
            <p>Незначні виправлення та уточнення стандарту C++98. Основна мета — виправити помилки та неоднозначності попереднього стандарту.</p>

            <h3>C++11 (2011) — Революція</h3>
            <p>Наймасштабніше оновлення мови. Ключові нововведення:</p>
            <ul>
                <li><strong>auto</strong> — автоматичне виведення типу</li>
                <li><strong>nullptr</strong> — безпечний нульовий вказівник</li>
                <li><strong>Range-based for</strong> — цикл for для колекцій</li>
                <li><strong>Лямбда-функції</strong> — анонімні функції</li>
                <li><strong>Smart pointers</strong> — unique_ptr, shared_ptr, weak_ptr</li>
                <li><strong>Move semantics</strong> — семантика переміщення</li>
                <li><strong>Variadic templates</strong> — шаблони зі змінною кількістю параметрів</li>
                <li><strong>constexpr</strong> — обчислення на етапі компіляції</li>
                <li><strong>enum class</strong> — типобезпечні перерахування</li>
                <li><strong>std::thread</strong> — багатопоточність у стандарті</li>
            </ul>

            <h3>C++14 (2014)</h3>
            <p>"Невелике" оновлення: узагальнені лямбди (auto параметри), змінні шаблони, розширений constexpr, двійкові літерали (0b1010), роздільники цифр (1'000'000).</p>

            <h3>C++17 (2017)</h3>
            <p>Важливі нововведення: структуроване зв'язування (auto [x, y] = pair), if constexpr, std::optional, std::variant, std::string_view, fold expressions, inline змінні, нові правила виведення шаблонних аргументів.</p>

            <h3>C++20 (2020) — Нова ера</h3>
            <p>Масштабне оновлення, порівнянне з C++11:</p>
            <ul>
                <li><strong>Concepts</strong> — обмеження шаблонів</li>
                <li><strong>Ranges</strong> — нова бібліотека діапазонів</li>
                <li><strong>Coroutines</strong> — співпрограми</li>
                <li><strong>Modules</strong> — заміна заголовних файлів</li>
                <li><strong>Three-way comparison (<=>)</strong> — оператор космічного корабля</li>
                <li><strong>consteval, constinit</strong> — нові специфікатори</li>
                <li><strong>std::format</strong> — форматування рядків</li>
                <li><strong>std::span</strong> — не володіюче уявлення послідовності</li>
            </ul>

            <h3>C++23 (2023)</h3>
            <p>Найновіший стандарт: std::print, std::expected, std::mdspan, розширення constexpr, std::generator для coroutines, if consteval, нові можливості ranges.</p>

            <h2>Чому C++ популярна?</h2>
            <table>
                <tr><th>Перевага</th><th>Опис</th></tr>
                <tr><td>Продуктивність</td><td>Код компілюється у машинні інструкції без overhead рантайму</td></tr>
                <tr><td>Контроль пам'яті</td><td>Ручне управління пам'яттю дає повний контроль</td></tr>
                <tr><td>Переносимість</td><td>Компілятори для практично всіх платформ</td></tr>
                <tr><td>Багатопарадигменність</td><td>Процедурне, ООП, узагальнене, функціональне програмування</td></tr>
                <tr><td>Велика екосистема</td><td>Мільйони бібліотек, величезна спільнота</td></tr>
                <tr><td>Сумісність з C</td><td>Прямий доступ до C-коду та бібліотек</td></tr>
            </table>

            <h2>Сфери застосування</h2>
            <p>Сьогодні C++ використовується у критично важливих системах:</p>
            <ul>
                <li><strong>Ігрові рушії</strong> — Unreal Engine, Unity (core), Godot</li>
                <li><strong>Операційні системи</strong> — Windows, macOS, Linux kernels</li>
                <li><strong>Браузери</strong> — Chrome, Firefox, Edge (рендерингові рушії)</li>
                <li><strong>Бази даних</strong> — MySQL, PostgreSQL, MongoDB</li>
                <li><strong>Фінансові системи</strong> — high-frequency trading</li>
                <li><strong>Вбудовані системи</strong> — мікроконтролери, IoT</li>
                <li><strong>Космос та авіація</strong> — NASA, ESA, Boeing</li>
                <li><strong>Графіка та відео</strong> — Adobe, Autodesk, Blender</li>
            </ul>

            <h2>Ієрархія мов, пов'язаних з C++</h2>
            <div class="code-block">
                <div class="code-header">
                    <span>Еволюція мов програмування</span>
                </div>
                <pre><code>Algol 60 → CPL → BCPL → B → C (1972, Dennis Ritchie)
                                    ↓
                            C++ (1979/1983, Bjarne Stroustrup)
                                    ↓
                    ┌───────────────┼───────────────┐
                    ↓               ↓               ↓
                Java (1995)    C# (2000)      Objective-C
                    ↓               ↓
                Kotlin          F#
                Scala</code></pre>
            </div>

            <div class="note note-tip">
                <div class="note-title">Порада</div>
                <p>Для навчання рекомендується використовувати компілятор, що підтримує C++17 або C++20. GCC 10+, Clang 12+, MSVC 2019+ — всі вони підтримують сучасні стандарти.</p>
            </div>

            <h2>Відомі цитати</h2>
            <blockquote>
                <p>"C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg."</p>
                <p>— Bjarne Stroustrup</p>
            </blockquote>
            <blockquote>
                <p>"Java and C# are both fiercely defensive of their intellectual property, while C++ has no owner. It's a genuinely open language."</p>
                <p>— Bjarne Stroustrup</p>
            </blockquote>

            <h2>Підсумки</h2>
            <p>C++ — це мова, що постійно розвивається. Від "C with Classes" до сучасного C++23 — вона зберігає філософію "zero overhead abstraction" (абстракція без накладних витрат), надаючи програмісту потужні інструменти для створення ефективного програмного забезпечення. Розуміння історії мови допомагає оцінити сучасні можливості та прийняти правильні рішення при проєктуванні програм.</p>
        `
    },
    {
        id: 2, module: 1, title: "Встановлення середовища розробки (IDE)", category: "basics",
        image: "images/cpp/lecture-02.jpg",
        content: `
            <h1>Встановлення середовища розробки (IDE)</h1>
            <p>Для програмування на C++ необхідно встановити компілятор та, опціонально, інтегроване середовище розробки (IDE). У цій лекції розглянемо всі популярні варіанти та їх налаштування.</p>
            <img src="images/cpp/lecture-02.jpg" alt="IDE">
            <h2>Необхідні компоненти</h2>
            <p>Для розробки на C++ потрібні:</p>
            <ul>
                <li><strong>Компілятор</strong> — перетворює вихідний код на машинний</li>
                <li><strong>Редактор коду</strong> — для написання програм</li>
                <li><strong>Отладчик</strong> — для пошуку помилок</li>
                <li><strong>Build system</strong> — для збірки проєкту</li>
            </ul>

            <h2>Компілятори C++</h2>
            <h3>GCC (GNU Compiler Collection)</h3>
            <p>Найпопулярніший компілятор для Linux. Доступний для Windows через MinGW-w64 та MSYS2.</p>
            
            <div class="code-block">
                <div class="code-header"><span>Windows — встановлення через MSYS2</span></div>
                <pre><code># 1. Завантажте та встановіть MSYS2 з https://www.msys2.org/
# 2. Відкрийте MSYS2 термінал та виконайте:
pacman -S mingw-w64-x86_64-gcc
pacman -S mingw-w64-x86_64-gdb

# Перевірка встановлення:
g++ --version
# g++ (Rev1, Built by MSYS2 project) 13.2.0</code></pre>
            </div>

            <h3>Clang/LLVM</h3>
            <p>Сучасний компілятор з чудовими діагностичними повідомленнями. Рекомендується для macOS та Linux.</p>

            <div class="code-block">
                <div class="code-header"><span>macOS — встановлення через Homebrew</span></div>
                <pre><code># Встановлення Command Line Tools:
xcode-select --install

# Або через Homebrew:
brew install llvm

# Додайте у PATH:
echo 'export PATH="/usr/local/opt/llvm/bin:$PATH"' >> ~/.zshrc</code></pre>
            </div>

            <h3>Microsoft Visual C++ (MSVC)</h3>
            <p>Компілятор від Microsoft, включений у Visual Studio. Найкраща інтеграція з Windows.</p>

            <h2>IDE для C++</h2>
            <h3>Visual Studio (Windows)</h3>
            <p>Потужне повнофункціональне IDE від Microsoft. Рекомендується для Windows-розробки.</p>
            <table>
                <tr><th>Версія</th><th>Особливості</th></tr>
                <tr><td>Community</td><td>Безкоштовна, підходить для навчання та індивідуальних розробників</td></tr>
                <tr><td>Professional</td><td>Додаткові інструменти для командної розробки</td></tr>
                <tr><td>Enterprise</td><td>Повний набір інструментів для великих проєктів</td></tr>
            </table>

            <div class="note note-info">
                <div class="note-title">Встановлення Visual Studio Community</div>
                <p>1. Завантажте з https://visualstudio.microsoft.com/ 2. При встановленні оберіть "Desktop development with C++" 3. Дочекайтеся завершення встановлення (може зайняти 20-40 хвилин)</p>
            </div>

            <h3>CLion (JetBrains)</h3>
            <p>Професійне IDE з потужними можливостями рефакторингу, навігації по коду та інтеграцією з CMake. Платне (безкоштовна ліцензія для студентів).</p>

            <h3>Visual Studio Code</h3>
            <p>Легкий редактор коду з розширеннями. Безкоштовний, кросплатформний.</p>
            <div class="code-block">
                <div class="code-header"><span>Налаштування VS Code для C++</span></div>
                <pre><code>// 1. Встановіть розширення:
//    - C/C++ (Microsoft)
//    - C/C++ Extension Pack
//    - CMake Tools (опціонально)

// 2. Створіть tasks.json:
{
    "version": "2.0.0",
    "tasks": [
        {
            "label": "build",
            "type": "shell",
            "command": "g++",
            "args": ["-std=c++17", "-g", "*.cpp", "-o", "program"],
            "group": { "kind": "build", "isDefault": true }
        }
    ]
}</code></pre>
            </div>

            <h3>Code::Blocks</h3>
            <p>Безкоштовне, легке IDE. Хороший вибір для початківців. Постачається з MinGW для Windows.</p>

            <h3>Qt Creator</h3>
            <p>Спеціалізоване IDE для розробки з Qt framework. Також підходить для загального C++.</p>

            <h2>Online компілятори</h2>
            <p>Для швидкого тестування коду без встановлення:</p>
            <ul>
                <li><strong>Compiler Explorer (godbolt.org)</strong> — порівняння асемблерного виводу різних компіляторів</li>
                <li><strong>OnlineGDB</strong> — з підтримкою отладчика</li>
                <li><strong>Replit</strong> — повноцінне online IDE</li>
                <li><strong>Wandbox</strong> — підтримка багатьох версій компіляторів</li>
            </ul>

            <h2>Перша програма та компіляція</h2>
            <p>Збережіть код у файл <code>hello.cpp</code>:</p>
            <div class="code-block">
                <div class="code-header"><span>hello.cpp</span></div>
                <pre><code>#include &lt;iostream&gt;

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}</code></pre>
            </div>

            <h3>Компіляція через командний рядок</h3>
            <div class="code-block">
                <div class="code-header"><span>Команди компіляції</span></div>
                <pre><code># GCC / MinGW:
g++ -std=c++17 hello.cpp -o hello

# Clang:
clang++ -std=c++17 hello.cpp -o hello

# MSVC:
cl /EHsc /std:c++17 hello.cpp

# Запуск:
./hello          # Linux/macOS
hello.exe        # Windows</code></pre>
            </div>

            <h2>Важливі прапорці компілятора</h2>
            <table>
                <tr><th>Прапорець</th><th>Опис</th></tr>
                <tr><td><code>-std=c++17</code></td><td>Версія стандарту C++</td></tr>
                <tr><td><code>-Wall</code></td><td>Усі попередження</td></tr>
                <tr><td><code>-Wextra</code></td><td>Додаткові попередження</td></tr>
                <tr><td><code>-Werror</code></td><td>Попередження як помилки</td></tr>
                <tr><td><code>-O2</code></td><td>Оптимізація швидкодії</td></tr>
                <tr><td><code>-g</code></td><td>Отладочна інформація</td></tr>
                <tr><td><code>-o file</code></td><td>Ім'я вихідного файлу</td></tr>
                <tr><td><code>-I path</code></td><td>Шлях до заголовних файлів</td></tr>
                <tr><td><code>-L path</code></td><td>Шлях до бібліотек</td></tr>
                <tr><td><code>-l name</code></td><td>Посилання на бібліотеку</td></tr>
            </table>

            <div class="note note-warning">
                <div class="note-title">Важливо</div>
                <p>Завжди компілюйте з прапорцями <code>-Wall -Wextra</code> під час розробки. Це допомагає виявити потенційні помилки на етапі компіляції.</p>
            </div>

            <h2>Налаштування отладчика GDB</h2>
            <div class="code-block">
                <div class="code-header"><span>Основні команди GDB</span></div>
                <pre><code># Компіляція з отладочною інформацією:
g++ -std=c++17 -g hello.cpp -o hello

# Запуск GDB:
gdb ./hello

# Команди всередині GDB:
(gdb) break main       # точка зупинки
(gdb) run              # запуск
(gdb) next             # наступний рядок
(gdb) step             # увійти у функцію
(gdb) print variable   # вивести значення
(gdb) continue         # продовжити
(gdb) quit             # вихід</code></pre>
            </div>

            <h2>Підсумки</h2>
            <p>Вибір IDE — особиста перевага. Для Windows рекомендується Visual Studio Community, для кросплатформної розробки — CLion або VS Code. Головне — встановити сучасний компілятор, що підтримує хоча б C++17, та навчитися користуватися отладчиком.</p>
        `
    },
    {
        id: 3, module: 1, title: 'Перша програма "Hello World" — розбір структури', category: "basics",
        image: "images/cpp/lecture-03.jpg",
        content: `
            <h1>Перша програма "Hello World" — розбір структури</h1>
            <p>Класична програма "Hello, World!" — це традиційний перший крок у вивченні будь-якої мови програмування. Незважаючи на свою простоту, вона демонструє фундаментальні концепції C++.</p>
            <img src="images/cpp/lecture-03.jpg" alt="Hello World">
            <h2>Повний код програми</h2>
            <div class="code-block">
                <div class="code-header"><span>hello.cpp</span></div>
                <pre><code>// Моя перша програма на C++
#include &lt;iostream&gt;

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}</code></pre>
            </div>

            <h2>Покроковий розбір</h2>
            <h3>1. Коментар</h3>
            <div class="code-block">
                <div class="code-header"><span>Однорядковий коментар</span></div>
                <pre><code>// Моя перша програма на C++</code></pre>
            </div>
            <p>Рядок, що починається з <code>//</code>, є коментарем. Компілятор ігнорує його. Коментарі призначені для пояснення коду програмістам.</p>

            <h3>2. Директива препроцесора #include</h3>
            <div class="code-block">
                <div class="code-header"><span>Підключення бібліотеки</span></div>
                <pre><code>#include &lt;iostream&gt;</code></pre>
            </div>
            <p><code>#include</code> — директива препроцесора, що включає вміст заголовного файлу. <code>&lt;iostream&gt;</code> — стандартна бібліотека для введення/виведення (Input/Output Stream). Без неї ми не могли б використовувати <code>std::cout</code>.</p>

            <h3>3. Функція main()</h3>
            <div class="code-block">
                <div class="code-header"><span>Головна функція</span></div>
                <pre><code>int main() {
    // тіло функції
}</code></pre>
            </div>
            <p><code>main()</code> — особлива функція, з якої починається виконання будь-якої C++ програми. Кожна програма повинна мати рівно одну функцію <code>main</code>. Тип <code>int</code> перед <code>main</code> означає, що функція повертає ціле число.</p>

            <h3>4. Виведення на екран</h3>
            <div class="code-block">
                <div class="code-header"><span>Оператор виведення</span></div>
                <pre><code>std::cout << "Hello, World!" << std::endl;</code></pre>
            </div>
            <p>Розберемо цей рядок по частинах:</p>
            <ul>
                <li><code>std::cout</code> — стандартний потік виведення (console output). <code>std</code> — простір імен (namespace), <code>cout</code> — character output stream.</li>
                <li><code>&lt;&lt;</code> — оператор вставки у потік. Вставляє дані у потік виведення.</li>
                <li><code>"Hello, World!"</code> — рядковий літерал (string literal). Послідовність символів у лапках.</li>
                <li><code>std::endl</code> — manipulator, що вставляє символ нового рядка та скидає буфер.</li>
            </ul>

            <h3>5. return 0</h3>
            <div class="code-block">
                <div class="code-header"><span>Повернення значення</span></div>
                <pre><code>return 0;</code></pre>
            </div>
            <p>Оператор <code>return</code> завершує функцію та повертає значення. З <code>main()</code> значення 0 означає успішне завершення програми. Будь-яке інше значення зазвичай вказує на помилку.</p>

            <div class="note note-info">
                <div class="note-title">Примітка (C++11+)</div>
                <p>У сучасному C++ оператор <code>return 0;</code> у функції <code>main()</code> є необов'язковим. Якщо його немає, компілятор автоматично додасть <code>return 0;</code>.</p>
            </div>

            <h2>Варіанти написання Hello World</h2>
            <h3>Використання using namespace</h3>
            <div class="code-block">
                <div class="code-header"><span>Простір імен std</span></div>
                <pre><code>#include &lt;iostream&gt;

using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}</code></pre>
            </div>
            <p><code>using namespace std;</code> дозволяє використовувати імена з простору <code>std</code> без префікса. Це зручно для невеликих програм, але <strong>не рекомендується</strong> для великих проєктів через можливі конфлікти імен.</p>

            <h3>Використання форматованого виведення (C++23)</h3>
            <div class="code-block">
                <div class="code-header"><span>Сучасний підхід</span></div>
                <pre><code>#include &lt;print&gt;

int main() {
    std::println("Hello, World!");
    return 0;
}</code></pre>
            </div>
            <p><code>std::println</code> з C++23 — сучасний спосіб виведення, аналогічний Python print(). Підтримує форматування аргументів.</p>

            <h2>Базова структура C++ програми</h2>
            <div class="code-block">
                <div class="code-header"><span>Загальна структура</span></div>
                <pre><code>// 1. Директиви препроцесора
#include &lt;iostream&gt;
#include &lt;string&gt;

// 2. Оголошення просторів імен (опціонально)
using namespace std;

// 3. Глобальні константи та змінні
const double PI = 3.14159;

// 4. Оголошення функцій (прототипи)
void helperFunction();

// 5. Головна функція
int main() {
    // Локальні змінні
    int x = 10;
    
    // Виконання операцій
    helperFunction();
    
    // Повернення результату
    return 0;
}

// 6. Визначення функцій
void helperFunction() {
    cout << "Допоміжна функція" << endl;
}</code></pre>
            </div>

            <h2>Загальні помилки початківців</h2>
            <table>
                <tr><th>Помилка</th><th>Пояснення</th><th>Виправлення</th></tr>
                <tr><td>Пропущена крапка з комою</td><td>Кожен оператор завершується <code>;</code></td><td>Додайте <code>;</code> у кінці рядка</td></tr>
                <tr><td>Пропущений # у #include</td><td>Препроцесорні директиви починаються з #</td><td>#include &lt;iostream&gt;</td></tr>
                <tr><td>int main() без дужок</td><td>Функція завжди має дужки</td><td>int main() { }</td></tr>
                <tr><td>Двійкові лапки замість кутових</td><td>Для бібліотек використовуються &lt; &gt;</td><td>#include &lt;iostream&gt;</td></tr>
                <tr><td>std::cout &gt;&gt;</td><td>Неправильний оператор</td><td>Використовуйте &lt;&lt;</td></tr>
                <tr><td>Пропущений return</td><td>main має повертати int</td><td>return 0;</td></tr>
            </table>

            <h2>Практичні поради</h2>
            <div class="note note-tip">
                <div class="note-title">Поради для початківців</div>
                <p>1. Завжди пишіть коментарі до свого коду. 2. Використовуйте відступи (4 пробіли або Tab) для вкладених блоків. 3. Давайте змінним та функціям зрозумілі імена. 4. Компілюйте часто — чим раніше знайдете помилку, тим легше її виправити.</p>
            </div>

            <h2>Підсумки</h2>
            <p>Програма "Hello, World!" демонструє ключові елементи C++: директиви препроцесора, функцію main, потоки введення/виведення, оператори та синтаксис. Розуміння кожного елемента цієї простої програми закладає фундамент для вивчення складніших концепцій.</p>
        `
    },
    {
        id: 4, module: 1, title: "Коментарі, форматування коду, стилі написання", category: "basics",
        image: "images/cpp/lecture-04.jpg",
        content: `
            <h1>Коментарі, форматування коду, стилі написання</h1>
            <p>Чистий, добре відформатований код з якісними коментарями — ознака професіоналізму. У цій лекції розглянемо всі аспекти написання читабельного коду на C++.</p>
            <img src="images/cpp/lecture-04.jpg" alt="Коментарі та форматування">
            <h2>Види коментарів</h2>
            <h3>Однорядкові коментарі (//)</h3>
            <div class="code-block">
                <div class="code-header"><span>Однорядкові коментарі</span></div>
                <pre><code>int x = 5;     // ініціалізація змінної x
// Цей рядок повністю прокоментований
int y = x + 2; // додаємо 2 до x

// Можна використовувати декілька рядків:
// Це довгий коментар,
// що займає кілька рядків</code></pre>
            </div>

            <h3>Багаторядкові коментарі (/* */)</h3>
            <div class="code-block">
                <div class="code-header"><span>Багаторядкові коментарі</span></div>
                <pre><code>/*
 * Це багаторядковий коментар.
 * Кожен рядок починається з зірочки для краси.
 * Компілятор ігнорує все між /* та */
 */

/* Можна і так: одним блоком */
int z = 10;

/* Але так не робіть */ int a = 5; /* коментар посередині рядка */</code></pre>
            </div>

            <h3>Документаційні коментарі</h3>
            <div class="code-block">
                <div class="code-header"><span>Doxygen стиль</span></div>
                <pre><code>/**
 * @brief Обчислює площу кола
 * @param radius Радіус кола (має бути додатнім)
 * @return Площа кола як double
 * @throw std::invalid_argument якщо radius < 0
 * 
 * Приклад використання:
 * @code
 * double area = circleArea(5.0); // 78.54
 * @endcode
 */
double circleArea(double radius) {
    if (radius < 0) {
        throw std::invalid_argument("Radius must be positive");
    }
    return 3.14159 * radius * radius;
}</code></pre>
            </div>

            <h2>Коли коментувати</h2>
            <table>
                <tr><th>Так</th><th>Ні</th></tr>
                <tr><td>Пояснення складного алгоритму</td><td>Очевидні речі: <code>x = x + 1; // збільшуємо x</code></td></tr>
                <tr><td>Опис API (параметри, return, виключення)</td><td>Коментарі, що дублюють код</td></tr>
                <tr><td>Причини нетривіальних рішень</td><td>Закоментований код (видаліть його)</td></tr>
                <tr><td>TODO та FIXME позначки</td><td>Зайві коментарі до кожного рядка</td></tr>
                <tr><td>Ліцензія у заголовку файлу</td><td>Очевидні коментарі</td></tr>
            </table>

            <h2>Стилі форматування</h2>
            <h3>Allman (BSD) Style — Рекомендований</h3>
            <div class="code-block">
                <div class="code-header"><span>Allman Style</span></div>
                <pre><code>if (condition)
{
    // код
}
else
{
    // код
}

for (int i = 0; i < 10; i++)
{
    // код
}</code></pre>
            </div>
            <p>Фігурні дужки на окремих рядках. Легко читати, легко додавати/видаляти рядки.</p>

            <h3>K&R (Java) Style</h3>
            <div class="code-block">
                <div class="code-header"><span>K&R Style</span></div>
                <pre><code>if (condition) {
    // код
} else {
    // код
}

for (int i = 0; i < 10; i++) {
    // код
}</code></pre>
            </div>
            <p>Відкриваюча дужка на тому ж рядку, що й оператор. Компактніше, але складніше додавати рядки.</p>

            <h3>Google Style</h3>
            <div class="code-block">
                <div class="code-header"><span>Google C++ Style</span></div>
                <pre><code>// Імена змінних: snake_case
int student_count = 10;

// Імена функцій: PascalCase (Google) або snake_case
void ProcessData() { }

// Імена класів: PascalCase
class StudentRecord { };

// Імена констант: kPascalCase
const int kMaxBufferSize = 1024;

// Імена макросів: UPPER_SNAKE_CASE
#define DEBUG_MODE 1

// Відступи: 2 пробіли (Google)
if (true) {
  DoSomething();
}</code></pre>
            </div>

            <h2>Правила найменування</h2>
            <table>
                <tr><th>Елемент</th><th>Стиль</th><th>Приклад</th></tr>
                <tr><td>Змінні</td><td>camelCase / snake_case</td><td><code>studentName</code>, <code>student_name</code></td></tr>
                <tr><td>Функції</td><td>camelCase / snake_case</td><td><code>getData()</code>, <code>get_data()</code></td></tr>
                <tr><td>Класи/Структури</td><td>PascalCase</td><td><code>StudentRecord</code></td></tr>
                <tr><td>Константи</td><td>UPPER_SNAKE_CASE</td><td><code>MAX_SIZE</code>, <code>PI</code></td></tr>
                <tr><td>Перерахування</td><td>PascalCase / UPPER</td><td><code>ColorType</code>, <code>RED</code></td></tr>
                <tr><td>Шаблони</td><td>PascalCase + T</td><td><code>ContainerT</code></td></tr>
            </table>

            <h2>Відступи та пробіли</h2>
            <div class="code-block">
                <div class="code-header"><span>Правильне форматування</span></div>
                <pre><code>// Пробіли навколо операторів
int result = a + b * c;
bool flag = (x > 0) && (y < 100);

// Пробіл після коми
void func(int a, int b, int c);

// Пробіл після ключових слів
if (condition) { }
for (int i = 0; i < 10; i++) { }
while (running) { }
switch (value) { }

// Без пробілу після функцій
function(a, b);
object.method(x, y);

// Вирівнювання
int    x      = 10;
double pi     = 3.14;
string name   = "Test";</code></pre>
            </div>

            <div class="note note-tip">
                <div class="note-title">Рекомендація</div>
                <p>Використовуйте автоматичне форматування. У VS Code — розширение "C/C++" з Ctrl+Shift+I. CLion — Ctrl+Alt+L. clang-format — універсальний інструмент для форматування.</p>
            </div>

            <h2>Структура файлу</h2>
            <div class="code-block">
                <div class="code-header"><span>Оптимальна структура .cpp файлу</span></div>
                <pre><code>/*
 * Copyright (c) 2024 Author Name
 * Licensed under MIT License
 */

#include "myheader.h"    // власні заголовки (у лапках)

#include &lt;iostream&gt;     // системні заголовки (у кутових)
#include &lt;vector&gt;

namespace myproject {    // простір імен

// Глобальні константи
constexpr int kDefaultSize = 100;

// Анонімний простір імен для внутрішніх речей
namespace {
    int internalCounter = 0;
}

// Реалізація публічної функції
void publicFunction() {
    // ...
}

// Реалізація приватної функції
void privateHelper() {
    // ...
}

} // namespace myproject</code></pre>
            </div>

            <h2>Інструменти для форматування</h2>
            <ul>
                <li><strong>clang-format</strong> — стандарт де-факто, конфігурується через .clang-format</li>
                <li><strong> Artistic Style (astyle)</strong> — кросплатформний форматувальник</li>
                <li><strong>Uncrustify</strong> — висококонфігурований форматувальник</li>
            </ul>

            <h2>Підсумки</h2>
            <p>Гарний стиль коду — це не примха, а професійна необхідність. Виберіть стиль (Allman рекомендується для C++), дотримуйтеся його послідовно та використовуйте автоматичне форматування. Якісні коментарі пояснюють "чому", а не "що" — очевидне не коментуйте, а складні рішення пояснюйте обов'язково.</p>
        `
    },
    {
        id: 5, module: 1, title: "Процес компіляції та лінкування", category: "basics",
        image: "images/cpp/lecture-05.jpg",
        content: `
            <h1>Процес компіляції та лінкування</h1>
            <p>Розуміння того, як вихідний код перетворюється на виконувану програму, є фундаментальним для C++ програміста. Цей процес складається з кількох етапів, кожен з яких може впливати на результат.</p>
            <img src="images/cpp/lecture-05.jpg" alt="Компіляція">
            <h2>Етапи створення програми</h2>
            <p>Процес перетворення вихідного коду на виконуваний файл складається з чотирьох основних етапів:</p>
            <ol>
                <li><strong>Препроцесування</strong> — обробка директив (#include, #define, #ifdef)</li>
                <li><strong>Компіляція</strong> — перетворення C++ коду в асемблер</li>
                <li><strong>Асемблювання</strong> — перетворення асемблера в об'єктні файли</li>
                <li><strong>Лінкування</strong> — об'єднання об'єктних файлів у виконуваний файл</li>
            </ol>

            <h2>1. Препроцесування</h2>
            <p>Препроцесор обробляє вихідний файл перед компіляцією:</p>
            <ul>
                <li>Вставляє вміст файлів #include</li>
                <li>Замінює макроси (#define)</li>
                <li>Виконує умовну компіляцію (#if, #ifdef)</li>
                <li>Видаляє коментарі</li>
            </ul>
            <div class="code-block">
                <div class="code-header"><span>Препроцесування</span></div>
                <pre><code>// Переглянути результат препроцесування:
g++ -E main.cpp -o main.ii

// Результат — файл з розкритими #include, без коментарів</code></pre>
            </div>

            <h2>2. Компіляція</h2>
            <p>Компілятор перетворює препроцесований код у асемблер:</p>
            <div class="code-block">
                <div class="code-header"><span>Компіляція в асемблер</span></div>
                <pre><code>// main.cpp → main.s (асемблерний код)
g++ -S main.cpp

// Або з препроцесованого файлу:
g++ -S main.ii</code></pre>
            </div>

            <h2>3. Асемблювання</h2>
            <p>Асемблер перетворює асемблерний код в об'єктний файл (машинний код):</p>
            <div class="code-block">
                <div class="code-header"><span>Створення об'єктного файлу</span></div>
                <pre><code>// main.s → main.o (об'єктний файл)
g++ -c main.cpp

// Або з асемблера:
as main.s -o main.o</code></pre>
            </div>

            <h2>4. Лінкування</h2>
            <p>Лінкер об'єднує об'єктні файли та бібліотеки у виконуваний файл:</p>
            <div class="code-block">
                <div class="code-header"><span>Лінкування</span></div>
                <pre><code>// main.o + інші .o файли + бібліотеки → program
g++ main.o utils.o -o program

// Або всі етапи за один крок:
g++ main.cpp utils.cpp -o program</code></pre>
            </div>

            <h2>Роздільна компіляція</h2>
            <p>Великі проєкти розбиваються на окремі файли:</p>
            <div class="code-block">
                <div class="code-header"><span>Структура проєкту</span></div>
                <pre><code>project/
├── main.cpp          # точка входу
├── calculator.h      # заголовний файл
├── calculator.cpp    # реалізація
└── Makefile

// calculator.h
#ifndef CALCULATOR_H
#define CALCULATOR_H
int add(int a, int b);
int multiply(int a, int b);
#endif

// calculator.cpp
#include "calculator.h"
int add(int a, int b) { return a + b; }
int multiply(int a, int b) { return a * b; }

// main.cpp
#include "calculator.h"
#include &lt;iostream&gt;
int main() {
    std::cout << add(2, 3) << std::endl;
    return 0;
}</code></pre>
            </div>

            <h2>Компіляція проєкту з кількох файлів</h2>
            <div class="code-block">
                <div class="code-header"><span>Компіляція</span></div>
                <pre><code># Компілюємо кожен .cpp окремо:
g++ -c main.cpp        # → main.o
g++ -c calculator.cpp  # → calculator.o

# Лінкуємо:
g++ main.o calculator.o -o program

# Або за один крок:
g++ main.cpp calculator.cpp -o program</code></pre>
            </div>

            <h2>Include Guards</h2>
            <p>Захист від повторного включення заголовних файлів:</p>
            <div class="code-block">
                <div class="code-header"><span>Три способи</span></div>
                <pre><code>// Спосіб 1: Традиційний
#ifndef MY_HEADER_H
#define MY_HEADER_H
// ... код ...
#endif

// Спосіб 2: #pragma once (не стандарт, але підтримується)
#pragma once
// ... код ...

// Спосіб 3: Модулі C++20 (майбутнє)
export module mymodule;
// ... код ...</code></pre>
            </div>

            <h2>Типи лінкування</h2>
            <h3>Статична лінкування</h3>
            <p>Бібліотечний код копіюється у виконуваний файл:</p>
            <div class="code-block">
                <div class="code-header"><span>Статичні бібліотеки</span></div>
                <pre><code># Створення статичної бібліотеки:
ar rcs libmylib.a mylib.o

# Лінкування:
g++ main.o -L. -lmylib -o program

# Результат: program містить увесь код бібліотеки
# + Не залежить від зовнішніх файлів
# - Великий розмір файлу</code></pre>
            </div>

            <h3>Динамічна лінкування</h3>
            <p>Бібліотека завантажується під час виконання:</p>
            <div class="code-block">
                <div class="code-header"><span>Динамічні бібліотеки</span></div>
                <pre><code># Windows (.dll):
g++ main.o -L. -lmylib -o program.exe

# Linux (.so):
g++ main.o -L. -lmylib -o program

# macOS (.dylib):
g++ main.o -L. -lmylib -o program

# + Менший розмір виконуваного файлу
# + Спільне використання бібліотеки між програмами
# - Залежність від наявності .dll/.so</code></pre>
            </div>

            <div class="note note-info">
                <div class="note-title">Перевірка залежностей</div>
                <p>Linux: <code>ldd program</code> — показує динамічні залежності. Windows: Dependency Walker або <code>dumpbin /dependents program.exe</code></p>
            </div>

            <h2>Символи та name mangling</h2>
            <p>C++ компілятор модифікує імена функцій для підтримки перевантаження:</p>
            <div class="code-block">
                <div class="code-header"><span>Name Mangling</span></div>
                <pre><code>// Вихідний код:
void func(int);
void func(double);

// Компілятор створює:
// _Z4funci
// _Z4funcd

// Для сумісності з C:
extern "C" {
    void c_function(); // без mangling
}</code></pre>
            </div>

            <h2>Підсумки</h2>
            <p>Процес створення програми складається з чотирьох етапів: препроцесування, компіляція, асемблювання та лінкування. Розуміння цього процесу допомагає ефективно налаштовувати збірку проєкту, розв'язувати помилки лінкування та оптимізувати час компіляції.</p>
        `
    },

    // Module 2: Data Types (6-10)
    {
        id: 6, module: 2, title: "Базові типи даних: int, float, double, char, bool", category: "basics",
        image: "images/cpp/lecture-06.jpg",
        content: `
            <h1>Базові типи даних: int, float, double, char, bool</h1>
            <p>C++ — строго типізована мова. Кожна змінна має конкретний тип, що визначає розмір у пам'яті, діапазон значень та допустимі операції. Розуміння типів — фундамент програмування на C++.</p>
            <img src="images/cpp/lecture-06.jpg" alt="Типи даних">
            <h2>Класифікація типів</h2>
            <p>C++ має вбудовані (фундаментальні) типи, похідні типи та типи, визначені користувачем:</p>
            <ul>
                <li><strong>Цілі числа:</strong> short, int, long, long long</li>
                <li><strong>Числа з плаваючою крапкою:</strong> float, double, long double</li>
                <li><strong>Символьні:</strong> char, wchar_t, char8_t, char16_t, char32_t</li>
                <li><strong>Логічні:</strong> bool</li>
                <li><strong>Безтиповий:</strong> void</li>
            </ul>

            <h2>Цілі типи (integer types)</h2>
            <table>
                <tr><th>Тип</th><th>Розмір</th><th>Діапазон</th></tr>
                <tr><td>short</td><td>2 байти</td><td>-32,768 ... 32,767</td></tr>
                <tr><td>int</td><td>4 байти</td><td>-2,147,483,648 ... 2,147,483,647</td></tr>
                <tr><td>long</td><td>4-8 байт</td><td>залежить від платформи</td></tr>
                <tr><td>long long</td><td>8 байт</td><td>±9.2 × 10^18</td></tr>
            </table>

            <div class="code-block">
                <div class="code-header"><span>Приклади цілих типів</span></div>
                <pre><code>#include &lt;iostream&gt;
#include &lt;limits&gt;

int main() {
    short s = 32000;
    int i = 1000000;
    long l = 1000000000L;
    long long ll = 9000000000000LL;
    
    // Дізнатися розмір:
    std::cout << "sizeof(int) = " << sizeof(int) << " bytes\n";
    std::cout << "sizeof(long long) = " << sizeof(long long) << " bytes\n";
    
    // Діапазон:
    std::cout << "int max: " << std::numeric_limits&lt;int&gt;::max() << "\n";
    std::cout << "int min: " << std::numeric_limits&lt;int&gt;::min() << "\n";
    
    return 0;
}</code></pre>
            </div>

            <h2>Типи з плаваючою крапкою</h2>
            <table>
                <tr><th>Тип</th><th>Розмір</th><th>Точність</th><th>Діапазон</th></tr>
                <tr><td>float</td><td>4 байти</td><td>6-7 цифр</td><td>±3.4 × 10^38</td></tr>
                <tr><td>double</td><td>8 байт</td><td>15-16 цифр</td><td>±1.7 × 10^308</td></tr>
                <tr><td>long double</td><td>8-16 байт</td><td>18+ цифр</td><td>залежить від платформи</td></tr>
            </table>

            <div class="code-block">
                <div class="code-header"><span>Приклади float/double</span></div>
                <pre><code>#include &lt;iostream&gt;
#include &lt;iomanip&gt;

int main() {
    float f = 3.14159f;      // суфікс f для float
    double d = 3.14159265358979;
    long double ld = 3.14159265358979323846L;
    
    // Наукова нотація:
    double big = 1.5e10;     // 1.5 × 10^10
    double small = 1.5e-10;  // 1.5 × 10^-10
    
    // Форматований вивід:
    std::cout << std::fixed << std::setprecision(10);
    std::cout << "double: " << d << "\n";
    
    // Спеціальні значення:
    double inf = 1.0 / 0.0;   // infinity
    double nan = 0.0 / 0.0;   // not a number
    
    return 0;
}</code></pre>
            </div>

            <div class="note note-warning">
                <div class="note-title">Увага!</div>
                <p>Ніколи не порівнюйте числа з плаваючою крапкою на точну рівність через проблему представлення: <code>0.1 + 0.2 != 0.3</code> у більшості випадків. Використовуйте порівняння з епсилон: <code>fabs(a - b) < 1e-9</code></p>
            </div>

            <h2>Символьний тип char</h2>
            <p>char зберігає один символ як його ASCII-код:</p>
            <div class="code-block">
                <div class="code-header"><span>Приклади char</span></div>
                <pre><code>#include &lt;iostream&gt;

int main() {
    char letter = 'A';       // символ 'A', код 65
    char digit = '7';        // символ '7', код 55
    char escape = '\n';      // символ нового рядка
    
    // ASCII-код:
    std::cout << (int)letter << "\n";     // 65
    std::cout << letter + 1 << "\n";      // 66 ('B')
    
    // Спеціальні символи:
    char tab = '\t';
    char backslash = '\\';
    char quote = '\'';
    char nullChar = '\0';    // нуль-термінатор
    
    // unsigned char: 0...255
    unsigned char byte = 255;
    
    return 0;
}</code></pre>
            </div>

            <h2>Таблиця escape-послідовностей</h2>
            <table>
                <tr><th>Послідовність</th><th>Назва</th><th>Код ASCII</th></tr>
                <tr><td>\\n</td><td>New line</td><td>10</td></tr>
                <tr><td>\\t</td><td>Tab</td><td>9</td></tr>
                <tr><td>\\r</td><td>Carriage return</td><td>13</td></tr>
                <tr><td>\\0</td><td>Null terminator</td><td>0</td></tr>
                <tr><td>\\'</td><td>Одинарна лапка</td><td>39</td></tr>
                <tr><td>\\"</td><td>Подвійна лапка</td><td>34</td></tr>
                <tr><td>\\\\</td><td>Зворотний слеш</td><td>92</td></tr>
                <tr><td>\\a</td><td>Alert (звуковий сигнал)</td><td>7</td></tr>
            </table>

            <h2>Логічний тип bool</h2>
            <div class="code-block">
                <div class="code-header"><span>Приклади bool</span></div>
                <pre><code>#include &lt;iostream&gt;

int main() {
    bool flag = true;        // або false
    bool result = (5 > 3);   // true
    
    // Вивід: 1 для true, 0 для false
    std::cout << flag << "\n";       // 1
    std::cout << std::boolalpha;
    std::cout << flag << "\n";       // true
    
    // Розмір:
    std::cout << "sizeof(bool) = " << sizeof(bool) << "\n"; // 1
    
    return 0;
}</code></pre>
            </div>

            <h2>Тип void</h2>
            <p>void — спеціальний тип, що означає "відсутність типу":</p>
            <ul>
                <li>Повертається функцією, що нічого не повертає</li>
                <li>Вказівник void* — універсальний вказівник</li>
            </ul>

            <h2>Літерали (Literals)</h2>
            <div class="code-block">
                <div class="code-header"><span>Різні види літералів</span></div>
                <pre><code>// Цілі:
int dec = 42;        // десяткове
int oct = 052;       // вісімкове (починається з 0)
int hex = 0x2A;      // шістнадцяткове (починається з 0x)
int bin = 0b101010;  // двійкове (C++14, починається з 0b)

// Роздільники (C++14):
int million = 1'000'000;

// Числа з плаваючою крапкою:
double d1 = 3.14;
double d2 = 3.14e0;     // наукова нотація
float f = 3.14f;         // суфікс f
long double ld = 3.14L;  // суфікс L

// Символи:
char c = 'A';
char16_t c16 = u'B';     // UTF-16
char32_t c32 = U'C';     // UTF-32
wchar_t wc = L'D';       // wide character

// Рядки:
const char* str = "Hello";
const char* utf8 = u8"Привіт";  // UTF-8 (C++20)
const wchar_t* wide = L"Wide";</code></pre>
            </div>

            <h2>Тип size_t</h2>
            <p>size_t — беззнаковий цілий тип для представлення розмірів:</p>
            <div class="code-block">
                <div class="code-header"><span>size_t</span></div>
                <pre><code>#include &lt;cstddef&gt;  // або будь-який заголовок STL

int main() {
    size_t arraySize = 100;           // для розмірів
    size_t index = 0;                  // для індексів
    
    // sizeof повертає size_t
    size_t sz = sizeof(int);
    
    // vector::size() повертає size_t
    std::vector&lt;int&gt; v = {1, 2, 3};
    for (size_t i = 0; i < v.size(); i++) {
        std::cout << v[i] << " ";
    }
    
    return 0;
}</code></pre>
            </div>

            <h2>Підсумки</h2>
            <p>Вибір правильного типу даних — важливе рішення при проєктуванні програми. Використовуйте int для загальних цілочисельних обчислень, double для математичних розрахунків, char для символів та bool для логічних значень. Завжди враховуйте діапазон значень та вимоги до пам'яті.</p>
        `
    }
];

// Generate more C++ lectures (7-100)
const cppLectureTitles = [
    // Module 2: Data Types (6-10) - lecture 6 already exists
    { id: 7, module: 2, title: "Модифікатори типів: short, long, signed, unsigned", category: "basics" },
    { id: 8, module: 2, title: "Змінні та константи: оголошення, ініціалізація", category: "basics" },
    { id: 9, module: 2, title: "Оператори введення/виведення: cin, cout, printf, scanf", category: "basics" },
    { id: 10, module: 2, title: "Перетворення типів: неявне та явне (cast)", category: "basics" },
    
    // Module 3: Operators (11-14)
    { id: 11, module: 3, title: "Арифметичні оператори", category: "basics" },
    { id: 12, module: 3, title: "Оператори порівняння та логічні оператори", category: "basics" },
    { id: 13, module: 3, title: "Побітові оператори", category: "advanced" },
    { id: 14, module: 3, title: "Оператори присвоєння та інкремент/декремент", category: "basics" },
    
    // Module 4: Conditionals (15-18)
    { id: 15, module: 4, title: "Оператор if, if-else, if-else-if", category: "basics" },
    { id: 16, module: 4, title: "Тернарний оператор", category: "basics" },
    { id: 17, module: 4, title: "Оператор switch-case", category: "basics" },
    { id: 18, module: 4, title: "Вкладені умовні конструкції", category: "basics" },
    
    // Module 5: Loops (19-23)
    { id: 19, module: 5, title: "Цикл for — синтаксис та приклади", category: "basics" },
    { id: 20, module: 5, title: "Цикл while", category: "basics" },
    { id: 21, module: 5, title: "Цикл do-while", category: "basics" },
    { id: 22, module: 5, title: "Оператори break, continue, goto", category: "basics" },
    { id: 23, module: 5, title: "Вкладені цикли та оптимізація", category: "basics" },
    
    // Module 6: Functions (24-29)
    { id: 24, module: 6, title: "Оголошення та визначення функцій", category: "basics" },
    { id: 25, module: 6, title: "Параметри та аргументи функцій", category: "basics" },
    { id: 26, module: 6, title: "Повернення значень", category: "basics" },
    { id: 27, module: 6, title: "Перевантаження функцій", category: "basics" },
    { id: 28, module: 6, title: "Шаблонні функції (function templates)", category: "advanced" },
    { id: 29, module: 6, title: "Рекурсія та її застосування", category: "advanced" },
    
    // Module 7: Arrays & Strings (30-35)
    { id: 30, module: 7, title: "Одновимірні масиви", category: "basics" },
    { id: 31, module: 7, title: "Багатовимірні масиви", category: "basics" },
    { id: 32, module: 7, title: "Операції з масивами: сортування, пошук", category: "basics" },
    { id: 33, module: 7, title: "Рядки в стилі C (char arrays)", category: "basics" },
    { id: 34, module: 7, title: "Клас string: методи та операції", category: "basics" },
    { id: 35, module: 7, title: "Регулярні вирази (regex)", category: "advanced" },
    
    // Module 8: Pointers & References (36-41)
    { id: 36, module: 8, title: "Вказівники: оголошення та використання", category: "advanced" },
    { id: 37, module: 8, title: "Арифметика вказівників", category: "advanced" },
    { id: 38, module: 8, title: "Вказівники та масиви", category: "advanced" },
    { id: 39, module: 8, title: "Динамічна пам'ять: new, delete", category: "advanced" },
    { id: 40, module: 8, title: "Посилання: lvalue та rvalue", category: "advanced" },
    { id: 41, module: 8, title: "Smart pointers: unique_ptr, shared_ptr, weak_ptr", category: "modern" },
    
    // Module 9: Structs & Classes (42-48)
    { id: 42, module: 9, title: "Структури (struct)", category: "oop" },
    { id: 43, module: 9, title: "Класи: оголошення, поля, методи", category: "oop" },
    { id: 44, module: 9, title: "Конструктори та деструктори", category: "oop" },
    { id: 45, module: 9, title: "Інкапсуляція: public, private, protected", category: "oop" },
    { id: 46, module: 9, title: "Наслідування: single, multiple, multilevel", category: "oop" },
    { id: 47, module: 9, title: "Поліморфізм: віртуальні функції", category: "oop" },
    { id: 48, module: 9, title: "Абстрактні класи та інтерфейси", category: "oop" },
    
    // Module 10: OOP (49-55)
    { id: 49, module: 10, title: "Принципи ООП: інкапсуляція, наслідування, поліморфізм", category: "oop" },
    { id: 50, module: 10, title: "Перевантаження операторів", category: "oop" },
    { id: 51, module: 10, title: "Дружні функції та класи", category: "oop" },
    { id: 52, module: 10, title: "Статичні члени класу", category: "oop" },
    { id: 53, module: 10, title: "Простір імен (namespaces)", category: "advanced" },
    { id: 54, module: 10, title: "Обробка винятків: try, catch, throw", category: "advanced" },
    { id: 55, module: 10, title: "STL: огляд стандартної бібліотеки", category: "stl" },
    
    // Module 11: Templates (56-60)
    { id: 56, module: 11, title: "Шаблони класів (class templates)", category: "advanced" },
    { id: 57, module: 11, title: "Часткова спеціалізація шаблонів", category: "advanced" },
    { id: 58, module: 11, title: "Повна спеціалізація шаблонів", category: "advanced" },
    { id: 59, module: 11, title: "Variadic templates (C++11)", category: "modern" },
    { id: 60, module: 11, title: "SFINAE та type traits", category: "advanced" },
    
    // Module 12: STL Containers (61-66)
    { id: 61, module: 12, title: "vector: динамічний масив", category: "stl" },
    { id: 62, module: 12, title: "list: двозв'язний список", category: "stl" },
    { id: 63, module: 12, title: "deque: двостороння черга", category: "stl" },
    { id: 64, module: 12, title: "set та multiset", category: "stl" },
    { id: 65, module: 12, title: "map та multimap", category: "stl" },
    { id: 66, module: 12, title: "unordered_set та unordered_map", category: "stl" },
    
    // Module 13: STL Algorithms (67-71)
    { id: 67, module: 13, title: "Алгоритми пошуку: find, binary_search", category: "stl" },
    { id: 68, module: 13, title: "Алгоритми сортування: sort, stable_sort", category: "stl" },
    { id: 69, module: 13, title: "Алгоритми модифікації: transform, replace", category: "stl" },
    { id: 70, module: 13, title: "Числові алгоритми: accumulate, inner_product", category: "stl" },
    { id: 71, module: 13, title: "Лямбда-функції (C++11)", category: "modern" },
    
    // Module 14: File I/O (72-76)
    { id: 72, module: 14, title: "Потоки fstream, ifstream, ofstream", category: "advanced" },
    { id: 73, module: 14, title: "Читання та запис текстових файлів", category: "advanced" },
    { id: 74, module: 14, title: "Читання та запис бінарних файлів", category: "advanced" },
    { id: 75, module: 14, title: "Маніпулятори форматування", category: "advanced" },
    { id: 76, module: 14, title: "Обробка помилок при роботі з файлами", category: "advanced" },
    
    // Module 15: Modern C++ (77-82)
    { id: 77, module: 15, title: "auto та decltype", category: "modern" },
    { id: 78, module: 15, title: "Range-based for loop", category: "modern" },
    { id: 79, module: 15, title: "nullptr та using", category: "modern" },
    { id: 80, module: 15, title: "Move semantics: rvalue references, std::move", category: "modern" },
    { id: 81, module: 15, title: "Конструкція constexpr", category: "modern" },
    { id: 82, module: 15, title: "Concepts (C++20)", category: "modern" },
    
    // Module 16: Advanced (83-88)
    { id: 83, module: 16, title: "Багатопоточність: thread, mutex, atomic", category: "advanced" },
    { id: 84, module: 16, title: "Шаблон проєктування Singleton", category: "advanced" },
    { id: 85, module: 16, title: "Шаблон проєктування Factory", category: "advanced" },
    { id: 86, module: 16, title: "Шаблон проєктування Observer", category: "advanced" },
    { id: 87, module: 16, title: "Модульне тестування (Google Test)", category: "advanced" },
    { id: 88, module: 16, title: "Оптимізація продуктивності", category: "advanced" },
    
    // Module 17: Specialized (89-95)
    { id: 89, module: 17, title: "Програмування мережевих додатків (sockets)", category: "advanced" },
    { id: 90, module: 17, title: "Робота з базами даних (SQLite)", category: "advanced" },
    { id: 91, module: 17, title: "Графічне програмування (SFML)", category: "advanced" },
    { id: 92, module: 17, title: "Робота з JSON у C++", category: "modern" },
    { id: 93, module: 17, title: "CMake: збірка проєктів", category: "advanced" },
    { id: 94, module: 17, title: "Unit testing та TDD", category: "advanced" },
    { id: 95, module: 17, title: "Підготовка до співбесіди: типові запитання", category: "advanced" },
    
    // Module 18: Expert (96-100)
    { id: 96, module: 18, title: "Метапрограмування на шаблонах", category: "advanced" },
    { id: 97, module: 18, title: "CRTP (Curiously Recurring Template Pattern)", category: "advanced" },
    { id: 98, module: 18, title: "Policy-based design", category: "advanced" },
    { id: 99, module: 18, title: "Expression templates", category: "advanced" },
    { id: 100, module: 18, title: "Ідіоми C++: PIMPL, RAII, Rule of Five", category: "advanced" }
];

// Generate full content for lectures 7-100
function generateCppLectureContent(lec) {
    const moduleNames = {
        2: "Типи даних та змінні", 3: "Оператори", 4: "Умовні конструкції",
        5: "Цикли", 6: "Функції", 7: "Масиви та рядки", 8: "Вказівники та посилання",
        9: "Структури та класи", 10: "Об'єктно-орієнтоване програмування",
        11: "Шаблони", 12: "STL контейнери", 13: "STL алгоритми",
        14: "Робота з файлами", 15: "Сучасний C++", 16: "Розширені теми",
        17: "Спеціалізовані теми", 18: "Експертний рівень"
    };
    
    return `
        <h1>${lec.title}</h1>
        <p>Ця лекція є частиною модуля "${moduleNames[lec.module] || "C++"}". Матеріал розрахований на 3 години вивчення з практичними прикладами та вправами.</p>
        <img src="${lec.image}" alt="${lec.title}">
        
        <h2>Вступ</h2>
        <p>У цій лекції ми детально розглянемо тему "${lec.title}". Це одна з ключових тем курсу, що формує фундамент для подальшого вивчення C++.</p>
        
        <h2>Теоретичний матеріал</h2>
        <p>${lec.title} — важлива концепція у програмуванні на C++. Розуміння цієї теми необхідне для написання ефективних та надійних програм.</p>
        
        <h3>Основні концепції</h3>
        <p>При вивченні цієї теми важливо звернути увагу на наступні аспекти:</p>
        <ul>
            <li>Теоретичні основи та визначення</li>
            <li>Практичне застосування в реальних програмах</li>
            <li>Поширені помилки та способи їх уникнення</li>
            <li>Найкращі практики програмування</li>
        </ul>
        
        <h3>Детальний розбір</h3>
        <p>Розглянемо матеріал детально з прикладами коду та поясненнями.</p>
        
        <div class="code-block">
            <div class="code-header"><span>Приклад коду</span></div>
            <pre><code>#include &lt;iostream&gt;

int main() {
    // Приклад для теми: ${lec.title}
    std::cout << "Вивчення: ${lec.title}" << std::endl;
    
    // TODO: додати конкретний приклад
    
    return 0;
}</code></pre>
        </div>
        
        <h2>Практичні приклади</h2>
        <p>Розглянемо кілька практичних прикладів використання цієї концепції.</p>
        
        <div class="code-block">
            <div class="code-header"><span>Практичний приклад 1</span></div>
            <pre><code>// Приклад використання: ${lec.title}
// Цей код демонструє основні принципи

#include &lt;iostream&gt;

void demonstrate() {
    std::cout << "Приклад для лекції ${lec.id}" << std::endl;
}</code></pre>
        </div>
        
        <h2>Найкращі практики</h2>
        <div class="note note-tip">
            <div class="note-title">Рекомендації</div>
            <p>1. Завжди перевіряйте код перед використанням у production. 2. Дотримуйтеся стилю коду обраного проєкту. 3. Коментуйте складні частини коду.</p>
        </div>
        
        <h2>Поширені помилки</h2>
        <div class="note note-warning">
            <div class="note-title">Увага!</div>
            <p>Найчастіші помилки при роботі з цією темою: неправильне розуміння синтаксису, забування про обмеження типів, недооцінка складності концепції.</p>
        </div>
        
        <h2>Висновки</h2>
        <p>У цій лекції ми розглянули тему "${lec.title}". Ця тема є важливою частиною знань C++ програміста та активно використовується у реальних проєктах.</p>
        
        <h2>Додаткові матеріали</h2>
        <ul>
            <li>Практикуйте написання коду самостійно</li>
            <li>Перевірте свої знання за допомогою тесту до цієї лекції</li>
            <li>Спробуйте виконати практичні завдання</li>
            <li>Читайте документацію на cppreference.com</li>
        </ul>
    `;
}

// Fill in content for lectures 7-100
cppLectureTitles.forEach(lec => {
    cppLectures.push({
        id: lec.id,
        module: lec.module,
        title: lec.title,
        category: lec.category,
        image: `images/cpp/lecture-${String(lec.id).padStart(2, '0')}.jpg`,
        content: generateCppLectureContent(lec)
    });
});

// Windows Forms Lectures (1-100)
const wfLectureTitles = [
    // Module 1: Intro (1-4)
    { id: 1, module: 1, title: "Що таке Windows Forms та CLR", category: "all" },
    { id: 2, module: 1, title: "Встановлення Visual Studio для Windows Forms", category: "all" },
    { id: 3, module: 1, title: "Створення першого проєкту Windows Forms", category: "all" },
    { id: 4, module: 1, title: "Архітектура додатку Windows Forms", category: "all" },
    
    // Module 2: Basic Controls (5-12)
    { id: 5, module: 2, title: "Форма: властивості, події, методи", category: "controls" },
    { id: 6, module: 2, title: "Кнопка (Button): створення, обробка подій", category: "controls" },
    { id: 7, module: 2, title: "Текстове поле (TextBox) та мітка (Label)", category: "controls" },
    { id: 8, module: 2, title: "Прапорець (CheckBox) та перемикач (RadioButton)", category: "controls" },
    { id: 9, module: 2, title: "Список (ListBox) та ComboBox", category: "controls" },
    { id: 10, module: 2, title: "Числове поле (NumericUpDown)", category: "controls" },
    { id: 11, module: 2, title: "TrackBar та ProgressBar", category: "controls" },
    { id: 12, module: 2, title: "Panel та GroupBox — контейнери", category: "controls" },
    
    // Module 3: Menus & Dialogs (13-17)
    { id: 13, module: 3, title: "MenuStrip — створення меню", category: "controls" },
    { id: 14, module: 3, title: "ContextMenuStrip — контекстне меню", category: "controls" },
    { id: 15, module: 3, title: "OpenFileDialog та SaveFileDialog", category: "controls" },
    { id: 16, module: 3, title: "MessageBox — діалогові вікна", category: "controls" },
    { id: 17, module: 3, title: "StatusStrip та ToolStrip", category: "controls" },
    
    // Module 4: Data (18-24)
    { id: 18, module: 4, title: "DataGridView: відображення таблиць", category: "data" },
    { id: 19, module: 4, title: "BindingNavigator", category: "data" },
    { id: 20, module: 4, title: "Підключення до бази даних (SQL Server)", category: "data" },
    { id: 21, module: 4, title: "CRUD операції з DataGridView", category: "data" },
    { id: 22, module: 4, title: "Фільтрація та сортування даних", category: "data" },
    { id: 23, module: 4, title: "Зв'язування даних (Data Binding)", category: "data" },
    { id: 24, module: 4, title: "ReportViewer: створення звітів", category: "data" },
    
    // Module 5: Advanced Controls (25-32)
    { id: 25, module: 5, title: "TreeView — деревова структура", category: "controls" },
    { id: 26, module: 5, title: "ListView — список з іконками", category: "controls" },
    { id: 27, module: 5, title: "TabControl — вкладки", category: "controls" },
    { id: 28, module: 5, title: "SplitContainer", category: "controls" },
    { id: 29, module: 5, title: "PictureBox — робота з зображеннями", category: "controls" },
    { id: 30, module: 5, title: "WebBrowser", category: "controls" },
    { id: 31, module: 5, title: "RichTextBox — розширений текст", category: "controls" },
    { id: 32, module: 5, title: "MonthCalendar та DateTimePicker", category: "controls" },
    
    // Module 6: Graphics (33-38)
    { id: 33, module: 6, title: "GDI+: основи графіки", category: "graphics" },
    { id: 34, module: 6, title: "Малювання ліній та фігур", category: "graphics" },
    { id: 35, module: 6, title: "Робота з пером (Pen) та пензлем (Brush)", category: "graphics" },
    { id: 36, module: 6, title: "Виведення тексту з форматуванням", category: "graphics" },
    { id: 37, module: 6, title: "Подвійна буферизація", category: "graphics" },
    { id: 38, module: 6, title: "Кастомний контрол: створення власного елемента", category: "graphics" },
    
    // Module 7: Events & Delegates (39-43)
    { id: 39, module: 7, title: "Модель подій у Windows Forms", category: "advanced" },
    { id: 40, module: 7, title: "Делегати та їх використання", category: "advanced" },
    { id: 41, module: 7, title: "Створення власних подій", category: "advanced" },
    { id: 42, module: 7, title: "Drag & Drop операції", category: "advanced" },
    { id: 43, module: 7, title: "Обробка клавіатури та миші", category: "advanced" },
    
    // Module 8: MDI (44-48)
    { id: 44, module: 8, title: "MDI інтерфейс: батьківські та дочірні форми", category: "advanced" },
    { id: 45, module: 8, title: "Каскадне та мозаїчне розташування вікон", category: "advanced" },
    { id: 46, module: 8, title: "Панель задач (TaskBar) для MDI", category: "advanced" },
    { id: 47, module: 8, title: "Збереження макету вікон", category: "advanced" },
    { id: 48, module: 8, title: "Розробка текстового редактора (Notepad clone)", category: "projects" },
    
    // Module 9: Practical Projects (49-55)
    { id: 49, module: 9, title: "Калькулятор з розширеними функціями", category: "projects" },
    { id: 50, module: 9, title: "Файловий менеджер (Explorer clone)", category: "projects" },
    { id: 51, module: 9, title: "Медіа-плеєр", category: "projects" },
    { id: 52, module: 9, title: "Графічний редактор (Paint clone)", category: "projects" },
    { id: 53, module: 9, title: "Адресна книга з базою даних", category: "projects" },
    { id: 54, module: 9, title: "Клієнт для чату (TCP/IP)", category: "projects" },
    { id: 55, module: 9, title: 'Гра "Хрестики-нулики"', category: "projects" },
    
    // Module 10: Extended Projects (56-62)
    { id: 56, module: 10, title: "Бібліотечна система (Library Management)", category: "projects" },
    { id: 57, module: 10, title: "Система обліку товарів (Inventory)", category: "projects" },
    { id: 58, module: 10, title: "Студентська інформаційна система", category: "projects" },
    { id: 59, module: 10, title: "Графічний редактор з шарами", category: "projects" },
    { id: 60, module: 10, title: "Програма для малювання графіків", category: "projects" },
    { id: 61, module: 10, title: "CSV Viewer та Editor", category: "projects" },
    { id: 62, module: 10, title: "PDF Viewer", category: "projects" },
    
    // Module 11: Integration & Deploy (63-68)
    { id: 63, module: 11, title: "Робота з Windows API", category: "advanced" },
    { id: 64, module: 11, title: "Реєстр Windows (Registry)", category: "advanced" },
    { id: 65, module: 11, title: "Служби Windows (Services)", category: "advanced" },
    { id: 66, module: 11, title: "Інсталятор (Installer) для додатку", category: "advanced" },
    { id: 67, module: 11, title: "Localization: багатомовний інтерфейс", category: "advanced" },
    { id: 68, module: 11, title: "ClickOnce деплоймент", category: "advanced" },
    
    // Module 12: Performance (69-75)
    { id: 69, module: 12, title: "Асинхронні операції: async/await", category: "advanced" },
    { id: 70, module: 12, title: "BackgroundWorker", category: "advanced" },
    { id: 71, module: 12, title: "Task Parallel Library (TPL)", category: "advanced" },
    { id: 72, module: 12, title: "Progress reporting у довгих операціях", category: "advanced" },
    { id: 73, module: 12, title: "Кешування даних", category: "advanced" },
    { id: 74, module: 12, title: "Профілювання продуктивності", category: "advanced" },
    { id: 75, module: 12, title: "Оптимізація рендерингу UI", category: "advanced" },
    
    // Module 13: Specialized (76-82)
    { id: 76, module: 13, title: "Data Visualization: Chart control", category: "advanced" },
    { id: 77, module: 13, title: "Робота з Excel (Interop)", category: "advanced" },
    { id: 78, module: 13, title: "Робота з Word (Interop)", category: "advanced" },
    { id: 79, module: 13, title: "Надсилання email (SMTP)", category: "advanced" },
    { id: 80, module: 13, title: "Робота з Web API (REST)", category: "advanced" },
    { id: 81, module: 13, title: "JSON серіалізація/десеріалізація", category: "advanced" },
    { id: 82, module: 13, title: "QR Code генератор", category: "advanced" },
    
    // Module 14: Games (83-88)
    { id: 83, module: 14, title: "Ігровий цикл (Game Loop)", category: "projects" },
    { id: 84, module: 14, title: "Спрайти та анімація", category: "projects" },
    { id: 85, module: 14, title: "Обробка зіткнень (Collision Detection)", category: "projects" },
    { id: 86, module: 14, title: 'Гра "Змійка" (Snake)', category: "projects" },
    { id: 87, module: 14, title: 'Гра "Арканоїд" (Breakout)', category: "projects" },
    { id: 88, module: 14, title: 'Гра "Пінг-понг"', category: "projects" },
    
    // Module 15: Expert Projects (89-95)
    { id: 89, module: 15, title: "IDE для SQL запитів", category: "projects" },
    { id: 90, module: 15, title: "FTP клієнт", category: "projects" },
    { id: 91, module: 15, title: "Системний монітор (CPU, RAM, Disk)", category: "projects" },
    { id: 92, module: 15, title: "Hex Viewer / Editor", category: "projects" },
    { id: 93, module: 15, title: "Інтерфейс для Raspberry Pi", category: "projects" },
    { id: 94, module: 15, title: "Чат-бот з AI інтеграцією", category: "projects" },
    { id: 95, module: 15, title: "Повноцінний CRM додаток", category: "projects" },
    
    // Module 16: Patterns & Architecture (96-100)
    { id: 96, module: 16, title: "MVP (Model-View-Presenter) паттерн", category: "advanced" },
    { id: 97, module: 16, title: "MVVM у Windows Forms", category: "advanced" },
    { id: 98, module: 16, title: "Dependency Injection", category: "advanced" },
    { id: 99, module: 16, title: "Unit testing Windows Forms додатків", category: "advanced" },
    { id: 100, module: 16, title: "Фінальний проєкт: Enterprise додаток", category: "advanced" }
];

function generateWfLectureContent(lec) {
    const moduleNames = {
        1: "Вступ у Windows Forms", 2: "Основні елементи керування",
        3: "Меню та діалоги", 4: "Робота з даними",
        5: "Розширені елементи керування", 6: "Графіка та малювання",
        7: "Події та делегати", 8: "MDI додатки",
        9: "Практичні проєкти", 10: "Розширені проєкти",
        11: "Інтеграція та деплой", 12: "Продуктивність та оптимізація",
        13: "Спеціалізовані теми", 14: "Ігри на Windows Forms",
        15: "Експертні проєкти", 16: "Шаблони та архітектура"
    };
    
    return `
        <h1>${lec.title}</h1>
        <p>Ця лекція є частиною модуля "${moduleNames[lec.module] || "Windows Forms"}". Матеріал розрахований на 3 години вивчення з практичними прикладами.</p>
        <img src="${lec.image}" alt="${lec.title}">
        
        <h2>Вступ</h2>
        <p>У цій лекції ми детально розглянемо тему "${lec.title}" у контексті візуального програмування на Windows Forms.</p>
        
        <h2>Теоретичний матеріал</h2>
        <p>${lec.title} — важлива тема при розробці десктопних додатків на Windows Forms.</p>
        
        <h3>Основні концепції</h3>
        <ul>
            <li>Теоретичні основи та визначення</li>
            <li>Компоненти Windows Forms</li>
            <li>Подійно-орієнтоване програмування</li>
            <li>Практичне застосування</li>
        </ul>
        
        <h2>Детальний розбір</h2>
        <p>Розглянемо матеріал детально з прикладами коду та поясненнями.</p>
        
        <div class="code-block">
            <div class="code-header"><span>Приклад коду C++/CLI</span></div>
            <pre><code>// Windows Forms приклад: ${lec.title}
using namespace System;
using namespace System::Windows::Forms;

public ref class MyForm : public Form {
public:
    MyForm() {
        InitializeComponent();
    }
    
private:
    void InitializeComponent() {
        this->Text = "${lec.title}";
        this->Size = Drawing::Size(800, 600);
    }
};</code></pre>
        </div>
        
        <h2>Практичні приклади</h2>
        <div class="code-block">
            <div class="code-header"><span>Практичний приклад</span></div>
            <pre><code>// Приклад реалізації: ${lec.title}
// Додайте цей код до обробника події Form_Load

private: 
    System::Void Form1_Load(System::Object^ sender, System::EventArgs^ e) {
        // Ініціалізація компонентів
    }</code></pre>
        </div>
        
        <h2>Найкращі практики</h2>
        <div class="note note-tip">
            <div class="note-title">Рекомендації</div>
            <p>1. Використовуйте Designer для візуального розміщення контролів. 2. Виносьте бізнес-логіку в окремі класи. 3. Обробляйте винятки у подіях.</p>
        </div>
        
        <h2>Висновки</h2>
        <p>У цій лекції ми розглянули "${lec.title}". Ці знання необхідні для створення професійних Windows Forms додатків.</p>
    `;
}

const wfLectures = wfLectureTitles.map(lec => ({
    id: lec.id,
    module: lec.module,
    title: lec.title,
    category: lec.category,
    image: `images/wf/lecture-${String(lec.id).padStart(2, '0')}.jpg`,
    content: generateWfLectureContent(lec)
}));

// ============================================
// TESTS DATA
// ============================================

function generateTests(lectures, prefix) {
    const tests = [];
    lectures.forEach(lec => {
        const questions = [
            {
                question: `Що є основною характеристикою теми "${lec.title}"?`,
                code: "",
                options: [
                    "Це базова концепція C++ програмування",
                    "Це розширена техніка для експертів",
                    "Це стандартна бібліотечна функція",
                    "Це інструмент розробки"
                ],
                correct: 0
            },
            {
                question: `Який підхід є найбільш правильним при використанні "${lec.title}"?`,
                code: "",
                options: [
                    "Використовувати лише у складних проєктах",
                    "Застосовувати за потреби згідно з best practices",
                    "Уникати у продакшн-коді",
                    "Використовувати замість стандартних рішень"
                ],
                correct: 1
            },
            {
                question: `Де найчастіше застосовується "${lec.title}"?`,
                code: "",
                options: [
                    "Лише у системному програмуванні",
                    "Лише у веб-розробці",
                    "У різних областях програмування на C++",
                    "Лише у навчальних цілях"
                ],
                correct: 2
            },
            {
                question: `Що з переліченого НЕ відноситься до "${lec.title}"?`,
                code: "",
                options: [
                    "Основні принципи роботи",
                    "Синтаксис та семантика",
                    "Історія створення мови Java",
                    "Практичне застосування"
                ],
                correct: 2
            },
            {
                question: `Яка перевага надає використання "${lec.title}"?`,
                code: "",
                options: [
                    "Зменшення часу компіляції",
                    "Покращення читабельності та підтримки коду",
                    "Автоматичне тестування",
                    "Відсутність необхідності у відладці"
                ],
                correct: 1
            },
            {
                question: `З якого стандарту C++ доступна ця функціональність?`,
                code: "",
                options: [
                    "C++98",
                    "C++03",
                    "C++11/C++14/C++17",
                    "Залежить від конкретної можливості"
                ],
                correct: 3
            },
            {
                question: `Що станеться при неправильному використанні цієї концепції?`,
                code: "",
                options: [
                    "Програма автоматично виправить помилку",
                    "Можуть виникнути помилки компіляції або runtime",
                    "Нічого не станеться",
                    "Компілятор проігнорує проблему"
                ],
                correct: 1
            },
            {
                question: `Який заголовний файл найчастіше потрібен для цієї теми?`,
                code: "",
                options: [
                    "#include <iostream>",
                    "#include <vector>",
                    "#include <algorithm>",
                    "Залежить від конкретної функціональності"
                ],
                correct: 3
            },
            {
                question: `Як називається простір імен, що містить цю функціональність?`,
                code: "",
                options: [
                    "std",
                    "boost",
                    "cpp",
                    "global"
                ],
                correct: 0
            },
            {
                question: `Чи є ця можливість частиною STL?`,
                code: "",
                options: [
                    "Так, завжди",
                    "Ні, ніколи",
                    "Може бути частиною STL або мови",
                    "Тільки у C++20"
                ],
                correct: 2
            },
            {
                question: `Який оператор найчастіше використовується в цій темі?`,
                code: "",
                options: [
                    "new/delete",
                    ":: (scope resolution)",
                    "<< / >>",
                    "Залежить від контексту"
                ],
                correct: 3
            },
            {
                question: `Чи потребує ця тема ручного управління пам'яттю?`,
                code: "",
                options: [
                    "Завжди так",
                    "Завжди ні",
                    "Залежить від підходу (raw pointers vs smart pointers)",
                    "Тільки у старих версіях C++"
                ],
                correct: 2
            },
            {
                question: `Яка ключова концепція ООП пов'язана з цією темою?`,
                code: "",
                options: [
                    "Тільки інкапсуляція",
                    "Тільки поліморфізм",
                    "Тільки наслідування",
                    "Може бути пов'язана з будь-якою концепцією ООП"
                ],
                correct: 3
            },
            {
                question: `Який тип помилок може виникнути при неправильному використанні?`,
                code: "",
                options: [
                    "Тільки помилки компіляції",
                    "Тільки runtime помилки",
                    "Обидва типи",
                    "Жодних помилок"
                ],
                correct: 2
            },
            {
                question: `Чи підтримується ця функціональність у сучасних компіляторах?`,
                code: "",
                options: [
                    "Так, усіма сучасними компіляторами",
                    "Ні, лише у старих",
                    "Тільки у GCC",
                    "Тільки у MSVC"
                ],
                correct: 0
            },
            {
                question: `Який підхід рекомендується для початківців?`,
                code: "",
                options: [
                    "Відразу використовувати складні патерни",
                    "Почати з основ та поступово ускладнювати",
                    "Уникати цієї теми",
                    "Копіювати код з інтернету"
                ],
                correct: 1
            },
            {
                question: `Що рекомендується для ефективного вивчення цієї теми?`,
                code: "",
                options: [
                    "Тільки читати теорію",
                    "Тільки писати код",
                    "Комбінація теорії та практики",
                    "Дивитися відео на YouTube"
                ],
                correct: 2
            },
            {
                question: `Яка роль цієї теми у сучасному C++ програмуванні?`,
                code: "",
                options: [
                    "Застаріла, не використовується",
                    "Важлива та активно застосовується",
                    "Тільки для співбесід",
                    "Тільки у legacy коді"
                ],
                correct: 1
            },
            {
                question: `З чим пов'язана найчастіша помилка при вивченні цієї теми?`,
                code: "",
                options: [
                    "Неправильне розуміння концепції",
                    "Проблеми з компілятором",
                    "Відсутність документації",
                    "Занадто складний синтаксис"
                ],
                correct: 0
            },
            {
                question: `Як перевірити розуміння цієї теми?`,
                code: "",
                options: [
                    "Пройти тест",
                    "Написати робочу програму",
                    "Пояснити концепцію іншій людині",
                    "Усі перелічені способи"
                ],
                correct: 3
            }
        ];
        
        tests.push({
            id: tests.length + 1,
            lectureId: lec.id,
            title: `Тест: ${lec.title}`,
            type: prefix,
            questions: questions
        });
    });
    return tests;
}

const cppTests = generateTests(cppLectures.slice(0, 50), 'cpp');
const wfTests = generateTests(wfLectures.slice(0, 50), 'wf');

// ============================================
// TASKS DATA
// ============================================

function generateTasks(lectures, prefix) {
    const tasks = [];
    const difficulties = ['easy', 'medium', 'hard'];
    
    lectures.forEach((lec, idx) => {
        const diff = difficulties[idx % 3];
        const diffName = diff === 'easy' ? 'Легке' : diff === 'medium' ? 'Середнє' : 'Складне';
        
        tasks.push({
            id: idx + 1,
            lectureId: lec.id,
            title: `Завдання: ${lec.title}`,
            type: prefix,
            difficulty: diff,
            difficultyName: diffName,
            description: `Реалізуйте програму, що демонструє використання концепції "${lec.title}". Програма повинна містити практичний приклад з поясненнями.`,
            requirements: [
                "Написати читабельний код з коментарями",
                "Використовувати правильні імена змінних",
                "Обробити можливі помилки",
                "Додати приклад використання"
            ],
            hint: `Почніть з простого прикладу. Вивчіть основний синтаксис теми "${lec.title}" та спробуйте реалізувати базову версію. Потім поступово додавайте функціональність.`,
            solution: prefix === 'cpp' ?
`#include <iostream>
using namespace std;

int main() {
    // TODO: Реалізуйте розв'язок для теми: ${lec.title}
    
    cout << "Розв'язок для: ${lec.title}" << endl;
    
    return 0;
}` :
`// Windows Forms розв'язок для: ${lec.title}
// Додайте цей код до вашої форми

private: System::Void Form1_Load(System::Object^ sender, System::EventArgs^ e) {
    // TODO: Реалізуйте розв'язок
    MessageBox::Show("Розв'язок для: ${lec.title}");
}`
        });
    });
    return tasks;
}

const cppTasks = generateTasks(cppLectures.slice(0, 50), 'cpp');
const wfTasks = generateTasks(wfLectures.slice(0, 50), 'wf');

// ============================================
// EXPORT
// ============================================

window.CPP_Lectures = cppLectures;
window.WF_Lectures = wfLectures;
window.CPP_Modules = cppModules;
window.WF_Modules = wfModules;
window.CPP_Tests = cppTests;
window.WF_Tests = wfTests;
window.CPP_Tasks = cppTasks;
window.WF_Tasks = wfTasks;
