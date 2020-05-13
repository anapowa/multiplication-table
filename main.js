// output the header row
document.write('<span class="cell header">&times;</span>');
let i = 0;
while (i <= 10) {
    document.write('<span class="cell header">' + i + "</span>");
    i++;
}
document.write("<br>");
// TODO: Write two nested while loops to output the rest of the multiplication table