# İnsan Manyakları — Website

Saf HTML/CSS/JS. Build adımı yok, hiçbir bağımlılık kurulmaz — dosyaları olduğu gibi barındırmak yeterli.

## Dosya yapısı
```
index.html
styles.css
script.js
assets/
  hero-landscape.webp   (masaüstü hero görseli)
  hero-square.webp      (tablet boyutu)
  hero-portrait.webp    (mobil hero görseli)
```

## GitHub Pages ile yayınlama
1. GitHub'da yeni bir repo oluştur (örn. `insan-manyaklari`).
2. Bu klasördeki tüm dosyaları (index.html, styles.css, script.js, assets/) reponun kök dizinine yükle.
3. Repo **Settings → Pages** sekmesine git.
4. "Branch" olarak `main` (veya `master`) ve klasör olarak `/ (root)` seç, kaydet.
5. Birkaç dakika içinde site `https://kullaniciadin.github.io/insan-manyaklari/` adresinde yayında olur.

## Kendi domain'ini bağlamak (Cloudflare)
1. Repo köküne içeriği `insanmanyaklari.com` (kendi domain'in) olan bir `CNAME` adında dosya ekle — Pages ayarlarındaki "Custom domain" kutusuna domain'i yazınca bu dosya otomatik oluşturulur.
2. Cloudflare DNS panelinde:
   - `A` kayıtları (kök domain için, dört tanesi):
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` alt alan adı için `CNAME`: `kullaniciadin.github.io`
   - Proxy durumu (turuncu bulut) GitHub Pages ile uyumludur, açık bırakabilirsin.
3. GitHub Pages ayarlarında "Enforce HTTPS" kutucuğunu işaretle (DNS yayıldıktan sonra aktif olur).

## Not
Görseller `.webp` formatında, orijinal PNG'lerin sıkıştırılmış hali (~440 KB, orijinali ~3.3 MB) — sayfa hızlı açılsın diye böyle bırakıldı.
