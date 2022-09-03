const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.ts('resources/js/app.js', 'public/js')
    // .postCss('resources/css/app.css', 'public/css', [
    //     //
    // ])
    // .sass('resources/js/sass/index.scss', 'public/css').options({
    //     postCss: [ tailwindcss('./tailwind.config.js') ],
    // })

    .sass('resources/js/sass/index.scss', 'public/css').options({
        postCss: [tailwindcss('./tailwind.config.js')],
    })
