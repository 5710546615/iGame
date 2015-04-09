var GameLayer = cc.LayerColor.extend({

    init: function() {

        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.background = new Background();
        this.background.setPosition( new cc.Point(400,300));
        this.addChild(this.background);

        this.player = new Player();
        this.player.setPosition( new cc.Point( 400, 100 ) );
        this.addChild( this.player );
        this.player.scheduleUpdate();
    
    
        this.Npcs = new Npc();
        this.Npcs.setPosition(new cc.Point(400,600));
        this.addChild(this.Npcs);

        // this.Hearts = new Heart();
        // this.Hearts.setPosition(new cc.Point(500,600));
        // this.addChild(this.Hearts);
        
        this.addKeyboardHandlers();

        this.Npcs.scheduleUpdate();

        // this.Hearts.scheduleUpdate();

        return true;
    },

    onKeyDown: function( keyCode, event ) {

        if ( keyCode == cc.KEY.left ) {
            this.player.moveLeft();
        }
        else if ( keyCode == cc.KEY.right ) {
            this.player.moveRight();
        } 
        else if ( keyCode == cc.KEY.up ) {
            this.player.moveUp();
        }
        else if (keyCode == cc.KEY.down){
            this.player.moveDown();
        }
        else {
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
    },

});
 
var StartScene = cc.Scene.extend({

    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );

    }

});