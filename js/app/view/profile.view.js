var com = com || {};
com.homedepot = com.homedepot || {};
com.homedepot.view = com.homedepot.view || {};

com.homedepot.view.ProfileView = Backbone.View.extend({
    
    el: '#profile',
    template: Handlebars.compile($('#profile-template').html()),
    model: null,

    initialize: function(options){
        var self = this;

        // create a collection for this view to render
        self.model = new com.homedepot.model.Profile();

        // force the fetch to fire a reset event
        self.model.fetch({});
        self.listenTo(self.model, 'change', self.render);
    },

    render: function(){
        var self = this;
        var output = self.template({user: self.model.toJSON()});
        self.$el.html(output);
        return self;
    },
});