// defino la configuración necesaria para require.js
require.config({
    // definiré unos atajos para
    // las librerias principales de la aplicación
    paths: {
        jquery      : 'Lib/jquery-1.7.2',
        underscore  : 'Lib/underscore-min',
        backbone    : 'Lib/backbone-min',

        // plugins
        text        : 'Lib/text',

        // carpeta para los templates
        templates   : '../Templates'
    }
});

// inicializo la aplicacion
require([
    // el punto de entrada de mi aplicacion
    'router'
], function (router) {
    var app = router.app;
    // inicializo el router backbone
    // var app = new router.appRouter();
});