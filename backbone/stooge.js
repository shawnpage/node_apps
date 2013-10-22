var Stooge = Backbone.Model.extend({
    defaults: {
        'name': 'Guy Incognito',
        'power': 'Classified',
        'friends': [],
    },
});

var account = new Stooge({ name: 'Larry', power: 'Baldness', friends: ['Curly', 'Moe']});


