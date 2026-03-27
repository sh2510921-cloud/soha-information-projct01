input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (요일 < 6) {
        요일 += 1
    } else {
        요일 = 0
    }
    basic.showNumber(요일)
    basic.pause(500)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    요일 += -1
    basic.showNumber(요일)
})
input.onGesture(Gesture.ThreeG, function () {
    if (요일 == 1) {
        basic.showString("M")
        basic.pause(1000)
        basic.showString("I")
        basic.pause(1000)
        basic.showString("P.E.")
        basic.pause(1000)
        basic.showString("P")
        basic.pause(1000)
        basic.showString("R")
        basic.pause(1000)
        basic.showString("H")
    }
    basic.clearScreen()
})
let 요일 = 0
요일 = 0
basic.showIcon(IconNames.Skull)
basic.forever(function () {
	
})
