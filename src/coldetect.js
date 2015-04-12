var checkPlayerNpcCollision = function( playerX, playerY, npcX, npcY ) {
    if (playerX == npcX && playerY == npcY){
    	return true;
    }
    else {
    	return false;
    }
};