/**
 * 
 *  Document     : MOVEMASTER_tmat.js
 *  Created on   : 13 April, 2016, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT Khatagpur
 *  
 */
var t1 = 0, t2 = 0, t3 = 0, t4 = 0, t5 = 0, t6 = 0;
var t11, t22, t33, t44, t55, t66;
var trace1; var trace2;
trace1 = {
    x: [],
    y: [],
    z: [],
    mode: 'markers',
    marker: {
        size: 4,
        //line: {
          //  color: 'rgba(217, 217, 217, 0.24)',
          //  width: 0.5
       // },
        opacity: 1
    },
    type: 'scatter3d'
};
trace2 = {
    x: [],
    y: [],
    z: [],
    mode: 'markers',
    marker: {
        size: 2,
        //line: {
          //  color: 'rgba(217, 217, 217, 0.24)',
          //  width: 0.5
       // },
        opacity: 1
    },
    type: 'scatter3d'
};
function myFunction() {
    t11 = t1;
    t22 = t2;
    t33 = t3;
    t44 = t4;
    t55 = t5;
    t66 = t6;
    t1 = document.getElementById("th1").value;
    t2 = document.getElementById("th2").value;
    t3 = document.getElementById("th3").value;
    t4 = document.getElementById("th4").value;
    t5 = document.getElementById("th5").value;
  
    if (t1 >= 151 || t1 <= -151) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 1 should be within -150 to 150";
        return;
    }
    if (t2 >= 31 || t2 <= -101) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 2 should be within -100 to 30";
        return;
    }
    if (t3 >= 46 || t3 <= -46) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within -45 to 45";
        return;
    }
    if (t4 >= 1 || t4 <= -181) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within 0 to -180";
        return;
    }
    if (t5 >= 181 || t5 <= -181) {
        document.getElementById("jrv-msg").innerHTML = "Range for Theta 3 should be within -180 to 180";
        return;
    }
  tmat();
  movemasterchange();
}
function tmat() {
    // trans formation matrixes 
    var d1 = 250;
    var a2 = 220;
    var a3 = 160;
    var d5 = 215;

    R11 = Math.cos(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.cos(Math.PI / 180 *t5) + Math.sin(Math.PI / 180 *t1) * Math.sin(Math.PI / 180 *t5);
    R12 = -Math.cos(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.sin(Math.PI / 180 *t5) + Math.sin(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t5);
    R13 = -Math.cos(Math.PI / 180 *t1) * Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4);
    P1 = Math.cos(Math.PI / 180 *t1) * (a2 * Math.cos(Math.PI / 180 *t2) + a3 * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3) - d5 * Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4));

    R21 = Math.sin(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.cos(Math.PI / 180 *t5) - Math.cos(Math.PI / 180 *t1) * Math.sin(Math.PI / 180 *t5);
    R22 = -Math.sin(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.sin(Math.PI / 180 *t5) - Math.cos(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t5);
    R23 = -Math.sin(Math.PI / 180 *t1) * Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4);
    P2 = Math.sin(Math.PI / 180 *t1) * (a2 * Math.cos(Math.PI / 180 *t2) + a3 * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3) - d5 * Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4));

    R31 = -Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.cos(Math.PI / 180 *t5);
    R32 = Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.sin(Math.PI / 180 *t5);
    R33 = -Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4);
    P3 = d1 - a2 * Math.sin(Math.PI / 180 *t2) - a3 * Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3) - d5 * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4);

//    var a = ([[-Math.sin(Math.PI / 180 * t1), 0, Math.cos(Math.PI / 180 * t1), 0], [Math.cos(Math.PI / 180 * t1), 0, Math.sin(Math.PI / 180 * t1), 0], [0, 1, 0, 250], [0, 0, 0, 1]]);
//
//    var b = ([[Math.cos(Math.PI / 180 * t2), -Math.sin(Math.PI / 180 * t2), 0, 220 * Math.cos(Math.PI / 180 * t2)], [Math.sin(Math.PI / 180 * t2), Math.cos(Math.PI / 180 * t2), 0, 220 * Math.sin(Math.PI / 180 * t2)], [0, 0, 1, 0], [0, 0, 0, 1]]);
//    var c = ([[Math.cos(Math.PI / 180 * t3), Math.sin(-Math.PI / 180 * t3), 0, 160 * Math.cos(Math.PI / 180 * t3)], [Math.sin(Math.PI / 180 * t3), Math.cos(Math.PI / 180 * t3), 0, 160 * Math.sin(Math.PI / 180 * t3)], [0, 0, 1, 0], [0, 0, 0, 1]]);
//
//    var d = ([[-Math.sin(Math.PI / 180 * t4), 0, Math.cos(Math.PI / 180 * t4), 0], [Math.cos(Math.PI / 180 * t4), 0, Math.sin(Math.PI / 180 * t4), 0], [0, 1, 0, 0], [0, 0, 0, 1]]);
//    var e = ([[Math.cos(Math.PI / 180 * t5), -Math.sin(Math.PI / 180 * t5), 0, 0], [Math.sin(Math.PI / 180 * t5), Math.cos(Math.PI / 180 * t5), 0, 0], [0, 0, 1, 0], [0, 0, 0, 1]]);
//    var f = ([[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 35], [0, 0, 0, 1]]);
//
//    var g = (math.multiply(a, b));
//    var h = (math.multiply(g, c));
//    var i = (math.multiply(h, d));
//    var j = (math.multiply(i, e));
//    var l = (math.multiply(j, f));
    var l = ([[R11, R12, R13, P1], [R21, R22, R23, P2], [R31, R32, R33, P3], [0, 0, 0, 1]]);
    var table = document.createElement("table");
    table.setAttribute("id", "myTable");
    for (var p = 0; p < 4; p++) {
        var row = table.insertRow(p);
        for (var q = 0; q < 4; q++) {
            var cell = row.insertCell(q);
            cell.innerHTML = l[p][q].toFixed(3);
        }
        trace1.x.push(l[0][3]);
        trace1.y.push(l[1][3]);
        trace1.z.push(l[2][3]);
    }
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demo").appendChild(table);

}
function print(value) {
    var precision = 4;
    document.write(math.format(value, precision) + '<br>');
}
function tmat_workspace() {
    // trans formation matrixes 
    var d1 = 250;
    var a2 = 220;
    var a3 = 160;
    var d5 = 215;

    R11 = Math.cos(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.cos(Math.PI / 180 *t5) + Math.sin(Math.PI / 180 *t1) * Math.sin(Math.PI / 180 *t5);
    R12 = -Math.cos(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.sin(Math.PI / 180 *t5) + Math.sin(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t5);
    R13 = -Math.cos(Math.PI / 180 *t1) * Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4);
    P1 = Math.cos(Math.PI / 180 *t1) * (a2 * Math.cos(Math.PI / 180 *t2) + a3 * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3) - d5 * Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4));

    R21 = Math.sin(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.cos(Math.PI / 180 *t5) - Math.cos(Math.PI / 180 *t1) * Math.sin(Math.PI / 180 *t5);
    R22 = -Math.sin(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.sin(Math.PI / 180 *t5) - Math.cos(Math.PI / 180 *t1) * Math.cos(Math.PI / 180 *t5);
    R23 = -Math.sin(Math.PI / 180 *t1) * Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4);
    P2 = Math.sin(Math.PI / 180 *t1) * (a2 * Math.cos(Math.PI / 180 *t2) + a3 * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3) - d5 * Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4));

    R31 = -Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.cos(Math.PI / 180 *t5);
    R32 = Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4) * Math.sin(Math.PI / 180 *t5);
    R33 = -Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4);
    P3 = d1 - a2 * Math.sin(Math.PI / 180 *t2) - a3 * Math.sin(Math.PI / 180 *t2 + Math.PI / 180 *t3) - d5 * Math.cos(Math.PI / 180 *t2 + Math.PI / 180 *t3 + Math.PI / 180 *t4);

    var l = ([[R11, R12, R13, P1], [R21, R22, R23, P2], [R31, R32, R33, P3], [0, 0, 0, 1]]);
    var table = document.createElement("table");
    table.setAttribute("id", "myTable");
    for (var p = 0; p < 4; p++) {
        var row = table.insertRow(p);
        for (var q = 0; q < 4; q++) {
            var cell = row.insertCell(q);
            cell.innerHTML = l[p][q].toFixed(3);
        }
        trace2.x.push(l[0][3]);
        trace2.y.push(l[1][3]);
        trace2.z.push(l[2][3]);
    }
    document.getElementById("demo").innerHTML = "";
    document.getElementById("demo").appendChild(table);
}