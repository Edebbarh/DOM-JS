var quantityInHtml;
var quantity=1;
var prix;
window.onload = function() { //pour charger la page
	quantityInHtml=document.getElementById("quantite");
    quantityInHtml.innerHTML='1';
    prix=getPrice();
    var prixNV=prix*quantity;
    document.getElementById("price").innerHTML=prixNV+" DH";
    
 };

function getPrice()
{
    //priceText=1200 DH 
    var prixFinal='';
    var priceText=document.getElementById("price").innerHTML;
    var index=priceText.indexOf(' ');
    for(var i=0;i<index;i++)
    {
        prixFinal+=priceText[i];
    }
   return prixFinal;
}
var nbrOfClicks=0;
function becomeRed()
{
    if(nbrOfClicks%2==0)
    {
        document.getElementById('heart').style.color="red";
    }else
    {
        document.getElementById('heart').style.color="pink";  
    }
    

    nbrOfClicks++;
}



 function substract()
 {
     if(quantity>0)
     {
        quantity--;
     }
    
   quantityInHtml.innerHTML=quantity;
   var prixNV=prix*quantity;
   document.getElementById("price").innerHTML=prixNV+" DH";

 }




 function add(){
    quantity++;   
    quantityInHtml.innerHTML=quantity;
    var prixNV=prix*quantity;
   document.getElementById("price").innerHTML=prixNV+" DH";
 }