var request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function() {
    var cd = JSON.parse(request.response);
    var result = 0;
    for(var i in cd)
    {
        result = result + parseInt(cd[i].population);
    }
   console.log(result);
}