/**
 * @function Function to validate the start and end character of each use case
 * to be interpreted.
 * @param {character} beging
 * @param {character} end
 * @param {string} characters
 * */
function manualPartition(beging, end, characters) {
    var subs = {x1: 0, x2: 0};
    var elements = [];
    var open = true;
    let countBegin = count(characters, beging);
    let countEnd = count(characters, end);
    if (countBegin === countEnd) {
        for (var rec = 0; rec < characters.length; rec++) {
            if (characters[rec] === beging && open === true) {
                subs.x1 = rec;
                open = false;
                if (characters[rec - 1] === "!" 
                    && characters[rec] === "(") {
                    subs.x1 = rec - 1;
                }
                if (characters[rec - 1] === "*" 
                    && characters[rec] === "(") {
                    subs.x1 = rec - 1;
                }
                if (characters[rec - 2] === "*" 
                    && characters[rec] === "(") {
                    subs.x1 = rec - 2;
                }
                if (characters[rec - 1] === "*" 
                    && characters[rec] === "¿") {
                    subs.x1 = rec - 1;
                }
                if (characters[rec - 1] === "*" 
                    && characters[rec] === "¡") { // ¿?
                    subs.x1 = rec - 1;
                }
            }
            if (characters[rec] === end 
                && open === false && subs.x1 !== rec) {
                open = true;
                subs.x2 = rec;
                var resultSelect = 
                characters.toString()
                .substr(subs.x1, (subs.x2 - (subs.x1 - 1)));
                elements.push(resultSelect.toString());
            }
        }
    } else {
        setNotifications(
            3, 
            "An opening but not a closing symbol was detected."+
            +"=> begin: " +beging+", end: "+end+". Near: "
            +characters+"", []
        );
    }
    return elements;
}