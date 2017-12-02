var com = com || {};
com.homedepot = com.homedepot || {};
com.homedepot.view = com.homedepot.view || {};

com.homedepot.view.TimelineView = Backbone.View.extend({

    el: '#timeline',
    template: Handlebars.compile($("#timeline-template").html()),
    timeline: null,
    initialize: function(options){
        var self = this;

        //create a collection for this view to render
        self.timeline = new com.homedepot.collection.Timeline();

        // initialize render
        self.render();

        //force the fetch to fire a reset event
        self.timeline.fetch({reset:true});
        self.listenTo(self.timeline, 'reset', self.render);
    },
    render: function(){
        var self = this;

        if(self.timeline.models.length > 0){
            var output = self.template({tweet: self.timeline.toJSON()});
            self.$el.append(output);
        }
        return self;
    },

});