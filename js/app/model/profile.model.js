var com = com || {};
com.homedepot = com.homedepot || {};
com.homedepot.model = com.homedepot.model || {};

com.homedepot.model.Profile = Backbone.Model.extend({
    
    urlRoot: 'http://localhost:8080/profile',
    parse: function(model){
        return model;
    }
});