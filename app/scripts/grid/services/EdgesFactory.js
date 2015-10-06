settlers.factory('EdgesFactory', function EdgesFactory() {
    var factory {};
    factory.edges = [
        {id: 1, isOccupied: false},
        {id: 2, isOccupied: false},
        {id: 3, isOccupied: false},
        {id: 4, isOccupied: false},
        {id: 5, isOccupied: false},
        {id: 6, isOccupied: false}
    ];

    factory.markOccupied = function(id) {
        edges[id] = true;
    };

    return factory;
});
