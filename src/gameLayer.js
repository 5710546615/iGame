var GameLayer = cc.LayerColor.extend({

    init: function() {

        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.background = new Background();
        this.background.setPosition( new cc.Point(400,300));
        this.addChild(this.background);

        this.player = new player();
        this.player.setPosition( new cc.Point( 200, 83 ) );
        this.addChild( this.player );
        this.player.scheduleUpdate();
    
        this.addKeyboardHandlers();

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
            this.player.moveUP();
        }
        else {
            this.player.STOP();
        }

    },
    onKeyUp: function( keyCode, event ) {
        if ( keyCode == cc.KEY.left  || keyCode == cc.KEY.right || keyCode == cc.KEY.up ) {
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