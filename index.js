var pos=1;
var myNodelist = document.getElementsByTagName("tr");
var i;
var li, inputValue;


// Create a new list item when clicking on the "Add" button
function newElement() {
    
    


     li = document.createElement("th");
     inputValue = document.getElementById("myInput").value;
    var tsk = document.getElementById("tk");
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("myDropdown").style.display = "block";


    if (inputValue === '') {
      alert("You must write something!");
    }
    document.getElementById("myInput").value = "";

    
  
}
function cat(obj)
{
 
    var ide = obj.id;
    var ct = document.createElement("th");
    var val = document.getElementById(ide).text;
    var te = document.createTextNode(val);
    var valu = document.getElementById("newrow");
    ct.appendChild(te);
    var row = valu.insertRow(pos);
    pos++;
    var x  =  row.insertCell(0);
    var y = row.insertCell(1);
    var z = row.insertCell(2);
    
    x.innerHTML = inputValue;
    y.innerHTML = val;
    z.innerHTML = 'close';
    x.style.textAlign = "center";
    y.style.textAlign = "center";
    z.style.textAlign = "center";
    let s="row"+1;


   
    row.id = s;
  
    z.addEventListener("click", function()
    {


       document.getElementById("row1").remove();
       var tt = document.getElementById("newrow");
       pos--;
       for(i=0; i<tt.length; i++)
       {
             s= "row"+i+1;
             tt.cells[i].id = s;
       }
    })
  
      

    
    document.getElementById("myDropdown").style.display = "none";
}
