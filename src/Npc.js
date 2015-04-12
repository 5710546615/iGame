var Npc = cc.Node.extend({
	ctor: function(){
		this._super();
		this.Npcs = cc.Sprite.create('res/npc.png');
		// this.Npcs.setAnchorPoint(new cc.Point(0,0));
		this.Npcs.setPosition(new cc.Point(0,0));
		this.addChild(this.Npcs);
	},
	update: function( dt ) {
    	this.setPositionY( this.getPositionY() - 5 );
    },
    randomPositionx : function(){

    },
    hit: function( player ) {
	var playerPos = player.getPosition();
	var myPos = this.getPosition();
 
        return checkPlayerNpcCollision( playerPos.x, playerPos.y, myPos.x, myPos.y );
    }
});