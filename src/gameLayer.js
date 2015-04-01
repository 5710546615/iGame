var GameLayer = cc.LayerColor.extend({

    init: function() {

        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
 
    this.player = new player();
    this.player.setPosition( new cc.Point( 200, 600 ) );
    this.addChild( this.player );
    this.player.scheduleUpdate();
    
    this.addKeyboardHandlers();

    return true;
    },

    onKeyDown: function( keyCode, event ) {
    if ( keyCode == cc.KEY.space ) {
        this.player.switchDirection();
    }
    },

    onKeyUp: function( keyCode, event ) {
    console.log( 'Up: ' + keyCode.toString() );
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