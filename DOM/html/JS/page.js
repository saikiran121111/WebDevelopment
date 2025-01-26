let para = document.getElementById("paragraph");//This can only take the first value even if it has duplicates
        console.log(para);
        let radbtn = document.getElementsByName("radiobtn")//It will return the list of nodes
        console.log(radbtn)
        let heading = document.getElementsByTagName("h1");//It will return collection of specified tag
        console.log(heading);
        //Here document is the parent of everything but if we need to grab
        //A specific thing inside some other thing we can use id of that thing
        //and with that varaible we can grab the internal things by using get method
        let grabId = document.getElementById("headingdiv");
        let grabHeading = grabId.getElementsByClassName("heading");
        console.log(grabHeading);
        
        //Query selector is used to select the element by using class id tag etc
        //.classname is used to select class and #ID is used to select id
        //("div,h1") it selects all the h1's in div
        let quer = document.querySelector("#headingdiv");//it is used to select one and first most
        let querclass = quer.querySelector(".heading");
        console.log(querclass);
        //Query selector all is used if we need to select all of the query selectors

        //Traversing elements basically we can get the parent element from child element siblings and viceversa

        let h2 = document.querySelector(".heading");//.heading is the class and we getting the div from it
        console.log(h2.parentNode);
        
        //other things are firstElementChild,lastElementChild,childNodes

        let gettingParent = document.querySelector(".divclass");
        console.log(gettingParent.firstElementChild);
        console.log(gettingParent.lastElementChild);
        console.log(gettingParent.childNodes);
        
        //TO get a sibling nodes
        let sibling = document.querySelector(".heading");
        console.log(sibling.previousElementSibling);//grabs the previous sibling
        console.log(sibling.nextElementSibling);// grabs the down sibling        
        
        
        
        
        
        
        
        if(radbtn==='JS'){
            console.log("you selected JS");
        }
        else if(radbtn==='Java'){
            console.log('You selected Java');
            
        }