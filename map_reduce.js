map = function() { emit( this.author, 1 );}; 

reduce = function( key, values ) {
    var total = 0;
    
    values.forEach( function( value) { 
        total += value; 
    });
    
    return total;
};



db.books.mapReduce( map, reduce, { out: "bookoutput"});


db.bookoutput.find();

