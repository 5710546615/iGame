var FastNpc = cc.Sprite.extend({
	ctor: function(){
		this._super();
		this.initWithFile( 'res/npc.png' );
		
	},
	update: function( dt ) {
    	this.setPositionY( this.getPositionY() -  10);
    }


});