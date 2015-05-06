var Score = cc.Sprite.extend({
    ctor: function(x,y) {
        this._super();
        this.initWithFile( 'res/score.png' );
        this.directionX = 0;
        this.directionY = 0;       
    }
});