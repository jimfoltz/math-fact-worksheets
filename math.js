
function create(min, max, columns, rows, sym) {
    document.write("<table>");
    var count = 1;
    for (r = 0; r < rows; r++) {
        document.write("<tr>");
        for (c = 0; c < columns; c++) {
            document.write("<td>");
            document.write("<div class=problem>");

            var num1 = Math.floor(Math.random()*(max-min+1))+min;
            var num2 = Math.floor(Math.random()*(max-min+1))+min;
            if (num2 > num1)
            {
                tmp = num1;
                num1 = num2;
                num2 = tmp;
            }
            // Row 1
            if (num1 < 10) { document.write("&nbsp;"); }
            document.write("&nbsp;");
            document.write(num1);
            document.write("<br>");
            // Row 2
            document.write("<u>");
            document.write(sym);
            if (num2 < 10) { document.write("&nbsp;"); }
            document.write(num2);
            document.write("</u><br>");
            document.write("<br>");
            document.write("&nbsp;");

            document.write("</td>");
            count += 1;
        }
        document.write("</tr>");
    }
}
