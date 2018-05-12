FROM ubuntu:14.04
MAINTAINER heckenmann.de

RUN mkdir -p /opt/esmt
WORKDIR /opt/esmt

RUN apt-get update && apt-get install -y curl wget git

# Install node (later)
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -

# Install chrome
RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" | tee --append /etc/apt/sources.list.d/google.list
RUN apt-get update
RUN apt-get install -fy -qq google-chrome-stable xvfb nodejs

ENV CHROME_BIN=google-chrome
ENV DISPLAY=:99.0

# Install angular cli
RUN npm install -g @angular/cli

CMD Xvfb $DISPLAY -ac
