FROM nginx:1.11.13
MAINTAINER heckenmann.de
EXPOSE 80

WORKDIR /usr/share/nginx/html/
RUN rm -rf *
COPY ./dist ./

WORKDIR /usr/share/nginx/html/
