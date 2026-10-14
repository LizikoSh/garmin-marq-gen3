# Garmin MARQ Gen 3 — шість банерів та SEO-адреса

Опублікована адреса: https://lizikosh.github.io/garmin-marq-gen3/

## Файли, які потрібно додати або замінити у корені GitHub-репозиторію

- `index.html` — canonical, Open Graph, Twitter Card, JSON-LD URL і шлях першого банера.
- `script.js` — шість окремих WebP-зображень слайдера, попередні PNG у картках та модальних вікнах без змін.
- `styles.css` — банери тепер показуються без нахилу й обрізання (`object-fit: contain`).
- `sitemap.xml` — карта сайту із канонічною адресою.

`favicon.svg` залишився незмінним і потрібний, лише якщо його немає в репозиторії.

## Шляхи до банерів (зображення не включені в архів)

| Модель | Файл у папці `assets/` |
|---|---|
| Adventurer | `garmin-marq-3-adventurer-banner-slider.webp` |
| Athlete | `garmin-marq-3-athlete-banner-slider.webp` |
| Aviator | `garmin-marq-3-aviator-banner-slider.webp` |
| Commander | `garmin-marq-3-commander-banner-slider.webp` |
| Diver | `garmin-marq-3-diver-banner-slider.webp` |
| Golfer | `garmin-marq-3-golfer-banner-slider.webp` |

Слайдер автоматично перемикає модель кожні 6,5 секунд. Якщо банер відсутній, тимчасово використовується відповідний `*-Photoroom.png`. Назви файлів чутливі до регістру.

## SEO

Для адреси сайту додано `canonical`, `og:url`, `og:image`, `twitter:image`, `CollectionPage.url` та `sitemap.xml`. Зображення соцмереж використовує перший банер Adventurer — файл має існувати за адресою `https://lizikosh.github.io/garmin-marq-gen3/assets/garmin-marq-3-adventurer-banner-slider.webp`.

`robots.txt` у папці проєкту не доданий: для GitHub Pages у підкаталозі `/garmin-marq-gen3/` пошукові роботи шукають `robots.txt` у корені домену (`https://lizikosh.github.io/robots.txt`), а не у корені репозиторію проєкту.

Живий сайт і наявність банерів у GitHub репозиторії з цього середовища перевірити не вдалося. Після публікації відкрийте усі шість URL зображень та сайт в інкогніто; для Search Console подайте `sitemap.xml`.
