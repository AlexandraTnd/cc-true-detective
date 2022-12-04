function isTwodigitOdd(number) {
    if (number % 2 === 0) {
        return false;
    } else if (`${number}`.length !== 2) {
        return false;
    } else {
        return true
    }
}

function hasAccess(user, usersGroups, fileOwner, writableByOwner, fileGroup, writableByGroup, writableByOthers, sudoMode) {
    if (sudoMode) {
        return true;
    } else if (user === fileOwner) {
        if (writableByOwner) {
            return true;
        }
    }
    if (writableByOthers) {
        return true;
    }
    if (usersGroups.includes(fileGroup)) {
        if (writableByGroup) {
            return true;
        }
    }
    return false;

}

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}


function isSunday(day, weekdayOfFirst) {
    let days = ["Su", "M", "Tu", "W", "Th", "F", "Sa"];
    if (day > 31) {
        return false;
    } else if (day < 1) {
        return false;
    } else if (days[((day + days.indexOf(weekdayOfFirst)) % 7) - 1] === "Su") {
        return true;
    } else {
        return false;
    }
}


function shouldBringUmbrella(rains, windScale, cloudy, redSky, strongFlowerSmell, spidersDown, lyingCattle, strongSunshine) {
    if (windScale >= 7) {
        return false;
    }
    if (rains) {
        return true;
    }
    if (cloudy) {
        if (redSky) {
            return true;
        } else if (spidersDown) {
            return true;
        } else if (lyingCattle) {
            return true;
        } else if (strongFlowerSmell) {
            return true;
        }
    }
    if (strongSunshine) {
        return true;
    }
    return false;
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