function isTwodigitOdd(number) {
    return number % 2 === 1 && `${number}`.length === 2
}

function hasAccess(user, usersGroups, fileOwner, writableByOwner, fileGroup, writableByGroup, writableByOthers, sudoMode) {

}

function isLeapYear(year) {

}

function isSunday(day, weekdayOfFirst) {

}

function shouldBringUmbrella(rains, windScale, cloudy, redSky, strongFlowerSmell, spidersDown, lyingCattle, strongSunshine) {

}

function shouldTakeANap(wantTo, troubleSleeping, after4Pm, atWork, madBoss, have30M, have10M) {

}

module.exports = {
    isTwodigitOdd,
    hasAccess,
    isLeapYear,
    isSunday,
    shouldBringUmbrella,
    shouldTakeANap
};