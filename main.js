// output the header row
document.write('<span class="cell header">&times;</span>');
let i = 1;
while (i <= 10) {
    document.write('<span class="cell header">' + i + "</span>");
    i++;
}
document.write("<br>");

let rowNum = 1
while (rowNum <= 10) {
    document.write('<span class="cell">' + rowNum + '</span>')
    

    let columnNum = 1
    while (columnNum <=10) {
        let result = rowNum * columnNum
        document.write('<span class="cell">' + result + '</span>')
        columnNum++
    }
    document.write('<br>')
    rowNum++
}
// TODO: Write two nested while loops to output the rest of the multiplication table