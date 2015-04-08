var player = cc.Sprite.extend({
    ctor: function() {
        this._super();
        this.initWithFile( 'res/player.png' );
        this.directionX = 0;
        this.directionY = 0;
    
    },

    update: function( dt ) {

        var pos = this.getPosition();

        if(pos.x < screenWidth){
            this.setPosition( new cc.Point( pos.x + this.directionX, pos.y + this.directionY) );
        }
        else if(pos.x == 0){
            this.setPosition(new cc.Point(pos.x , pos.y));
        }
        else {
            this.setPosition(new cc.Point (0,pos.y))
        }
    },
    
    moveUP: function(){
        this.directionY = 3;
    },
    moveRight: function(){
        this.setFlippedX(false);
        this.directionX = 3;
    },
    moveLeft: function(){
        this.setFlippedX(true);
        this.directionX = -3;
    },
    STOP: function(){
        this.directionX = 0;
        this.directionY = 0;
    }


});