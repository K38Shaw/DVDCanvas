var dvdLogo;
var screenBackground;

function startScene() {
    myTVScreen.start();
    dvd = new dvdLogo(100, 75, "./assets/dvdLogo.png", 10, 10, "image");
    screenBackground = new component(656, 325, "black", 0, 0);
}

var myTVScreen = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 325;
        this.canvas.height = 245;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateScreen, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}
function dvdLogo(width, height, color, x, y, type) {
    this.width = width;
    this.height = height;
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
      }
    this.x = x;
    this.y = y; 
    this.speedX = 0;
    this.speedY = 0;  
    console.log(color)
    
    this.update = function() {
        ctx = myTVScreen.context;
        if(type == "image"){
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
   } 

    ctx = myTVScreen.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.newPosition = function(){
        this.x += this.speedX;
        this.y += this.speedY;
        this.hitEdge();
    } 
    this.hitEdge = function(){
        var screenLeftSide = myTVScreen.canvas.width - 325 ;
        var screenRightSide = myTVScreen.canvas.width - this.width;
        var screenTopSide = myTVScreen.canvas.height - 245 ;
        var screenBottomSide = myTVScreen.canvas.height - this.height;
        var imageSources = ["./assets/dvdRed.png", "./assets/dvdBlue.png", "./assets/dvdLimeGreen.png", "./assets/dvdPurple.png", "./assets/dvdOrange.png"];
        if(this.y == screenBottomSide){
            this.speedY = -this.speedY;
            dvd.image.src = imageSources[Math.floor(Math.random() * 5)];
            
        }
        if(this.y == screenTopSide){
            this.speedY = -this.speedY;
           dvd.image.src = imageSources[Math.floor(Math.random() * 5)];

        }
        if(this.x == screenRightSide){
            this.speedX = -this.speedX;
           dvd.image.src = imageSources[Math.floor(Math.random() * 5)];

        }
        if(this.x == screenLeftSide){
            this.speedX = -this.speedX;
            dvd.image.src = imageSources[Math.floor(Math.random() * 5)];

        }

    }

}
function component(width, height, color, x, y, type) {
    this.width = width;
    this.height = height;
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
      }
    this.x = x;
    this.y = y; 
    this.speedX = 0;
    this.speedY = 0;  
    console.log(color)
    
    this.update = function() {
        ctx = myTVScreen.context;
        if(type == "image"){
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
   } 

    ctx = myTVScreen.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    this.newPosition = function(){
        this.x += this.speedX;
        this.y += this.speedY;
        this.hitEdge();
    } 
    this.hitEdge = function(){
        var screenLeftSide = myTVScreen.canvas.width - 500 ;
        var screenRightSide = myTVScreen.canvas.width - this.width;
        var screenTopSide = myTVScreen.canvas.height - 300 ;
        var screenBottomSide = myTVScreen.canvas.height - this.height;
        var imageSources = ["./assets/dvdRed.png", "./assets/dvdBlue.png", "./assets/dvdLimeGreen.png", "./assets/dvdPurple.png", "./assets/dvdOrange.png"];
        if(this.y == screenBottomSide){
            this.speedY = -this.speedY;
            //dvd.image.src = imageSources[Math.floor(Math.random() * 5)];
            
        }
        if(this.y == screenTopSide){
            this.speedY = -this.speedY;
           // dvd.image.src = imageSources[Math.floor(Math.random() * 5)];

        }
        if(this.x == screenRightSide){
            this.speedX = -this.speedX;
           // dvd.image.src = imageSources[Math.floor(Math.random() * 5)];

        }
        if(this.x == screenLeftSide){
            this.speedX = -this.speedX;
            //dvd.image.src = imageSources[Math.floor(Math.random() * 5)];

        }

    }

}
function startRandomPattern(){
    speeds = [1, -1];
    dvd.speedY = speeds[Math.floor(Math.random() * 2)];
    dvd.speedX = speeds[Math.floor(Math.random() * 2)];

}

this.hitSide = function(){

    var logoLeftSide = this.x;
    var logoRightSide = this.x + this.width;
    var logotopSide = this.y;
    var logoBottomSide = this.y + this.height;
    var screenLeftSide = ctx.myTVScreen.canvas.width - 270;
    var screenRightSide = ctx.myTVScreen.canvas.width;
    var screenTopSide = ctx.myTVScreen.canvas.height - 470;
    var screenBottomSide = ctx.myTVScreen.canvas.height;
    if (logoLeftSide < screenLeftSide){
        this.speedX = -this.speedX;
        
    }
    if (logoRightSide > screenRightSide){
        this.speedX = -this.speedX;
    }
    if (logotopSide < screenTopSide){
        this.speedY = -this.speedY;
    }
    if (logoBottomSide > screenBottomSide){
        this.speedY = -this.speedY;
    }
}
function stopMovement(){
    dvd.speedX = 0;
    dvd.speedY = 0;
}

function updateScreen() {
    myTVScreen.clear();
    screenBackground.newPosition();
    screenBackground.update();
    dvd.newPosition();
    dvd.update();
  }