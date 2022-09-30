/**
 * 
 *  Document     : controller.js
 *  Created on   : 13 April, 2016, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT Kharagpur
 *  
 */
function initializeSimulation() {
    RM501.init();
    animate();
	//RM501.CylinderL3.rotation.y += -Math.PI / 3;

}
var data;
var data2;
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize");
}
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}

function sliderChange() {
    var sliderVal = document.getElementById("slider1").value;
    document.getElementById("rangeValue1").value = sliderVal;
    RM501.Cylinder2L1.rotation.y = +sliderVal * (Math.PI / 180);

    var sliderVal2 = document.getElementById("slider2").value;
    document.getElementById("rangeValue2").value = sliderVal2;
    RM501.CylinderL3.rotation.y = (Math.PI / 2) + (+sliderVal2) * (Math.PI / 180);

    var sliderVal3 = document.getElementById("slider3").value;
    document.getElementById("rangeValue3").value = sliderVal3;
    RM501.Link4Mesh.rotation.x = +sliderVal3 * (Math.PI / 180);

    var sliderVal4 = document.getElementById("slider4").value;
    document.getElementById("rangeValue4").value = sliderVal4;
    RM501.Cylinder4L5.rotation.x = (Math.PI / 2) + (+sliderVal4) * (Math.PI / 180);

    var sliderVal5 = document.getElementById("slider5").value;
    document.getElementById("rangeValue5").value = sliderVal5;
    RM501.Cylinder6L5.rotation.x = +sliderVal5 * (Math.PI / 180);

    // var sliderVal6 = document.getElementById("slider6").value;
    //document.getElementById("rangeValue6").value = sliderVal6;
    // RM501.Box3L6.translateY(+sliderVal6 );
    //THREE.RM501.Box4L6.translate.x = +sliderVal6;
	//Plotly.newPlot('graph-view', data, layout, {displayModeBar: true});
    update();
    render();
	getslidervalue();
}

function moveButton() {

    // for (var i = 0 ; i <= 25; i++){
    // RM501.Box3L6.translateY(-0.1*i);
    // RM501.Box4L6.translateY(0.1*i);
    //  }
    // if(RM501.Box4L6.position.z>1000) RM501.Box4L6.position.z-=2000; 

    if (RM501.Box3L6.position.x <= -20) {
        RM501.Box3L6.translateY(-10);
        // RM501.Box4L6.translateY(10);
    }
    else if (RM501.Box4L6.position.x >= 10) {

        RM501.Box3L6.translateY(0);
        RM501.Box4L6.translateY(10);
    }
    else {
        RM501.Box3L6.translateY(30);
        RM501.Box4L6.translateY(-40);
    }

    // }
}
function movemasterchange() {
// change due to theta 
    var th1Val = document.getElementById("th1").value;
    RM501.Cylinder2L1.rotation.y = +th1Val * (Math.PI / 180);

    var th2Val = document.getElementById("th2").value;
    RM501.CylinderL3.rotation.y = (Math.PI / 2) + (+th2Val) * (Math.PI / 180);

    var th3Val = document.getElementById("th3").value;
    RM501.Link4Mesh.rotation.x = +th3Val * (Math.PI / 180);

    var th4Val = document.getElementById("th4").value;
    RM501.Cylinder4L5.rotation.x = (Math.PI / 2) + (+th4Val) * (Math.PI / 180);

    var th5Val = document.getElementById("th5").value;
    RM501.Cylinder6L5.rotation.x = +th5Val * (Math.PI / 180);
    
	graph();
}
function getslidervalue() {
    t1 = document.getElementById("rangeValue1").value;
    t2 = document.getElementById("rangeValue2").value;
    t3 = document.getElementById("rangeValue3").value;
    t4 = document.getElementById("rangeValue4").value;
    t5 = document.getElementById("rangeValue5").value;
    // t6 = document.getElementById("rangeValue6").value;
    tmat();
	//Plotly.newPlot('graph-view', data, layout, {displayModeBar: true});
	graph();
	update();
   // render();
}
function clearslidervalue() {
    // content.reset();
    //myFunction();
    // s1=0;
    document.getElementById("slider1").value = 0;
    document.getElementById("rangeValue1").value = 0;
    document.getElementById("slider2").value = -45;
    document.getElementById("rangeValue2").value = -45;
    document.getElementById("slider3").value = -45;
    document.getElementById("rangeValue3").value = -45;
    document.getElementById("slider4").value = 0;
    document.getElementById("rangeValue4").value = 0;
    document.getElementById("slider5").value = 0;
    document.getElementById("rangeValue5").value = 0;
    //document.getElementById("slider6").value = 0;
    //document.getElementById("rangeValue6").value = 0;
    sliderChange();
	//deleteTrace();
	Plotly.deleteTraces('graph-view', [0]);
}

function workspace() {
	alert("Wait for Workspace to display in the graphical panel");
	for (var i=1; i<2800; i++) {
		//
    t1 = Math.floor(Math.random() * -151) + 151;
	 //for (var t1 = t11; t1 < 112; t1++) {
		 //=alert(i);
	t2 = Math.floor(Math.random() * -131) + 31;
    t3 = Math.floor(Math.random() * -46) + 46;
    t4 = Math.floor(Math.random() * -180) + 1;
    t5 = Math.floor(Math.random() * -181) + 181;
    //t6 = Math.floor(Math.random() * -225) + 225; 
	tmat_workspace();
	
	 }
	// data2 = [trace1];
	//Plotly.plot('graph-view', data2, layout, {displayModeBar: true});
	graph2();
    alert("Workspace generated");
//   pumachange();
//movemasterchange();
}

function graph(){
	
	data = [trace1];
	//var data2 =[trace2];
    var layout = {
        autosize: true,
        width: 390,
        height: 310,
		showlegend: false,
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        }
        // plot_bgcolor: 'black'
    };
    Plotly.plot('graph-view', data, layout, {displayModeBar: true});
	
	//Plotly.purge('graph-view');
}
function graph2(){
	
	data2 = [trace2];
	//var data2 =[trace2];
    var layout = {
        autosize: true,
        width: 390,
        height: 310,
		showlegend: false,
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        }
        // plot_bgcolor: 'black'
    };
    Plotly.newPlot('graph-view', data2, layout, {displayModeBar: true});
	
	//Plotly.purge('graph-view');
}
function deleteTrace(){
 
//location.reload(true);
//Plotly.deleteTraces('graph-view', 0);
trace1.x.length=0;
trace1.y.length=0;
trace1.z.length=0;

trace2.x.length=0;
trace2.y.length=0;
trace2.z.length=0;
getslidervalue();
//alert(len);
}


