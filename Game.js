class Game{
constructor(){
   

}
  getState(){
    database.ref('gameState').on("value",function(data){
        gameState=data.val();
    });

  }
  update(state){
    database.ref('/').update({
      gameState:state
    })
}
  start(){
  if(gameState===0){
      player=new Player();
      player.getCount();
      form = new Form();
      form.display();
  }
   }
 play(){
  form.hide();
  textSize(30);
  text("gameStart",120,100);
  Player.getPlayerInfo();
 }
}
