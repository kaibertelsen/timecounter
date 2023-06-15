
function stopdisplaytime(){
//hide
document.getElementById("livetimediv").style.display="none";
}

function startdisplaytime(){
syncdisplaytime();
document.getElementById("livetimediv").style.display="Inline-block";
//starte teller med oppdatering vært 10ms
setInterval(function () {counthsek()}, 10);
}



function syncdisplaytime(){
const current = new Date();
let currentms = current.getTime();
let msdiff = currentms-startms;
	
	hour = Math.floor(msdiff/3600000);
  if(hour>0){
  document.getElementById("hourdiv").style.display="Inline-block";
  document.getElementById("hour").innerHTML = hour;
  }
  //resterende ms til min
  var msmin = Math.floor(msdiff-hour*3600000);
  min = Math.floor(msmin/60000);
  
  //resterende ms til sek
  var mssec = Math.floor(msmin-(min*60000));
  sec = Math.floor(mssec/1000);
  document.getElementById("minute").innerHTML = min;
	
  //resterende ms
  let stext = "";
  if (sec<10){
  stext= "0"+sec.toString();
  }else{
  stext= sec.toString();
  }
  document.getElementById("second").innerHTML = stext;

	//resterende ms
	var ms = Math.floor(mssec-(sec*1000));
  hsec = Math.floor(ms/10);
  let hstext = "";
  if (hsec<10){
  hstext= "0"+hsec.toString();
  }else{
  hstext= hsec.toString();
  }
  document.getElementById("hs").innerHTML = hstext;

}


function counthsek(){
hsec++;

		if (hsec>=100){
		hsec=0;
    syncdisplaytime();
		}

  //update textfield
  let mstext = "";
  if (hsec<10){
  mstext= "0"+hsec.toString();
  }else{
  mstext= hsec.toString();
  }
  document.getElementById("hs").innerHTML = mstext;

}
