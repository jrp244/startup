This was a good review on github and merge conflicts for me. I've used gitlab tons for work, but github is something that I've used but not as much. 
https://github.com/jrp244/startup/blob/main/README.md

It seems you've provided a list of questions covering a wide range of topics related to web development, HTML, CSS, JavaScript, the DOM, and even some questions about command line usage and networking. I'll do my best to provide concise answers to each of these questions:

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

    What does the following padding CSS do?
        You didn't provide the CSS code. Please provide the CSS for a specific answer.

    What does the following code using arrow syntax function declaration do?
        You haven't provided the code. Please provide the JavaScript code for a specific answer.

    What does the following code using map with an array output?
        You haven't provided the code. Please provide the JavaScript code for a specific answer.

    What does the following code output using getElementByID and addEventListener?
        You haven't provided the code. Please provide the HTML and JavaScript code for a specific answer.

    What does the following line of JavaScript do using a # selector?
        You haven't provided the JavaScript code. Please provide the code for a specific answer.

    Which of the following are true? (mark all that are true about the DOM)
        You didn't provide the statements to choose from. Please provide the statements you'd like me to evaluate.

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

