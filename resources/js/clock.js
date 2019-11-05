function getToday() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = " Chủ Nhật,";
    weekday[1] = " Thứ 2,";
    weekday[2] = " Thứ 3,";
    weekday[3] = " Thứ 4,";
    weekday[4] = " Thứ 5,";
    weekday[5] = " Thứ 6,";
    weekday[6] = " Thứ 7,";

		var month = new Array();
    month[0] = "01";
    month[1] = "02";
    month[2] = "03";
    month[3] = "04";
    month[4] = "05";
    month[5] = "06";
    month[6] = "07";
    month[7] = "08";
    month[8] = "09";
    month[9] = "10";
    month[10] = "11";
    month[11] = "12";

    var n1 = weekday[d.getDay()];
		var n3 = d.getDate();
		var n2 = month[d.getMonth()];
		var n4 = d.getFullYear();
    document.getElementById("demo").innerHTML = n1 + " " + n3 + "/" + n2 +"/"+ n4;
}

window.addEventListener("load", getToday, true);