let startime = 0
let Button_pressed = false
let mose_pos = 0
basic.showString("3-2-1")
let GameRunning = true
while (GameRunning) {
    mose_pos = randint(0, 1)
    Button_pressed = false
    basic.pause(300)
    if (mose_pos == 0) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            . . . . .
            # . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            . . . . #
            `)
    }
    startime = input.runningTime()
    while (Button_pressed == false) {
        if (input.runningTime() - startime > 1000) {
            game.gameOver()
        }
    }
}
