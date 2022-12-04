function isTwodigitOdd(number) {
    return number % 2 === 1 && `${number}`.length === 2
}

function hasAccess(user, usersGroups, fileOwner, writableByOwner, fileGroup, writableByGroup, writableByOthers, sudoMode) {
    return sudoMode ? true :
        user === fileOwner && writableByOwner ? true :
            writableByOthers ? true :
                usersGroups.includes(fileGroup) && writableByGroup ? true : false;


}


function isLeapYear(year) {
    return year % 400 === 0 ? true : year % 100 === 0 ? false : year % 4 === 0 ? true : false;
}



function isSunday(day, weekdayOfFirst) {
    let days = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
    return day > 31 || day < 1 ? false :
        days[((day + days.indexOf(weekdayOfFirst)) % 7) - 1] === "Su" ? true : false;

}


function shouldBringUmbrella(rains, windScale, cloudy, redSky, strongFlowerSmell, spidersDown, lyingCattle, strongSunshine) {
    return windScale >= 7 ? false :
        rains ? true :
            cloudy && (redSky || strongFlowerSmell || spidersDown || lyingCattle) ? true :
                strongSunshine ? true : false;
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