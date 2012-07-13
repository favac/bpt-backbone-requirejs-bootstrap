/*jshint jquery: true*/
/*global define: false*/

// modulo que define las rutas de la aplicacion (backbone)
define(function (require, exports, module) {
    "use strict";

    // cargo las librerias que necesito
    var jquery   = require('jquery');
    var _        = require('underscore');
    var Backbone = require('backbone');

    var AppRouter = Backbone.Router.extend({
        routes: {
            // login de la aplicación (pantalla de entrada)
            ''                          : 'login',
            'inicio'                    : 'inicio',
            'nuevaFactura/:cliente'     : 'nuevaFactura',
            'cliente'                   : 'cliente'
        },

        // funcion de inicializacion
        initialize: function () {
            // Backbone.history.start();
        },

        // *************************************************************************
        // FUNCTIONES CUSTOM
        // *************************************************************************
        getAnterior: function () {
            return this.anterior;
        },

        navigateAnterior: function () {
            this.navigate(window.history.back(), {trigger: true});
            // this.navigate(this.anterior, {trigger: true});
        },

        setAnterior: function (ant) {
            this.anterior = ant;
        },

        // *************************************************************************
        // FUNCIONES DE NAVEGACION
        // *************************************************************************
        // pagina del  nuevo cliente
        cliente: function (ruta) {
            var cliente = require("Views/cliente/nuevo");
            var v = new cliente.view();
            v.render();
        },

        // Pagina de inicio
        inicio: function () {
            var inicio = require("Views/inicio/inicio");
            var v = new inicio.view();
            v.render();
        },

        // se ejecuta al login
        login: function () {
            var login = require("Views/login/login");
            var v = new login.view();
            v.render();

        },

        // página de la nueva factura
        nuevaFactura: function (cliente) {
            var fact = require("Views/facturacion/nuevo");
            var v = new fact.view({
                cliente: cliente
            });
            v.render();
        }

    });

    // inicializo la aplicaci{on al cargar el dom
    $(function(){

        var app = new AppRouter();

        // constructor del router
        exports.AppRouter = AppRouter;

        // aplicacion "iniciada"
        exports.app = app;

        Backbone.history.start({
            pushState   : true,
            root        : "/facturacion/"
        });

        // abro la primera interfaz
        app.login();
    });

});