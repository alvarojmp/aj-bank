"use strict";

exports.print = function (csrf_tk) {
  return "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><title>aj-bank</title><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta name=\"mobile-web-app-capable\" content=\"yes\"><meta name=\"apple-mobile-web-app-capable\" content=\"yes\"><meta name=\"calipso\" content=\"".concat(csrf_tk, "\"><link rel=\"manifest\" href=\"/manifest.json\"><link rel=\"shortcut icon\" href=\"/assets/img/favicon.ico\"><link rel=\"stylesheet\" href=\"/assets/css/home_style.css\"><link rel=\"stylesheet\" href=\"/assets/css/font_manjari.css\"><link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\"><link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\"><link rel=\"stylesheet\" href=\"/assets/css/home_style.css\"><!-- <link rel=\"stylesheet\" href=\"/assets/c/loader_spinner.c\"> --><!--<script src=\"https://cdnjs.cloudflare.com/ajax/libs/validator/10.11.0/validator.min.js\"></script>--><script src=\"/assets/js/config_fb.js\"></script><script src=\"/assets/js/fallback.min.js\"></script></head><body><div class=\"w3-container\"><h1>Dashboard</h1><h1>n/a</h1></div><script defer=\"defer\" src=\"/assets/js/bundle.f77de.js\"></script><script>window.fetch||document.write('<script src=\"/assets/js/polyfills.09a64.js\"><\\/script>')</script></body></html>");
};