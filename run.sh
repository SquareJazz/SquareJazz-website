#!/bin/bash

# Add npm binaries to path
export PATH=./node_modules/.bin:$PATH

# Get args from .env
export $(egrep -v '^#' .env | xargs)

#function postinstall(){
  # Create directories
  #mkdir "$/js" -p \
  #mkdir "$/css" -p \
  #mkdir "$/image" -p \
  #mkdir "$/svg/inline" -p
#}

function watch(){
  npx browser-sync start \
  --files "$static/css/**.css, $static/js/**.js, $webroot/*.html" \
  --host $host \
  --server \
  --ss "./www" \
  --port $port \
  --no-open \
 & watch:php \
 & watch:js \
 & watch:css \
 & watch:svg \
 & watch:images
}

function build(){
  build:php \
  & build:js \
  & build:css \
  & build:svg \
  & build:images
}

function docker(){
  docker-compose up
}

# ------


function build:php(){
  rm -f "./www/index.html" \
  && php "$src/php/index.php" -w > "./www/index.html"
}

function watch:php(){
  echo "PHP updated" \
  & npx onchange -i "$src/php/**.php" \
  -- npm run build:php
}

function watch:js(){
  npx simplifyify $src/js/*.js \
  --outfile $static/js/*.js \
  --debug \
  --watch
}

function build:js(){
  npx simplifyify $src/js/*.js \
  --outfile $static/js/*.js \
  --minify
}

function watch:css(){
  npx postcss $src/css/*.css \
  --dir "$static/css/" \
  --watch
}

function build:css(){
  npx postcss $src/css/*.css \
  --dir "$static/css/" \
  --no-map
}

function watch:svg(){
  npx onchange "$src/svg/**/**.svg" \
  -- build:svg:sprite & build:svg:inline
}

function build:svg(){
  build:svg:sprite \
  & build:svg:inline
}

function build:svg:sprite(){
  npx svg-sprite "$src/svg/sprite/**.svg" \
  --dest $static/svg \
  --symbol \
  --symbol-dimensions="--d" \
  --symbol-sprite sprite.svg \
  --symbol-render-css
}

function build:svg:inline(){
  npx svgo -f "$src/svg/inline" \
  --disable=removeUnknownsAndDefaults \
  -o $static/svg/inline
}

function watch:images(){
  npx onchange "$src/image/**.**" \
  -- build:images
}

function build:images(){
  build:images:jpeg \
  & build:images:png \
  & build:images:webp
}

function build:images:jpeg(){
  npx imagemin "$src/image/*.jpg" \
  --plugin=mozjpeg \
  -o $static/image/
}

function build:images:webp(){
  npx imagemin "$src/image/*.jpg" \
  --plugin=webp \
  -o $static/image/
}

function build:images:png(){
  npx imagemin "$src/image/*.png" \
  -o $static/image/
}

function build:video(){
  build:video:webm \
  & build:video:mp4
}

function build:video:webm(){
  for i in $src/video/*.mov;
    do
      ffmpeg -i "$i" \
      -c:v libvpx \
      -y \
      -vf "scale=880:-1, crop=660:495:110:0" \
      -b:v 1M "$static/video/$(basename ${i%.*}).webm"
    done
}

function build:video:mp4(){
  for i in $src/video/*.mov;
    do
      ffmpeg -i "$i" \
      -c:v libx264 \
      -f mp4 \
      -y \
      -vf "scale=880:-1, crop=660:495:110:0" \
      -b:v 1M "$static/video/$(basename ${i%.*}).mp4"
    done
}

function build:video:images(){
  for i in $src/video/*.mov;
    do
      ffmpeg -i "$i" \
      -vf "select=eq(n\,0)" \
      -q:v 1 \
      -f image2pipe - \
        | imagemin \
        --plugin=mozjpeg > "$static/video/$(basename ${i%.*}).jpg";
    done
}

# Run a function name in the context of this script
eval "$@"