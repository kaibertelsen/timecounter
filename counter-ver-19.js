

function startdisplaytime(){
//starter tellefunksjoner
syncdisplaytime();
document.getElementById("livetimediv").style.display="Inline-block";
//starte teller med oppdatering vært 10ms
clockintervalid = setInterval(counthsek,10);
counting=true;
}


function stopdisplaytime(){
//stopper teller
clearInterval(clockintervalid);
counting=false;
}

function syncdisplaytime(){
const current = new Date();
let currentms = current.getTime();
let msdiff = currentms-startms;
totms = msdiff;
	
hour = Math.floor(msdiff/3600000);
document.getElementById("hour").innerHTML = hour;
if(hour>0){
document.getElementById("hourdiv").style.display="Inline-block";
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
totms = totms+10;
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
