# frontend

- npm create vite@latest
- npm i react-router-dom
- npm install react-bootstrap bootstrap
- npm install react-icons --save
- npm i react-toastify

# docker

mise à jour vite.config.js
mise à jour scripts du package.json

docker compose up
docker compose up --build ==> suite mise à jour code

docker logs ghalass2-container-app ==> Vérifiez les logs pour les erreurs

# hostinger

vps ubuntu with docker
sudo apt update
sudo apt upgrade -y
git clone https://github.com/ghalass/ghalass2.com.git
cd ghalass2.com/
git pull ==> suite à mise à jour code sur github
allowedHosts: "all" // Allow all hosts ==> to add in vite.config.js

docker compose run --rm certbot ==> Générer les certificats

Étapes après modification code :
docker compose down ==> Supprime les anciens conteneurs pour repartir propre
docker compose up -d --build ==> Rebuild et démarre
docker compose exec nginx ls -l /etc/letsencrypt/live/home.ghalass.com/ ==> Vérifie le certificat
docker compose run --rm certbot renew --dry-run ==> Teste le renouvellement automatique

https://www.youtube.com/watch?v=C7aooGtKq8Y&t=2837s
