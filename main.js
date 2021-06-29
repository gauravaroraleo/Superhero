canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
playerwidth=30;
playerheight=30;
player="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img)
    {
        player=Img;
        player.scaleToWidth(playerwidth);
        player.scaleToHeight(playerheight);
        player.set({
           top:player_y,left:player_x
        });canvas.add(player);
    }
    );
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keypress=e.keyCode;
    if(keypress=='38'){
        up();
        console.log("up");  
    }
    if(keypress=='40'){
       down();
        console.log("down");  
    }
  if(keypress=='37'){
     left();
      console.log("left");
  }  
    if(keypress=='39'){
      right();
        console.log("right");

    }
    
}
function up(){
    if(player_y>=0){
       player_y=player_y-5;
        playerupdate();  
        canvas.remove(player)
    }
    
    
}
function down(){
       if(player_y<=500){
           player_y=player_y+5;
           playerupdate(); 
            canvas.remove(player)
       } 
        
        
        
    }
    function left(){
        if(player_x>=0){
          player_x=player_x-5;
            playerupdate();
             canvas.remove(player)
            
            
        }
        
        
        
    }
function right(){
       if(player_x<=900){
           player_x=player_x+5;
           playerupdate(); 
            canvas.remove(player)
       } 
        
        
        
    }
    