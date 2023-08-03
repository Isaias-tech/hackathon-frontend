#!/bin/bash

echo "Go to project directory."
cd /home/isaias-tech/hackathon-frontend
echo "Update the code."
git pull origin main
echo "Install dependencies."
npm run build
echo "Remove old dist"
sudo rm -r /var/www/hackathon.isaias-tech.com/dist
echo "Add new dist"
sudo cp -a /home/isaias-tech/hackathon-frontend/dist/ /var/www/hackathon.isaias-tech.com/
echo "Restart nginx"
sudo systemctl restart nginx
echo "Finish"