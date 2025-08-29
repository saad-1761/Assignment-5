# Question_1 
What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

## Answer:
- getElementById is a method to fetch an element with unique id.

- getElementByClassName method returns an HTMLCollection where it contains the HTML elements with same class name.

- querySelectorAll returns a nodeList of similar class name whereas querySelector only fetches the first element with same class name.

# Question_2
How do you create and insert a new element into the DOM?

## Answer:

- To create a new element we use document.createElement("tag") which is usually stored in a variable
- then we set the content or attribute of that variable using ".innerText" ," .innerHTML" ," .setAttributes()" etc.  

- finally we insert this newly created element using methods like .append(), .appendChild() etc.in the container tag where we want to insert the created element.

# Question 3
What is Event Bubbling and how does it work?

## Answer:
 
- Event bubbling means when an event occurs to any child element , this event gets propagated or transmitted to the parents , to parent of parent and so on. This basically means the event is bubbled up to the root of the document or it climbs up in the hierarchy. For example a "div" element contains a "button" saying click me. Here div is the parent and button is the child and both contains event listener for "click" event. When the "div" or the parent is click , it only handles what will happen when its clicked. But if we click the "Button" or child , not only this handle the click event of child element , this bubbles up to the "div" or parent element and executes the eventListener of parent element too. To stop this bubbling up of event we use ".stopPropagation" method.

# Question 4
What is Event Delegation in JavaScript? Why is it useful?

- Delegation means to represent something on behalf of others. Event Delegation is the process of handling an event without adding multiple event listener , instead we only add one event listener to the parent and can access all the children inside it. 

- For example, we have an 'ul' as parent which contains 3 'li' tags. Here 'ul' is the parent and 'li' tags are the children. Now if we wanted to access the children , we needed to add 3 event listener individually to perform separate operations. But using event delegation process, we will add event listener only to parent id. Then we can perform operation in the entire parent segment as well as individual lists . In the second case , we can access the individual list using event.target method. 

- Another use case of event delegation is we can add new items in the list when any button is clicked in any other segment. In this way , we can reduce the amount of event listeners and add elements to any particular parent by delegating it.

# Question 5
What is the difference between preventDefault() and stopPropagation() methods?

## Answer:

- preventDefault() methods is actually used when we want to stop the default behavior of any element. For example , click any link would redirect to a new webpage, but if we add preventDefault() in the event listener , clicking on the link wouldn't redirect , it stops its natural behavior.An use case for this method is when we use input field in the form and want to stop the page from reloading each time submitting it.

- On the other hand stopPropagation() method is used to prevent an event from bubbling or capturing at any given level of propagation. Lets say we have three nested "div" , the third div contains a button. If all of them contains event listener and we want stop the bubbling after second div , we can use stopPropagation() after second div, then this won't go up any more and event would stop propagating after second div.