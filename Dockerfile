FROM index.qiniu.com/nginx

WORKDIR /

COPY dist /dist

ADD nginx.music.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
