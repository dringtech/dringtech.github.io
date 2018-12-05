---
layout: page
permalink: /tech/cookies/
title: All about cookies
cookie_descriptions:
  dt_cookie_approval: approval for this site to set cookies
  _ga: Google analytics cookie
  _gid: Google analytics cookie
  _gat: Google analytics cookie
---

Cookies are small snippets of information stored on your computer by
websites that you visit. When you return to the website, this information
is sent to the web server.

These are usually used for one of three purposes:

* To enhance the operation of the website. Examples of this might be
  website preferences or confirmation.
* To monitor the usage and performance of the website. Website owners often
  use statistics about how their site is being used to improve the service
  they provide.
* Advertising and tracking. Many websites use advertising as a source of
  revenue. Advertisers use cookies to analyse how effective their adverts
  are being and to personalise your adverts.

This site uses the following cookies:

<div id='cookie-list'></div>

You can read much more about cookies at the
[All About Cookies](https://www.aboutcookies.org/) website.

<script>
  window.addEventListener(
    'cookieUtilsLoaded',
    function printCookies () {
      var outputList = document.createElement('ul');
      var cookieList = window.dringtech.cookie.list();

      var cookieDetails = {{ page.cookie_descriptions | jsonify }};

      Object.keys(cookieList).forEach(function (i) {
        var item = document.createElement('li');
        item.append(i + ': ' + cookieDetails[i]); outputList.append(item);
      });

      document.querySelector('#cookie-list').append(outputList);
    },
    false);
</script>
