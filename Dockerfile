FROM jekyll/jekyll:3

WORKDIR /srv/jekyll
VOLUME  /srv/jekyll

EXPOSE 4000

CMD jekyll serve --port 4000 -s ./src
