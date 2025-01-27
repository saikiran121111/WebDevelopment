let div = document.createElement('div');// it adds div in html
div.innerHTML = "<p>Ruku</p>" // can add content inside tag for eg in div
console.log(div);
//div.id = "idname" //can be added id and class in this format for the element
div.className = "para";//can be added class name like this
document.body.appendChild(div);//This will add the data into html

let personaldetails = document.getElementById("details");//here getting the id of personal details
console.log(personaldetails.innerText);//displays all the text inside the personal details with css apply

let listing = document.createElement("li");// creating the li tag
listing.innerHTML = "Pincode";// adding the value for li tag
personaldetails.appendChild(listing);// appending the li value for the personaldetails

personaldetails.insertAdjacentHTML("beforeend","<li>State</li>")//This will add the state li before end
//Element.insertAdjacentHTLM(position,text)- this is the format

let clonedNod = personaldetails.cloneNode(true)//This will clone the node so we can use this in different place
console.log(clonedNod);

personaldetails.removeChild(personaldetails.firstElementChild)//It will remove the child node
//THere is an other element called attributes
//element.getAttribute("the type of attribute it will get the attribute of it")
let username = document.getElementById("input");
console.log(username.getAttribute("type"));//it will get the value of the attribute
//username.setAttribute("type","checkbox");//it will change the attribute type from text to checkbox
username.setAttribute("class","inputclass");
console.log(username.hasAttribute("id"));//used to check if there is this attribute or not

//username.removeAttribute("id");//THis will remove the attribute

console.log(username.style.backgroundColor);

username.style.padding = "100px" // This will add the css styling for html
//Basically if we add the things here it will overide the original so if we use concatinate then it will be added without overide

//to concatenate username.style.cssText += "width:150px;height:100px;etc...;" pluse is added before equals to concatenate and not overiding
username.style.fontSize = "150px"
