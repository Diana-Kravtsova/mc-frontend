FROM nginx
COPY default.conf.template /etc/nginx/templates/default.conf.template
COPY dist/mc-frontend /usr/share/nginx/html
