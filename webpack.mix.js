const mix = require('laravel-mix');

mix.js('frontend/app.js', 'web/js/app.js')
    .setPublicPath('web')
    .react();