 * ===== Loon =====
 [MITM]
 hostname = shop-api.retail.mi.com
 [Script]
 http-request ^https:\/\/shop-api\.retail\.mi\.com\/mtop\/mf\/act\/infinite\/(do|done) tag=小米商城 Cookie, script-path=https://raw.githubusercontent.com/MaYIHEI/paperclip/refs/heads/main/app/mishop/mishop.cookie.js, requires-body=0, img-url=https://raw.githubusercontent.com/MaYIHEI/pin/refs/heads/main/app/mishop.png
 cron "15 8 * * *" script-path=https://raw.githubusercontent.com/MaYIHEI/paperclip/refs/heads/main/app/mishop/mishop.js, tag=小米商城签到, img-url=https://raw.githubusercontent.com/MaYIHEI/pin/refs/heads/main/app/mishop.png, enable=true
