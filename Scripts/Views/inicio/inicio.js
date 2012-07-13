define(function (require, exports, module) {
    var jquery      = require('jquery'),
        _           = require('underscore'),
        Backbone    = require('backbone'),
        // el template para esta vista
        tmp         = require('text!templates/inicio/inicio.html'),

        // cargo el router de la aplicacion
        router      = require("../../router");


    var view = Backbone.View.extend({
        el: '#main',

        // Events from interface
        events: {

        },

        // No optional
        render: function () {
            this.$el.html(tmp);
        }

        // Functions related to events
    });

    exports.view = view;

});