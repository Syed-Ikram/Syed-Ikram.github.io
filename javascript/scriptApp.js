function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var tableId = ev.target.id;
    index = Number(tableId.charAt(5));
    var item = ev.dataTransfer.getData("text");
    var price = Number(document.getElementById(item).getAttributeNode("value").value);
    addPrice(tableId,price);
    incCount(tableId);
    setItem(tableId,item,price);
    displayItems(tableId,item,price);
}
function addPrice(tableId,price){
    tableTotal[index-1]+=price;
    document.getElementById(tableId+"total").innerHTML=tableTotal[index-1];
}
function incCount(tableId){
    tableItemCount[index-1]+=1;
    document.getElementById(tableId+"ItemCount").innerHTML=tableItemCount[index-1];
}
function displayItems(tableId,item,price){
    var tableitems = document.getElementById(tableId+"Items");
    var itemString = sessionStorage.getItem(tableId);
    var itemList = JSON.parse(itemString);
    tableitems.innerHTML="";
    var text ="";
    for(var i = 0; i < itemList.length; i++){
         text += "<p>"+itemList[i].name.toUpperCase()+"  "+itemList[i].price+" <button id='table1"+itemList[i].name+"' onclick='plusQuant(event)'>+</button>"+itemList[i].quantity+'</p><br>';
        console.log(itemList[i].name+"  "+itemList[i].price+"  "+itemList[i].quantity);
        /*var button = document.createElement("BUTTON");
        var t = document.createTextNode("+");
        button.appendChild(t);
        tableitems.appendChild(button);
        //button.setAttribute("onclick","plusQuant(i,tableId)");
        button.onclick=plusQuant(i,tableId);*/
    }
    tableitems.innerHTML=text;
    tableitems.appendChild(document.createElement('br'));
    tableitems.appendChild(document.createTextNode("Total:"+tableTotal[tableId.charAt(5)-1]));
}
function plusQuant(ev){
    var id = ev.target.id;
    console.log(id);
    var itemString = sessionStorage.getItem(id);
    //var itemList = JSON.parse(itemString);
    //itemList[i].quantity++;
    //console.log(itemList[i].name+"  "+itemList[i].price+"  "+itemList[i].quantity);
}
function setItem(tableId,item,price){
    var itemString = sessionStorage.getItem(tableId);
    var itemList = JSON.parse(itemString);
    var i = findItem(itemList,item)
    if(i>=0){
        itemList[i].quantity+=1;
    }
    else{
        itemList.push({name:item,price:price,quantity:1});
    }
    itemString=JSON.stringify(itemList);
    console.log(itemList+" "+itemString);
    sessionStorage.setItem(tableId,itemString);
}
function findItem(itemList,item){    
    for(var i = 0; i < itemList.length; i++){
        if(itemList[i].name === item)  {
            return i;
        }
    }
    return -1;
}

function makeTotalZero(ev){
    var i = ev.target.id.charAt(5);
    tableTotal[i-1]=0;
    tableItemCount[i-1]=0;
    sessionStorage.setItem("table"+i,"[]");
    document.getElementById("table"+i+"total").innerHTML=tableTotal[i-1];
    document.getElementById("table"+i+"ItemCount").innerHTML=tableItemCount[i-1];
    document.getElementById("table"+i+"Items").innerHTML="";
}
function search(){
    var i,filter,input;
    input = document.getElementById("searchmenu").value.toLowerCase();
    var items = document.getElementsByClassName("itemName");
    var length = document.getElementsByClassName("itemName").length;
    console.log(input);
    for(i = 0; i < length; i++){
        filter = items[i].innerHTML.toLowerCase();
        console.log(filter);
        if(filter.startsWith(input)){
            document.getElementsByClassName("item")[i].style.display="block";
        }
        else{
            document.getElementsByClassName("item")[i].style.display="none";
        }
    }
}
let tableTotal=[0,0,0,0];
let tableItemCount=[0,0,0,0];
var index;
sessionStorage.setItem("table1","[]");
sessionStorage.setItem("table2","[]");
sessionStorage.setItem("table3","[]");
sessionStorage.setItem("table4","[]");

localStorage.setItem("muttonbriyani",150);
localStorage.setItem("chickenbriyani",120);
localStorage.setItem("chicken65",140);
localStorage.setItem("chickentikka",160);
localStorage.setItem("rumaliroti",15);
localStorage.setItem("watterbottle",20);