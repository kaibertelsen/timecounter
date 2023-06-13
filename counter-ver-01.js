startdisplaytime();
function startdisplaytime(){
const current = new Date();
let currentms = current.getTime();
let msdiff = currentms-startms;

	min = Math.floor(msdiff / 60000);
  document.getElementById("minute").innerHTML = min;
	
  //resterende ms
	sec = Math.floor((msdiff-(min*60000))/1000);
  let mstext = "";
  if (sec<10){
  mstext= "0"+sec.toString();
  }else{
  mstext= sec.toString();
  }
  document.getElementById("second").innerHTML = mstext;

	//resterende ms
	msec = Math.floor(msdiff-((min*60000)+(sec*1000)));
  hsec = Math.floor(msec/10);
  if (hsec<10){
 mstext= "0"+hsec.toString();
  }else{
  mstext= hsec.toString();
  }
  document.getElementById("hs").innerHTML = mstext;


//starte teller med oppdatering vært 10ms

setInterval(function () {counthsek()}, 10);
}

function counthsek(){
hsec++;

		if (hsec>=100){
		hsec=0;
    countsek();
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

function countsek(){
sec++;
if (sec>=60){
		sec=0;
    countmin();
		}
    
 let mstext = "";
  if (sec<10){
  mstext= "0"+sec.toString();
  }else{
  mstext= sec.toString();
  }
  document.getElementById("second").innerHTML = mstext;

}

function countmin(){
min++;

    
 let mstext = "";
  if (min<10){
  mstext= "0"+min.toString();
  }else{
  mstext= min.toString();
  }
  document.getElementById("minute").innerHTML = mstext;

}

