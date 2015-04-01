var GameLayer = cc.LayerColor.extend({

    init: function() {

        this._super( new cc.Color( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );
 
    this.player = new player();
    this.player.setPosition( new cc.Point( 200, 100 ) );
    this.addChild( this.player );
    this.player.scheduleUpdate();
    
    this.addKeyboardHandlers();

    return true;
    },

    onKey: function( e ) {
    if ( e.keyCode = Keyboard.LEFT ) {
        this.player.moveLEFT();
    }
    else if ( e.keyCode = Keyboard.RIGHT ) {
        this.player.moveRIGHT();
    } 
    else if ( e.keyCode = Keyboard.UP ) {
        this.player.moveUP();
    } 
    else if ( e.keyCode = Keyboard.DOWN ) {
        this.player.moveDOWN();
    }
    else {
        this.player.STOP();
    }

    },



    addKeyboardHandlers: function() {
        var self = this;
        cc.eventManager.addListener({
            event: cc.EventListener.KEYBOARD,
            onKeyPressed : function( e ) {
                self.onKeyDown( e );
            },
            onKeyReleased: function( e ) {
                self.onKeyUp( e );
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