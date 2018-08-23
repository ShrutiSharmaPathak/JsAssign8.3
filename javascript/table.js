
/*var num1=function(num ,i)
{
   var num2=Number(num);
   num2=num2*i;
   return num2;
}*/
var pId;
let num1 = (num,i) => num= num*i; /* Arrow function to get the times table. It is the shorter form of the above 
                                   function expression var num1..... */
function timesTable()
{
    pId=0; // intializing para id with 0;
    var a=document.getElementById("num").value; // capturing the number of which we want to generate times table
   
    /* logic to generate run time element<p>.Element <p> will generate as well as arrow function,
    to get the times table will only be called  if a is having some number value */
     
    if(a!="")
    {
        for(var i=1; i<=10 ;i++)
        {   
            var para ;
            var t;
            pId++; 
            para = document.createElement("P");     // Create dynamic <p> element
            para.setAttribute('id','p_'+pId)        // set an id for the <p> which is generated runtime      
            t = document.createTextNode(num1(a,i)); /*Create a text node as well as assigned a value retured from
                                                      arrow function num1 after calculating the times table*/
            para.appendChild(t);                    // Append the text to <p>
            document.body.appendChild(para);        //Append the <p> in to the <body>
        }
    }
    else
    {
        alert("Please enter the number only");
    }
}
    

/*The removeElement function will be called on onchange event of the input type text, if user wants a times tabble
of an another number without refreshing the page.Then the following code will remove the previously generated
element <p> with an old value.*/
function removeElement()
{
    if(0 < pId) 
    {
        for(var j=1; j<=pId ;j++)
        { 
            // This will remove the child element which was generated dynamically with dynamic id pId
            document.body.removeChild(document.getElementById('p_' + j));
        }
       
    } 
}
   


