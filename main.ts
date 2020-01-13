namespace SpriteKind {
    export const Banana = SpriteKind.create()
}
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
function Timescore () {
    info.changeScoreBy(1)
}
function end () {
    game.over(false, effects.slash)
}
function cloud () {
    Cloud = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . b b b b b b . 
. . . . . b b b b 1 1 1 1 1 b . 
. . . . b 1 1 1 1 1 1 1 1 1 b . 
. . . b 1 1 1 f 1 1 1 f 1 1 1 b 
. . b 1 1 1 1 1 1 1 1 1 1 1 1 b 
. . b 1 1 f 1 1 1 1 1 1 f 1 b . 
. b 1 1 1 1 f f f f f f 1 1 b . 
b 1 1 1 1 1 1 1 1 1 1 1 1 1 1 b 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, 50, 0)
    Cloud.setPosition(0, 20)
}
function raindrop () {
    Rain = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 6 . . . . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . . . . 6 6 6 6 6 . . . . . . 
. . . . 6 6 6 6 6 6 6 . . . . . 
. . . . 6 6 6 6 6 6 6 . . . . . 
. . . . 6 6 6 6 6 6 6 . . . . . 
. . . . . 6 6 6 6 6 . . . . . . 
. . . . . . 6 6 6 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Cloud, 0, 100)
    Rain.y += 3
    Rain.x += Math.randomRange(0, 10)
    Rain.setKind(SpriteKind.Enemy)
}
function score () {
    Banana.destroy()
    Rain.destroy()
    info.changeScoreBy(1)
}
function ball () {
    Banana = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 5 . . 
. . . . . . . . . . . . . 5 . . 
. . . . . . . . . . . 5 5 5 5 . 
. . . . . . . . . . 5 5 5 5 5 . 
. . . . . . . . 5 5 5 5 5 5 5 . 
. . . . . . . 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 5 5 . . 
. . . 5 5 5 5 5 5 5 5 5 . . . . 
. 5 5 5 5 5 5 5 5 5 5 . . . . . 
. 5 5 5 5 5 5 5 5 5 . . . . . . 
5 5 5 5 5 5 5 5 . . . . . . . . 
5 5 5 5 5 5 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, Hero, 0, -50)
    Banana.setKind(SpriteKind.Banana)
}
function hero () {
    Hero = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 8 8 8 8 8 8 8 . . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . . . 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . . . 
. . . . . . . . 8 8 8 8 8 8 8 8 8 8 8 8 8 . . . . . . . . . . . 
. d d d d d d d d d d d d d d d d d d d d d d d d d d d . . . . 
. d d d d d d d d 8 d d d d d d d d d 8 d d d d d d d d . . . . 
. d d d d d d d d d d d d d d d d d d d d d d d d d d d . . . . 
. d d d d d d d d d d d d d 2 d d d d d d d d d d d d d . . . . 
. d d d d d d d 2 d d d d d d d d d d d d 2 d d d d d d . . . . 
. d d d d d d d d 2 2 2 2 2 2 2 2 2 2 2 2 d d d d d d d . . . . 
. d d d d d d d d d d d d d d d d d d d d d d d d d d d . . . . 
. . . . . . . . . . . . . d d d . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . d d d . . . . . . . . . . . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 d 5 5 5 5 5 5 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . . . . . . 
. . . 5 5 5 5 . . . . . 5 5 5 5 5 . . . . . 5 5 5 5 . . . . . . 
. . . 5 5 5 5 . . . . . 5 5 5 5 5 . . . . . 5 5 5 5 . . . . . . 
. . . 5 5 5 5 . . . . . 5 5 5 5 5 . . . . . 5 5 5 5 . . . . . . 
. . . 5 5 5 5 . . . . . 5 5 5 5 5 . . . . . 5 5 5 5 . . . . . . 
. . . 5 5 5 5 . . . . . 5 5 5 5 5 . . . . . 5 5 5 5 . . . . . . 
. . . 5 5 5 5 . . . . . 5 5 5 5 5 . . . . . 5 5 5 5 . . . . . . 
. . . 5 5 5 5 . . . . . 5 5 5 5 5 . . . . . 5 5 5 5 . . . . . . 
. . . d d d d . . . . . 8 8 . 8 8 . . . . . d d d d . . . . . . 
. . . d d d d . . . . . 8 8 . 8 8 . . . . . d d d d . . . . . . 
. . . d d d d d . . . . 8 8 . 8 8 . . . . d d d d d . . . . . . 
. . . d d d d . . . 8 8 8 8 . 8 8 8 8 . . . d d d d . . . . . . 
. . . . . . . . . . 8 8 8 8 . 8 8 8 8 . . . . . . . . . . . . . 
`, SpriteKind.Player)
    Hero.setPosition(125, 90)
    controller.moveSprite(Hero, 100, 0)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    end()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    ball()
})
sprites.onOverlap(SpriteKind.Banana, SpriteKind.Enemy, function (sprite, otherSprite) {
    score()
})
let Hero: Sprite = null
let Banana: Sprite = null
let Rain: Sprite = null
let Cloud: Sprite = null
hero()
game.onUpdateInterval(1000, function () {
    cloud()
    Timescore()
    raindrop()
})
