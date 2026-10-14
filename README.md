# Garmin MARQ Gen 3 — нові назви PNG-зображень

Помістіть файли `index.html` і `script.js` у корінь вашого репозиторію `garmin-marq-gen3` замість попередніх. `styles.css` не змінено.

У репозиторії має бути папка `assets` з такими файлами (регістр літер важливий):

- assets/adventurer-Photoroom.png
- assets/athlete-Photoroom.png
- assets/aviator-Photoroom.png
- assets/commander-Photoroom.png
- assets/diver-Photoroom.png
- assets/golf-Photoroom.png

Зверніть увагу: назва моделі `golfer` в JavaScript, але назва файлу — саме `golf-Photoroom.png`.

HTML використовує PNG у головному банері Athlete й нижньому банері Diver. Усі картки, модальні вікна та результати пошуку беруть зображення через `productImage(model)`.

Фотографії PNG **не входять** до архіву, оскільки надано лише їхні назви, а не самі файли. 
