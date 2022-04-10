/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
let sections = document.body.getElementsByTagName("section");
let fragmentListItems = document.createDocumentFragment();
let navBar = document.querySelector("#navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i = 0 ; i<sections.length ; i++)
{
    let item = document.createElement("li");
    let id = sections[i].id;
    let txt = sections[i].getAttribute("data-nav");
    item.innerHTML = `<a href="#${id}">${txt}</a>`
    item.classList.add("menu__link")
    fragmentListItems.appendChild(item);
}
navBar.appendChild(fragmentListItems);

// Add class 'active' to section when near top of viewport

let activeClassId = "#section1";

document.addEventListener('scroll',function(){

    for(let i = 0 ; i<sections.length; i++){
        let rectangle = sections[i].getBoundingClientRect();
        if(rectangle.top > 0 && rectangle.bottom>0)
        {
            // console.log(`current active section is ${sections[i].id}`);
            // console.log(rectangle.top);

            document.querySelector(activeClassId).classList.remove('your-active-class');
            activeClassId = `#${sections[i].id}`;
            sections[i].classList.add('your-active-class');

            break;
        }
    }
});

// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click', function moveSmoothely(event){
    event.preventDefault();
    let myHref = event.target.getAttribute('href');
    document.querySelector(myHref).scrollIntoView({behavior: 'smooth'});
});



/**
 * End Main Functions
 * Begin Events
 * 
*/


