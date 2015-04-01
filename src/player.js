var player = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'res/player.png' );
         this.setAnchorPoint(0,0);

        this.x = x;
        this.y = y;

        this.moveLeft = false;
        this.moveRight = false;

        // this.updateSpritePosition();


    },

    update: function( dt ) {
    var pos = this.getPosition();

    this.setPosition( new cc.Point( pos.x, 0 ) );

    },

});