var quantite=1;
function add()
{
    var quantitytext= document.getElementById('quantite');
    
    quantite=quantite+1;
    quantitytext.innerHTML=quantite;
    priceadd();
}
function substract()
{
    var quantitetxt=document.getElementById('quantite');
     if (quantite>0){
    quantite=quantite-1;
    quantitetxt.innerHTML=quantite;
    priceadd();
  
    }
}

var priceInit=1200;
var price;
function priceadd()
{
   var getPrice=document.getElementById('price');
   price=priceInit*quantite;
   getPrice.innerHTML=price;
}

