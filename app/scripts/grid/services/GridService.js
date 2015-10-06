settlers.service('GridService', function GridService(TileFactory, VerticiesFactory, EdgesFactory) {
    tiles = TileFactory.tiles;
    verticies = VerticiesFactory.verticies;
    edges = EdgesFactory.edges;
    grid = [];

    this.generateGrid = function () {
        for (var i = 0; i < 19; i++) {
            grid.push({
                id: grid.length + 1,
                verticies: [verticies],
                edges: [edges]
            });
        }
    };
});
