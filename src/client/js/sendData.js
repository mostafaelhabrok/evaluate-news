
    var application_key ;

    const getKey = async () => {
        const request = await fetch('/all');
      
          const allData = await request.json();
          //console.log(allData.key);
          application_key = allData.key
    }
    getKey();

function sendData(inputText) {
    console.log("::: sending data to api :::", inputText);
 



    fetch("https://api.meaningcloud.com/sentiment-2.1?key="+application_key+"&of=json&url="+
    inputText+"&model=general&lang=en")
    .then(res => {
        return res.json()
    })
    .then(function(data) {
        console.log(data);
        
        document.getElementById('result1').innerHTML = "subjectivity: " + data.subjectivity ;
        document.getElementById('result2').innerHTML =    "confidence: " + data.confidence ;
        document.getElementById('result3').innerHTML =   "irony: " + data.irony ;
        document.getElementById('result4').innerHTML =    "model: " + data.model ;
        document.getElementById('result5').innerHTML =   "agreement: " + data.agreement ; 
        document.getElementById('result6').innerHTML =   "status: " + data.status.msg;
    })



}

export { sendData }
