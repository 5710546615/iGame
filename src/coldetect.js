var checkPlayerNpcCollision = function( playerX, playerY, npcX, npcY ) {
	if ( Math.abs(npcX - playerX) < 22 && Math.abs(npcY - playerY) < 22 ) {
		if(playerY == npcY || playerX == npcX){
			return true;
		}
	}
	if ( Math.abs(npcX - playerX) < 16 && Math.abs(npcY - playerY) < 16 ) {
    	return true;
    }

    else {
    	return false;
    }
};