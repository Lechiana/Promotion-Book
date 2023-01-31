function set() {
    var in1 = parseInt(document.getElementById("in1").value);
    var in2 = parseInt(document.getElementById('in2').value);
    var in3 = parseInt(document.getElementById('in3').value);
    var in4 = parseInt(document.getElementById('in4').value);
    var in5 = parseInt(document.getElementById('in5').value);
    var in6 = parseInt(document.getElementById('in6').value);
    var in7 = parseInt(document.getElementById('in7').value);


    if (in1 >= 1) {
        var type_1 = 1;
    } else {
        in1 = 0;
    }

    if (in2 >= 1) {
        var type_2 = 2;
    } else {
        in2 = 0;
    }

    if (in3 >= 1) {
        var type_3 = 3;
    } else {
        in3 = 0;
    }

    if (in4 >= 1) {
        var type_4 = 4;
    } else {
        in4 = 0;
    }

    if (in5 >= 1) {
        var type_5 = 5;
    } else {
        in5 = 0;
    }

    if (in6 >= 1) {
        var type_6 = 6;
    } else {
        in6 = 0;
    }

    if (in7 >= 1) {
        var type_7 = 7;
    } else {
        in7 = 0;
    }

    var array = [type_1, type_2, type_3, type_4, type_5, type_6, type_7];
    const filtered = array.filter(Boolean);
    num = filtered.length;
    var price = 0;
    var discount = 0;
    var a = 0;
    var total = in1 + in2 + in3 + in4 + in5 + in6 + in7;
    if (num == 2) {
        discount = 10;
        a = (num * discount);
    } else if (num == 3) {
        discount = 20;
        a = (num * discount);
    } else if (num == 4) {
        discount = 30;
        a = (num * discount);
    } else if (num == 5) {
        discount = 40;
        a = (num * discount);
    } else if (num == 6) {
        discount = 50;
        a = (num * discount)
    } else if (num == 7) {
        discount = 60;
        a = (num * discount);
    }
    price = (total * 100) - a;
    document.getElementById("total").innerHTML = total * 100;
    document.getElementById("discount").innerHTML = num * discount;
    document.getElementById("price").innerHTML = price;
    console.log(num + " " + price);
}