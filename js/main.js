//Instancia o jogo
var game = new Game();
function MainLoop() {
    game.update();
    game.draw();
    //Chama o loop do jogo a 30fps
    setTimeout(MainLoop, 33.3333);
}
//Inicia
MainLoop();