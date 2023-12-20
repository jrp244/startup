This was a good review on github and merge conflicts for me. I've used gitlab tons for work, but github is something that I've used but not as much. 
https://github.com/jrp244/startup/blob/main/README.md


./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon
➜  ssh -i ~/keys/production.pem ubuntu@53.104.2.123
sudo service caddy restart
npm init -y

Answers to your web development questions:

Ports:

    HTTP: 80
    HTTPS: 443
    SSH: 22

HTTP Status Codes:

    300s: Redirects (301 Moved Permanently, 302 Found)
    400s: Client errors (404 Not Found, 403 Forbidden)
    500s: Server errors (500 Internal Server Error, 502 Bad Gateway)

Content-Type header: Specifies the type of data contained in the response, allowing browsers to render it correctly (e.g., text/html, application/json).

Cookie attributes:

    Domain: Limits the cookie's availability to subdomains of the specified domain.
    Path: Limits the cookie's availability to specific paths within the domain.
    SameSite: Restricts cookie access to prevent third-party tracking (Strict, Lax, None).
    HTTPOnly: Protects the cookie from being accessed by client-side scripts, enhancing security.

Express middleware example:

Given middleware that logs the URL path:

console.log('URL:', req.url);

For GET /foo/bar, the console will log:

console.log('URL:', '/foo/bar');

Express service code and fetch:

Assuming the service responds with the user's name:
JavaScript

fetch('/user')
  .then(response => response.json())
  .then(data => console.log(data.name)); // logs the user's name

Use code with caution. Learn more

MongoDB query:

Selects documents where:

    cost is greater than 10 ($gt: 10)
    name contains "fran" (/fran./*) (case-insensitive with regex)

Password storage:

Never store passwords directly! Use a secure hash function (e.g., bcrypt) with a random salt to generate a unique hash for each password.

Node.js service and websockets:

Assuming the service sends a message on connection:

    The browser console will log the received message.

Websockets:

A real-time, bi-directional communication protocol for web applications.

JSX:

An extension of JavaScript that allows embedding HTML-like syntax within JavaScript code. Curly braces render dynamic content within JSX elements.

React component: Welcome & App:

Will generate:
HTML

<h1>Hello, Sara</h1>
<h1>Hello, Cahal</h1>
<h1>Hello, Edite</h1>

Use code with caution. Learn more

React component: Numbers:

Will generate:
HTML

<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>

Use code with caution. Learn more

React component: Example:

Keeps track of clicks and displays the count. Clicking the button increases the count and updates the displayed value.

React Hooks:

Functions introduced in React v16.8 for managing state, side effects, and other functionality.

useEffect hook:

Triggers side effects after rendering, like fetching data, setting up subscriptions, or performing cleanup.

React router code:

Defines routes for different components (Layout, Home, Blogs, etc.) and handles navigation (<Routes> and Route).

npm:

The primary package manager for Node.js projects, allowing installation and management of third-party libraries and dependencies.

package.json:

Manages dependencies, scripts, and configuration for a npm project.

fetch function:

A browser API for fetching resources (e.g., data) from a server asynchronously.

Node.js:

A JavaScript runtime environment used for server-side scripting and building back-end applications.

Vite:

A next-generation web bundler offering faster build times and hot module replacement for development.










    In the following code, what does the link element do?
        The link element is used in HTML to define relationships between the current document and external resources, such as stylesheets. It's commonly used to link to external CSS files.

    In the following code, what does a div tag do?
        The <div> tag is a block-level HTML element used for grouping and structuring content. It doesn't have any specific meaning on its own but is used for layout and styling purposes.

    In the following code, what is the difference between the #title and .grid selector?
        #title is an ID selector, and it selects an element with the specified ID attribute, typically unique on the page.
        .grid is a class selector, and it selects elements with the specified class attribute. Multiple elements can share the same class.

    In the following code, what is the difference between padding and margin?
        Padding is the space between the content of an element and its border. It affects the element's content area.
        Margin is the space outside the border of an element and is used to create space between elements. It affects the layout of elements on the page.

    Given this HTML and this CSS, how will the images be displayed using flex?
        You haven't provided the HTML and CSS code for this question, so I can't answer it specifically.
        ![Alt text](rofzm44oka091.png)
        https://i.redd.it/rofzm44oka091.png
        https://www.w3schools.com/js/pic_htmltree.gif

    What does the following padding CSS do?
        You didn't provide the CSS code. Please provide the CSS for a specific answer.

    What does the following code using arrow syntax function declaration do?
        You haven't provided the code. Please provide the JavaScript code for a specific answer.
        An arrow function expression is an anonymous function expression written with the “fat arrow” syntax ( => ). Like traditional function expressions, arrow functions are not hoisted, and so you cannot call them before you declare them. They are also always anonymous—there is no way to name an arrow function.

    What does the following code using map with an array output?
        You haven't provided the code. Please provide the JavaScript code for a specific answer.
        The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array. 

    What does the following code output using getElementByID and addEventListener?
        You haven't provided the code. Please provide the HTML and JavaScript code for a specific answer.

    What does the following line of JavaScript do using a # selector?
        You haven't provided the JavaScript code. Please provide the code for a specific answer.
        The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned. 

    Which of the following are true? (mark all that are true about the DOM)
        You didn't provide the statements to choose from. Please provide the statements you'd like me to evaluate.
        With the object model, JavaScript gets all the power it needs to create dynamic HTML:

    JavaScript can change all the HTML elements in the page
    JavaScript can change all the HTML attributes in the page
    JavaScript can change all the CSS styles in the page
    JavaScript can remove existing HTML elements and attributes
    JavaScript can add new HTML elements and attributes
    JavaScript can react to all existing HTML events in the page
    JavaScript can create new HTML events in the page
https://www.w3schools.com/js/pic_htmltree.gif

    By default, the HTML span element has a default CSS display property value of:
        The default display property value for a <span> element is inline.

    How would you use CSS to change all the div elements to have a background color of red?
        You can use CSS to change the background color of all <div> elements like this:

    css

div {
    background-color: red;
}

How would you display an image with a hyperlink in HTML?

    To display an image with a hyperlink in HTML, you can use the <a> (anchor) and <img> (image) elements together like this:

html

<a href="https://example.com">
    <img src="image.jpg" alt="Description of the image">
</a>

In the CSS box model, what is the ordering of the box layers starting at the inside and working out?

    The CSS box model consists of content, padding, border, and margin. Starting from the inside and working out, the order is: content, padding, border, margin.

Given the following HTML, what CSS would you use to set the text "troubl" to green and leave the "double" text unaffected?

    You haven't provided the HTML code. Please provide the HTML code for a specific answer.

What will the following code output when executed using a for loop and console.log?

    You haven't provided the code. Please provide the JavaScript code for a specific answer.

How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?

    You can do this with JavaScript as follows:

javascript

const element = document.getElementById("byu");
if (element) {
    element.style.color = "green";
}

What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?

    HTML tags for the mentioned elements:
    Paragraph: <p>
    Ordered List: <ol>
    Unordered List: <ul>
    Second Level Heading: <h2>
    First Level Heading: <h1>
    Third Level Heading: <h3>

How do you declare the document type to be html?

    To declare the document type as HTML5, you use the following at the beginning of an HTML document:

html

<!DOCTYPE html>

What is valid JavaScript syntax for if, else, for, while, switch statements?

    Valid JavaScript syntax examples:

javascript

// if-else statement
if (condition) {
    // code to run if the condition is true
} else {
    // code to run if the condition is false
}

// for loop
for (let i = 0; i < 5; i++) {
    // code to run in each iteration
}

// while loop
while (condition) {
    // code to run while the condition is true
}

// switch statement
switch (value) {
    case 1:
        // code to run if value is 1
        break;
    case 2:
        // code to run if value is 2
        break;
    default:
        // code to run if value doesn't match any case
}

What is the correct syntax for creating a JavaScript object?

    JavaScript object syntax:

javascript

    const obj = {
        key1: "value1",
        key2: "value2",
        // More key-value pairs...
    };

    Is it possible to add new properties to JavaScript objects?
        Yes, it is possible to add new properties to JavaScript objects at any time. You can do this by simply assigning a value to a new key.

    If you want to include JavaScript on an HTML page, which tag do you use?
        To include JavaScript on an HTML page, you use the <script> tag. You can place it in the <head> or <body> of your HTML document.

    Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
        You haven't provided the HTML code. Please provide the HTML code for a specific answer.

    Which of the following correctly describes JSON?
        JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. It is often used to transmit data between a server and a web application as a text-based format.

    What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
        These are various Unix/Linux command-line commands:
        chmod: Changes file permissions.
        pwd: Prints the current working directory.
        cd: Changes the current directory.
        ls: Lists files and directories in the current directory.
        vim and nano: Text editors for creating or editing files.
        mkdir: Creates a new directory.
        mv: Moves or renames files and directories.
        rm: Removes files and directories.
        man: Displays the manual pages for commands.
        ssh: Secure Shell for remote access.
        ps: Lists currently running processes.
        wget: Downloads files from the internet.
        sudo: Executes a command with superuser privileges.

    Which of the following console command creates a remote shell session?
        ssh is used to create a remote shell session, allowing you to connect to a remote server or machine.

    Which of the following is true when the -la parameter is specified for the ls console command?
        When you specify the -la parameter for the ls command, it lists all files (including hidden files) in a long format, providing detailed information about each file, such as permissions, owner, group, size, and modification date.

    Which of the following is true for the domain name banana.fruit.bozo.click, which is the top-level domain, which is a subdomain, which is a root domain?
        In the domain name "banana.fruit.bozo.click":
        "click" is the top-level domain (TLD).
        "bozo.click" is a subdomain.
        "fruit" is also a subdomain.

    Is a web certificate necessary to use HTTPS?
        Yes, a web certificate, specifically an SSL/TLS certificate, is necessary to use HTTPS. It provides secure encryption and authentication for data transmitted between a website and its visitors.

    Can a DNS A record point to an IP address or another A record?
        A DNS A record can only point to an IP address. If you want to create a chain of records that refer to other records, you would typically use CNAME (Canonical Name) records or other record types.

    Port 443, 80, 22 is reserved for which protocol?
        Port 443 is reserved for the HTTPS (HTTP over TLS/SSL) protocol.
        Port 80 is reserved for HTTP (unencrypted).
        Port 22 is reserved for the SSH (Secure Shell) protocol.

    What will the following code using Promises output when executed?
        You haven't provided the code. Please provide the JavaScript code using Promises for a specific answer.
        The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

To learn about the way promises work and how you can use them, we advise you to read Using promises first.
Description

A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

    pending: initial state, neither fulfilled nor rejected.
    fulfilled: meaning that the operation was completed successfully.
    rejected: meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

A promise is said to be settled if it is either fulfilled or rejected, but not pending.

Flowchart showing how the Promise state transitions between pending, fulfilled, and rejected via then/catch handlers. A pending promise can become either fulfilled or rejected. If fulfilled, the "on fulfillment" handler, or first parameter of the then() method, is executed and carries out further asynchronous actions. If rejected, the error handler, either passed as the second parameter of the then() method or as the sole parameter of the catch() method, gets executed.

You will also hear the term resolved used with promises — this means that the promise is settled or "locked-in" to match the eventual state of another promise, and further resolving or rejecting it has no effect. The States and fates document from the original Promise proposal contains more details about promise terminology. Colloquially, "resolved" promises are often equivalent to "fulfilled" promises, but as illustrated in "States and fates", resolved promises can be pending or rejected as well. For example:

js

new Promise((resolveOuter) => {
  resolveOuter(
    new Promise((resolveInner) => {
      setTimeout(resolveInner, 1000);
    }),
  );
});

This promise is already resolved at the time when it's created (because the resolveOuter is called synchronously), but it is resolved with another promise, and therefore won't be fulfilled until 1 second later, when the inner promise fulfills. In practice, the "resolution" is often done behind the scenes and not observable, and only its fulfillment or rejection are.

Note: Several other languages have mechanisms for lazy evaluation and deferring a computation, which they also call "promises", e.g. Scheme. Promises in JavaScript represent processes that are already happening, which can be chained with callback functions. If you are looking to lazily evaluate an expression, consider using a function with no arguments e.g. f = () => expression to create the lazily-evaluated expression, and f() to evaluate the expression immediately.
Chained Promises

The methods Promise.prototype.then(), Promise.prototype.catch(), and Promise.prototype.finally() are used to associate further action with a promise that becomes settled. As these methods return promises, they can be chained.

The .then() method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case. Each .then() returns a newly generated promise object, which can optionally be used for chaining; for example:

js

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

myPromise
  .then(handleFulfilledA, handleRejectedA)
  .then(handleFulfilledB, handleRejectedB)
  .then(handleFulfilledC, handleRejectedC);

Processing continues to the next link of the chain even when a .then() lacks a callback function. Therefore, a chain can safely omit every rejection callback function until the final .catch().

Handling a rejected promise in each .then() has consequences further down the promise chain. Sometimes there is no choice, because an error must be handled immediately. In such cases we must throw an error of some type to maintain error state down the chain. On the other hand, in the absence of an immediate need, it is simpler to leave out error handling until a final .catch() statement. A .catch() is really just a .then() without a slot for a callback function for the case when the promise is fulfilled.

js

myPromise
  .then(handleFulfilledA)
  .then(handleFulfilledB)
  .then(handleFulfilledC)
  .catch(handleRejectedAny);

Using arrow functions for the callback functions, implementation of the promise chain might look something like this:

js

myPromise
  .then((value) => `${value} and bar`)
  .then((value) => `${value} and bar again`)
  .then((value) => `${value} and again`)
  .then((value) => `${value} and again`)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.error(err);
  });

Note: For faster execution, all synchronous actions should preferably be done within one handler, otherwise it would take several ticks to execute all handlers in sequence.

The termination condition of a promise determines the "settled" state of the next promise in the chain. A "fulfilled" state indicates a successful completion of the promise, while a "rejected" state indicates a lack of success. The return value of each fulfilled promise in the chain is passed along to the next .then(), while the reason for rejection is passed along to the next rejection-handler function in the chain.

The promises of a chain are nested in one another, but get popped like the top of a stack. The first promise in the chain is most deeply nested and is the first to pop.

(promise D, (promise C, (promise B, (promise A) ) ) )

When a nextValue is a promise, the effect is a dynamic replacement. The return causes a promise to be popped, but the nextValue promise is pushed into its place. For the nesting shown above, suppose the .then() associated with "promise B" returns a nextValue of "promise X". The resulting nesting would look like this:

(promise D, (promise C, (promise X) ) )

A promise can participate in more than one nesting. For the following code, the transition of promiseA into a "settled" state will cause both instances of .then() to be invoked.

js

const promiseA = new Promise(myExecutorFunc);
const promiseB = promiseA.then(handleFulfilled1, handleRejected1);
const promiseC = promiseA.then(handleFulfilled2, handleRejected2);

An action can be assigned to an already "settled" promise. In that case, the action (if appropriate) will be performed at the first asynchronous opportunity. Note that promises are guaranteed to be asynchronous. Therefore, an action for an already "settled" promise will occur only after the stack has cleared and a clock-tick has passed. The effect is much like that of setTimeout(action, 0).

js

const promiseA = new Promise((resolve, reject) => {
  resolve(777);
});
// At this point, "promiseA" is already settled.
promiseA.then((val) => console.log("asynchronous logging has val:", val));
console.log("immediate logging");

// produces output in this order:
// immediate logging
// asynchronous logging has val: 777

Thenables

The JavaScript ecosystem had made multiple Promise implementations long before it became part of the language. Despite being represented differently internally, at the minimum, all Promise-like objects implement the Thenable interface. A thenable implements the .then() method, which is called with two callbacks: one for when the promise is fulfilled, one for when it's rejected. Promises are thenables as well.

To interoperate with the existing Promise implementations, the language allows using thenables in place of promises. For example, Promise.resolve will not only resolve promises, but also trace thenables.

js

const aThenable = {
  then(onFulfilled, onRejected) {
    onFulfilled({
      // The thenable is fulfilled with another thenable
      then(onFulfilled, onRejected) {
        onFulfilled(42);
      },
    });
  },
};

Promise.resolve(aThenable); // A promise fulfilled with 42

Promise concurrency

The Promise class offers four static methods to facilitate async task concurrency:

Promise.all()

    Fulfills when all of the promises fulfill; rejects when any of the promises rejects.
Promise.allSettled()

    Fulfills when all promises settle.
Promise.any()

    Fulfills when any of the promises fulfills; rejects when all of the promises reject.
Promise.race()

    Settles when any of the promises settles. In other words, fulfills when any of the promises fulfills; rejects when any of the promises rejects.

All these methods take an iterable of promises (thenables, to be exact) and return a new promise. They all support subclassing, which means they can be called on subclasses of Promise, and the result will be a promise of the subclass type. To do so, the subclass's constructor must implement the same signature as the Promise() constructor — accepting a single executor function that can be called with the resolve and reject callbacks as parameters. The subclass must also have a resolve static method that can be called like Promise.resolve() to resolve values to promises.

Note that JavaScript is single-threaded by nature, so at a given instant, only one task will be executing, although control can shift between different promises, making execution of the promises appear concurrent. Parallel execution in JavaScript can only be achieved through worker threads.
Constructor

Promise()

    Creates a new Promise object. The constructor is primarily used to wrap functions that do not already support promises.

Static properties

Promise[@@species]

    Returns the constructor used to construct return values from promise methods.

Static methods

Promise.all()

    Takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values. It rejects when any of the input's promises reject, with this first rejection reason.
Promise.allSettled()

    Takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when all of the input's promises settle (including when an empty iterable is passed), with an array of objects that describe the outcome of each promise.
Promise.any()

    Takes an iterable of promises as input and returns a single Promise. This returned promise fulfills when any of the input's promises fulfill, with this first fulfillment value. It rejects when all of the input's promises reject (including when an empty iterable is passed), with an AggregateError containing an array of rejection reasons.
Promise.race()

    Takes an iterable of promises as input and returns a single Promise. This returned promise settles with the eventual state of the first promise that settles.
Promise.reject()

    Returns a new Promise object that is rejected with the given reason.
Promise.resolve()

    Returns a Promise object that is resolved with the given value. If the value is a thenable (i.e. has a then method), the returned promise will "follow" that thenable, adopting its eventual state; otherwise, the returned promise will be fulfilled with the value.

Instance properties

These properties are defined on Promise.prototype and shared by all Promise instances.

Promise.prototype.constructor

    The constructor function that created the instance object. For Promise instances, the initial value is the Promise constructor.
Promise.prototype[@@toStringTag]

    The initial value of the @@toStringTag property is the string "Promise". This property is used in Object.prototype.toString().

Instance methods

Promise.prototype.catch()

    Appends a rejection handler callback to the promise, and returns a new promise resolving to the return value of the callback if it is called, or to its original fulfillment value if the promise is instead fulfilled.
Promise.prototype.finally()

    Appends a handler to the promise, and returns a new promise that is resolved when the original promise is resolved. The handler is called when the promise is settled, whether fulfilled or rejected.
Promise.prototype.then()

    Appends fulfillment and rejection handlers to the promise, and returns a new promise resolving to the return value of the called handler, or to its original settled value if the promise was not handled (i.e. if the relevant handler onFulfilled or onRejected is not a function).

