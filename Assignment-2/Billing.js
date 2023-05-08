const items = [];
let totalPrice = 0;
let item_no = 0;
let total = false;

function openDiv() {
    document.getElementById("multi-use").style.display = "block";
}
function closeDiv(){
    const multi_div=document.getElementById("multi-use");
    multi_div.style.display = "none";
}
function addItem() {
    const itemName = document.getElementById("item-name").value;
    const itemPrice = document.getElementById("price").value;
    const itemQuantity = document.getElementById("quantity").value;
    if(itemName==="" || itemPrice==="" || itemQuantity===""){
        alert("Please fill all the fields");
        return;
    }
    if(Number.isInteger(parseInt(itemPrice))===false || Number.isInteger(parseInt(itemQuantity))===false){
        alert("Please enter valid price and quantity");
        return;
    }
    const item = {
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
    };
    items.push(item);
    document.getElementById("item-name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("quantity").value = "";
    console.log(items);
    if(document.getElementById("multi-use").style.display === "block") {
        viewItems();
    }
    toast();
}
function viewItems() {
    openDiv();
    document.getElementById("items-basket").style.display = "block";
    const table = document.getElementById("items-table");
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
        // add delete button
        const cell4 = document.createElement("td");
        const cellText4 = document.createElement("SPAN");
        // cellText4.className = "close";
        cellText4.innerHTML = '<button type="button" onclick=deleteItem('+item_no+')>'+'Delete</button>';
        cell4.appendChild(cellText4);
        row.appendChild(cell4);
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
    price.innerHTML="<br><b>"+"Total Price: "+totalPrice+"</b>";
    price.style.display="block"
}
function generateBill() {
    openDiv();
    const divContents = document.getElementById("multi-use").innerHTML;
    const a = window.open('', '', 'height=500, width=500');
    a.document.write('<html lang="en">');
    a.document.write('<body > <h1 style="text-align: center">Bill Receipt<br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}


function toast() {
    const x = document.getElementById("snackbar");
    x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function deleteItem(item_no){
    items.splice(item_no,1);
    console.log(items);
    document.getElementById("items-table").deleteRow(item_no+1);
    item_no--;
    viewItems();
    totalPriceFunc();
}