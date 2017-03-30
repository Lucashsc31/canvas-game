function Game(){
    var canvas = document.getElementById("jogo");
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext("2d");
    this.context.fillStyle = "#ecf0f1";

    this.p1 = new Player(5, 0);
    this.p1.y = this.height/2 - this.p1.height/2;
    this.p2 = new Player(this.width - 5 - 6, 0);
    this.p2.y = this.height/2 - this.p2.height/2;
}
Game.prototype.draw = function(){
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.fillRect(this.width/2, 0, 2, this.height);

    this.p1.draw(this.context);
    this.p2.draw(this.context);
}
Game.prototype.update = function(){
    if (this.paused)
        return
}
