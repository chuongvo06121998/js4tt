// bai 1
document.getElementById("btnSapXep").onclick = function(){
    var day_1 = document.getElementById("so_1").value*1;
    var month_1 = document.getElementById("so_2").value*1;
    var year_1 = document.getElementById("so_3").value*1;
    var ketQua_1_1 = "";
    var ketQua_1_2 = "";
    ketQua_1_1 = "Ngày, tháng, năm, tiếp theo: " + (day_1 + 1) + "/" + month_1 + "/" + year_1;
    ketQua_1_2 = "Ngày, tháng, năm, trước đó: " + (day_1 - 1) + "/" + month_1 + "/" + year_1;
    document.getElementById("XapSep").innerHTML = ketQua_1_1;
    document.getElementById("XapSep_2").innerHTML = ketQua_1_2;
}
//bai 2
document.getElementById("btnTinhNgay").onclick = function(){
    var month_2 = document.getElementById("thang_1").value * 1;
    var year_2 = document.getElementById("nam_1").value * 1;
    switch (month_2) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            ketQua_2 = "Tháng này có 31 ngày.";
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            ketQua_2 = "Tháng này có 30 ngày.";
            break;
        case 2:
            if (year_2 % 4 == 0) {
                ketQua_2 = "Tháng này có 29 ngày vì là năm nhuận.";
            } else {
                ketQua_2 = "Tháng này có 28 ngày.";
            }
            break;
        default:
            break;
    }

    document.getElementById("TinhNgay").innerHTML = ketQua_2;
}
//bai 3
document.getElementById("btnDocSo").onclick = function (){
    var nhapSoN = document.getElementById("dem_1").value * 1;
    var cachDoc = "";
    var hangDonVi = nhapSoN % 10;
    var hangChuc = (nhapSoN / 10) % 10;
    var hangTram = nhapSoN / 10 / 10;
    switch (parseInt(hangTram)) {
        case 1:
            cachDoc += "Một trăm ";
            break;
        case 2:
            cachDoc += "Hai trăm ";
            break;
        case 3:
            cachDoc += "Ba trăm ";
            break;
        case 4:
            cachDoc += "Bốn trăm ";
            break;
        case 5:
            cachDoc += "Năm trăm ";
            break;
        case 6:
            cachDoc += "Sáu trăm ";
            break;
        case 7:
            cachDoc += "Bảy trăm ";
            break;
        case 8:
            cachDoc += "Tám trăm ";
            break;
        case 9:
            cachDoc += "Chín trăm ";
            break;
        default:
            break;
    }
    switch (parseInt(hangChuc)) {
        case 1:
            cachDoc += "mười ";
            break;
        case 2:
            cachDoc += "hai mươi ";
            break;
        case 3:
            cachDoc += "ba mươi ";
            break;
        case 4:
            cachDoc += "bốn mươi ";
            break;
        case 5:
            cachDoc += "năm mươi ";
            break;
        case 6:
            cachDoc += "sáu mươi ";
            break;
        case 7:
            cachDoc += "bảy mươi ";
            break;
        case 8:
            cachDoc += "tám mươi ";
            break;
        case 9:
            cachDoc += "chín mươi ";
            break;
        default:
            break;
    }
    switch (hangDonVi) {
        case 1:
            cachDoc += "mốt ";
            break;
        case 2:
            cachDoc += "hai ";
            break;
        case 3:
            cachDoc += "ba ";
            break;
        case 4:
            cachDoc += "bốn ";
            break;
        case 5:
            cachDoc += "năm ";
            break;
        case 6:
            cachDoc += "sáu ";
            break;
        case 7:
            cachDoc += "bảy ";
            break;
        case 8:
            cachDoc += "tám ";
            break;
        case 9:
            cachDoc += "chín ";
            break;
        default:
            break;
    }
    document.getElementById("docSo").innerHTML = cachDoc;
}
document.getElementById("btnTim").onclick = function (){
    var tenSv1 = document.getElementById("tenSv1").value;
    var x_1 = parseInt(document.getElementById("x_1").value * 1);
    var y_1 = parseInt(document.getElementById("y_1").value * 1);

    var tenSv2 = document.getElementById("tenSv2").value;
    var y_2 = parseInt(document.getElementById("y_2").value * 1);
    var x_2 = parseInt(document.getElementById("x_2").value * 1);

    var tenSv3 = document.getElementById("tenSv3").value;
    var x_3 = parseInt(document.getElementById("x_3").value * 1);
    var y_3 = parseInt(document.getElementById("y_3").value * 1);

    var x_4 = parseInt(document.getElementById("x_4").value * 1);
    var y_4 = parseInt(document.getElementById("y_4").value * 1);
    toaDo1 = Math.sqrt(Math.pow((x_4 - x_1), 2) + Math.pow((y_4 - y_1), 2));
    toaDo2 = Math.sqrt(Math.pow((x_4 - x_2), 2) + Math.pow((y_4 - y_2), 2));
    toaDo3 = Math.sqrt(Math.pow((x_4 - x_3), 2) + Math.pow((y_4 - y_3), 2));

    if (toaDo1 >= toaDo2 && toaDo1 >= toaDo3) {
        ketQua = "Sinh viên: " + tenSv1 + " xa trường nhất với đoạn đường " + toaDo1.toFixed(3) + "m";
    } else if (toaDo2 >= toaDo1 && toaDo2 >= toaDo3) {
        ketQua = "Sinh viên: " + tenSv2 + " xa trường nhất với đoạn đường " + toaDo2.toFixed(3) + "m";
    } else if (toaDo3 >= toaDo1 && toaDo3 >= toaDo2) {
        ketQua = "Sinh viên: " + tenSv3 + " xa trường nhất với đoạn đường " + toaDo3.toFixed(3) + "m";
    }
    document.getElementById("TimN").innerHTML = ketQua;
}