menu_list_array = ["Veg Margherita Pizza",
                    "Chicken Tandoori Pizza",
                     "Veg Supreme Pizza",
                     "Paneer Tikka Pizza",
                     "Deluxe Veggie Pizza",
                     "Veg Extravaganza Pizza",
                    ]

                   


function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
htmldata=htmldata+'<li>'+ menu_list_array[i] + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML = htmldata;
}

function add_item(){
var newItem;
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
menu_list_array.sort();
var newItem ="<section class='cards'>"
for(var j=0; j<menu_list_array.length;j++){


    var newItem =newItem +"<div class='card'>"
            +"<img src='pizzaImg.png'/>"
            +menu_list_array[j] + "<div>";
}
newItem= newItem+"</section>"
document.getElementById("display_addedmenu").innerHTML = newItem;

}



 

