import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Table({final}) {
    let tslotlist=[ 
        {"day":"Monday","slots":["A","F","D","B","G","E","-","-","H"]},
        {"day":"Tuesday","slots":["B","G","E","C","A","F","-","-","H"]},
        {"day":"Wednesday","slots":["C","A","F","D","H","G","-","-","E"]},
        {"day":"Thursday","slots":["D","B","G","E","-","C","-","-","G"]},
        {"day":"Friday","slots":["E","C","A","F","H","B","-","-","D"]}
    ]
    let pslotlist=[ 
        {"day":"Monday","slots":"P"},
        {"day":"Tuesday","slots":"Q"},
        {"day":"Wednesday","slots":"R"},
        {"day":"Thursday","slots":"S"},
        {"day":"Friday","slots":"T"}
    ]
    const [model2, setModel2] = useState([
        {"day":"Monday","slots":[]},
        {"day":"Tuesday","slots":[]},
        {"day":"Wednesday","slots":[]},
        {"day":"Thursday","slots":[]},
        {"day":"Friday","slots":[]}
    ]);
    useEffect(()=>{
        console.log("buha",final)
        finaltomodel2();
    },[final])

    function finaltomodel2()
    {
        var model2temp=[
            {"day":"Monday","slots":[]},
            {"day":"Tuesday","slots":[]},
            {"day":"Wednesday","slots":[]},
            {"day":"Thursday","slots":[]},
            {"day":"Friday","slots":[]}
        ]
        for(var j=0;j<5;j++)
        {
            for(var i=0;i<9;i++)
            {
                if(tslotlist[j]["slots"][i]=='-')
                {
                    model2temp[j]["slots"].push("-")
                }
                else if(final[tslotlist[j]["slots"][i]]=="")
                {
                    model2temp[j]["slots"].push("-")
                }
                else
                {
                    model2temp[j]["slots"].push(final[tslotlist[j]["slots"][i]])
                }
            }
        }
        var tr=document.getElementsByTagName("tr")
        console.log("tr",tr)
        for(var j=0;j<5;j++)
        {
            if(final[pslotlist[j]["slots"]]!="")
            {
                tr[j+1].children[6].classList.add("left")
                tr[j+1].children[7].classList.add("cen")
                tr[j+1].children[8].classList.add("right")
                model2temp[j].slots[5]=""
                model2temp[j].slots[6]=final[pslotlist[j]["slots"]]
                model2temp[j].slots[7]=""
            }
            else
            {
                tr[j+1].children[6].classList.remove("left")
                tr[j+1].children[7].classList.remove("cen")
                tr[j+1].children[8].classList.remove("right")
            }
        }
        console.log("temp",model2temp)
        setModel2(model2temp,()=>{console.log("done")})
    }
    return (
        <div>
             <table>
                <tr>
                    <th></th>
                    <th>08:00-09:00</th>
                    <th>09:00-10:00</th>
                    <th>10:15-11:15</th>
                    <th>11:15-12:15</th>
                    <th>13:00-14:00</th>
                    <th>14:00-15:00</th>
                    <th>15:00-16:00</th>
                    <th>16:00-17:00</th>
                    <th>17:00-18:00</th>
                </tr>
                {model2.map(data=>(<tr>
                    <th>{data.day}</th>
                    <td>{data.slots[0]}</td>
                    <td>{data.slots[1]}</td>
                    <td>{data.slots[2]}</td>
                    <td>{data.slots[3]}</td>
                    <td>{data.slots[4]}</td>
                    <td>{data.slots[5]}</td>
                    <td>{data.slots[6]}</td>
                    <td>{data.slots[7]}</td>
                    <td>{data.slots[8]}</td>
                </tr>))
                }
            </table>
        </div>
    )
}