//var API_SERVER_IP = "cheeka.genussys.com" 
var API_SERVER_IP = "localhost" 
var url_string = window.location; //window.location.href
//console.log(url_string)
var url = new URL(url_string);
var machineId = url.searchParams.get("machineId");
console.log(machineId);

console.log(`http://${API_SERVER_IP}:1979/clientList/${machineId}`)
fetch(`http://${API_SERVER_IP}:1979/clientList/${machineId}`).then(response => response.json()).then(data => console.log(JSON.stringify(data)))