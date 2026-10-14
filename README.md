# Garmin MARQ Gen 3 — шість банерів та SEO-адреса

Опублікована адреса: https://lizikosh.github.io/garmin-marq-gen3/

## Файли, які потрібно додати або замінити у корені GitHub-репозиторію

- `index.html` — canonical, Open Graph, Twitter Card, JSON-LD URL і шлях першого банера.
- `script.js` — шість окремих WebP-зображень слайдера відповідно до моделей, попередні PNG у картках та модальних вікнах без змін.
- `styles.css` — банери тепер показуються без нахилу й обрізання (`object-fit: contain`).
- `sitemap.xml` — карта сайту із канонічною адресою.

`favicon.svg` залишився незмінним і потрібний, лише якщо його немає в репозиторії.

## Шляхи до шести банерів (зображення не включені в архів)

Файли лежать у папці `assets/` і відображаються в порядку моделей у слайдері:

1. `adventurer-slider.webp`
2. `athlete-slider.webp`
3. `aviator-slider.webp`
4. `commander-slider.webp`
5. `diver-slider.webp`
6. `golfer-slider.webp`

Зображення годинників у картках і модальних вікнах залишаються PNG `*-Photoroom.png`.
Інтервал слайдера — 6,5 секунди. Якщо файл відсутній, показується резервний PNG.
Назви файлів чутливі до регістру.

## SEO

Для адреси сайту додано `canonical`, `og:url`, `og:image`, `twitter:image`, `CollectionPage.url` та `sitemap.xml`. Зображення соцмереж використовує перший іміджевий банер — файл має існувати за адресою `https://lizikosh.github.io/garmin-marq-gen3/assets/adventurer-slider.webp`.

`robots.txt` у папці проєкту не доданий: для GitHub Pages у підкаталозі `/garmin-marq-gen3/` пошукові роботи шукають `robots.txt` у корені домену (`https://lizikosh.github.io/robots.txt`), а не у корені репозиторію проєкту.

Живий сайт і наявність банерів у GitHub репозиторії з цього середовища перевірити не вдалося. Після публікації відкрийте усі шість URL зображень та сайт в інкогніто; для Search Console подайте `sitemap.xml`.
