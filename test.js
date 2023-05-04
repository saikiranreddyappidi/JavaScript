var items = [];
var totalPrice = 0;
var item_no = 0;
var total=false;

function openDiv() {
    // const mainDiv = document.getElementById("outer-div");
    // mainDiv.style.cssFloat = "left";
    document.getElementById("multi-use").style.display = "block";
}
function closeDiv(){
    const multi_div=document.getElementById("multi-use");
    multi_div.style.display = "none";
    // multi_div.innerHTML="";
    // const mainDiv = document.getElementById("outer-div");
    // mainDiv.style.marginLeft = "200px";
}
function addItem() {
    var itemName = document.getElementById("item-name").value;
    var itemPrice = document.getElementById("price").value;
    var itemQuantity = document.getElementById("quantity").value;
    var item = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
    };
    items.push(item);
    const x = document.getElementById("toast");
    x.visibility = "visible";
    document.getElementById("item-name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    setTimeout(function(){ x.visibility = "hidden"; }, 30000);
    console.log(items);
    if(document.getElementById("multi-use").style.display === "block") {
        viewItems();
    }
}
function viewItems() {
    openDiv();
    const table = document.getElementById("items-table");
    table.style.display = "block";
    const tableBody = document.createElement("tbody");
    for (let i = item_no; i < items.length; i++) {
        const row = document.createElement("tr");
        const cell1 = document.createElement("td");
        const cellText1 = document.createTextNode(items[i].name);
        cell1.appendChild(cellText1);
        row.appendChild(cell1);
        const cell2 = document.createElement("td");
        const cellText2 = document.createTextNode(items[i].price);
        cell2.appendChild(cellText2);
        row.appendChild(cell2);
        const cell3 = document.createElement("td");
        const cellText3 = document.createTextNode(items[i].quantity);
        cell3.appendChild(cellText3);
        row.appendChild(cell3);
        tableBody.appendChild(row);
        item_no++;
    }
    table.appendChild(tableBody);
    if (total) {
        totalPriceFunc();
    }
}
function totalPriceFunc() {
    openDiv();
    total=true;
    const item_table = document.getElementById("items-table");
    // item_table.style.display = "none";
    const table = document.getElementById("Text-description");
    for (let i = 0; i < items.length; i++) {
        totalPrice += items[i].price * items[i].quantity;
    }
    const price = document.getElementById("Text-description");
    price.innerHTML="<b>"+"Total Price: "+totalPrice+"</b>";
    price.style.display="block"
}
function generateBill() {
    openDiv();
    const table = document.getElementById("Text-description");
    let bill = "Bill: \n";
    for (let i = 0; i < items.length; i++) {
        bill += items[i].name + " " + items[i].price + " " + items[i].quantity + "\n";
    }
    bill += "Total Price: " + totalPrice;
    const billText = document.createTextNode(bill);
    table.appendChild(billText);
}
