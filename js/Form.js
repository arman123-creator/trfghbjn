class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h3');
       this.title = createElement('h2');
       this.tip = createElement('h4')
       this.tip2 = createElement('h4')
       this.tip3 = createElement('h4')
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.tip.hide();
        this.tip2.hide();
        this.tip3.hide()

    }
    display() {
        this.title.html("{FRUIT CATCHER}");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'pink');
        this.button.position(550,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'yellow');
        this.tip.html("TIP:- PRESS (R) ARROW TO MOVE RIGHT");
        this.tip.style('color', 'white');
        this.tip.style('font-size', '20px');
        this.tip.position(150,200)
        this.tip2.html("TIP:- PRESS (L) ARROW TO MOVE LEFT");
        this.tip2.style('color', 'white');
        this.tip2.style('font-size', '20px');
        this.tip2.position(150,230)
this.tip3.html("TIP:- EACH FRUIT WILL FETCH YOU WITH 5 POINTS")
this.tip3.style('color', 'white');
this.tip3.style('font-size', '20px');
this.tip3.position(150,260)

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("HII " + player.name)
            this.greeting.position(displayWidth/2 - 70, displayHeight/4);
            this.greeting.style('color', 'red');
            this.greeting.style('font-size', '100px');
          
        });

    }
}