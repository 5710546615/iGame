var Heart = cc.Node.extend({
	ctor: function(){
		this._super();
		this.Hearts = cc.Sprite.create('res/heart.png');
		// this.Npcs.setAnchorPoint(new cc.Point(0.5,0));
		this.Hearts.setPosition(new cc.Point(0,100));
		this.addChild(this.Hearts);
	},
	 update: function( dt ) {
        this.setPositionY( this.getPositionY() - 3 );
    }
});