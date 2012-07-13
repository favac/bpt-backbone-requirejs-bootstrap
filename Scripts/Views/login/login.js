// modulo vista del login
define(function (require, exports, module) {
    // librerias
    var jquery      = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        // el template para esta vista
        tmp         = require('text!templates/login/login.html'),

        // cargo el router de la aplicacion
        router      = require("../../router");


    var view = Backbone.View.extend({
        el: '#main',

        // Events from interface
        events: {
            "click #btnLogin"   : "ingresar"
        },

        // No optional
        render: function () {
            this.$el.html(tmp);
        },

        // Functions related to events
        ingresar: function (ev) {
            ev.preventDefault();
        }


    });

    exports.view = view;

});