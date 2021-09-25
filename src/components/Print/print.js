import React from 'react'
import jsPDF from 'jspdf';
import 'jspdf-autotable'
// import { useState } from 'react'

export default function Print() {
    let slotlist = [
        {
            "day":"Monday",
            "slots":["A","F","D","B","G","E+","-","-","H"]
        },
        {
            "day":"Tuesday",
            "slots":["B","G","E","C","A+","F+","-","-","H"]
        },
        {
            "day":"Wednesday",
            "slots":["C","A","F","D","H","G+","-","-","E+"]
        },
        {
            "day":"Thursday",
            "slots":["D","B","G","E","-","C+","-","-","G+"]
        },
        {
            "day":"Friday",
            "slots":["E","C","A","F","H+","B+","-","-","D+"]
        }
    ]
    function exportPDF() {
        const unit = "pt";
        const size = "A4"; // Use A1, A2, A3 or A4
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
        const doc = new jsPDF(orientation, unit, size);
    
        doc.setFontSize(15);
    
        const title = "TT";
        const headers = [["D", "T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9"]];
        // const headers = [["id", "firstName", "LastName", "email", "dob"]];
    
        const data = slotlist.map(elt=> [elt.day, elt.slots[0], elt.slots[1], elt.slots[2], elt.slots[3], elt.slots[4], elt.slots[5], elt.slots[6], elt.slots[7], elt.slots[8],elt.slots[9]]);
    
        let content = {
          startY: 50,
          head: headers,
          body: data,
          styles: {
            // fillColor: '#5D389D'
            cellPadding: 5,
            fontSize: 10,
            font: "helvetica", // helvetica, times, courier
            lineColor: 200,
            lineWidth: 0.1,
            fontStyle: 'normal', // normal, bold, italic, bolditalic
            overflow: 'ellipsize', // visible, hidden, ellipsize or linebreak
            fillColor: 255,
            textColor: 20,
            halign: 'left', // left, center, right
            valign: 'middle', // top, middle, bottom
            fillStyle: 'F', // 'S', 'F' or 'DF' (stroke, fill or fill then stroke)
            rowHeight: 20,
            columnWidth: 'auto' // 'auto', 'wrap' or a number
          },
          margin: {top: 100}
        };
    
        doc.text(title, marginLeft, 40);
        doc.autoTable(content);
        doc.save("report.pdf")
    }
    return (
        <div>
            <button onClick={() => exportPDF()}>Export as PDF</button>
        </div>
    )
}
