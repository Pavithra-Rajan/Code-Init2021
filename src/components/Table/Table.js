import React from 'react'
import { useEffect } from 'react'

export default function Table() {/* 
    let model1={"A":"OS","B":"DBMS"}
    let model2={
        "Monday":[],
        "Tuesday":[],
        "Wednesday":[],
        "Thursday":[],
        "Friday":[]
    }
    let slotlist={
        "Monday":["A","F","D","B","G","E+","-","-","H"],
        "Tuesday":["B","G","E","C","A+","F+","-","-","H"],
        "Wednesday":["C","A","F","D","H","G+","-","-","E+"],
        "Thursday":["D","B","G","E","-","C+","-","-","G+"],
        "Friday":["E","C","A","F","H+","B+","-","-","D+"]
    }
    useEffect(()=>{
        model1tomodel2(model1);
    })
    function model1tomodel2(model1)
    {
        for(var i=0;i<9;i++)
        {
            if(slotlist["Monday"][i]=='-')
                model2["Monday"].push("-")
            else if(!model1.includes(slotlist["Monday"][i]))
                model2["Monday"].push("-")
            else
                model2["Monday"].push(model1[slotlist["Monday"][i]])
        }
        console.log(model2)
    } */
    let datas=[{"id":1,"first_name":"Jolyn","last_name":"Bellwood","email":"jbellwood0@fc2.com","date_of_birth":"5/20/2021"},
    {"id":2,"first_name":"Ave","last_name":"Skedge","email":"askedge1@berkeley.edu","date_of_birth":"8/29/2021"},
    {"id":3,"first_name":"Klaus","last_name":"Ocklin","email":"kocklin2@mail.ru","date_of_birth":"11/14/2020"},
    {"id":"","first_name":"","last_name":""}
    ]
    return (
        <div>
             <table>
                <tr>
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
                {datas.map(data=>(<tr>
                    <th>Buha</th>
                    <td>{data["id"]}</td>
                    <td>{data["first_name"]}</td>
                    <td>{data["last_name"]}</td>
                </tr>))
                }
            </table>
        </div>
    )
}