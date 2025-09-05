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
allowedHosts: true // Allow all hosts ==> to add in vite.config.js
