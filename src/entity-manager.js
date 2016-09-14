/**
 * Created by landonbreckenridge on 9/14/16.
 */

module.exports = EntityManager;

function EntityManager(width, height, cellSize){
    this.worldWidth = width;
    this.worldHeight = height;
    this.cellSize = cellSize;
    this.cellWidth = Math.ceil(width/cellSize);
    // this.cellHeight = Math.ceil(height/cellSize);
    this.numberOfCells = this.cellWidth * Math.ceil(height / cellSize);
    this.cells = []
    for (var i = 0; i < this.numberOfCells; i++){
        this.cells[i]
    }
}

EntityManager.prototype.addEntity() = function (entity) {
    var left = Math.floor(entity.x/this.cellSize);
    var right = Math.ceil((entity.x + entity.width)/this.cellSize);
    var top = Math.floor(entity.y/this.cellSize);
    var bottom = Math.ceil((entity.y + entity.height)/this.cellSize);
    for (var x = left; x < right; x++){
        for (var y = top; y < bottom; y++){
            this.cells[y*this.cellWidth + x].push(entity);
        }
    }
};