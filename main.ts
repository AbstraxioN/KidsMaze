namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairNorth, function (sprite, location) {
    game.over(true, effects.smiles)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.reset()
})
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . 6 6 6 6 6 . . . . . . 
. 5 . 6 6 6 6 6 6 6 6 6 . 5 . . 
6 5 6 6 3 3 3 3 3 3 3 6 6 5 6 6 
. 5 6 6 3 8 3 3 3 8 3 6 6 5 . . 
. . 6 6 3 3 3 3 3 3 3 6 6 . . . 
. . 6 . 3 3 2 2 2 3 3 . 6 . . . 
. . . . 3 3 3 3 3 3 3 . . . . . 
. . . . . . 3 3 3 . . . . . . . 
. . . . . a 8 8 8 a . . . . . . 
. . 5 3 3 a a 8 a a 3 3 5 . . . 
. . . . . a a a a a . . . . . . 
. . . . . a a a a a . . . . . . 
. . . . . a a a a a . . . . . . 
. . . . . a a a a a . . . . . . 
. . . . . . 3 . 3 . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tiles.createTilemap(
            hex`10001000070808080808080808080808080808060109090909090912090909090909090501090a0a0a09090a09090a09090909050109090a0909090a09090a090a0a09050109090a090a0a0a090a0a09090a09050109090a090a090909090a0a0a0a090501090a0a090a090a0a090a090a09090509090a09090a0a0a0a0a0a090a0a090901090a09090a090909090909090a090501090a0a0a0a090a0a0a0a0a0a0a0905010909090909090909090909090a090501090a090a0a0a0a0a0a0a0a0a0a090501090a09090a090909090909090a090501090a0a090a0a0a0a090a0a0a0a09050109140909090909140914090909090503020202020202020202020202020204`,
            img`
. . . . . . . . . . . . . . . . 
. 2 2 2 2 2 2 . 2 2 2 2 2 2 2 . 
. 2 . . . 2 2 . 2 2 . 2 2 2 2 . 
. 2 2 . 2 2 2 . 2 2 . 2 . . 2 . 
. 2 2 . 2 . . . 2 . . 2 2 . 2 . 
. 2 2 . 2 . 2 2 2 2 . . . . 2 . 
. 2 . . 2 . 2 . . 2 . 2 . 2 2 . 
2 2 . 2 2 . . . . . . 2 . . 2 2 
. 2 . 2 2 . 2 2 2 2 2 2 2 . 2 . 
. 2 . . . . 2 . . . . . . . 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
. 2 . 2 . . . . . . . . . . 2 . 
. 2 . 2 2 . 2 2 2 2 2 2 2 . 2 . 
. 2 . . 2 . . . . 2 . . . . 2 . 
. 2 . 2 2 2 2 2 . 2 . 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
`,
            [myTiles.tile0,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath1,sprites.castle.tilePath2,sprites.builtin.forestTiles0,sprites.castle.tilePath5,sprites.castle.tileDarkGrass3,sprites.castle.tileGrass1,sprites.castle.tileGrass2,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.doorClosedWest,sprites.dungeon.stairSouth,sprites.dungeon.stairNorth,sprites.builtin.forestTiles22,sprites.dungeon.floorLight2],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.floorLight2)
info.startCountdown(25)
scene.cameraFollowSprite(mySprite)
forever(function () {
    music.playMelody("G E G C A B C5 E ", 140)
})
