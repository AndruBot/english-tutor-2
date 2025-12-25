npm run build

rsync -avz ./dist/* english:/root/projects/english-tutor --progress -v

rsync -avz nginx.conf english:/etc/nginx/conf.d/nginx.conf --progress -v

rsync -avz default english:/etc/nginx/sites-available/default --progress -v

ssh english 'systemctl reload nginx'