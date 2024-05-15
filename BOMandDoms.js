
/*
BOM - Browser Object Model window object is parent object 
all properties we can write directly because all properties present in window object

1. Location
window.location   or  location

we can reload using javascript 
location.reload()

we can redirect to another page using href
location.href="https://www.google.com"

changing the page or file using href
location.href ='index.html'

2.History

history.length()  // find number of tab visited 
history.back() // back to previous page 
history.forward() // go to Next Page 
history.go(2)  // going to 2nd 's page 


3. innerHeight()
 to find height of page 
  
outerHeight()
 original height of page they not changed if your desktop are bigger in size then this height will change 

note :- ctrl + shift + B - task bar hide

4. innerWidth()
to find Width of page 


5 open()
open new tab and return window object  - open ()
used to open particular page - open("https://www.google.com")
we can receive name of page and name return '' - open('https://www.google.com','shubham') name -shubham
open('https://www.google.com','shubham','resizable ') - if you want screen resize  
note :- every page thats uniques window object
      name are build-in we cannot use name using for variable name, function name 


6.close()
close() - close the tab but one condition is open redirect this page and goto page in console type close() then close the page 


7.resizeTo()   give width and height and then page is turn in that size but condition is page open with open('www.google.com','abc','resizable') - resizeBy(200,300)

8 moveTo() - move tab in page moveTo(0,0) , moveTo(x,y)
9.scrollTO() - scrollTo(0,500 ) scroll page 

10.print() - used to open printer tab to print page 


11. document -









*/

//----------------------------------------------
// setTimeout(()=>{
//     location.reload() 
// },2000)    //infinite time reload 
// location.href = 'https://www.google.com's
// location.reload()  //infinite time reload 
// location.href ='index.html'
// history.length
// history.length  // find number of tab visited 
// history.back() // back to previous page 
// history.forward() // go to Next Page 
// history.go(2) 
// outerHeight
// outerWidth()
// innerHeight(300,200)
// innerWidth(400,300)
// moveTo(0,200)
// print()

