var Background = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'res/background.png' );
        this.directionX = 0;
        this.directionY = 0;
    
    }
});