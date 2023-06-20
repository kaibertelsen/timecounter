function syncon(){
clearInterval(updatestatusinterval);
updatestatusinterval = setInterval(getstatus, 5000);
sync=true;
};


function syncoff(){
clearInterval(updatestatusinterval);
setTimeout(syncon, 5000);
}


function viewlaptimes(laparray){
//tømmer wrapper
emtyelementchild(document.getElementById("lapwrapper"));
var viewarray = sortarray(laparray,0,"ba");
//laste inn ny data
for (var i =0;i<viewarray.length;i++){
		const node = document.getElementById("copylapelement");
		const clone = node.cloneNode(true);
    //fylle inn data
    fylldatatolap(viewarray[i],clone);
    clone.id = i+"laptime";
		document.getElementById("lapwrapper").appendChild(clone);
		}
}
