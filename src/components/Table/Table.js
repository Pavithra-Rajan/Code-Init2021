import React, { useState } from 'react'
import { useEffect } from 'react'

export default function Table({final,model2,setModel2}) {
    const [tz,setTz] =useState("india")
    function TZ_checker(event)
    {
        setTz(event.target.value)
    }
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
        var tr=document.getElementsByTagName("tr")
        for(var j=0;j<5;j++)
        {
            for(var i=0;i<9;i++)
            {
                if(tslotlist[j]["slots"][i]=='-')
                {
                    model2temp[j]["slots"].push("-")
                    tr[j+1].children[1+i].classList.add('darkcell')
                }
                else if(final[tslotlist[j]["slots"][i]]=="")
                {
                    model2temp[j]["slots"].push("-")
                    tr[j+1].children[1+i].classList.add('darkcell')
                }
                else
                {
                    model2temp[j]["slots"].push(final[tslotlist[j]["slots"][i]])
                    tr[j+1].children[1+i].classList.remove('darkcell')
                }
            }
        }
        console.log("tr",tr)
        for(var j=0;j<5;j++)
        {

            tr[j+1].children[6].classList.remove("left")
            tr[j+1].children[7].classList.remove("cen")
            tr[j+1].children[8].classList.remove("right")
            if(final[pslotlist[j]["slots"]]!="")
            {
                tr[j+1].children[6].classList.add("left")
                tr[j+1].children[7].classList.add("cen")
                tr[j+1].children[8].classList.add("right")
                tr[j+1].children[6].classList.remove("darkcell")
                tr[j+1].children[7].classList.remove("darkcell")
                tr[j+1].children[8].classList.remove("darkcell")
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
        <div className="timetable">
            <div id="capture" className="container">
             <table>
                <tr>
                    <th>
                        <select onChange={(event)=>TZ_checker(event)} name="cars" id="cars">
                        <option value="india">India</option>
                        <option value="uae">UAE/Oman</option>
                        <option value="qatar">Qatar/Kuwait</option>
                        </select>
                    </th>
                    {tz=="india"&&<>
                    <th>08:00-09:00</th>
                    <th>09:00-10:00</th>
                    <th>10:15-11:15</th>
                    <th>11:15-12:15</th>
                    <th>13:00-14:00</th>
                    <th>14:00-15:00</th>
                    <th>15:00-16:00</th>
                    <th>16:00-17:00</th>
                    <th>17:00-18:00</th>
                    </>}
                    
                    {tz=="uae"&&<>
                    <th>06:30-07:30</th>
                    <th>07:30-08:45</th>
                    <th>08:45-09:45</th>
                    <th>09:45-11:30</th>
                    <th>11:30-12:30</th>
                    <th>12:30-13:30</th>
                    <th>13:30-14:30</th>
                    <th>14:30-15:30</th>
                    <th>15:30-16:30</th>
                    </>}
                    
                    {tz=="qatar"&&<>
                    <th>05:30-06:30</th>
                    <th>06:30-07:45</th>
                    <th>07:45-08:45</th>
                    <th>08:45-10:30</th>
                    <th>10:30-11:30</th>
                    <th>11:30-12:30</th>
                    <th>12:30-13:30</th>
                    <th>13:30-14:30</th>
                    <th>14:30-15:30</th>
                    </>}
                </tr>
                {model2.map(data=>(<tr>
                    <th>{data.day}</th>
                    <td><p suppressContentEditableWarning contentEditable spellCheck={false}> {data.slots[0]}</p></td>
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
        </div>
    )
}