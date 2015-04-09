var Npc = cc.Node.extend({
	ctor: function(){
		this._super();
		this.Npcs = cc.Sprite.create('res/npc.png');
		// this.Npcs.setAnchorPoint(new cc.Point(0.5,0));
		this.Npcs.setPosition(new cc.Point(0,100));
		this.addChild(this.Npcs);
	},
	 update: function( dt ) {
        this.setPositionY( this.getPositionY() - 3 );
    }
});