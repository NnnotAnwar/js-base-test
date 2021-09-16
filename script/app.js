// Create Variables
const myFirstName = 'Anwar'
var mySurname = 'Kairulla'
let myAge = Math.floor((new Date() - new Date(2002, 4, 5)) / (1000 * 60 * 60 * 24) / 365)

// console.log() funtion
console.log(myFirstName, mySurname, myAge)

// window.alert, window.confirm, window.prompt functions
// alert('Your full age is ' + Math.floor(myAge)) // shows a message, return underfind
// confirm('Are you OK?') // asks a confirm, return Boolean value
// prompt('Who are you?', 'Anwar') // asks you a question, return String value or return null if Cancel pressed

// For cycle

for (let i = 0; i < 5; i++) {
    if (i === 2) continue; // Continue operator
    if (i === 4) break; // Break operator 
    ('Something written by For cycle!', i)
}

for (let char of myFirstName) {
    char; // chars
}

for (let char in myFirstName) {
    char; // index of chars
}


// If ternar operator constuction 
myFirstName === "Anwar" ? 555 : 0 // if true ? return 555, else return 0 - true


// Rest, reduce, toNumber(+itemOne), if else(short) operators
let sumOfArray = (...args) => {
    let result = args.reduce((prevValue, item, index, array) => +prevValue + +item, 0)
    if (isNaN(result)) return new Error('One or more elements of the massive is not a Number')
    else return result
}

sumOfArray(5, "123s", 26)
/* Error: One or more elements of the massive is not a Number
    at sumOfArray (app.js:36)
    at app.js:40
*/

sumOfArray(78.5, 92, 3, .1, 1.4) // 175

// Creating object, 'this' context operator
const user = {
    name: myFirstName,
    surname: mySurname,
    age: myAge,
    'is object': true,
    sayHello(name = 'Unknown') {
        if (name === '') name = 'Unknown'
        return `Hello World! You are "${name}", right? My name is ${this.name}.`
    },
}

/* Destructuring

const foo = ["one", "two", "three"];

// With NO destructuring

let wan = foo[0];
let too = foo[1];
let tree = foo[2];

// With destructuring
let [wan, too, tree] = foo;

*/

// Function Constuctor
function UserInfo(name) {
    this.name = name;
    this.age = 18;
    // new UserInfo('Oleg')
}

// Includes, IndexOf, StartWith, EndWith methods. Second argument is optional.
mySurname.includes('airu', 1) // true
mySurname.indexOf('la', 0) // 6
mySurname.indexOf('da', 3) // -1
mySurname.startsWith('Ka') // true
mySurname.endsWith('la') // true
mySurname.startsWith('Da') // false

// Array's methods
let myArray = [
    { name: "Anton", age: 15 },
    { name: "Oleg", age: 18 },
    { name: "Konstantin", age: 20 }
]

// find, findIndex get first appropriate item in the Array
myArray.find((item, index, array) => item.age > 15) // {name: 'Oleg', age: 18}
myArray.findIndex((item, index, array) => item.age < 16) // 0

// filter gets all items from the massive that appropriate
myArray.filter((item, index, array) => item.age > 15) // [{name: "Oleg", age: 18}, {name: "Konstantin", age: 20}]

// sort method
myArray = ['Konstantin', 'Zion', 'Andrey', 'Oleg']
myArray.sort() // ['Andrey', 'Konstantin', 'Oleg', 'Zion']
myArray = [3, 22, 8, 1, 99, 11, 22]
myArray.sort((itemOne, itenTwo) => itemOne - itenTwo) // [1, 3, 8, 11, 22, 22, 99]

// reverse method
myArray.reverse() // [99, 22, 22, 11, 8, 3, 1]

// map method
myArray.map((item, index, array) => item) // copy the array: [99, 22, 22, 11, 8, 3, 1]
myArray = ['Konstantin', 'Zion', 'Andrey', 'Oleg']
myArray.map((item, index, array) => item[0]) // ['K', 'Z', 'A', 'O']
myArray.map((item, index, array) => index) // [0, 1, 2, 3]
myArray.map((item, index, array) => index === 1) // [false, true, false, false]
myArray.map((item, index, array) => item.includes('e')) // [false, false, true, true]
myArray.map((item, index, array) => `${item} ${index + 1}`) // ['Konstantin 1', 'Zion 2', 'Andrey 3', 'Oleg 4']

// split, join methods
myArray = 'Konstantin,Zion,Andrey,Oleg'
myArray.split(); // ['Konstantin,Zion,Andrey,Oleg']
let myNewArray = myArray.split(',', 3) // ['Konstantin', 'Zion', 'Andrey']

myNewArray.join(' '); // Konstantin Zion Andrey
myNewArray.join(); // Konstantin,Zion,Andrey
String(myNewArray) // Konstantin,Zion,Andrey

Array.isArray(user); // false
Array.isArray(myNewArray) // true

// forEach, for of, for in cycle
// myNewArray = ['Konstantin', 'Zion', 'Andrey']
myNewArray.forEach((item, index, array) => { item, index, array })
for (let item of myNewArray) item
for (let index in myNewArray) index


// Document Object Model (DOM)

const htmlDocument = document.documentElement // html
const headElement = document.head // head
const bodyElement = document.body // body

const bodyChildNodes = bodyElement.childNodes // Node collection
bodyElement.hasChildNodes() // true, bodyElement has child elements

const bodyParentNode = bodyElement.parentNode // node element html
const bodyPrevSibling = bodyElement.previousSibling // node element #text
const bodyNextSibling = bodyElement.nextSibling // node element null

const bodyChildren = bodyElement.children // HTML collection

const bodyParentHTML = bodyElement.parentElement // <html><head>…</head><body>…</body></html>
const bodyPrevSiblingElement = bodyElement.previousElementSibling // <head>…</head>
const bodyNextSiblingElement = bodyElement.nextElementSibling // null
const bodyFirstChild = bodyElement.firstElementChild //  <div class="bg-header">…</div>
const bodyLastChild = bodyElement.lastElementChild // <script src="script/app.js"></script>

const headerElements = document.querySelectorAll('.header') //NodeList [header.header]
const divElements = document.querySelectorAll('div') // NodeList(19) [div.bg-header, div.container, div.logo, div.header-contacts, div.h-contact-elem, div.h-contact-elem, div.h-contact-elem, div.container, div.art-pic, div.art-container, div.art-text, div.art-pic, div.art-container, div.art-text, div.contact-form, div.cf-field, div.cf-field, div.cf-send-btn, div.copyright]

// querySelectorAll( tag, .class, #id, [attribute], [attribute = 'value'] ) - gets NodeList
const headerContactElem = document.querySelectorAll('.header-contacts .h-contact-elem') // NodeList(3) [div.h-contact-elem, div.h-contact-elem, div.h-contact-elem]
document.querySelectorAll('.header>.header') // NodeList [div.logo]
document.querySelectorAll('.logo, .h-contact-elem') // NodeList(4) [div.logo, div.h-contact-elem, div.h-contact-elem, div.h-contact-elem]
document.querySelectorAll('#dogImage') // NodeList [img#dogImage]
document.querySelectorAll('[type]') // NodeList(4) [link, input, button.btn.btn-success, script]
document.querySelectorAll('[method="post"]') // NodeList [form]

// querySelector( 'tag, .class, #id, [attribute], [attribute = 'value']' ) - gets an element
const artHeader = document.querySelector('.art-header') // <h1 class="art-header">Head of the article</h1>
const redContact = document.querySelector('.red')
// getElementBy Id, TagName, ClassName, Name( 'id, tagName, className, name' ) - ById gets an element that appropriate, ByTagName and ByClassname get HTMLCollection
document.getElementById('dogImage') // <img id="dogImage" src="img/img-dog.jpg" alt>
document.getElementsByTagName('button') // HTMLCollection [button.btn.btn-success]   
document.getElementsByClassName('cf-field') // HTMLCollection(2) [div.cf-field, div.cf-field]
document.getElementsByName('contFormText') // NodeList [textarea]

// getElementsByTagName, getElementsByClassName, getElementsByName get the live collection

// elements' methods

const firstArt = artHeader.closest('.article') // <article class="article">…</article> closest(selector) gets first parent element, if (false) null
for (const elem of headerContactElem) elem.matches('.red') // matches(selector) returns boolean value
artHeader.innerHTML = 'Red <span style="color: red">text</span>' // innerHTML element property returns HTML content in the element
artHeader.outerHTML // outerHTML element property returns elements' HTML content (artHeader includes) 
artHeader.textContent = 'Blue <span style="color: blue">text</span>' // returns elements' Text content ( '<span>H</span>' as '&lt;span&gt;H&lt;/span&gt; )

/*
artHeader.innerHTML // 'Red <span style="color: red">text</span>'
artHeader.outerHTML // '<h1 class="art-header">Red <span style="color: red">text</span></h1>'
artHeader.textContent // 'Blue &lt;span style="coloe: blue"&gt;text&lt;/span&gt;'
*/

const newElement = document.createElement('p') // only one exists and can be used: reuse remove previus use of the element
newElement.innerHTML = 'Hi! I am <span style="color: red;">Anwar</span>!'

artHeader.innerHTML = 'Origin text <br>'
// artHeader.before(newElement) // puts Node element(as HTML) and/or Text content before the subject
// artHeader.after(newElement) // puts Node element(as HTML) and/or Text content after the subject
// artHeader.prepend(newElement) // puts Node element(as HTML) and/or Text content to the first place in the subject
artHeader.append('Some string <br>', newElement) // puts Node element(as HTML) and/or Text content element to the end in the subject

// element.insertAdjacentHTML('position', HTML content)
redContact.insertAdjacentHTML('beforebegin', 'beforebegin') // puts HTML content before the subject
redContact.insertAdjacentHTML('afterbegin', ' afterbegin ') // puts HTML content to the first place in the subject
redContact.insertAdjacentHTML('beforeend', '<span class="h-contact-elem"> beforend</span>') // puts HTML content to the end in the subject
redContact.insertAdjacentHTML('afterend', '<li class="h-contact-elem">afterend</li>') // puts HTML content after the subject

// element.insertAdjacentElement('position', Node Element)
redContact.insertAdjacentElement('afterbegin', newElement) // 'afterbegin, beforeend, beforebegin, afterend'. previus use of newElement removes

// element.insertAdjacentElement('position', Text Content)
redContact.insertAdjacentText('beforeend', '<span>Text</span>') // 'afterbegin, beforeend, beforebegin, afterend'

// element.cloneNode(Boolean) - make a copy of the element
const cloneNewElement = newElement.cloneNode(1) // into the new variable method clone Node element. Boolean true argument takes all content with the element
artHeader.append(cloneNewElement)

// element.remove() - removes the element from the document
redContact.remove()
cloneNewElement.remove()

// element.className

artHeaderClass = artHeader.className // 'art-header'
artHeader.className = `${artHeaderClass} some-class` // h1.art-header.some-class

// element.classList

artHeader.classList // DOMTokenList(2) ['art-header', 'some-class', value: 'art-header some-class']
// add, remove, toggle, contains - all return Boolean value
artHeader.classList.add('yellow') // add class name to the element
artHeader.classList.remove('yellow') // remove class name from the element
artHeader.classList.toggle('yellow') // add or remove class name subject to availability or not
artHeader.classList.contains('yellow') // check if the class name is in the element
artHeader.classList.replace('yellow', 'blue') // replace class name in the element if available

// element.style.property 
// element.style returns CSSStyleDeclaration from the style attribute
artHeader.style.background = 'green' // add new style to the element - style="background: green;"
artHeader.style.marginBottom = '10px' // style="background: green; margin-bottom: 10px;"
artHeader.style.zIndex = 100 // style="background: green; margin-bottom: 10px; z-index: 100;"
artHeader.style.marginBottom = ''; // style="background: green; z-index: 100;"

artHeader.style.cssText = `
    background: yellow;
    padding-bottom: 10px;
    color: red;
` // cssText rewrite style attribute of the element

artHeader.style.fontSize // returns empty string ''
const artHeaderStyle = getComputedStyle(artHeader) // compute all styles of the element. read-only property. CSSStyleDeclaration of all the styles
artHeaderStyle.fontSize  // returns '25px'
const artHeaderBeforeStyle = getComputedStyle(artHeader, '::before')
artHeaderBeforeStyle.backgroundColor // returns 'rgb(199, 119, 119)'
artHeaderBeforeStyle.content // returns '"♥"'

const artFontSize = parseInt(artHeaderStyle.fontSize) // 25

// elements' attributes

const headerLink = document.querySelectorAll('.h-link')
const inputName = document.querySelector('.cf-field').firstChild.nextSibling

for (const link of headerLink) {
    link.href
}

/*
    https://vk.com/
    https://instagram.com/
    undefined
*/

inputName.value // 'Your name'. returns value from input

inputName.setAttribute('some-attribute', 'value') // set a new attribute in the tag
inputName.hasAttribute('some-attribute') // check if the attribute available in the tag
inputName.getAttribute('some-attribute') // get the value of the attribute
inputName.removeAttribute('some-attribute') // remove the attribute from the tag

inputName.setAttribute('id', '113')
inputName.id = '331'
inputName.getAttribute('id') // '331'

inputName.setAttribute('value', '113')
inputName.value = '331'
inputName.getAttribute('value') // '113'

inputName.dataset // DOMStringMap {id: '1084'} <input tabindex="1" type="text" name="name" placeholder="Name" value="113" data-id="1084" required="" id="331">
inputName.dataset.id = '2601' // DOMStringMap {id: '2601'} <input tabindex="1" type="text" name="name" placeholder="Name" value="113" data-id="2601" required id="331">
inputName.dataset.informSize = 'A12SL' // DOMStringMap {id: '2601', informSize: 'A12SL'} <input tabindex="1" type="text" name="name" placeholder="Name" value="113" data-id="2601" required="" id="331" data-inform-size="A12SL">

// element other properties
inputName.tagName // returns tag name in uppercase 'INPUT'
inputName.hidden = true // adds hidden attribute into the tag
inputName.hidden = !1 // false

// document.documentElement.properties

htmlDocument.clientWidth // 1519
htmlDocument.clientHeight // 722
window.innerWidth // 1536
window.innerHeight // 722
window.outerWidth // 1536
window.outerHeight // 824


let scrollWidth = Math.max(
    bodyElement.scrollWidth, htmlDocument.scrollWidth,
    bodyElement.offsetWidth, htmlDocument.offsetWidth,
    bodyElement.clientWidth, htmlDocument.clientWidth
) // window's full document width
let scrollHeight = Math.max(
    bodyElement.scrollHeight, htmlDocument.scrollHeight,
    bodyElement.offsetHeight, htmlDocument.offsetHeight,
    bodyElement.clientHeight, htmlDocument.clientHeight
) // window's full document height

let windowScrollX = window.pageXOffset // scrolled by X coords pixels amount
let windowScrollY = window.pageYOffset // scrolled by Y coords pixels amount

// <button class='btn btn-success'>scrollBy</button>

// headerContactElem = '<button class="btn btn-success">scrollBy</button>'
for (const hElement of headerContactElem) {
    if (hElement.textContent === 'VK') hElement.innerHTML = '<button class="btn btn-warning" onclick="setScrollBy()">scrollBy()</button>'
    if (hElement.textContent === 'Instagram') hElement.innerHTML = '<button class="btn btn-warning" onclick="setScrollTo()">scrollTo()</button>'
}

const setScrollBy = () => {
    window.scrollBy(0, 100);
    setTimeout(() => {
        console.log(window.pageYOffset)
    }, 550);
}

const setScrollTo = () => {
    window.scrollTo({
        left: 0,
        top: 350.0,
        behavior: 'instant' // 'smooth', 'instant', 'auto'
    })

    // window.scrollTo(0, 350) is also possible
    console.log(window.pageYOffset)
}

artHeader.outerHTML = `
    <div class='blue'>
        <button class='scrollButton' onclick='setScrollIntoView()'>scrollIntoView()</button>
        <button class='scrollButton' onclick='setScrollIntoView(false)'>scrollIntoView(false)</button>
        <button class='scrollButton' onclick='setScrollIntoViewOptions()'>scrollIntoView(options)</button>
    </div>
`
const articles = document.querySelectorAll('.article')
const articleNeed = articles[articles.length - 2]

const setScrollIntoView = top => {
    articleNeed.scrollIntoView(top)
}

const setScrollIntoViewOptions = top => {
    articleNeed.scrollIntoView({
        block: 'center', // 'start', 'center', 'end', 'nearest'. 'start' - default. vertical
        inline: 'nearest', // 'start', 'center', 'end', 'nearest'. 'nearest' - default. horizontal
        behavior: 'auto' // 'smooth', 'auto'. 'auto' - default
    })
}

const artNeedHeader = articleNeed.children.item(1).firstElementChild

artNeedHeader.outerHTML = `
    <div class='gray'>
        <button class='scrollButton' onclick='toggleScroll()'>Toggle Scroll</button>
    </div>
`
const toggleScroll = () => bodyElement.classList.toggle('scroll-lock');

const scrollButtons = document.querySelectorAll('.scrollButton')
const toggleScrollButton = scrollButtons[scrollButtons.length - 1]
toggleScrollButton.offsetLeft // 138
toggleScrollButton.offsetTop // 5
toggleScrollButton.offsetWidth // 153
toggleScrollButton.offsetHeight // 39

const artNewHeader = document.querySelector('.blue')

const getItemCoords = artNewHeader.getBoundingClientRect() // clientCoords
const getItemTopCoords = getItemCoords.top // clientTopCoords
const getItemTopDocumentCoords = getItemTopCoords + window.pageYOffset // pageTopCoords

document.elementFromPoint(0, 0) // returns element on the coords (clientCoordss)