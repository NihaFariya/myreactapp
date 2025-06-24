import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  articles = [
{
"source": {
"id": null,
"name": "Android Central"
},
"author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda) , Harish Jonnalagadda",
"title": "Why wait for Prime Day? My favorite headphones are already down to their lowest price",
"description": "Need an audio upgrade but don't like to wait? The AirPods Max are back down to $479.",
"url": "https://www.androidcentral.com/accessories/audio/why-wait-for-prime-day-my-favorite-headphones-are-already-down-to-their-lowest-price",
"urlToImage": "https://cdn.mos.cms.futurecdn.net/X3LoywcyH2MGiGE4Jy4yPW.jpg",
"publishedAt": "2025-06-21T01:56:06Z",
"content": "I started using the AirPods Max nearly a year ago, and they've been incredible. They sound much better than I imagined, the connectivity is rock-solid, and they have the best isolation of any product… [+2058 chars]"
},
{
"source": {
"id": null,
"name": "Slashdot.org"
},
"author": "BeauHD",
"title": "Apple Adds Energy and Battery Labels To iPhone and iPad Pages In EU",
"description": "An anonymous reader quotes a report from MacRumors: To comply with a new regulation that takes effect today, Apple has added an energy efficiency label to its iPhone and iPad pages in EU countries. Apple is also required to start including a printed version o…",
"url": "https://mobile.slashdot.org/story/25/06/20/2034241/apple-adds-energy-and-battery-labels-to-iphone-and-ipad-pages-in-eu",
"urlToImage": "https://a.fsdn.com/sd/topics/iphone_64.png",
"publishedAt": "2025-06-21T01:30:00Z",
"content": "To comply with a new regulation that takes effect today, Apple has added an energy efficiency label to its iPhone and iPad pages in EU countries. Apple is also required to start including a printed v… [+1643 chars]"
},
{
"source": {
"id": null,
"name": "Xataka.com"
},
"author": "Alberto García",
"title": "Yellows Days de El Corte Inglés: cinco ofertas en móviles, ordenadores y más para aprovechar las rebajas durante el fin de semana",
"description": "El Corte Inglés ha dado comienzo a una nueva campaña denominada Yellow Days. En ella podemos encontrar algún que otro chollo, sobre todo en lo relacionado a móviles de gama alta. Eso sí, aunque ya han dado comienzo y estarán disponibles durante todo el fin de…",
"url": "https://www.xataka.com/seleccion/yellows-days-corte-ingles-cinco-ofertas-moviles-ordenadores-para-aprovechar-rebajas-durante-fin-semana",
"urlToImage": "https://i.blogs.es/6b8204/el-corte-ingles/840_560.jpeg",
"publishedAt": "2025-06-21T08:31:09Z",
"content": "El Corte Inglés ha dado comienzo a una nueva campaña denominada Yellow Days. En ella podemos encontrar algún que otro chollo, sobre todo en lo relacionado a móviles de gama alta. Eso sí, aunque ya ha… [+3896 chars]"
},
{
"source": {
"id": null,
"name": "Gizmodo.jp"
},
"author": "はらいさん",
"title": "新ローマ教皇がつけてるApple Watch、どの文字盤か予想してみた",
"description": "Image:Shutterstock正直、めっちゃ気になります。新ローマ教皇として選出されたレオ14世は初のアメリカ出身の教皇としても大きな話題を集めましたが、実は最近あることでも注目を受けています。それは、教皇が身につけてる時計について。9to5Macはレオ14世がスマートウォッチのAppleWatchをつけて初の公式ミサに参加したと先月報道しましたが、その段階では裾からチラリと見える程度でハッ",
"url": "https://www.gizmodo.jp/2025/06/pope-wears-apple-watch.html",
"urlToImage": "https://media.loom-app.com/gizmodo/dist/images/2025/06/20/shutterstock_2624856965.jpg?w=1280&h=630&f=jpg",
"publishedAt": "2025-06-21T02:00:00Z",
"content": "14\r\n9to5Mac14Apple WatchApple Watch\r\n14Apple Watch\r\nApple Watch\r\n20248Apple Watch\r\nImage: \r\nwatchOS 9...\r\nPope Leo XIV meets with US Vice-President JD Vance. \r\nThe Holy See Press Office announced tha… [+396 chars]"
},
{
"source": {
"id": null,
"name": "Presse-citron"
},
"author": "Presse-citron",
"title": "L’incroyable histoire de cet iPod « top secret » créé par le gouvernement américain",
"description": "Un récit pour le moins intriguant sur cet appareil phare d’Apple.",
"url": "https://www.presse-citron.net/lincroyable-histoire-de-cet-ipod-top-secret-cree-par-le-gouvernement-americain/",
"urlToImage": "https://www.presse-citron.net/app/uploads/2025/06/iPod-1600x900.jpg",
"publishedAt": "2025-06-21T05:45:08Z",
"content": "Le week-end est le moment idéal pour donner un coup dil dans le rétroviseur et revenir sur des légendes qui ont marqué lhistoire de la Tech. En la matière, cette histoire datant de 2005 et qui concer… [+2355 chars]"
},
{
"source": {
"id": null,
"name": "Xataka Android"
},
"author": "Eduardo Marín",
"title": "WhatsApp se está llenando de inteligencia artificial: la IA de Meta nos ayudará a escribir mensajes",
"description": "WhatsApp está cambiando, y no nos referimos solamente a los anuncios que llegarán a la plataforma (aunque tardarán más en llegar en Europa), sino a las funciones de inteligencia artificial que WhatsApp ha estado sumando, de la mano de Meta AI.\n<!-- BREAK 1 --…",
"url": "https://www.xatakandroid.com/comunicacion-y-mensajeria/whatsapp-se-esta-llenando-inteligencia-artificial-ia-meta-nos-ayudara-a-escribir-mensajes",
"urlToImage": "https://i.blogs.es/29e0ef/whatsapp-ia/840_560.jpeg",
"publishedAt": "2025-06-21T07:01:08Z",
"content": "WhatsApp está cambiando, y no nos referimos solamente a los anuncios que llegarán a la plataforma (aunque tardarán más en llegar en Europa), sino a las funciones de inteligencia artificial que WhatsA… [+2254 chars]"
},
{
"source": {
"id": null,
"name": "Android Authority"
},
"author": "Edgar Cervantes",
"title": "This 32-inch Insignia Fire TV is only $69.99! (Record-low price)",
"description": "Why is this Insignia TV Amazon's top-selling television? Well, it is very affordable, especially right now.",
"url": "https://www.androidauthority.com/insignia-32-inch-f20-series-amazon-smart-tv-deal-3569725/",
"urlToImage": "https://www.androidauthority.com/wp-content/uploads/2025/06/Insignia-32-Inch-F20-Series-Amazon-Smart-TV.jpg",
"publishedAt": "2025-06-21T00:44:29Z",
"content": "This offer is available from Amazon, but since Insignia is a Best Buy brand, it is shipped and sold by Best Buy. Were referring to the 32-inch model, but the 24-inch version costs the same, so you ca… [+1160 chars]"
},
{
"source": {
"id": null,
"name": "Les Numériques"
},
"author": "Rick",
"title": "Actualité : Bon plan – Les écouteurs sans fil Apple AirPods Pro 2 Avec boîtier USB-C \"5 étoiles\" à 219,00 €",
"description": "Les écouteurs sans fil Apple AirPods Pro 2 Avec boîtier USB-C sont proposés à 219,00 € chez Electro Depot. C'est actuellement le meilleur produit de notre comparatif.",
"url": "https://www.lesnumeriques.com/ecouteurs-sans-fil/bon-plan-les-ecouteurs-sans-fil-apple-airpods-pro-2-avec-boitier-usb-c-5-etoiles-a-219-00-n238401.html",
"urlToImage": "https://cdn.lesnumeriques.com/optim/test/19/192675/b5877a08-apple-airpods-pro-2e-generation-c-est-de-la-balle__1200_678__0-51-2560-1395_wtmk.jpeg",
"publishedAt": "2025-06-21T06:33:02Z",
"content": "Modèle concernéCe contenu porte spécifiquement sur le modèle : Avec boîtier USB-C. D'autres déclinaisons existent et leurs prix sont indiqués dans les onglets du tableau ci-dessous.\r\nLes AirPods Pro … [+2246 chars]"
},
{
"source": {
"id": null,
"name": "Xatakamovil.com"
},
"author": "Sergio Asenjo",
"title": "Hace años China estaba llena de Apple Store falsas. Estaban tan bien hechas que incluso sus empleados pensaban que trabajaban para Apple",
"description": "Ya hemos hablado con anterioridad acerca de la trayectoria de Apple en China, un mercado muy importante para la compañía estadounidense. De hecho, recientemente hablábamos acerca de la estrategia de descuentos por la que la compañía estadounidense está aposta…",
"url": "https://www.xatakamovil.com/apple/hace-anos-china-estaba-llena-apple-store-falsas-estaban-bien-hechas-que-incluso-sus-empleados-pensaban-que-trabajaban-para-apple-1",
"urlToImage": "https://i.blogs.es/874a97/apple/840_560.jpeg",
"publishedAt": "2025-06-21T06:01:08Z",
"content": "Ya hemos hablado con anterioridad acerca de la trayectoria de Apple en China, un mercado muy importante para la compañía estadounidense. De hecho, recientemente hablábamos acerca de la estrategia de … [+2664 chars]"
},
{
"source": {
"id": null,
"name": "Enriquedans.com"
},
"author": "Enrique Dans",
"title": "Hablando sobre Apple y la Unión Europea en FOX News",
"description": "Jonah Blocker, productor para The FOX News Rundown, me contactó para hablar con Taylor Riggs sobre Apple y la regulación de la Unión Europea, tras haber leído este artículo en el que hablaba del tema.  Básicamente, intenté explicar el problema de intentar reg…",
"url": "https://www.enriquedans.com/2025/06/hablando-sobre-apple-y-la-union-europea-en-fox-news.html",
"urlToImage": "https://www.enriquedans.com/wp-content/uploads/2025/06/Apple-and-EU-FOX.jpg",
"publishedAt": "2025-06-21T06:37:39Z",
"content": "Jonah Blocker, productor para The FOX News Rundown, me contactó para hablar con Taylor Riggs sobre Apple y la regulación de la Unión Europea, tras haber leído este artículo en el que hablaba del tema… [+3435 chars]"
},
{
"source": {
"id": null,
"name": "Frandroid"
},
"author": "Juliette Rivière",
"title": "Quels sont les meilleurs écouteurs ouverts à choisir en 2025 ?",
"description": "Tout le monde ne veut pas d'écouteurs intra-auriculaires. Que cela soit pour une question de confort ou encore pour la pratique du sport, voici les meilleurs modèles d'écouteurs ouverts que l'on vous conseille.",
"url": "https://www.frandroid.com/guide-dachat/2643597_quels-sont-les-meilleurs-ecouteurs-ouverts",
"urlToImage": "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2025/06/guide-dachat-ecouteurs-ouverts-2025.jpg?resize=1600,900&key=fcfe8fd8&watermark",
"publishedAt": "2025-06-21T08:00:00Z",
"content": "Tout le monde ne veut pas d’écouteurs intra-auriculaires. Que cela soit pour une question de confort ou encore pour la pratique du sport, voici les meilleurs modèles d’écouteurs ouverts que l’on vous… [+9144 chars]"
},
{
"source": {
"id": null,
"name": "Netzpolitik.org"
},
"author": "Lilly Pursch, Martin Schwarzbeck",
"title": "Repaircafés: Das ist doch noch gut!",
"description": "Bernd und Olaf sinnieren über die Reparatur eines Geräts zur Kniemobilisierung. – Alle Rechte vorbehalten netzpolitik.org\r\nIn Repaircafés reparieren Ehrenamtliche defekte Dinge. Sie basteln damit an einer Alternative zur Wegwerfgesellschaft. Aber Repaircafés …",
"url": "https://netzpolitik.org/2025/repaircafes-das-ist-doch-noch-gut/",
"urlToImage": "https://cdn.netzpolitik.org/wp-upload/2025/06/signal-2025-06-19-184530-e1750352950938-1200x675.jpeg",
"publishedAt": "2025-06-21T06:00:09Z",
"content": "Christiane hat ein Problem. Sie hat sich für 550 Euro einen Apparat gekauft, der ihr frisch operiertes Knie mobilisieren soll. Doch das Gerät kam kaputt bei ihr an. Christiane hat es in ein Repaircaf… [+11619 chars]"
},
{
"source": {
"id": null,
"name": "Creative Bloq"
},
"author": "joe.foley@futurenet.com (Joe Foley) , Joe Foley",
"title": "Do circles really make a logo design better?",
"description": "This debate won't go away.",
"url": "https://www.creativebloq.com/design/graphic-design/do-circles-really-make-a-logo-design-any-better",
"urlToImage": "https://cdn.mos.cms.futurecdn.net/pamtZBSBXTt2zTwf2QGVpB.jpg",
"publishedAt": "2025-06-21T07:00:00Z",
"content": "Circles are beautiful. Their combination of symmetry and round edges recalls the shape of the Earth, the sun, the solar system, and even the cycle of life itself. No wonder they've appealed to artist… [+4549 chars]"
},
{
"source": {
"id": null,
"name": "Andro4all.com"
},
"author": "Mauro Minichiello",
"title": "7 \"novedades\" de iOS 26 que ya estaban en Android",
"description": "Apple presentó en la WWDC 2025 su nuevo sistema operativo móvil, ¿cuál? Pues ni más ni menos que iOS 26. Si bien llega con un rediseño total y varias funciones impulsadas por inteligencia artificial, muchas de esas novedades no son tan nuevas, al menos para l…",
"url": "https://andro4all.com/android/7-novedades-de-ios-26-que-ya-estaban-en-android",
"urlToImage": "https://andro4all.com/hero/2025/06/7-novedades-de-ios-26-que-ya-estaban-en-android.jpg?width=1200",
"publishedAt": "2025-06-21T00:00:36Z",
"content": "iOS 26 trae novedades llamativas que los usuarios de Android ya conocen muy bien\r\nApple presentó en la WWDC 2025 su nuevo sistema operativo móvil, ¿cuál? Pues ni más ni menos que iOS 26. Si bien lleg… [+4481 chars]"
},
{
"source": {
"id": null,
"name": "Andro4all.com"
},
"author": "JuanMi Guirado",
"title": "Amazon vuelve a destrozar el mercado: 4 meses de música ilimitada para ti y tu familia",
"description": "Seguro que eres muy de escuchar música en cualquier lugar, bien sea con los auriculares en el metro o el bus, o bien con tus altavoces en casa. Se acerca el Prime Day (8 a 11 de julio) y Amazon esta ofreciendo algunas de sus clásicas ofertas en los servicios.…",
"url": "https://andro4all.com/ofertas/amazon-vuelve-a-destrozar-el-mercado-4-meses-de-musica-ilimitada-para-ti-y-tu-familia",
"urlToImage": "https://andro4all.com/hero/2025/06/music-unlimited.1750405849.4732.jpg?width=1200",
"publishedAt": "2025-06-21T02:30:59Z",
"content": "Escucha más de 100 millones de temas musicales y podcasts con la mejor calidad posible desde tu móvil, tu Echo o tu ordenador\r\nSeguro que eres muy de escuchar música en cualquier lugar, bien sea con … [+3807 chars]"
},
{
"source": {
"id": null,
"name": "Nextpit.de"
},
"author": "Carsten Drees",
"title": "Schnell sein! Diese Apps für iOS & Android sind nur kurz kostenlos",
"description": "Wir haben zum Wochenende das Netz für Euch durchstöbert und dabei Apps & Spiele für Android-Handys und iPhones aufgetrieben, die nur kurz gratis sind.",
"url": "https://www.nextpit.de/news/kostenlose-apps-2025-02-25",
"urlToImage": "https://fs.npstatic.com/userfiles/1799474/file/Free-Apps-of-the-week_shutterstock_2256479479-w1400h788.jpg",
"publishedAt": "2025-06-21T08:00:00Z",
"content": "Im Gegensatz zu unseren \"Top 5 Apps der Woche\", wo wir die Apps bedacht kuratieren, läuft das hier ein bisschen anders. Statt alles zu prüfen und zu testen, haben wir diese Anwendungen und Games schl… [+4865 chars]"
},
{
"source": {
"id": null,
"name": "Techbang.com"
},
"author": "cnBeta",
"title": "Satechi為M4 Mac Mini量身打造USB 4 SSD擴充盒，最高支援8TB儲存",
"description": "M4 Mac Mini儲存空間不足？Satechi推出USB 4 NVMe SSD擴充盒，完美疊合Mac Mini，高速傳輸滿足需求。擴充盒支援USB 4，輕鬆擴充儲存空間。隨著配備M4晶片的新款Mac Mini話題持續升溫，越來越多開發者與使用者選擇將其作為軟體路由器、NAS伺服器，或日常工作主機使用。不過Apple一如既往將內建記憶體與SSD訂價拉得相當高，因此不少人選擇購買基礎版本，再自行擴充儲存空間。\n知名周邊品牌Satechi近日針對M4版Mac Mini推出全新USB 4 NVMe SSD硬碟擴充盒，…",
"url": "https://www.techbang.com/posts/123873-satechi-usb4-ssd-mac-mini-enclosure",
"urlToImage": "https://cdn2.techbang.com/system/excerpt_images/123873/original/f259b1de71c4502fe5e6bd9125682fbd.jpeg?1750322619",
"publishedAt": "2025-06-21T07:30:00Z",
"content": "M4Mac MiniNASAppleSSD\r\nSatechiM4Mac MiniUSB 4 NVMe SSD8TBMac Mini\r\nUSB 4\r\nUSB-CMac MiniUSB 440GbpsSatechiMac Mini80SSD\r\nSatechi USB 4 NVMe SSD119.993,900LIMITED2099.993,250NVMe SSD8TB\r\nM4 Mac MiniUSB… [+25 chars]"
},
{
"source": {
"id": "techradar",
"name": "TechRadar"
},
"author": "hamish.hector@futurenet.com (Hamish Hector) , Hamish Hector",
"title": "ICYMI: the week's 7 biggest tech news stories from Oakley's next-gen smart glasses to our first week with Alexa+",
"description": "The past week's biggest tech news from Trump Mobile, Oakley, Meta, Amazon, and more.",
"url": "https://www.techradar.com/tech/icymi-the-weeks-7-biggest-tech-news-stories-from-oakleys-next-gen-smart-glasses-to-our-first-week-with-alexa",
"urlToImage": "https://cdn.mos.cms.futurecdn.net/aoiXDLUz8mnBKJRgLRoYQ7.png",
"publishedAt": "2025-06-21T07:00:00Z",
"content": "This week, Oakley and Meta finally revealed their smart glasses (and they look kinda awesome), we published our Nintendo Switch 2 review (it's great, but not perfect), and Donald Trump launched a mob… [+6577 chars]"
},
{
"source": {
"id": "cbc-news",
"name": "CBC News"
},
"author": null,
"title": "Billions of login credentials may have leaked. Here's how you can protect your accounts",
"description": "A recent report by Cybernews claimed that 16 billion login credentials were exposed and compiled into datasets online, giving cybercriminals access to accounts for online platforms like Google, Apple and Facebook. While much is still unconfirmed about the lea…",
"url": "https://www.cbc.ca/news/business/login-credentials-leak-password-protection-1.7567621",
"urlToImage": "https://i.cbc.ca/1.2729020.1490384456!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_1180/computer-passwords.jpg?im=Resize%3D620",
"publishedAt": "2025-06-21T01:26:31Z",
"content": "A report that independent cybersecurity news outlet Cybernews published on Wednesday claimed 16 billion login credentials were exposed\r\n and compiled into datasets online, giving cybercriminals acces… [+3687 chars]"
},
{
"source": {
"id": null,
"name": "Forbes"
},
"author": "David Phelan, Senior Contributor, \n David Phelan, Senior Contributor\n https://www.forbes.com/sites/davidphelan/",
"title": "iOS 26: Apple’s Latest iPhone Update Has A Secret New Extra",
"description": "There’s something hiding in the code for Apple’s next iPhone software.",
"url": "https://www.forbes.com/sites/davidphelan/2025/06/20/ios-26-apples-latest-iphone-update-has-a-secret-new-extra-iphone-17/",
"urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66486b007d11c61341e2d7a1/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
"publishedAt": "2025-06-21T08:00:00Z",
"content": "The next iPhone will come pre-loaded with the companys latest operating software, iOS 26 (thats right, its not called iOS 19). Right now, that software is in early developer beta, after an unpreceden… [+1909 chars]"
},
{
"source": {
"id": null,
"name": "Hdblog.it"
},
"author": "HDblog.it",
"title": "TikTok, fumata grigia: Trump concede altri 90 giorni",
"description": "Trump concede altri 90 giorni a TikTok, ma Apple e Google rischiano sanzioni per la legge sul ban",
"url": "https://www.hdblog.it/mercato/articoli/n622670/tiktok-salvo-usa-rischio-legale-cresce/",
"urlToImage": "https://hd2.tudocdn.net/1216748?w=1920",
"publishedAt": "2025-06-21T07:05:00Z",
"content": "Ancora tempo per TikTok. Il social network più discusso degli ultimi anni ottiene una nuova, inaspettata, boccata d'ossigeno negli Stati Uniti. Il presidente Donald Trump ha infatti firmato un ordine… [+2854 chars]"
},
{
"source": {
"id": null,
"name": "Tinhte.vn"
},
"author": "no-reply@tinhte.vn (Pnghuy), Pnghuy",
"title": "Meta ra mắt kính thông minh kết hợp với Oakley: quay video 3K, tích hợp Meta AI, giá từ 399 USD",
"description": "Oakley Meta HSTN là sản phẩm được Meta hợp tác với Oakley, một thương hiệu kính mắt nổi tiếng thuộc tập đoàn EssilorLuxottica. Đây là dòng kính thông minh “Performance AI” được thiết kế đặc biệt dành cho các vận động viên và những người yêu thích…",
"url": "https://tinhte.vn/thread/meta-ra-mat-kinh-thong-minh-ket-hop-voi-oakley-quay-video-3k-tich-hop-meta-ai-gia-tu-399-usd.4029230/",
"urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2025/06/8761954_cover-Oakley-Meta-HSTN-Mbappe.jpeg",
"publishedAt": "2025-06-21T05:06:58Z",
"content": "Chic kính này có kh nng kháng nc IPX4, chu c m hôi, ma nh và tia nc bn, phù hp cho các hot ng ngoài tri.\r\nKính h tr kt ni Bluetooth 5.4, tng thích vi iPhone 10+/iOS 15.2+ và Android 10+. Ngi dùng có … [+475 chars]"
},
{
"source": {
"id": null,
"name": "Tinhte.vn"
},
"author": "no-reply@tinhte.vn (P.W), P.W",
"title": "Ông Trump gia hạn lần thứ 3 để TikTok tiếp tục vận hành ở Mỹ. Kịch bản giờ sẽ ra sao?",
"description": "Một trong những hành động đầu tiên mà tổng thống Donald Trump thực hiện khi bắt đầu nhiệm kỳ thứ hai là ký và ban hành lệnh hành pháp, trì hoãn việc cấm TikTok. Hai tháng rưỡi sau đó, ông lại ban một lệnh trì hoãn lần thứ hai và vào ngày 18/6…",
"url": "https://tinhte.vn/thread/ong-trump-gia-han-lan-thu-3-de-tiktok-tiep-tuc-van-hanh-o-my-kich-ban-gio-se-ra-sao.4029110/",
"urlToImage": "https://photo2.tinhte.vn/data/attachment-files/2025/06/8761561_screen-shot-2025-06-20-at-111526-1116.webp",
"publishedAt": "2025-06-21T02:21:49Z",
"content": "Lnh hành pháp u tiên ca ông Trump, c ký ngay sau khi nhm chc, ã kéo dài thi hn ByteDance phi bán phn hot ng ti M ca TikTok n ngày 5/4. Ông ch th cho Tng chng lý ca mình, sau ó c xác nhn là Pam Bondi,… [+5520 chars]"
},
{
"source": {
"id": null,
"name": "3dnews.ru"
},
"author": null,
"title": "SK Hynix первой предложит память HBM4E и уже заключила контракт с Nvidia и Microsoft",
"description": "SK Hynix закрепила за собой лидерство на рынке памяти для искусственного интеллекта (ИИ) и первой начнёт выпуск седьмого поколения высокопроизводительной памяти HBM. Контракты на поставку специализированной, адаптированной под индивидуальные запросы HBM4E уже…",
"url": "https://3dnews.ru/1124748/sk-hynix-pervoy-predlogit-pamyat-hbm4e-i-uge-zaklyuchila-kontrakt-s-nvidia-i-microsoft",
"urlToImage": "https://3dnews.ru/assets/external/illustrations/2025/06/21/1124748/sk-hynix.jpg",
"publishedAt": "2025-06-21T02:52:00Z",
"content": "SK Hynix () HBM. , HBM4E — Nvidia, Microsoft Broadcom.\r\n: SK Hynix\r\nSK Hynix — Nvidia. KED Global, , SK Hynix - , IT-, Apple, Microsoft, Google, Amazon, Nvidia, Meta Tesla.\r\n, , . , 10 , SK Hynix HBM… [+280 chars]"
},
{
"source": {
"id": null,
"name": "Everything-everywhere.com"
},
"author": "Gary Arndt",
"title": "The Great Locomotive Chase",
"description": "Podcast Transcript On April 12, 1862, one of the most daring and audacious events of the American Civil War took place.  It wasn’t a major battle. It didn’t involve armies lining up across each other on an open field.  Instead, it was one of the first example…",
"url": "https://everything-everywhere.com/the-great-locomotive-chase/",
"urlToImage": "https://photos.smugmug.com/Other/n-hRFP2/Podcast-Images/i-X3VW5qD/0/MFzvxqh5Z9XpPXpbgqKqLgw3ktzf56R7fNDvpQvjw/L/1811epart-L.jpg",
"publishedAt": "2025-06-21T07:10:21Z",
"content": "Subscribe Apple | Spotify | Amazon |iHeart Radio | Castbox | Podcast Republic | RSS | Patreon\r\nOn April 12, 1862, one of the most daring and audacious events of the American Civil War took place. \r\nI… [+13499 chars]"
},
{
"source": {
"id": null,
"name": "Cult of Mac"
},
"author": "Rajesh Pandey",
"title": "Apple explores acquiring Perplexity AI to supercharge search",
"description": "Apple executives have internally considered acquiring Perplexity AI to offer an AI-powered search engine in Safari on its devices.\n(via Cult of Mac - Your source for the latest Apple news, rumors, analysis, reviews, how-tos and deals.)",
"url": "https://www.cultofmac.com/news/apple-explores-acquiring-perplexity-ai-supercharge-search",
"urlToImage": "https://cdn.cultofmac.com/wp-content/uploads/2025/06/apple-perplexity.jpg.webp",
"publishedAt": "2025-06-21T04:42:35Z",
"content": "Apple reportedly held internal discussions to acquire AI startup Perplexity AI. The latter is an AI-powered search engine. It uses a large language model (LLM) to process the answers and presents the… [+1910 chars]"
},
{
"source": {
"id": null,
"name": "Roomie.jp"
},
"author": "かいサポ（お買いものサポーター）",
"title": "2万円以下で驚きの高性能！Xiaomiの“薄型×高音質”タブレット",
"description": "※こちらは「かいサポ（お買いものサポーターチーム）」が編集・執筆した記事です。  Amazon（アマゾン）では、2025年6月20日(金)9時から6月23日(月)23時59分まで｢Fashionタイムセール祭り」を開催中。 現在、エンターテインメントの可能性を広げる「Redmi Pad Se」やベゼルレスデザインで迫力のある映像を楽しむことができる「TV A Pro2025」など、Xia",
"url": "https://www.roomie.jp/2025/06/1524992/",
"urlToImage": "https://media.loom-app.com/roomie/dist/images/2025/06/RM-12.png?w=1200",
"publishedAt": "2025-06-21T06:15:56Z",
"content": "Amazon2025620()9623()2359Fashion\r\nRedmi Pad SeTV A Pro2025Xiaomi\r\n202562113\r\nKindle200Kindle Unlimited30\r\n2Xiaomi\r\nXiaomiRedmi Pad Se11HD+90Hz\r\nDolby Atmos8,000mAh6nm Snapdragon 680\r\n128GBmicroSD1TB\r… [+379 chars]"
},
{
"source": {
"id": null,
"name": "Taisy0.com"
},
"author": "taisy0",
"title": "Appleの整備済み商品情報 2025/6/21 ｰ M4搭載MacBook Airを含む最新モデルが多数追加",
"description": "本日、Appleのお得な整備済み製品の在庫が多数追加されました。 整備済み商品とは初期不良などがあった商品をAppleが修理し、販売している商品で1年間の保証付きなので新品と変わらず、安く購入でき、現在の在庫商品は以下の通り。(価格は全て税",
"url": "https://taisy0.com/2025/06/21/212743.html",
"urlToImage": "https://taisy0.com/wp-content/uploads/2025/02/th_seibizumi.jpg",
"publishedAt": "2025-06-21T07:24:46Z",
"content": "Apple\r\nApple1()\r\n<ul><li>MacBook Pro 14 M3 8CPU10GPU185,800</li><li>MacBook Pro 14 M3 8CPU10GPU210,800</li><li>MacBook Pro 14 M3 8CPU10GPU231,800</li><li>MacBook Pro 14 M3 Pro 11CPU14GPU266,800</li><… [+7305 chars]"
},
{
"source": {
"id": null,
"name": "Macitynet.it"
},
"author": "Fabrizio Frattini",
"title": "Apple pensa in grande, Perplexity AI nel mirino per rivoluzionare la ricerca",
"description": "Apple valuta l’acquisizione di Perplexity AI per colmare il divario nell’intelligenza artificiale e costruire un proprio motore di ricerca. Una mossa che potrebbe riscrivere gli equilibri del web, sfidare Google e segnare una svolta culturale per Cupertino.\n-…",
"url": "https://www.macitynet.it/apple-valuta-acquisizione-perplexity-ai/",
"urlToImage": "https://www.macitynet.it/wp-content/uploads/2025/06/perplexity-apple.jpg",
"publishedAt": "2025-06-21T06:44:06Z",
"content": "Apple, in un contesto preoccupante per quanto riguarda il suo approccio all’Intelligenza Artificiale, sta seriamente valutando lipotesi di costruire un proprio motore di ricerca basato su intelligenz… [+5819 chars]"
},
{
"source": {
"id": null,
"name": "Macitynet.it"
},
"author": "Pubblicità",
"title": "Automatizzare l’editing dei testi si può con Text Workflow a 2,99$",
"description": "Oltre 30 azioni integrate, flussi di lavoro personalizzabili, conversione tra formati e sincronizzazione iCloud per velocizzare ogni operazione di editing testuale\n- su macitynet.it Automatizzare l’editing dei testi si può con Text Workflow a 2,99$",
"url": "https://www.macitynet.it/text-workflow/",
"urlToImage": "https://www.macitynet.it/wp-content/uploads/2025/06/text-workflow-1.jpg",
"publishedAt": "2025-06-21T07:29:49Z",
"content": "Con Text Workflow semplificate e velocizzate la modifica dei testi su Mac e iPhone, il che significa sostanzialmente poter lavorare agilmente tra i vari dispositivi Apple in maniera altrimenti imposs… [+3981 chars]"
},
{
"source": {
"id": null,
"name": "PhoneArena"
},
"author": "Abdullah Asim",
"title": "Apple is considering buying Perplexity AI",
"description": "Apple executives are considering buying startup Perplexity AI to offset the loss of the company's arrangement with Google.",
"url": "https://www.phonearena.com/news/apple-considering-buying-perplexity-ai_id171556",
"urlToImage": "https://m-cdn.phonearena.com/images/article/171556-wide-two_1200/Apple-is-considering-buying-Perplexity-AI.jpg",
"publishedAt": "2025-06-21T07:57:24Z",
"content": "Nothing is final yet, and whether Apple acquires Perplexity AI or not heavily depends on whether it is forced to break off its current agreement with Google. Google pays Apple $20 billion annually to… [+1461 chars]"
},
{
"source": {
"id": null,
"name": "Sspai.com"
},
"author": "waychane",
"title": "WWDC25 在现场，我们听到了这些声音",
"description": "中国团队首度斩获Apple设计大奖，并同时有三支团队获奖，今年的WWDC25全球开发者大会对于中国开发者而言无疑是一届大年。对于全球Apple开发者而言，WWDC25也是相当重要的一届大会：不仅要在新 ...查看全文",
"url": "https://sspai.com/post/100436",
"urlToImage": "https://cdnfile.sspai.com/2025/6/20/article/823e5af6-d5c8-d619-825b-1e46b07c9e26.jpeg",
"publishedAt": "2025-06-21T07:00:00Z",
"content": "Apple WWDC25 Apple WWDC25 \r\n WWDC25 Apple Park Apple App Store Awards \r\nWWDC Swift 50 Apple Park SignBridge Swift WWDC \r\nWWDC25 Apple Tim Cook Tim Cook \r\nWWDC25 Swift \r\nCapWords Apple app 4 Apple \r\n … [+369 chars]"
},
{
"source": {
"id": null,
"name": "Macotakara.jp"
},
"author": "danbo",
"title": "Apple Store、mophieのLightningケーブル＆USB-Cケーブル内蔵ポータブルバッテリー「mophie powerstation plus 10K - ティール」を販売開始",
"description": "mophie powerstation plus 10K - ティール\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nApple Storeが、[フォーカルポイント](https://focal.co.jp/brands/mophie/)取扱の[mophie](https://www.zagg.com/en_us/mophie)製Lightningケーブル、USB-Cケーブル内蔵ポータブルバッテリー「[mophie powerst…",
"url": "https://www.macotakara.jp/accessories/entry-49099.html",
"urlToImage": "https://www.macotakara.jp/archives/001/202506/f26fefd55de3df7a.jpg",
"publishedAt": "2025-06-21T02:29:32Z",
"content": "mophie powerstation plus 10K - \r\nApple StoremophieLightningUSB-Cmophie powerstation plus 10K - 11,800\r\n10,000mAh\r\nUSB-C PDmophie powerstation24W\r\nmophie powerstation plus 10K - \r\n20WUSB PD\r\nAirPods A… [+48 chars]"
},
{
"source": {
"id": null,
"name": "Macotakara.jp"
},
"author": "danbo",
"title": "Apple Store、SteelSeriesのデュアルモードゲームコントローラー「SteelSeries Nimbus Dual-Mode Cloud Controller」を販売開始",
"description": "SteelSeries Nimbus Dual-Mode Cloud Controller\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nApple Storeが、SteelSeriesのデュアルモードゲームコントローラー「SteelSeries Nimbus Dual-Mode Cloud Controller」を23,800円で販売開始しています。\n\nNimbus Cloud があれば、どんな場所でもゲームステーションになり、…",
"url": "https://www.macotakara.jp/accessories/entry-49100.html",
"urlToImage": "https://www.macotakara.jp/archives/001/202506/4a39eb3b215d3683.jpg",
"publishedAt": "2025-06-21T02:46:08Z",
"content": "SteelSeries Nimbus Dual-Mode Cloud Controller\r\nSteelSeries Nimbus Dual-Mode Cloud Controller\r\niPhone 15/16+ProMaxNimbus Cloud\r\n6.316cm\r\nSteelSeries Nimbus Dual-Mode Cloud Controller"
},
{
"source": {
"id": null,
"name": "Macotakara.jp"
},
"author": "danbo",
"title": "Apple Store、Twelve South製ポータブルスタンド「Twelve South Curve Mini Stand」を販売開始",
"description": "Twelve South Curve Mini Stand\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nApple Storeが、[Twelve South](https://www.twelvesouth.com/)のポータブルスタンド「[Twelve South Curve Mini Stand](https://apple.sjv.io/c/1333996/435420/7648?u=https://www.apple.c…",
"url": "https://www.macotakara.jp/accessories/entry-49098.html",
"urlToImage": "https://www.macotakara.jp/archives/001/202506/eecacf1d0fe1015f.jpg",
"publishedAt": "2025-06-21T02:25:16Z",
"content": "Twelve South Curve Mini Stand\r\nTwelve South Curve Mini Stand"
},
{
"source": {
"id": null,
"name": "Macotakara.jp"
},
"author": "danbo",
"title": "Apple Store、Tech21のAirPods Pro 2用ケース「Tech21 Translucent AirPods Pro 2 Case」を販売開始",
"description": "Tech21 Translucent AirPods Pro 2 Case\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nApple Storeが、[Tech21](https://uk.tech21.com/)のAirPods Pro 2用ケース「[Tech21 Translucent AirPods Pro 2 Case](https://apple.sjv.io/c/1333996/435420/7648?u=https:/…",
"url": "https://www.macotakara.jp/accessories/entry-49097.html",
"urlToImage": "https://www.macotakara.jp/archives/001/202506/5f66bab85dd604c5.jpg",
"publishedAt": "2025-06-21T02:04:47Z",
"content": "Tech21 Translucent AirPods Pro 2 Case\r\nTech21 Translucent AirPods Pro 2 Case"
},
{
"source": {
"id": null,
"name": "Macotakara.jp"
},
"author": "danbo",
"title": "Apple Store、Tech21のAirPods 4用ケース「Tech21 Translucent EvoPop AirPods 4 Case」を販売開始",
"description": "Tech21 Translucent EvoPop AirPods 4 Case\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nApple Storeが、[Tech21](https://uk.tech21.com/)のAirPods 4用ケース「[Tech21 Translucent EvoPop AirPods 4 Case](https://apple.sjv.io/c/1333996/435420/7648?u=https…",
"url": "https://www.macotakara.jp/accessories/entry-49096.html",
"urlToImage": "https://www.macotakara.jp/archives/001/202506/47c987875d3010cd.jpg",
"publishedAt": "2025-06-21T02:02:36Z",
"content": "Tech21 Translucent EvoPop AirPods 4 Case\r\nTech21 Translucent EvoPop AirPods 4 Case"
},
{
"source": {
"id": null,
"name": "Macotakara.jp"
},
"author": "danbo",
"title": "Apple Store、加Herschel Supply製MacBook Pro用スリーブケース「Herschel Anchor Sleeve for 13インチと14インチMacノートブック - マルチカラー」を販売開始",
"description": "Herschel Anchor Sleeve for 13インチと14インチMacノートブック - マルチカラー Anchor Sleeve for MacBook\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- テキスト -->\n\nApple Storeが、加Herschel Supply製MacBook Pro 14インチ用スリーブケース「Herschel Anchor Sleeve for 13インチと14インチMacノートブック - マルチカラ…",
"url": "https://www.macotakara.jp/accessories/entry-49101.html",
"urlToImage": "https://www.macotakara.jp/archives/001/202506/d8e8fbdcdb6faa6e.jpg",
"publishedAt": "2025-06-21T06:53:57Z",
"content": "Herschel Anchor Sleeve for 1314Mac - Anchor Sleeve for MacBook\r\nHerschel Anchor Sleeve for 1314Mac -"
},
{
"source": {
"id": null,
"name": "Iphones.ru"
},
"author": "Илья Сидоров",
"title": "Apple рассматривает возможность покупки Perplexity. Это поисковик с искусственным интеллектом",
"description": "Топ-менеджеры Apple обсудили возможность покупки Perplexity. Предложение рассматривали Адриан Перик, глава отдела слияний и поглощений Apple, Эдди Кью, вице-президент по интернет-сервисам, а также ведущие сотрудники компании в области ИИ. Пока что обсуждения …",
"url": "https://www.iphones.ru/iNotes/apple-rassmatrivaet-vozmozhnost-pokupki-perplexity-eto-poiskovik-s-iskusstvennym-intellektom",
"urlToImage": "https://www.iphones.ru/wp-content/plugins/wonderm00ns-simple-facebook-open-graph-tags/fbimg.php?img=https%3A%2F%2Fwww.iphones.ru%2Fwp-content%2Fuploads%2F2025%2F06%2F20250621054456_Apple-Perplexity-AI.jpg",
"publishedAt": "2025-06-21T06:29:50Z",
"content": "- Apple Perplexity.\r\n , Apple, , - -, .\r\n . , . Perplexity .\r\nApple Perplexity . Perplexity Safari, Siri.\r\n Apple Perplexity, .\r\n Perplexity $500 $14 . , Apple. [Bloomberg]"
},
{
"source": {
"id": null,
"name": "Livedoor.jp"
},
"author": "itsoku",
"title": "【悲報】キャッシュレス決済は時代遅れ、店舗は続々「現金のみ」へ回帰",
"description": "1:名無し募集中。。。  2025/06/20(金) 18:30:16.05 0  キャッシュレスは時代遅れに　店舗が続々「現金のみ」へ回帰する“切実な理由”  https://news.yahoo.co.jp/articles/63d5cd0ca0d2009323401a91fa9d6c8d0be6ea19",
"url": "http://blog.livedoor.jp/itsoku/archives/62439645.html",
"urlToImage": "https://livedoor.blogimg.jp/itsoku/imgs/9/3/93af5854-s.png",
"publishedAt": "2025-06-21T00:10:26Z",
"content": "1: 2025/06/20() 18:30:16.05 0\r\nhttps://news.yahoo.co.jp/articles/63d5cd0ca0d2009323401a91fa9d6c8d0be6ea19\r\n7: 2025/06/20() 18:38:51.40 0\r\n3: 2025/06/20() 18:33:57.97 0\r\n6: 2025/06/20() 18:38:01.93 0\r… [+1608 chars]"
},
{
"source": {
"id": null,
"name": "Zive.cz"
},
"author": "Martin Chroust",
"title": "iPhone jako kus umění. Zarámovanou první generaci si můžete vystavit třeba doma v obýváku",
"description": "Smartphone je svým způsobem umění. Do malého prostoru se musí vejít neuvěřitelné množství často velmi miniaturních součástek – proč tedy z telefonu neudělat umělecké dílo, jakmile doslouží? Leaker Sonny Dickson spustil webové stránky Collectible Phones, kde n…",
"url": "https://mobilmania.zive.cz/clanky/iphone-jako-kus-umeni-zaramovanou-prvni-generaci-si-muzete-vystavit-treba-doma-v-obyvaku/sc-3-a-1362883/default.aspx",
"urlToImage": "https://mobilmania.zive.cz/getthumbnail.aspx?q=100&height=20000&width=20000&id_file=554376622",
"publishedAt": "2025-06-21T05:50:00Z",
"content": "Smartphone je svým zpsobem umní. Do malého prostoru se musí vejít neuvitelné mnoství asto velmi miniaturních souástek pro tedy z telefonu neudlat umlecké dílo, jakmile doslouí? Leaker Sonny Dickson s… [+1061 chars]"
},
{
"source": {
"id": null,
"name": "Natalie.mu"
},
"author": "音楽ナタリー",
"title": "草彅剛が10年ぶり「FNS歌謡祭」出演、相葉雅紀に要望「緊張をほぐしてほしい」",
"description": "7月2日に放送されるフジテレビ系の音楽特番「2025 FNS歌謡祭 夏」に草なぎ剛が出演する。",
"url": "https://natalie.mu/music/news/629029",
"urlToImage": "https://ogre.natalie.mu/media/news/music/2025/0602/70656.jpg?impolicy=twitter_card_face_crop",
"publishedAt": "2025-06-21T06:30:00Z",
"content": "722025 FNS \r\n20052014FNS10FNS12024 FNS 21\r\nSTAY WITH ME FNS1\r\nFNS\r\n20\r\nAKB48MaybeConfession6\r\n2025 FNS \r\n20257218:3022:48\r\n/ INI / / Aqua Timez / / EIKOshin feat. from THE MOVIE / AKB48 / XG / ELAIZA… [+317 chars]"
},
{
"source": {
"id": null,
"name": "Benzinga"
},
"author": "Marc Guberti",
"title": "Grant Cardone Says You Don't Have To Be The Boss To Get Rich: 'You Gotta Find Somebody That Is Successful And Still Wants To Be Successful'",
"description": "",
"url": "https://www.benzinga.com/personal-finance/management/25/06/46040803/grant-cardone-says-you-dont-have-to-be-the-boss-to-get-rich-you-gotta-find-somebody-that-is-successful-and-still-wants-to-be-successful",
"urlToImage": "https://cdn.benzinga.com/files/images/story/2025/06/20/Man-Holding-Money-In-Hand-At-Black-Backg.jpeg?width=1200&height=800&fit=crop",
"publishedAt": "2025-06-21T03:00:12Z",
"content": "Do you have to start your own business to be successful? Although some business owners become very successful, others end up shutting their doors after a few years. That's why Grant Cardone proposed … [+3211 chars]"
},
{
"source": {
"id": null,
"name": "CNET"
},
"author": "Tiffany Connors",
"title": "When Will the iPhone 17 Be Released? We're Following All the Rumors and Leaks",
"description": "Apple may soon be switching up its launch schedule. Here's when you can expect to get your hands on the new iPhone.",
"url": "https://www.cnet.com/tech/mobile/when-will-the-iphone-17-be-released-were-following-all-the-rumors-and-leaks/",
"urlToImage": "https://www.cnet.com/a/img/resize/3d29eeeaa3e0fadf8999b85a5807fbc3959a8abe/hub/2025/06/18/efcc498a-d738-4252-b330-8f11c36cce90/iphone-17-rumors-vt-v04-00000.png?auto=webp&fit=crop&height=675&width=1200",
"publishedAt": "2025-06-21T08:01:00Z",
"content": "Of all the questions about the rumored iPhone 17, there's one that could settle all others: When is the release date?\r\nAll of the predictions and speculation about battery power, colors, price and mo… [+2679 chars]"
},
{
"source": {
"id": null,
"name": "The Daily Dot"
},
"author": "Nina Hernandez",
"title": "“Nah”: Man spills drink on girlfriend’s laptop, breaking it. Then he refuses to pay half for new one",
"description": "A woman is going viral online after turning to Reddit as a mediator in an argument with her boyfriend over whether or not he should pay for half of a laptop he destroyed during a night of drinking.\n\n\nIt’s always a dubious proposition to turn to r/AITAH with a…",
"url": "https://www.dailydot.com/news/womans-boyfriend-laptop-aita/",
"urlToImage": "https://uploads.dailydot.com/2025/06/drink-spilled-on-macbook-pro-boyfriend.png?auto=compress&fm=png&w=2000&h=1000",
"publishedAt": "2025-06-21T03:00:00Z",
"content": "A woman is going viral online after turning to Reddit as a mediator in an argument with her boyfriend over whether or not he should pay for half of a laptop he destroyed during a night of drinking.\r\n… [+2381 chars]"
},
{
"source": {
"id": null,
"name": "Index.hu"
},
"author": "Molnár Kamilla",
"title": "A nosztalgia uralja a popipart, de miért nem unjuk még a sok új Britney-t és Mariah-t?",
"description": "A nosztalgia uralja a popipart, de miért nem unjuk még a sok új Britney-t és Mariah-t? - Úgy fest, a Z generáció nem vágyik új hangzásra, csak a régi újragondolására.",
"url": "https://index.hu/fomo/2025/06/21/z-generacio-kilencvenes-evek-nosztalgia-britney-spears-mariah-carey-tate-mcrae-sabrina-carpenter/",
"urlToImage": "https://kep.cdn.index.hu/1/0/6273/62734/627347/62734771_4639277_a731a0cc6609efbbea4c01aca783cb36_wm.jpg",
"publishedAt": "2025-06-21T04:09:00Z",
"content": "Ha a kilencvenes évek hangzására gondolunk, akkor a pop és az R&amp;B aranykora ugorhat be sokunk számára, és olyan kivételes hangú énekesek nevei, mint Whitney Houston, Mariah Carey, Christina Aguil… [+5649 chars]"
},
{
"source": {
"id": null,
"name": "Ixbt.com"
},
"author": "jin@ixbt.com (Jin)",
"title": "iPhone откажется от Dynamic Island уже в следующем году. Apple тестирует прототипы",
"description": "Ходят слухи, что в линейке iPhone 17, по крайней мере, модель Pro Max получит меньший Dynamic Island благодаря технологии металинз. При этом Dynamic Island останется видимым в этом году. Однако в следующем году с серией iPhone 18 Pro все начнет меняться, о че…",
"url": "https://www.ixbt.com/news/2025/06/21/iphone-dynamic-island-apple.html",
"urlToImage": "https://www.ixbt.com/img/n1/news/2025/5/6/iPhone-17-Pro344_large.jpg",
"publishedAt": "2025-06-21T04:22:00Z",
"content": ", iPhone 17, , Pro Max Dynamic Island . Dynamic Island .\r\n iPhone 18 Pro , Digital Chat Station. , iPhone 18 Pro Pro Max OLED- 6,27\" 6,86\" . LTPO 1,5K, HIAA () - Face ID.\r\n Face ID, , , , . Apple, , … [+21 chars]"
},
{
"source": {
"id": null,
"name": "Geeky Gadgets"
},
"author": "Roland Hutchinson",
"title": "What iOS 26 Beta Tells Us About the iPhone 17",
"description": "Apple’s Worldwide Developers Conference (WWDC) has once again provided a window into the future of its flagship products. This year, the unveiling of iOS 26 has fueled speculation about the upcoming iPhone 17, hinting at significant advancements in both desig…",
"url": "https://www.geeky-gadgets.com/what-ios-26-beta-tells-us-about-the-iphone-17/",
"urlToImage": "https://www.geeky-gadgets.com/wp-content/uploads/2025/06/iphone-17-liquid-glass-design-concept_optimized.jpg",
"publishedAt": "2025-06-21T07:00:15Z",
"content": "Apple’s Worldwide Developers Conference (WWDC) has once again provided a window into the future of its flagship products. This year, the unveiling of iOS 26 has fueled speculation about the upcoming … [+6789 chars]"
},
{
"source": {
"id": null,
"name": "Geeky Gadgets"
},
"author": "Roland Hutchinson",
"title": "iPhone 20th Anniversary: The Radical Redesign Revealed",
"description": "Apple is reportedly preparing a significant redesign to commemorate the 20th anniversary of the iPhone, set for release in 2027. Codenamed “Glass Wing,” the iPhone XX is anticipated to transform smartphone design and functionality. With its seamless aesthetic…",
"url": "https://www.geeky-gadgets.com/iiphone-20th-anniversary/",
"urlToImage": "https://www.geeky-gadgets.com/wp-content/uploads/2025/06/iphone-xx-wraparound-display-design_optimized.jpg",
"publishedAt": "2025-06-21T05:01:33Z",
"content": "Apple is reportedly preparing a significant redesign to commemorate the 20th anniversary of the iPhone, set for release in 2027. Codenamed “Glass Wing,” the iPhone XX is anticipated to transform smar… [+5246 chars]"
},
{
"source": {
"id": null,
"name": "Ixbt.com"
},
"author": "news@ixbt.com (Darth Sahara)",
"title": "Apple изучает возможность приобретения ИИ-стартапа Perplexity для замены Google в Safari",
"description": "Руководство Apple рассмотрело потенциальное предложение по покупке стартапа в области искусственного интеллекта Perplexity AI. Источники Bloomberg News сообщают, что переговоры находятся на очень ранней стадии и могут не завершиться сделкой. Представители App…",
"url": "https://www.ixbt.com/news/2025/06/21/apple-perplexity-google-safari.html",
"urlToImage": "https://www.ixbt.com/img/n1/news/2025/5/6/converted%20-%202025-06-21T110547.632_large.jpg",
"publishedAt": "2025-06-21T08:06:00Z",
"content": "Apple     Perplexity AI. Bloomberg News , . Apple Perplexity .\r\n Reuters - Perplexity : « - ». Apple Reuters. .\r\n (Adrian Perica), Apple , Perplexity (Eddy Cue) , . Bloomberg, Apple -, Perplexity AI,… [+179 chars]"
},
{
"source": {
"id": null,
"name": "ZDNet"
},
"author": "Adrian Kingsley-Hughes",
"title": "I've tested many MacBook accessories - and this USB-C made the biggest impact",
"description": "No, you don't need to pay Apple $50 for a new cable.",
"url": "https://www.zdnet.com/article/ive-tested-many-macbook-accessories-and-this-usb-c-made-the-biggest-impact/",
"urlToImage": "https://www.zdnet.com/a/img/resize/8934b415d3fe6f16b36a75a97a02df5cb131ac84/2025/05/31/feb002f9-7c6d-40e2-a8b5-2c091bf1948f/img-3922.jpg?auto=webp&fit=crop&height=675&width=1200",
"publishedAt": "2025-06-21T07:00:14Z",
"content": "I think Apple's MagSafe charging system for its MacBook line is a fantastic idea. The breakaway magnetic connector not only makes attaching the cable to the MacBook a snap -- literally. But it also p… [+2041 chars]"
},
{
"source": {
"id": null,
"name": "Classmethod.jp"
},
"author": "kasama",
"title": "AWS DMS Serverlessはタスクを停止しても48時間はDCUを消費します",
"description": "AWS DMS Serverlessはタスクを停止しても48時間はDCUを消費します",
"url": "https://dev.classmethod.jp/articles/aws-dms-serverless-stop-billing-48hours/",
"urlToImage": "https://images.ctfassets.net/ct0aopd36mqt/wp-thumbnail-2456484469e6d1d994b324e579746890/9e41fb473821c8323d8ec33477b8d8a9/aws-dms",
"publishedAt": "2025-06-21T06:47:53Z",
"content": "kasamaAWS DMS Serverless\r\nDMS Serverless48ProvisionedDCU(DMS Capacity Units)48DeprovisionedEventBridge SchedulerDMS ServerlessStart, Stop48Provisioning\r\nYou cannot restart a replication that has not … [+4173 chars]"
},
{
"source": {
"id": null,
"name": "Ozbargain.com.au"
},
"author": "ArtisanStraps",
"title": "15% off Ready-to-Wear Leather Watch Straps + Free Delivery ($0 with $100 Pre-Discount Order) @ Artisan Straps",
"description": "Hi Oz Bargain I'm Jayson and I'm a leathercrafter specialising in making high-end handcrafted watch straps from our workshop here in Sydney, Australia We are offering 15% OFF our …",
"url": "https://www.ozbargain.com.au/node/911720",
"urlToImage": "https://files.ozbargain.com.au/n/20/911720l.jpg?h=b028528b",
"publishedAt": "2025-06-21T00:05:35Z",
"content": "Hi Oz Bargain\r\nI'm Jayson and I'm a leathercrafter specialising in making high-end handcrafted watch straps from our workshop here in Sydney, Australia\r\nWe are offering 15% OFF our Ready-to-Wear Stra… [+327 chars]"
},
{
"source": {
"id": null,
"name": "3dnews.ru"
},
"author": null,
"title": "Apple тоже интересовалась покупкой ИИ-стартапа Perplexity",
"description": "Стремительное развитие рынка систем искусственного интеллекта заставляет крупные корпорации технологического сектора интересоваться поглощением стартапов. Ранее уже сообщалось, что M**a в своё время задумывалась о покупке Perplexity AI, но Bloomberg утверждае…",
"url": "https://3dnews.ru/1124758/apple-toge-interesovalas-pokupkoy-iistartapa-perplexity",
"urlToImage": "https://3dnews.ru/assets/external/illustrations/2025/06/21/1124758/perplexity_01.jpg",
"publishedAt": "2025-06-21T04:26:00Z",
"content": ". , Meta Perplexity AI, Bloomberg , , Apple .\r\n: Perplexity AI\r\n(Mark Gurman), Apple, Bloomberg , (Adrian Perica) Perplexity AI Apple (Eddy Cue), . , , , . , Apple Perplexity AI .\r\n Perplexity AI, , … [+357 chars]"
},
{
"source": {
"id": null,
"name": "3dnews.ru"
},
"author": null,
"title": "«Крупнейшая утечка в истории» оказалась устаревшим сборником архивов паролей",
"description": "19 июня 2025 года источники сообщили о попадании в открытый доступ 16 млрд учётных записей многих популярных интернет-сервисов. Согласно сообщениям экспертов, большинство данных были опубликованы впервые. Подобное должно было заставить всех неравнодушных к св…",
"url": "https://3dnews.ru/1124764/krupneyshaya-utechka-v-istorii-okazalas-ustarevshim-sbornikom-arhivov-paroley",
"urlToImage": "https://3dnews.ru/assets/external/illustrations/2025/06/21/1124764/pass_00.jpg",
"publishedAt": "2025-06-21T08:24:00Z",
"content": "19 2025 16 -. , . , . , , — .\r\n: - Grok 3/3DNews\r\n, « », . , , - .\r\n , . , , . Windows Apple, , . , .\r\n16 , , , . , , . , . , , , , — .\r\n , , . : 16 — . , . , ."
},
{
"source": {
"id": null,
"name": "Hispasec.com"
},
"author": "Mayela Marín",
"title": "16 mil millones de credenciales al descubierto: ¿el robo del siglo o un espejismo?",
"description": "En los últimos días han proliferado titulares que presentan esta filtración como “la mayor brecha de la historia”, insinuando incluso que Apple, Google o Facebook han sido comprometidas. \nLa entrada 16 mil millones de credenciales al descubierto: ¿el robo del…",
"url": "https://unaaldia.hispasec.com/2025/06/filtrados-16-000-millones-de-credenciales-procedentes-de-infostealers-la-megalista-que-multiplica-el-riesgo-de-phishing-y-secuestro-de-cuentas.html",
"urlToImage": "https://i0.wp.com/unaaldia.hispasec.com/wp-content/uploads/2025/06/Leonardo_Kino_XL_Ultrawide_169_cinematic_illustration_of_the_i_3.jpg?fit=1200%2C674&ssl=1",
"publishedAt": "2025-06-21T06:00:00Z",
"content": "En los últimos días han proliferado titulares que presentan esta filtración como la mayor brecha de la historia, insinuando incluso que Apple, Google o Facebook han sido comprometidas. \r\nLa cifra imp… [+2821 chars]"
},
{
"source": {
"id": null,
"name": "Raw Story"
},
"author": "Robert Davis",
"title": "Trump's looming deal with European Union ignores his signature priority: report",
"description": "President Donald Trump is close to securing a much-desired trade deal with the European Union, but that deal doesn't address a couple of key priorities, the Wall Street Journal reported on Friday. The trade deal only includes non-tariff related issues like de…",
"url": "https://www.rawstory.com/trump-2672407804/",
"urlToImage": "https://www.rawstory.com/media-library/u-s-president-donald-trump-talks-to-reporters-as-air-force-one-is-seen-in-the-background-upon-his-arrival-at-morristown-municip.jpg?id=61083409&width=1200&height=600&coordinates=0%2C416%2C0%2C417",
"publishedAt": "2025-06-21T00:49:44Z",
"content": "President Donald Trump is close to securing a much-desired trade deal with the European Union, but that deal doesn't address a couple of key priorities, the Wall Street Journal reported on Friday. \r\n… [+1289 chars]"
},
{
"source": {
"id": null,
"name": "Ferra.ru"
},
"author": "Максим Многословный",
"title": "На производство чипов в США потратят $60 млрд — и это только от одной компании",
"description": "Texas Instruments (TI) объявила, что вложит свыше $ 60 миллиардов в строительство семи заводов по производству полупроводников в США — в Техасе и Юте. Это создаст более 60 тысяч рабочих мест.",
"url": "https://www.ferra.ru/news/techlife/na-proizvodstvo-chipov-v-ssha-potratyat-usd60-mlrd-i-eto-tolko-ot-odnoi-kompanii-20-06-2025.htm",
"urlToImage": "https://www.ferra.ru/imgs/2025/06/20/15/6852884/aa25be08333ae8096eb6fea0dd01cea30da972d5.jpeg",
"publishedAt": "2025-06-21T07:30:55Z",
"content": "TI    , . , , -   .\r\nTI      .   , Apple, Nvidia  Ford.\r\n , General Motors, Apple, Oracle  OpenAI,     ."
},
{
"source": {
"id": null,
"name": "Android.com.pl"
},
"author": "Marcin Ziółkowski",
"title": "Oto prosty gadżet za grosze, który zaoszczędzi ci masę problemów",
"description": "Jak wiadomo jesteśmy tylko ludźmi i czasem zdarzy nam się zapodziać gdzieś np. klucze do domu, czy też do samochodu. Niestety, proces poszukiwań nie zawsze należy do najprzyjemniejszych. Istnieje jednak przydatny gadżet, który może go usprawnić, a mowa tu o l…",
"url": "https://android.com.pl/tech/940890-prosty-gadzet-lokalizator-gps-fixed/",
"urlToImage": "https://static.android.com.pl/uploads/2025/06/lokalizator-fixed.png",
"publishedAt": "2025-06-21T08:33:00Z",
"content": "Jak wiadomo jestemy tylko ludmi i czasem zdarzy nam si zapodzia gdzie np. klucze do domu, czy te do samochodu. Niestety, proces poszukiwa nie zawsze naley do najprzyjemniejszych. Istnieje jednak przy… [+2188 chars]"
},
{
"source": {
"id": null,
"name": "heise online"
},
"author": "Thomas Hoffmann",
"title": "Leica feiert und iPhone erhält KI-Boost – Fotonews der Woche 25/2025",
"description": "Leica feiert mit einem neuen Film, Zebra macht Großformat einfacher und Adobe bringt Smartphone-Fotografie auf ein neues Level.",
"url": "https://www.heise.de/news/Leica-feiert-und-iPhone-erhaelt-KI-Boost-Fotonews-der-Woche-25-2025-10454624.html",
"urlToImage": "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/8/0/7/1/6/14717_Leica_MONOPAN-50_packaging_groupshot_1_HiRes-e3aa731243f15ccf-a381bd5b9dc49c7e.webp",
"publishedAt": "2025-06-21T08:30:00Z",
"content": "Inhaltsverzeichnis\r\nIn dieser Woche dreht sich in der Fotowelt alles um faszinierende Gegensätze: Während Leica zum 100. Jubiläum der Kleinbildkamera einen neuen Schwarz-Weiß-Film auf den Markt bring… [+7391 chars]"
},
{
"source": {
"id": null,
"name": "Soydemac.com"
},
"author": "Alberto Navarro",
"title": "Las nuevas Personas del Apple Vision Pro: realismo y avances tecnológicos para avatares digitales",
"description": "Así son las nuevas Personas de Vision Pro: avatares digitales más realistas y expresivos, claves en la evolución de Apple para la comunicación virtual.",
"url": "https://www.soydemac.com/las-nuevas-personas-del-apple-vision-pro-realismo-y-avances-tecnologicos-para-avatares-digitales/",
"urlToImage": "https://www.soydemac.com/wp-content/uploads/2025/06/vision-pro-personas-0.jpg",
"publishedAt": "2025-06-21T02:34:49Z",
"content": "La llegada de visionOS 26 supone una auténtica transformación para las Personas de Apple Vision Pro. El sistema de avatares digitales, que busca representar a los usuarios de forma fidedigna durante … [+4902 chars]"
},
{
"source": {
"id": null,
"name": "Soydemac.com"
},
"author": "Alberto Navarro",
"title": "tvOS 26 renueva la experiencia con aplicaciones en Apple TV: novedades, diseño y funciones clave",
"description": "tvOS 26 transforma el Apple TV con inicio de sesión automático, diseño renovado y mejoras en aplicaciones. Consulta los detalles y cambios clave.",
"url": "https://www.soydemac.com/tvos-26-renueva-la-experiencia-con-aplicaciones-en-apple-tv-novedades-diseno-y-funciones-clave/",
"urlToImage": "https://www.soydemac.com/wp-content/uploads/2025/06/aplicaciones-apple-tv-2.jpg",
"publishedAt": "2025-06-21T03:34:44Z",
"content": "La última actualización del sistema operativo para el televisor de Apple, tvOS 26, supone un avance significativo en la forma de interactuar con las aplicaciones en Apple TV. Con un fuerte énfasis en… [+4356 chars]"
},
{
"source": {
"id": null,
"name": "Soydemac.com"
},
"author": "Alberto Navarro",
"title": "Apple Music AutoMix: así funciona la nueva revolución musical de iOS 26",
"description": "AutoMix en Apple Music mezcla canciones con IA en iOS 26. Descubre cómo funciona, su compatibilidad y novedades frente a Spotify.",
"url": "https://www.soydemac.com/apple-music-automix-asi-funciona-la-nueva-revolucion-musical-de-ios-26/",
"urlToImage": "https://www.soydemac.com/wp-content/uploads/2025/06/apple-music-automix-0.jpg",
"publishedAt": "2025-06-21T05:30:01Z",
"content": "La música en streaming vive una constante evolución, y en el centro del debate aparece Apple Music con la llegada de iOS 26. La última versión del sistema operativo no solo apuesta por un diseño más … [+3431 chars]"
},
{
"source": {
"id": null,
"name": "Soydemac.com"
},
"author": "Alberto Navarro",
"title": "Apple potencia la continuidad entre dispositivos: así funciona el ecosistema conectado en 2025",
"description": "Descubre cómo la continuidad de Apple conecta iPhone, iPad y Mac para trabajar sin interrupciones y aprovecha todo el potencial del ecosistema.",
"url": "https://www.soydemac.com/apple-potencia-la-continuidad-entre-dispositivos-asi-funciona-el-ecosistema-conectado-en-2025/",
"urlToImage": "https://www.soydemac.com/wp-content/uploads/2025/06/continuidad-apple-0.jpg",
"publishedAt": "2025-06-21T08:19:52Z",
"content": "La integración entre dispositivos Apple ha evolucionado enormemente, permitiendo cambiar de iPhone a iPad o a Mac de forma tan natural que, en el uso diario, parece que se está trabajando sobre un so… [+5358 chars]"
},
{
"source": {
"id": null,
"name": "Soydemac.com"
},
"author": "Alberto Navarro",
"title": "Apple renueva sus fondos de pantalla y sistemas: todas las novedades de iOS 26 y más",
"description": "Apple lanza fondos para iPhone, iPad y Mac y renueva iOS 26 y macOS con IA, Liquid Glass y más. Descubre cómo descargar y qué cambia este año.",
"url": "https://www.soydemac.com/apple-renueva-sus-fondos-de-pantalla-y-sistemas-todas-las-novedades-de-ios-26-y-mas/",
"urlToImage": "https://www.soydemac.com/wp-content/uploads/2025/06/nuevos-fondos-apple-6.jpg",
"publishedAt": "2025-06-21T07:19:48Z",
"content": "Apple ha dado un paso al frente en la personalización de sus dispositivos lanzando nuevos fondos de pantalla diseñados para iPhone, iPad y Mac. Estos fondos, que conmemoran la reciente inauguración d… [+4859 chars]"
},
{
"source": {
"id": null,
"name": "Soydemac.com"
},
"author": "Alberto Navarro",
"title": "El Face ID bajo pantalla: lo que sabemos de la próxima innovación en los iPhone",
"description": "Apple integrará Face ID bajo pantalla en los iPhone 18 Pro, eliminando la Dynamic Island. Descubre cuándo llegará y cómo cambiará el diseño.",
"url": "https://www.soydemac.com/el-face-id-bajo-pantalla-lo-que-sabemos-de-la-proxima-innovacion-en-los-iphone/",
"urlToImage": "https://www.soydemac.com/wp-content/uploads/2025/06/face-id-bajo-pantalla-0.jpg",
"publishedAt": "2025-06-21T01:19:55Z",
"content": "Apple prepara uno de los cambios más destacados que sus teléfonos han experimentado en los últimos años, avanzando hacia el ansiado diseño de pantalla completa. Las filtraciones recientes indican que… [+4810 chars]"
},
{
"source": {
"id": null,
"name": "Soydemac.com"
},
"author": "Andy Acosta",
"title": "¿Se puede usar Apple TV en CarPlay? Todo lo que debes saber en 2025",
"description": "¿Se puede usar Apple TV en CarPlay? Descubre si es posible, alternativas y límites reales para ver vídeo y usar streaming en el coche.",
"url": "https://www.soydemac.com/se-puede-usar-apple-tv-en-carplay-todo-lo-que-debes-saber-en-2025/",
"urlToImage": "https://www.soydemac.com/wp-content/uploads/2025/06/¿Se-puede-usar-Apple-TV-en-CarPlay-Todo-lo-que-debes-saber-8.jpg",
"publishedAt": "2025-06-21T04:00:15Z",
"content": "La posibilidad de disfrutar de contenido multimedia en la pantalla del coche ha despertado un gran interés entre los usuarios de Apple. Muchas personas se preguntan si es posible usar Apple TV en Car… [+12058 chars]"
},
{
"source": {
"id": null,
"name": "Soydemac.com"
},
"author": "Alberto Navarro",
"title": "Apple Music y el audio espacial: cómo está cambiando la forma de escuchar música",
"description": "¿Qué es el audio espacial de Apple Music y cómo aprovecharlo? Descubre ventajas, playlists, dispositivos y diferencias clave para disfrutar más tu música.",
"url": "https://www.soydemac.com/apple-music-y-el-audio-espacial-como-esta-cambiando-la-forma-de-escuchar-musica/",
"urlToImage": "https://www.soydemac.com/wp-content/uploads/2025/06/apple-music-audio-espacial-1.jpg",
"publishedAt": "2025-06-21T06:25:54Z",
"content": "La forma en la que escuchamos música ha evolucionado enormemente en los últimos años, y Apple Music se ha posicionado a la vanguardia gracias a la integración del audio espacial. Esta mejora permite … [+6157 chars]"
},
{
"source": {
"id": null,
"name": "Soydemac.com"
},
"author": "Rodrigo Cortina",
"title": "Aprovecha tu iPad como tableta digitalizadora usando Photoshop en tu Mac",
"description": "Descubre cómo usar tu iPad como tableta digitalizadora con Photoshop en Mac. Guía completa, comparativas y consejos.",
"url": "https://www.soydemac.com/aprovecha-tu-ipad-como-tableta-digitalizadora-usando-photoshop-en-tu-mac/",
"urlToImage": "https://www.soydemac.com/wp-content/uploads/2025/06/Como-usar-iPad-como-pantalla-para-Nintendo-Switch-y-otras-consolas-4.jpg",
"publishedAt": "2025-06-21T05:24:48Z",
"content": "Los avances tecnológicos han hecho que los dispositivos portátiles como el iPad cobren un papel fundamental en la creatividad digital, especialmente para quienes desean dibujar o diseñar con aplicaci… [+10317 chars]"
},
{
"source": {
"id": null,
"name": "Mobilelaby.com"
},
"author": "Yusuke Sakakura",
"title": "AppleはなぜPerplexityに目をつけたのか？AI検索シフトとGoogle依存の終わり",
"description": "AppleがAI検索スタートアップ「Perplexity」の買収について社内で協議したと、Bloombergが報じました。\n\nPerplexityは、対話形式で検索リクエストを受け付け、独自の検索エンジンで集めたウェブ情報をもとに、生成AIが自然な文章で回答するAI検索サービスを提供している企業です。\n\n日本国内ではソフトバンクと提携し、ソフトバンク、ワイモバイル、LINEMOのユーザーに対して有料サービスを6ヶ月間、無料で提供しています。\n\nBloombergによると、Appleの幹部らはAI人材と技術の不足を…",
"url": "https://mobilelaby.com/blog-entry-apple-perplexity-ma.html",
"urlToImage": "https://i0.wp.com/mobilelaby.com/wp/wp-content/uploads/softbank-perplexity.jpg?fit=1280%2C853&ssl=1",
"publishedAt": "2025-06-21T00:36:42Z",
"content": "Yusuke Sakakura\r\nYusuke Sakakura\r\n16SE\r\nAppleAIPerplexityBloomberg\r\nPerplexityAIAI\r\nLINEMO6\r\nBloombergAppleAIPerplexity\r\nウェブ検索市場は現在、大きな転換期を迎えており、Googleが長年支配してきた市場にAI検索が本格的に台頭しつつあります。\r\n実際にAppleのサービス部門… [+646 chars]"
},
{
"source": {
"id": null,
"name": "Alternatives-economiques.fr"
},
"author": "Naïri Nahapétian",
"title": "Cédric Durand : « L’alliance des grands patrons de la tech avec Trump confirme l’avènement du techno-féodalisme »",
"description": "L’économiste, spécialiste des mutations du capitalisme contemporain, met en évidence ce qui distingue mais aussi ce qui permet de comparer le pouvoir des géants du numérique à celui des seigneurs féodaux du Moyen-Age.",
"url": "https://www.alternatives-economiques.fr/cedric-durand-lalliance-grands-patrons-de-tech-trump-conf/00115133",
"urlToImage": "https://www.alternatives-economiques.fr/sites/default/files/public/styles/for_social_networks_no_webp/public/field/image/technofeodalisme.jpg?itok=UdY4k-eE",
"publishedAt": "2025-06-21T04:05:00Z",
"content": "Face au pouvoir accru des entreprises de la tech, dont les patrons sont de plus en plus présents dans lespace public et dont nous dépendons de plus en plus au quotidien, on entend désormais parler de… [+13203 chars]"
},
{
"source": {
"id": null,
"name": "The Mac Observer"
},
"author": "Rajat Saini",
"title": "How Notifications Became Ad Delivery Systems on iOS",
"description": "Push notifications were once useful. They alerted you to urgent messages, updates, or real-time actions inside your apps. Today, they’re little more than delivery systems for unsolicited ads. From e-commerce platforms to food delivery services, apps now use n…",
"url": "https://www.macobserver.com/news/how-notifications-became-ad-delivery-systems-on-ios/",
"urlToImage": "https://www.macobserver.com/wp-content/uploads/2025/06/How-Notifications-Became-Ad-Delivery-Systems.jpg",
"publishedAt": "2025-06-21T02:32:58Z",
"content": "Push notifications were once useful. They alerted you to urgent messages, updates, or real-time actions inside your apps. Today, theyre little more than delivery systems for unsolicited ads. From e-c… [+2108 chars]"
},
{
"source": {
"id": null,
"name": "The Mac Observer"
},
"author": "Rajat Saini",
"title": "Apple’s Keyboard Learns and Suggests Curse Words if You Use Them Often",
"description": "iOS autocorrect, long known for avoiding profanity, now suggests curse words if you’ve typed them often enough. Users report that Apple’s keyboard has shifted from blocking swearing to learning from your behavior. It now treats curse words like any other term…",
"url": "https://www.macobserver.com/news/apples-keyboard-learns-and-suggests-curse-words-if-you-use-them-often/",
"urlToImage": "https://www.macobserver.com/wp-content/uploads/2025/06/apple-keyboard.jpg",
"publishedAt": "2025-06-21T03:06:21Z",
"content": "iOS autocorrect, long known for avoiding profanity, now suggests curse words if youve typed them often enough. Users report that Apples keyboard has shifted from blocking swearing to learning from yo… [+1387 chars]"
},
{
"source": {
"id": null,
"name": "The Mac Observer"
},
"author": "Rajat Saini",
"title": "The World’s Slowest iPhone Is a Nintendo Switch Running iOS",
"description": "A developer managed to get iOS running on a first-generation Nintendo Switch, but the result is far from practical. The boot time alone takes 20 minutes. Once it starts, the system crashes frequently. Apps don't open. The experience isn’t usable. It’s a techn…",
"url": "https://www.macobserver.com/news/the-worlds-slowest-iphone-is-a-nintendo-switch-running-ios/",
"urlToImage": "https://www.macobserver.com/wp-content/uploads/2025/06/Nintendo-Switch-Running-iOS.jpg",
"publishedAt": "2025-06-21T04:57:24Z",
"content": "A developer managed to get iOS running on a first-generation Nintendo Switch, but the result is far from practical. The boot time alone takes 20 minutes. Once it starts, the system crashes frequently… [+1456 chars]"
},
{
"source": {
"id": null,
"name": "Xataka.com.mx"
},
"author": "Kenth",
"title": "Crearon un candidato al GOTY 2023 y ahora han lanzado su multijugador día uno en PS Plus y Game Pass: “No todo ha ido bien”",
"description": "Remedy es una de las desarrolladoras de videojuegos más importantes del mercado y creadora de franquicias single-player como Max Payne, Alan Wake y Control. Ahora ha incursionado en el terreno de los títulos multijugador con FBC: Firebreak. Sin embargo, este …",
"url": "https://www.xataka.com.mx/videojuegos/no-todo-ha-ido-bien-primer-multijugador-remedy-cosas-no-salen-como-esperaban",
"urlToImage": "https://i.blogs.es/da4843/fbc-portada/840_560.jpeg",
"publishedAt": "2025-06-21T01:01:09Z",
"content": "Remedy es una de las desarrolladoras de videojuegos más importantes del mercado y creadora de franquicias single-player como Max Payne, Alan Wake y Control. Ahora ha incursionado en el terreno de los… [+2249 chars]"
},
{
"source": {
"id": null,
"name": "Xataka.com.mx"
},
"author": "Alejandro Aranda",
"title": "Cazando Gangas México: colección Devil May Cry, barra de sonido Bose, iPhone 16e y cupón de Mercado Libre en productos Adidas",
"description": "Ahora sí, por fin tenemos fecha oficial para Prime Day 2025. A poco menos de un mes de este gran evento, podemos seguir disfrutando de descuentos y promociones para llegar con algunos pesitos de más a esta gran venta. En Xataka Selección estamos preparando va…",
"url": "https://www.xataka.com.mx/seleccion/cazando-gangas-mexico-coleccion-devil-may-cry-barra-sonido-bose-iphone-16e-cupon-mercado-libre-productos-adidas",
"urlToImage": "https://i.blogs.es/003b07/cazando-gangas-mexico-oferta-descuento-amazon-mercado-libre/840_560.jpeg",
"publishedAt": "2025-06-21T01:25:26Z",
"content": "Ahora sí, por fin tenemos fecha oficial para Prime Day 2025. A poco menos de un mes de este gran evento, podemos seguir disfrutando de descuentos y promociones para llegar con algunos pesitos de más … [+5626 chars]"
},
{
"source": {
"id": null,
"name": "Itc-check.com"
},
"author": "itc",
"title": "【対象者限定 2025年7月14日まで】Amazonギフトカード 5,000円以上購入で500ポイントプレゼント（要エントリー）",
"description": "本情報はApple Gift Cardのキャンペーン情報ではありません。 2025年6月17日(火)14:00〜7月14日(月)23:59の期間中、AmazonでAmazonギフトカード（Eメールタイプ、PDF印刷タイプ...",
"url": "https://itc-check.com/amag-202506/",
"urlToImage": "https://itc-check.com/itcwp/wp-content/uploads/2025/06/amag-202506.png",
"publishedAt": "2025-06-21T01:43:06Z",
"content": "Apple Gift Card\r\n2025617()14:00714()23:59AmazonAmazonEPDF5,000500()\r\n11\r\n<table><tr><th></th><td>2025617()14:00714()23:59</td></tr><tr><th></th><td>1(721)</td></tr></table>AmazonAmazonEPDF5,000500()\r… [+170 chars]"
},
{
"source": {
"id": null,
"name": "Itc-check.com"
},
"author": "itc",
"title": "【対象者限定 2025年7月14日まで】アマゾン、対象ギフトカード 10,000円以上購入で150ポイントプレゼント（要エントリー）",
"description": "2025年6月17日(火)14:00〜7月14日(月)23:59の期間中、アマゾンで対象のギフトカードを期間中合計10,000円以上購入で150ポイント(期間限定)がプレゼントされるキャンペーンが実施されます。 Appl...",
"url": "https://itc-check.com/ama-202506/",
"urlToImage": "https://itc-check.com/itcwp/wp-content/uploads/2025/06/ama-202506.png",
"publishedAt": "2025-06-21T01:43:04Z",
"content": "2025617()14:00714()23:5910,000150()\r\nApple Gift Card\r\n11\r\n<table><tr><th></th><td>2025617()14:00714()23:59</td></tr><tr><th></th><td>1(721)</td></tr></table>10,000150()\r\nAmazon Mastercard2%\r\nAmazon M… [+118 chars]"
},
{
"source": {
"id": null,
"name": "Gadget2ch.com"
},
"author": "Gadget 2ch",
"title": "Wacomのでっかい液タブが欲しい",
"description": "お高いですよ 1: 以下、5ちゃんねるからVIPがお送りします 2025/06/15(日) 22:38:11.685 ID:BL6MeiCK0 大画面で優雅に快適にお絵描きしたい   2: 以下、5ちゃんねるか...",
"url": "http://www.gadget2ch.com/archives/post-254809.html",
"urlToImage": "https://i0.wp.com/www.gadget2ch.com/wp-content/uploads/2025/06/16902-139-5ee4391aede8574baadbea3d43ef55b6-650x433.jpg.webp?fit=300%2C300",
"publishedAt": "2025-06-21T01:46:09Z",
"content": "1: 5VIP 2025/06/15() 22:38:11.685 ID:BL6MeiCK0\r\n2: 5VIP 2025/06/15() 22:39:42.869 ID:9Tow9RAfd\r\n3: 5VIP 2025/06/15() 22:41:12.258 ID:pMjQnGxS0\r\n4: 5VIP 2025/06/15() 22:42:58.626 ID:BL6MeiCK0\r\n5: 5VIP… [+1792 chars]"
},
{
"source": {
"id": null,
"name": "Adevarul.ro"
},
"author": "Alex Vlaicu",
"title": "Site-urile pornografice revin online în Franţa, după un protest faţă de o decizie care îi obliga să verifice vârsta utilizatorilor",
"description": "Marile site-uri pentru adulţi au revenit online în Franţa vineri, 20 iunie, după ce o instanţă a suspendat o decizie care obliga platformele pornografice cu sediul în Uniunea Europeană să verifice vârsta utilizatorilor.",
"url": "https://adevarul.ro/stiri-externe/europa/site-urile-pornografice-revin-online-in-franta-2452319.html",
"urlToImage": "https://cdn.adh.reperio.news/image-a/a3117fd0-f752-47e4-9eed-801105419041/index.jpeg?p=f%3Djpeg%26w%3D1200%26h%3D630%26r%3Dcover",
"publishedAt": "2025-06-21T06:53:28Z",
"content": "Marile site-uri pentru aduli au revenit online în Frana vineri, 20 iunie, dup ce o instan a suspendat o decizie care obliga platformele pornografice cu sediul în Uniunea European s verifice vârsta ut… [+2444 chars]"
},
{
"source": {
"id": null,
"name": "Boston Herald"
},
"author": "Andrew Langer/InsideSources",
"title": "Langer: How Trump can cut prices amid a trade war",
"description": "Americans want to see their grocery bills decrease, energy costs to stabilize, rent prices to decrease, and transaction fees not to rise. Trump can deliver the economic relief families need, no matter what’s happening with his trade talks.",
"url": "https://www.bostonherald.com/2025/06/21/langer-how-trump-can-cut-prices-amid-a-trade-war/",
"urlToImage": "https://www.bostonherald.com/wp-content/uploads/2025/06/BHR-Z-LANGER-01.jpg?w=1024&h=683",
"publishedAt": "2025-06-21T07:08:44Z",
"content": "As Americas trade war escalates, voters are worried about one thing above all: rising prices. An Associated Press poll shows just 36% approve of the presidents handling of the economy. Many are sayin… [+2927 chars]"
},
{
"source": {
"id": null,
"name": "Boston Herald"
},
"author": "Jed Gottlieb",
"title": "Raise your glass to lighter sips for the summer",
"description": "From wine to beer to liquor, from local to international offerings, here are a range of lighter tipples to toast to this summer season.",
"url": "https://www.bostonherald.com/2025/06/21/raise-your-glass-to-lighter-sips-for-the-summer/",
"urlToImage": "https://www.bostonherald.com/wp-content/uploads/2025/06/BHR-L-BOOZE.jpg?w=1024&h=685",
"publishedAt": "2025-06-21T07:18:24Z",
"content": "Booze: bad for the body, good for the spirit. But what if you could make smart choices that were less bad. And what if those smart choices were delicious. From wine to beer to liquor, from local to i… [+3816 chars]"
},
{
"source": {
"id": null,
"name": "Pleated-jeans.com"
},
"author": "Alex Buscemi",
"title": "27 Funniest Tweets Of All Time From Friday",
"description": "The post 27 Funniest Tweets Of All Time From Friday appeared first on Pleated Jeans.",
"url": "https://pleated-jeans.com/2025/06/20/funniest-tweets-of-all-time-from-friday/",
"urlToImage": "https://pleated-jeans.com/wp-content/uploads/2025/06/funniest-tweets-of-all-time-from-friday.jpg",
"publishedAt": "2025-06-21T01:15:49Z",
"content": "Another day, another chance for Twitter to collectively lose its mind over the craziest headlines and the most oddly relatable stuff.\r\nTodays funniest tweets cover everything from the politicians pin… [+671 chars]"
},
{
"source": {
"id": null,
"name": "Applelinkage.com"
},
"author": "Al",
"title": "Appleの幹部がPerplexityの買収について協議",
"description": "Bloombergのマーク・ガーマン氏は、Appleが米国Perplexity AI社の買収について社内で協議していると報じています。 企業買収などを統括するコーポレートディベロップメント担当副社長のエイドリアン・ペリカ … 続きを読む Appleの幹部がPerplexityの買収について協議 →",
"url": "https://www.applelinkage.com/2025/06/21/apple-executives-discuss-acquisition-of-perplexity/",
"urlToImage": null,
"publishedAt": "2025-06-21T00:43:52Z",
"content": "Apple WatchiPad miniMac mini"
},
{
"source": {
"id": null,
"name": "Applelinkage.com"
},
"author": "Al",
"title": "Vivaldi 7.4.3684.55",
"description": "Vivaldi Technologies ASが、ウェブブラウザ「Vivaldi 7.4.3684.55」を配布しています。 このバージョンでは、特定のダイアログが高いUIズームや小さいモニターで閉じにくくなる問題や、特 … 続きを読む Vivaldi 7.4.3684.55 →",
"url": "https://www.applelinkage.com/2025/06/21/vivaldi-7-4-3684-55/",
"urlToImage": null,
"publishedAt": "2025-06-21T01:01:44Z",
"content": "Apple WatchiPad miniMac mini"
},
{
"source": {
"id": null,
"name": "Applelinkage.com"
},
"author": "Al",
"title": "Simplism、性能とカワイイにこだわった充電アクセサリー「1000%」シリーズ発売",
"description": "トリニティ株式会社が、Simplismブランドより、性能とカワイイ見た目にこだわった充電アクセサリー「1000%」シリーズを6月27日（金）より順次発売すると発表しています。 [1000%] 20Wチャージャー Type … 続きを読む Simplism、性能とカワイイにこだわった充電アクセサリー「1000%」シリーズ発売 →",
"url": "https://www.applelinkage.com/2025/06/21/simplism-1000-percent-series/",
"urlToImage": null,
"publishedAt": "2025-06-21T01:02:59Z",
"content": "Apple WatchiPad miniMac mini"
},
{
"source": {
"id": null,
"name": "Linux Adictos"
},
"author": "Pablinux",
"title": "UxPlay Control te permite duplicar la pantalla de tu iPhone en Linux",
"description": "Descubre cómo duplicar la pantalla y audio de iPhone en Linux con UxPlay Control. Tutorial detallado, opciones y ventajas únicas.",
"url": "https://www.linuxadictos.com/uxplay-control-te-permite-duplicar-la-pantalla-de-tu-iphone-en-linux.html",
"urlToImage": "https://www.linuxadictos.com/wp-content/uploads/UxPlay-Control.webp",
"publishedAt": "2025-06-21T07:31:20Z",
"content": "La integración de dispositivos Apple como el iPhone, iPad o Mac en entornos Linux ha sido históricamente una tarea compleja para el usuario medio. Este desafío se ha debido principalmente a la falta … [+22770 chars]"
},
{
"source": {
"id": "abc-news-au",
"name": "ABC News (AU)"
},
"author": "ABC News",
"title": "Billions of logins for sites such as Google and Facebook leaked online",
"description": "Billions of login credentials have been leaked and compiled into datasets online, giving criminals \"unprecedented access\" to accounts, according to new research.",
"url": "https://www.abc.net.au/news/2025-06-21/google-apple-facebook-passwords-caught-in-cyber-breach/105445072",
"urlToImage": "https://live-production.wcms.abc-cdn.net.au/207a77ee989d9dedc33b26eb79536860?impolicy=wcms_watermark_news&cropH=2618&cropW=4655&xPos=0&yPos=274&width=862&height=485&imformat=generic",
"publishedAt": "2025-06-21T00:19:57Z",
"content": "Billions of login credentials have been leaked and compiled into datasets online, giving criminals \"unprecedented access\" to accounts, according to new research from a cybersecurity publication.\r\nThe… [+1878 chars]"
},
{
"source": {
"id": null,
"name": "Fratellowatches.com"
},
"author": "Lex Stolk",
"title": "The Girard-Perregaux Laureato Is Turning 50 This Year — The Perfect Moment To Reinvent That Watch",
"description": "As you’ve probably noticed, 2025 is filled to the brim with anniversaries. Whether it’s brands or watches, a plethora of them are celebrating a milestone moment in their existence this year. Turning 50 is quite a milestone. And guess what: this year, the Gira…",
"url": "https://www.fratellowatches.com/the-girard-perregaux-laureato-is-turning-50-this-year/",
"urlToImage": "https://www.fratellowatches.com/cdn-cgi/image/anim=false/wp-content/uploads/2025/01/Girard-Perregaux-Laureato-38-17.jpg",
"publishedAt": "2025-06-21T05:00:32Z",
"content": "As youve probably noticed, 2025 is filled to the brim with anniversaries. Whether it’s brands or watches, a plethora of them are celebrating a milestone moment in their existence this year. Turning 5… [+9544 chars]"
},
{
"source": {
"id": null,
"name": "Shiftdelete.net"
},
"author": "Alperen Esin",
"title": "Meta, yapay zeka ekibini genişletiyor!",
"description": "Meta, yapay zeka alanındaki iddiasını güçlendirmek için sektörün önde gelen isimlerini transfer etmeye devam ediyor. Şirket, SSI CEO’su Daniel Gross ile eski GitHub CEO’su Nat Friedman’ı bünyesine kattı. Her iki isim de Meta’daki yapay zeka projelerinde, Scal…",
"url": "https://shiftdelete.net/meta-yapay-zeka-ekibini-genisletiyor",
"urlToImage": "https://ares.shiftdelete.net/2025/03/meta-ai-bagimsiz-bir-uygulama-olarak-cikacak-kapak.webp",
"publishedAt": "2025-06-21T08:00:00Z",
"content": "Meta, yapay zeka alanndaki iddiasn güçlendirmek için sektörün önde gelen isimlerini transfer etmeye devam ediyor. irket, SSI CEOsu Daniel Gross ile eski GitHub CEOsu Nat Friedman bünyesine katt. Her … [+1400 chars]"
},
{
"source": {
"id": null,
"name": "Shiftdelete.net"
},
"author": "Alperen Esin",
"title": "Nintendo Switch’e iOS yüklediler! İşte sonuç",
"description": "Nintendo Switch üzerinde iOS işletim sistemi çalıştırıldı. Deneysel bir proje kapsamında gerçekleştirilen bu işlem, konsolun teknik sınırlarını zorladı ancak ortaya çıkan sonuç, işlevsellikten çok teknik gösteri niteliğinde oldu. Nintendo Switch’e iOS yüklend…",
"url": "https://shiftdelete.net/nintendo-switch-ios-yuklediler-iste-sonuc",
"urlToImage": "https://ares.shiftdelete.net/2024/12/switch-2-joy-con-uc-yeni-detayi-ortaya-cikardi.jpg",
"publishedAt": "2025-06-21T06:00:00Z",
"content": "Nintendo Switch üzerinde iOS iletim sistemi çaltrld. Deneysel bir proje kapsamnda gerçekletirilen bu ilem, konsolun teknik snrlarn zorlad ancak ortaya çkan sonuç, ilevsellikten çok teknik gösteri nit… [+1541 chars]"
},
{
"source": {
"id": null,
"name": "Tabletowo.pl"
},
"author": "Natalia Kania-Kuc",
"title": "Darmowe generatory grafik. Przewodnik po bezpłatnych narzędziach AI",
"description": "Chcesz wypróbować możliwości generatorów AI, ale nie chcesz płacić? W tym przewodniku znajdziesz listę narzędzi, które stworzą grafikę za darmo.Przeczytaj pełny artykuł tutaj: Darmowe generatory grafik. Przewodnik po bezpłatnych narzędziach AI",
"url": "https://www.tabletowo.pl/darmowy-generator-obrazow-ai-przeglad/",
"urlToImage": "https://www.tabletowo.pl/wp-content/uploads/2025/06/sztuczna-inteligencja-wg-gemini.jpeg",
"publishedAt": "2025-06-21T07:58:00Z",
"content": "Sztuczna inteligencja staa si niezwykle popularna. Z narzdzi opartych o modele AI korzystamy ju na co dzie, choby wpisujc proste zapytanie do wyszukiwarki Google. Technologia ta coraz czciej pozwala … [+13302 chars]"
},
{
"source": {
"id": null,
"name": "Mojandroid.sk"
},
"author": "Filip Spevár",
"title": "Do Spotify si budete môcť jednoducho importovať playlisty",
"description": "Spotify v súčasnosti síce dokáže zobraziť lokálne hudobné súbory uložené v telefóne, no táto funkcia je oddelená od pripravovaného importu.",
"url": "https://www.mojandroid.sk/do-spotify-si-budete-moct-jednoducho-importovat-playlisty/",
"urlToImage": "https://www.mojandroid.sk/wp-content/uploads/2024/03/titulkaa-spotify.jpg",
"publishedAt": "2025-06-21T07:00:31Z",
"content": "Spotify síce patrí medzi najpopulárnejie hudobné sluby na svete, no stále mu chýba jedna zásadná funkcia, ktorá mnohých odrádza od prechodu z iných platforiem. Ide o monos importova svoje existujúce … [+1735 chars]"
},
{
"source": {
"id": null,
"name": "Mojandroid.sk"
},
"author": "Milan Menšík",
"title": "Hodinky Amazfit Active 2 Square ponúkajú napriek nízkej cene špičkové parametre",
"description": "Nové smart hodinky Amazfit Active 2 Square kombinujú elegantný dizajn s bohatou výbavou. Navyše majú veľmi lákavú cenu.",
"url": "https://www.mojandroid.sk/hodinky-amazfit-active-2-square/",
"urlToImage": "https://www.mojandroid.sk/wp-content/uploads/2025/06/monitor.jpg",
"publishedAt": "2025-06-21T06:32:23Z",
"content": "Znaka Amazfit si aj na slovenskom trhu získala obubu portovými smart hodinkami, ktoré vdy ponúkali vemi dobrý pomer ceny a parametrov. Neinak je tomu aj v prípade novinky Amazfit Active 2 Square, kto… [+1845 chars]"
},
{
"source": {
"id": null,
"name": "Gizchina.com"
},
"author": "Nick Papanikolopoulos",
"title": "Apple Reportedly Weighing Bid to Acquire Perplexity AI",
"description": "Apple is said to be internally discussing whether to make a move to acquire Perplexity AI, the fast-growing startup behind one of the most talked-about ...\nThe post Apple Reportedly Weighing Bid to Acquire Perplexity AI appeared first on Gizchina.com.",
"url": "https://www.gizchina.com/2025/06/21/apple-reportedly-weighing-bid-to-acquire-perplexity-ai/",
"urlToImage": "https://www.gizchina.com/wp-content/uploads/images/2025/06/20250621054456_Apple-Perplexity-1200x675.jpg",
"publishedAt": "2025-06-21T06:56:14Z",
"content": "Apple is said to be internally discussing whether to make a move to acquire Perplexity AI, the fast-growing startup behind one of the most talked-about AI-powered web search engines on the market. Th… [+2259 chars]"
},
{
"source": {
"id": null,
"name": "Iphonejd.com"
},
"author": "Jeff Richardson",
"title": "Podcast episode 201: The iPad Workhorse, Speech-to-Speed, and Tracking a Jaguar! ",
"description": "We have a lot more information about the upcoming changes to the iPad in iPadOS 26, so that is the topic that Brett and I address first in this week’s episode of the In the News podcast. Next, we talk about upcoming changes to the Reminders app, speech-to-tex…",
"url": "https://www.iphonejd.com/iphone_jd/2025/06/podcast-201.html",
"urlToImage": null,
"publishedAt": "2025-06-21T05:05:00Z",
"content": "We have a lot more information about the upcoming changes to the iPad in iPadOS 26, so that is the topic that Brett and I address first in this weeks episode of the In the News podcast. Next, we talk… [+794 chars]"
},
{
"source": {
"id": null,
"name": "Iphoneaddict.fr"
},
"author": "Jean-Baptiste A.",
"title": "Apple a des envies de racheter Perplexity pour l’IA",
"description": "Apple explore la possibilité d’acquérir Perplexity, une société spécialisée dans l’intelligence artificielle, selon Bloomberg. Ces discussions internes, encore à un stade préliminaire, visent à combler le retard d’Apple dans le domaine de l’IA et à anticiper …",
"url": "https://iphoneaddict.fr/post/news-410913-apple-envies-racheter-perplexity-lia",
"urlToImage": "https://static.iphoneaddict.fr/wp-content/uploads/2025/06/Perplexity-Logo.jpg",
"publishedAt": "2025-06-21T07:06:39Z",
"content": "Apple explore la possibilité d’acquérir Perplexity, une société spécialisée dans l’intelligence artificielle, selon Bloomberg. Ces discussions internes, encore à un stade préliminaire, visent à combl… [+2525 chars]"
}
]
  constructor() {
    super();
    console.log("I am constructor");
    this.state = {
      articles: this.articles,
      loading: false
    };
  }

  // ✅ async method outside constructor
  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f9b6a344d9bf49729d30d0c1a7e51beb";

    try {
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsHotDog - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 45) : ""}
                description={element.description ? element.description.slice(0, 88) : ""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default News;
