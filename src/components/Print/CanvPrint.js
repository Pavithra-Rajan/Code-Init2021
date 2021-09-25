import React from 'react'
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function CanvPrint({slotlist}) {
    
    // You can use html:
    
    function save(){
        html2canvas(document.querySelector("#capture"))
        .then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF('l', 'in', [2.127700243, 5]);
          pdf.addImage(imgData, 'PNG', 0, 0, 5,1.8);
          pdf.save("download.pdf");  
        });
      ;
      
    }
    

    return (
        <div>
            <button onClick={()=>save()}>Smash!</button>
        </div>
    )
}
