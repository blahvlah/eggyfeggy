scene.setBackgroundColor(12)

let duck: Sprite = null
let animal:Sprite = null
let right = true
let food: Sprite = null
info.setScore(0)
info.setLife(3)

info.startCountdown(30)


duck = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . b 5 5 b . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . b b b b b 5 5 5 5 5 5 5 b . .
    . b d 5 b 5 5 5 5 5 5 5 5 b . .
    . . b 5 5 b 5 d 1 f 5 d 4 f . .
    . . b d 5 5 b 1 f f 5 4 4 c . .
    b b d b 5 5 5 d f b 4 4 4 4 b .
    b d d c d 5 5 b 5 4 4 4 4 4 4 b
    c d d d c c b 5 5 5 5 5 5 5 b .
    c b d d d d d 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`,SpriteKind.Player)

controller.moveSprite(duck)

duck.setFlag(SpriteFlag.StayInScreen, true)


controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    if (right) {
        duck.image.flipX()
    }


    right = false
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function(){

    if (!right) {
        duck.image.flipX()
    }
    
})

game.onUpdateInterval(1000, function() {
animal = sprites.create(img`
        . . . . . . . . c c c c . . . .
        . . . . . . c c d d d d c . . .
        . . . . . c c c c c c d c . . .
        . . . . c c 4 4 4 4 d c c . c c
        . . . c 4 d 4 4 4 4 4 1 c c 4 c
        . . c 4 4 4 1 4 4 4 4 d 1 c 4 f
        . c 4 4 4 4 1 4 4 4 4 4 1 4 4 f
        f 4 4 4 4 4 1 1 c f 4 4 1 f 4 f
        f 4 4 4 f 4 1 c 4 f 4 4 1 f 4 f
        f 4 4 4 4 4 1 4 4 f 4 4 d f f f
        . f 4 4 4 4 1 c c 4 4 d f f . .
        . . f f 4 d 4 4 4 4 4 c f . . .
        . . . . f f 4 4 4 4 c d b c . .
        . . . . . . f f f f d d d c . .
        . . . . . . . . . . c c c . . .
        . . . . . . . . . . . . . . . .
    `,SpriteKind.Enemy)
  
animal.setPosition(150, Math.randomRange(0, 120))
animal.setVelocity(-20, 0)
if (info.score() < 0) {

    duck.destroy()
}
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    info.changeLifeBy(-1)
    sprite.setPosition(0,0)
})

game.onUpdateInterval(1000, function() {

food = sprites.create(img`
    . . . . . . . e c 7 . . . . . .
    . . . . e e e c 7 7 e e . . . .
    . . c e e e e c 7 e 2 2 e e . .
    . c e e e e e c 6 e e 2 2 2 e .
    . c e e e 2 e c c 2 4 5 4 2 e .
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
    . e e e 2 2 2 2 2 2 2 2 2 4 e .
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
    . . 2 e e 2 2 2 2 2 4 4 2 e . .
    . . . 2 2 e e 4 4 4 2 e e . . .
    . . . . . 2 2 e e e e . . . . .
`,SpriteKind.Food)
    
})
