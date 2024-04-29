console.log("Welcome to DOM");
let element=document.getElementById("root");
//element.innerText="Welcome to DOM";
element.innerHTML="<h1>Welcome to DOM</h1>";
//element.innerText="<h1>Welcome to DOM</h1>";
let greetings=document.createElement("h1");
greetings.innerText="Welcome to DOM";
element.append(greetings,"Iam appended");
//element.appendChild("Iam not appended");
element.appendChild(greetings);

function constructUL(){
         let node = document.createElement("div")//created a div
    
        let node1 = document.createElement("ul")//created a ul
         node1.setAttribute("class","list")
         let listItems = []
    
         let listItem1 = document.createElement("li")//created li
         listItem1.innerText = "Create Element"//added text to li
         listItems.push(listItem1) 
    
         let listItem2 = document.createElement("li")
         listItem2.innerText = "Get Element"
         listItems.push(listItem2)
    
         let listItem3 = document.createElement("li")
         listItem3.innerText = "Append Element"
         listItems.push(listItem3)
    
         node1.append(...listItems)
    
        node.appendChild(node1) // append ul to the div
        document.body.appendChild(node) // append div to the body of html
     }


/*let listitem1=document.createElement("li");
listitem1.innerText="Create Element";
node1.appendChild(listitem1);

let listitem2=document.createElement("li");
listitem2.innerText="Get Element";
node1.appendChild(listitem2);

let listitem3=document.createElement("li");
listitem3.innerText="Append Element";
node1.appendChild(listitem3);

node.appendChild(node1);

document.body.append(node);*/

let button = document.createElement("button")
button.innerText = "Click Me"
button.setAttribute("id","btn")
button.setAttribute("class","button")
button.addEventListener("click",constructUL)
document.body.appendChild(button)

let button1 = document.createElement("button")
button1.innerText = "QuerySelector"
button1.setAttribute("id","btn")
button1.setAttribute("class","button")
button1.addEventListener("click",()=>{
let elements = document.querySelector(".list")
    elements.setAttribute("style","list-style-type: circle;")
 })
 document.body.appendChild(button1)

 let button2 = document.createElement("button")
 button2.innerText = "QuerySelectorAll"
 button2.setAttribute("id","btn")
 button2.setAttribute("class","button")
 button2.addEventListener("click",()=>{
     let elements = document.querySelectorAll(".list")
     elements.forEach((e)=>{
         e.setAttribute("style","list-style-type: circle;")
     })
 })
 document.body.appendChild(button2)




