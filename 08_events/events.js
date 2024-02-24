const getEventID = document.getElementById('colorful-cacarons');
// One of the way for eventlistener but old way to write a eventlistener
// getEventID.onclick = function () {
//     alert('Hello colorful cacarons');
// }

// Best approce for eventlistener
// getEventID.addEventListener('click', function (e) {
//     console.log(e);
// }, false); // In addEventListener('type',callBack Function, true/false) there is a third parameter

// Event propagation

// Parent
// document.getElementById('lists').addEventListener('click', function (e) {
//     console.log('clicked on parent element (UL is the parent element)');
// }, false) // Event bubbling mood turn on by adding false (by default it is false) // bubbling will appear the child element first after that parent element

// Child
// getEventID.addEventListener('click', function (e) {
//     console.log('clicked on child element');
// }, false)

// Parent
// document.getElementById('lists').addEventListener('click', function (e) {
//     console.log('clicked on parent element (UL is the parent element)');
// }, true) // Event capturing mood turn on by adding true // Capturing will appear the parent element first after that the child element

// Child
// getEventID.addEventListener('click', function (e) {
//     console.log('clicked on child element');
// }, true)

// document.getElementById('google').addEventListener('click', function (e) {
//     console.log('Clicked on google');
//     e.stopPropagation();
//     e.preventDefault();
// }, false);


// Deleting image
// const imagesList = document.querySelector('#lists');
// imagesList.addEventListener('click', function (e) {
//     const imgTagName = e.target.tagName;
//     if (imgTagName === "IMG") {
//         let listItem = e.target.parentNode; // getting parent for targeted element (here the targeted element is image li is the patent element and we are removing the parent (li) element)
//         listItem.remove(); // Removing the parent element of the targeted element
//         console.log(`we removed ${e.target.alt}`);
//         // listItem.parentNode.removeChild(listItem); // removing child item from parent (ul) element li is the child element
//     }
// })

// document.getElementById('btn').addEventListener('click',function(e){
// document.getElementById('btn').addEventListener('dblclick',function(e){
// document.getElementById('btn').addEventListener('mousedown',function(e){
// document.getElementById('btn').addEventListener('mouseup',function(e){
// document.getElementById('btn').addEventListener('contextmenu',function(e){
// document.getElementById('btn').addEventListener('mouseout',function(e){
// document.getElementById('btn').addEventListener('mousewheel',function(e){
// document.getElementById('btn').addEventListener('mouseover', function (e) {
// document.getElementById('btn').addEventListener('keydown', function (e) {
// document.getElementById('btn').addEventListener('keyup', function (e) {
// document.getElementById('btn').addEventListener('keypress', function (e) {
// document.getElementById('btn').addEventListener('scroll', function (e) {

// document.getElementById('btn').addEventListener('click', function (e) {
//     console.log(e.timeStamp / 1000);
// });

/**
 * ---------------------------
 * Note: need to learn in details on:
 * ---------------------------
 * type, timestamp, prevantDefault // done
 * ---------------------------
 * target, toElement, srcElement, currentElement
 * ---------------------------
 * clientX, clientY, screenX, screenY
 * ---------------------------
 * Keyboard special keys:
 * altKey, shiftKey, ctrlKey, keyCode
 * ---------------------------
*/

// document.getElementById('btn').addEventListener('click',function(e){
//     console.log(e.target);
// })

// Event type target
// document.querySelector('ul').addEventListener('click', function (e) {
//     if (e.target.tagName === "LI") {
//         e.target.style.color = '#ff0000'
//     }
// })

document.querySelector('#container').addEventListener('mousemove',function(e){
    document.getElementById('container').innerHTML = `Move your mouse to see the container position: ScreenX: ${e.screenX} and ScreenY: ${e.screenY} also clientX: ${e.clientX} clientY: ${e.clientY}`;
})


