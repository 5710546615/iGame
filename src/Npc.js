var Npc = cc.Node.extend({
	ctor: function(){
		this._super();

		this.WIDTH = 20;
		this.HEIGHT = 13;
		
		this.MAP = [
            '####################',
            '#..................#',
            '#.###.###..###.###.#',
            '#.#...#......#...#.#',
            '#.#.###.####.###.#.#',
            '#.#.#..........#.#.#',
            '#.....###. ###.....#',
            '#.#.#..........#.#.#',
            '#.#.###.####.###.#.#',
            '#.#...#......#...#.#',
            '#.###.###..###.###.#',
            '#..................#',
            '####################'
        ];

        for ( var r = 0; r < this.HEIGHT; r++ ) {
	    	for ( var c = 0; c < this.WIDTH; c++ ) {
				if ( this.MAP[ r ][ c ] == '#' ) {
		    		var s = cc.Sprite.create( 'res/npc.png' );
		    		// s.setAnchorPoint( cc.p( 0, 0 ) );
		   			s.setPosition( cc.p( c * 40, (this.HEIGHT - r - 1) * 40 ) );
		    		this.addChild( s );
				}
	    	}
		}
		
		
	},
	update: function( dt ) {
    	this.setPositionY( this.getPositionY() -  3);
    },
    randomPositionx : function(){

    },
    hit: function( player ) {
	var playerPos = player.getPosition();
	var myPos = this.getPosition();
 
        return checkPlayerNpcCollision( playerPos.x, playerPos.y, myPos.x, myPos.y );
    }
});