var Player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/player.png' );
        this.directionX = 0;
        this.directionY = 0;

    },

    update: function( dt ) {

        var pos = this.getPosition();

        if(pos.x < screenWidth && pos.y < screenHeight){
            this.setPosition( new cc.Point( pos.x + this.directionX, pos.y + this.directionY) );
        }
        // else if(pos.x < 0){
        //     this.setPosition(new cc.Point(screenWidth , pos.y));
        // }
        
        // else {
        //     this.setPosition(new cc.Point (0,0));
        // }


    },
    
    moveUp: function(){
        this.directionY = 5;
        // this.setRotation(0);
    },
    moveRight: function(){
        // this.setFlippedX(false);
        this.directionX = 5;
        // this.setRotation(90);
    },
    moveLeft: function(){
        // this.setFlippedX(true);
        this.directionX = -5;
        // this.setRotation(270);
    },
    moveDown: function(){
        this.directionY = -5;
        // this.setRotation(180);
        
    },

    STOP: function(){
        this.directionX = 0;
        this.directionY = 0;
    }


});