var player = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'res/player.png' );

        this.x = x;
        this.y = y;


    },

    update: function( dt ) {
    var pos = this.getPosition();

    if(pos.x < screenWidth)
    this.setPosition( new cc.Point( pos.x, 0 ) );

    },
    switchDirection: function() {
        if ( this.direction == Ship.DIR.UP ) {
        this.direction = Ship.DIR.RIGHT;
        this.setRotation( 90 );
        } else {
        this.direction = Ship.DIR.UP;
        this.setRotation( 0 );
    }
    }

});