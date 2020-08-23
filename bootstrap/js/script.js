var akanMaleName = ["Kwasi, Kwadwo, Kwabena, Kwaku, Yaw, Kofi, Kwame"];
var akanFemaleName = ["Akosua, Adwoa, Abenaa, Akua, Yaa, Afua, Ama"];
// if (month >= 12 || month <= 1) {
//     alert("Enter a month number between 1-12"
// }
function akanName() {
    var bdate = document.getElementById("bdate").value;
    var gender = document.getElementById("gender").value;

    var CC = parseInt(bdate.substr(6, 7));
    var DD = parseInt(bdate.substr(3, 4));
    var YY = parseInt(bdate.substr(8, 9));
    var MM = parseInt(bdate.substr(0, 1));
    var doW = parseInt((CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7);

    if (month >= 12 || month <= 1) {
        alert("Enter a month number between 1-12")
    } else if (gender === "Male") {
        alert("You now posess the AkanName:" + akanMaleName[doW])
    } else if (gender === "Female") {
        alert("You now posess the AkanName:" + akanFemaleName[doW])
    }


}
