/* charAt(); */

// function firstLetter() {
//     let str = "Scott Davis";
//     let letter = str.charAt(0);

//     document.getElementById("displayFirst").innerHTML = letter;
// }
/* charAt(); */

function printInitials() {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;

    var fInit = fName.charAt(0);
    var lInit = lName.charAt(0);

    document.getElementById("initials").innerHTML = "Your initials are: " + fInit.concat(lInit);

}

/* repeat(); */

function writeSong() {
    let str = "Around the world ";
    let lyrics = str.repeat(80, " ");

    document.getElementById("aroundTheWorld").innerHTML = lyrics;
}

/* concat(); */

var davisFamily = [" Scott", " Bob", " Shan", " Jeff", " Kevin", " Kyle"];
var grigoryanFamily = [" Donara", " Margarit", " Pargev", " Viktoria", " Tigran"];

document.getElementById("davis").innerHTML = davisFamily;
document.getElementById("grigoryan").innerHTML = grigoryanFamily;

function getMarried() {
    document.getElementById("newFam").innerHTML = davisFamily.concat(grigoryanFamily);
} 

/* endsWith(); */
function checkName() {
    var lastName = document.getElementById("lastName").value;

    // console.log(lastName);

    var isArmenian = false;

    if (lastName.endsWith("yan")) {
        isArmenian = true;
    }
    else if (lastName.endsWith("ian")) {
        isArmenian = true;
    }

    if (isArmenian) {
        document.getElementById("nameResult").innerHTML = "Your last name is Armenian";
    } else document.getElementById("nameResult").innerHTML = "Your last name is not Armenian";

}

/* startsWith(); */

function checkNumber() {
    var phoneNum = document.getElementById("phoneNumber").value;

    console.log(phoneNum);

    var isLocal = false;

    if (phoneNum.length == 0) {
        document.getElementById("numberResult").innerHTML = "Please enter a number.";
    } else {

        if (phoneNum.startsWith("559")) {
            isLocal = true;
        }

        if (isLocal) {
            document.getElementById("numberResult").innerHTML = "Your number is local.";
        } else {
            document.getElementById("numberResult").innerHTML = "Your number is NOT local.";
        }
    }

}
    
