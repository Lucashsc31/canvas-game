function Player(x, y){
    this.x = x;
    this.y = y;
    this.width = 6;
    this.height = 30;
    this.score = 0;
}

Player.prototype.draw = function(p){
    p.fillRect(this.x, this.y, this.width, this.height);
}