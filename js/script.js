function akanName() {
    var akanMaleName = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; //names according to days of week for male
    var akanFemaleName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; //names according to days of week of female.
    var bdate = document.getElementById("bdate").value; //get the birthday date
    var gender = document.getElementById("gender").value; //get result if male or female
    alert(bdate)
    var CC = parseInt(bdate.substr(0, 1)); //century of the year, first 2 digits of year
    var DD = parseInt(bdate.substr(8, 9)); //day of the month
    var YY = parseInt(bdate.substr(2, 3)); //last two digits of year 
    var MM = parseInt(bdate.substr(5, 6)); //month of the birthdate
    var doW = parseInt((CC / 4 - 2 * CC - 1 + (5 * YY) / 4 + (26 * (MM + 1)) / 10 + DD) % 7); //formula result to day of the week.

    if (gender === "Male") {
        alert("You now posess the AkanName: " + akanMaleName[doW])
    } else if (gender === "Female") {
        alert("You now posess the AkanName: " + akanFemaleName[doW])
    } else
        alert("You entered invalid gender")
}