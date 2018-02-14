<!DOCTYPE html>

<!--
Designed and built by Chris Saggerson (https://ch.rs)
-->

<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>SquareJazz Solutions</title>

  <style>
  <?php
    $stylesheets = json_decode(file_get_contents('./src/php/busters.json'), TRUE);
    foreach($stylesheets as $file):
      echo file_get_contents('./www/static/css/'.$file);
    endforeach;
  ?>
  </style>

  <link rel="icon" href="/image/favicon.png?v=3" type="icon" />
  <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
<body>

  <video class="bg-video" autoplay loop >
    <source src="/static/video/sb.webm" type="video/webm">
    <source src="/static/video/sb.mp4" type="video/mp4">
  </video>

  <main>
    <header id="header" role="banner" class="section header">
      <div class="container">
        <div class="section__wrap">

          <h1 class="header__title">
            <span>SquareJazz Solutions</span>
          </h1>
          
          <div class="header__content">
            <div class="header__text">
              <p class="lg">Recruiting for companies I’d want to work at.</p>
              <p class="lg">Placing candidates I’d want to work with.</p>
              <video class="header__video" autoplay loop >
                <source src="/static/video/sb.webm" type="video/webm">
                <source src="/static/video/sb.mp4" type="video/mp4">
              </video>
              <div class="header__overlay-content">
                <p class="lg">Recruiting for companies I’d want to work at.</p>
                <p class="lg">Placing candidates I’d want to work with.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="section contact">
      <div class="container">
        <div class="details vcard">

          <div class="details__l">
            <address>
              <div class="fn n">
                <span class="given-name">Claire</span>
                <span class="family-name">McDonald (nee Foster)</span>
              </div>
              <div class="org hidden">SquareJazz Solutions</div>
              <div class="adr">
                <div class="street-address">Accelerate Places, 101 Princess Street</div>
                <div class="locality">Manchester</div>
                <div class="region hidden">Greater Manchester</div>
                <div class="postal-code">M1 6DD</div>
                <div class="country-name hidden">United Kingdom</div>
              </div>
            </address>
          </div>

          <div class="details__r">
            <div class="details__row">
              email: <a class="email" href="mailto:claire@squarejazzsolutions.com">claire@squarejazzsolutions.com</a>
            </div>

            <div class="details__row">
              twitter: <a href="https://twitter.com/squarejazz" target="_blank">@squarejazz</a>
            </div>

             <div class="details__row">
              linkedin: <a href="https://www.linkedin.com/in/clairejanefoster/" target="_blank">Claire McDonald (nee Foster)</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>


</body>
</html>