settlers.factory('VerticiesFactory', function VerticiesFactory() {
    var factory {};
    factory.verticies = [
        {id: 1, isOccupied: false},
        {id: 2, isOccupied: false},
        {id: 3, isOccupied: false},
        {id: 4, isOccupied: false},
        {id: 5, isOccupied: false},
        {id: 6, isOccupied: false}
    ];

    factory.markOccupied = function(id) {
        verticies[id] = true;
    };
    
    return factory;
});
