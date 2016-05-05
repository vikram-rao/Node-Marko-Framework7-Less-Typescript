module.exports = require('marko-widgets').defineComponent({

    template: require('./template.marko'),

    handleButtonClick: function(event, el) {
        console.log("Clicked!");
    },

    init: function() {
        var el = this.el;
    },

    getInitialState: function(input) {
        console.log(input);
        return {
            buttonName:input.buttonName
        };
    },

    getTemplateData: function(state, input) {
        console.log(input);
        return {
            buttonName:input.buttonName
        };
    }

});