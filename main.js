menu_list_array = ["Veg Margherita Pizza","Chicken Pizza", "Chicken Extravanganza Pizza", "The Four Cheese Pizza"];

function getmenu(){
    document.getElementById("display_menu").innerHTML=menu_list_array;
}

function addTop(){
    item = document.getElementById("add").value;
    menu_list_array.push(item);
}

function add_item(){
    document.getElementById("display_addedmenu").innerHTML=menu_list_array;
}
