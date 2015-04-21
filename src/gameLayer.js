var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.background = new Background();
        this.background.setPosition( new cc.Point(400,300));
        this.addChild(this.background);

        this.player = new Player();
        this.player.setPosition( new cc.Point( screenWidth / 2 , 100));
        this.addChild( this.player );
        this.player.scheduleUpdate();
    
        this.WIDTH = 20;
        this.HEIGHT = 100;
        this.MAP = [
            '####################',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#...##.........##..#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..#..#..#..#..#..##',
            '##..##..##..##..##.#',
            '###..###..###..###.#',
            '##..##..##..##..##.#',
            '#..#..#..#..#..#..##',
            '##..##..##..##..##.#',
            '###..###..###..###.#',
            '##..##..##..##..##.#',
            '#..#..#..#..#..#..##',
            '##..##..##..##..##.#',
            '###..###..###..###.#',
            '##..##..##..##..##.#',
            '#..#..#..#..#..#..##',
            '##..##..##..##..##.#',
            '###..###..###..###.#',
            '##..##..##..##..##.#',
            '#..#..#..#..#..#..##',
            '##..##..##..##..##.#',
            '#000..000000000..00#',
            '###..###..###..###.#',
            '##..##..##..##..##.#',
            '#..#..#..#..#..#..##',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..#################',
            '#..................#',
            '#..................#',
            '#..................#',
            '#################..#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..#################',
            '#..................#',
            '#..................#',
            '#..................#',
            '#################..#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..#################',
            '#..................#',
            '#..................#',
            '#..................#',
            '#################..#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
            '#..................#',
        ];
        this.npcs = [];
        var npc = null;
        for ( var r = 0; r < this.HEIGHT; r++ ) {
            for ( var c = 0; c < this.WIDTH; c++ ) {
                if ( this.MAP[ r ][ c ] == '#' ) {
                    npc = new Npc();
                    npc.setPosition( cc.p( c * 40 + 20, (this.HEIGHT - r - 1) * 40) );
                    this.addChild( npc );
                    npc.scheduleUpdate();
                    this.npcs.push( npc );
                }
                if ( this.MAP[ r ][ c ] == '0' ) {
                    npc = new FastNpc();
                    npc.setPosition( cc.p( c * 40 + 20, (this.HEIGHT - r - 1) * 400) );
                    this.addChild( npc );
                    npc.scheduleUpdate();
                    this.npcs.push( npc );
                }
            }
        }
        this.score = 0;
        this.scoreLabel = cc.LabelTTF.create(0, 'Arial',32);
        this.scoreLabel.setPosition(cc.p(700,550));
        this.addChild(this.scoreLabel);

        this.addKeyboardHandlers();
        this.scheduleUpdate();
        return true;
    },
    update: function( dt ) {
        var self = this;
        self.score += 0.1;
        self.scoreLabel.setString(Math.floor(self.score));
        this.npcs.forEach( function( npc, i ) {
        	
            var npcX = npc.getPositionX();
            var npcY = npc.getPositionY();
            var playerX = self.player.getPositionX();
            var playerY = self.player.getPositionY();
            if ( Math.abs(npcX - playerX) < 22 && Math.abs(npcY - playerY) < 22 ) {
                if(playerY == npcY || playerX == npcX){
                    var gameOverLabel = cc.LabelTTF.create( 'Game over', 'Arial', 60 );
                        gameOverLabel.setPosition( cc.p( 400, 300 ) );
                        self.addChild( gameOverLabel );
                        cc.director.pause();
                    return;
                }
            }
            if ( Math.abs(npcX - playerX) < 16 && Math.abs(npcY - playerY) < 16 ) {
                var gameOverLabel = cc.LabelTTF.create( 'Game over', 'Arial', 60 );
                    gameOverLabel.setPosition( cc.p( 400, 300 ) );
                    self.addChild( gameOverLabel );
                    cc.director.pause();    
                    return;
            }
        });
    },
    onKeyDown: function( keyCode, event ) {
        if ( keyCode == cc.KEY.left ) {
            this.player.moveLeft();
        } else if ( keyCode == cc.KEY.right ) {
            this.player.moveRight();
        } else if ( keyCode == cc.KEY.up ) {
            this.player.moveUp();
        } else if (keyCode == cc.KEY.down){
            this.player.moveDown();
        } else {
            this.player.STOP();
        }

    },
    onKeyUp: function( keyCode, event ) {
        if ( keyCode == cc.KEY.left  || keyCode == cc.KEY.right || keyCode == cc.KEY.up || keyCode == cc.KEY.down) {
            this.player.STOP();
        }
    },
    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
        event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( keyCode, event ) {
                self.onKeyDown( keyCode, event );
            },
            onKeyReleased: function( keyCode, event ) {
                self.onKeyUp( keyCode, event );
            }
        }, this);
    }
});
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});