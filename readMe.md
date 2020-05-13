Assessment: Multiplication Table
Write an HTML page that uses Javascript to draw a 10x10 multiplication table. The key idea is to use two nested loops (one loop inside another) for the rows and columns of the table.

Pretend you are designing your page for elementary school teachers to use in a classroom. It should look roughly like this:



Getting Started
Create an HTML file named index.html in your project directory. Copy/paste the following code snippet into index.html.

<!DOCTYPE html>
<html>
    <head>
        <title>Multiplication Table</title>
        <link rel='stylesheet' type='text/css' href='style.css' />
    </head>
    <body>
        <h1>Multiplication Table</h1>
        <script src='main.js'></script>
    </body>
</html>
Create a JavaScript file named main.js in your project directory. Copy/paste the following code snippet into main.js.

// output the header row
document.write('<span class="cell header">&times;</span>');
let i = 0;
while (i <= 10) {
    document.write('<span class="cell header">' + i + "</span>");
    i++;
}
document.write("<br>");
// TODO: Write two nested while loops to output the rest of the multiplication table
Create a CSS file named style.css in your project directory. Copy/paste the following code snippet into style.css.

.cell {
    display: inline-block;
    width: 30px; height: 30px;
    text-align: right;
}
.header {
    background: lightblue;
}
Bonus (2 points max)
For an additional challenge:

Provide controls to allow generating tables of different sizes (e.g. 12x12, 16x16)
Provide controls to change the colors or styles of the table on the fly.
Submission
Push your code into your GitLab repository and use the GitLab Pages feature to allow your site to be viewed directly. Please submit the published Gitlab repo url, and in the comments your Gitlab pages url below.