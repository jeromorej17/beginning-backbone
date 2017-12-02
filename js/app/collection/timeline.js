var com = com || {};
com.homedepot = com.homedepot || {};
com.homedepot.collection = com.homedepot.collection || {};

com.homedepot.collection.Timeline = Backbone.Collection.extend({

    // the model that this collection uses
    model: com.homedepot.model.Tweet,

    //server-side url to connect to for the collection
    url: 'http://localhost:8080/timeline',
    
    initialize: function(options){
        // anything to be defined on construction goes here
    },
});