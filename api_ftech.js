
function search(){
  var p=document.getElementById('ct').value
  document.getElementById('pays').innerHTML=p
  var Url='https://covid-19-data.p.rapidapi.com/country?name='+p+''
 fetch(Url , {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "9cfdc3dcd5mshdf3b1baee5b2ec8p115a7cjsn2d378983fefb",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com"
	}
})
.then(response => {
  //console.log(response.json()); 
   return response.json()
  // console.log(response.json())
})
/*---------------------- important-----------------*/
 .then((body) => {
    console.log(body);
	document.getElementById('confirm').innerHTML=body[0].confirmed
	document.getElementById('mort').innerHTML=body[0].deaths
	document.getElementById('recov').innerHTML=body[0].recovered

  })
  /*-------------------------------------------------*/
.catch(err => {
	console.error(err);
})
}


/*-----------------------chek if there is an internet conection-----------*/
function checkconection(){
	if (navigator.onLine) {
		return true
	}
	else{
		return false
	}	
}
/*------------------------------------------------------------------------*/

//test for the chekconnection function
if (checkconection()==true) {
	console.log('online')
	
}
else {
	console.log('offline')
}

 
 
  