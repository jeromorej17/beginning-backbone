var com = com || {};
com.homedepot = com.homedepot || {};
com.homedepot.model = com.homedepot.model || {};

com.homedepot.model.Tweet = Backbone.Model.extend({
    
    parse: function(model) {
        //model.created_at "Sat Dec 02 12:43:24 +0000 2017"
        var created = model.created_at;
        var friendly = moment(model.created_at, "ddd MMM DD HH:mm:ss ZZ YYYY").fromNow();
        model.friendlyDate = friendly;
        return model;
    }
    
});