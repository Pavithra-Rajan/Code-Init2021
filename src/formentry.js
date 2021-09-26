const FormEntry = ({final,setFinal}) => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        const a=e.target.A.value;
        const b=e.target.B.value;
        const c=e.target.C.value;
        const d=e.target.D.value;
        const ee=e.target.E.value;
        const f=e.target.F.value;
        const g=e.target.G.value;
        const h=e.target.H.value;
        const p=e.target.P.value;
        const q=e.target.Q.value;
        const r=e.target.R.value;
        const s=e.target.S.value;
        const t=e.target.T.value;
        setFinal({"A":a,"B":b,"C":c,"D":d,"E":ee,"F":f,"G":g,"H":h,"P":p,"Q":q,"R":r,"S":s,"T":t});
    }
    function clear(e){
        var form=document.getElementsByTagName("form")[0]
        form.reset();
    }
    
    return ( 
        <div className="entry">
            <h2>Enter core subjects/electives</h2>
            <form name="subjects" onSubmit={handleSubmit}>
                <div className="two-col">
                    <div className="col1">
                        <label>A: </label>
                        <input 
                        type="text"
                        name="A"
                        />
                    </div>
                    <div className="col2">
                        <label>B: </label>
                        <input 
                        type="text"
                        name="B"
                        />
                    </div>
                    
                </div>
                
                <div className="two-col">
                    <div className="col1">
                        <label>C: </label>
                        <input 
                        type="text"
                        name="C"
                        />
                    </div>
                    <div className="col2">
                        <label>D: </label>
                        <input 
                        type="text"
                        name="D"
                        />
                    </div>
                    
                </div>
                
                <div className="two-col">
                    <div className="col1">
                        <label>E: </label>
                        <input 
                        type="text"
                        name="E"
                        />
                    </div>
                    <div className="col2">
                        <label>F: </label>
                        <input 
                        type="text"
                        name="F"
                        />
                    </div>
                    
                </div>
                <div className="two-col">
                    <div className="col1">
                        <label>G: </label>
                        <input 
                        type="text"
                        name="G"
                        />
                    </div>
                    <div className="col2">
                        <label>H: </label>
                        <input 
                        type="text"
                        name="H"
                        />
                    </div>
                    
                </div>
                <h2>Enter the lab subjects</h2>
                <div className="two-col">
                    <div className="col1">
                        <label>P: </label>
                        <input 
                        type="text"
                        name="P"
                        />
                    </div>
                    <div className="col2">
                        <label>Q: </label>
                        <input 
                        type="text"
                        name="Q"
                        />
                    </div>
                    
                </div>

                <div className="two-col">
                    <div className="col1">
                        <label>R: </label>
                        <input 
                        type="text"
                        name="R"
                        />
                    </div>
                    <div className="col2">
                        <label>S: </label>
                        <input 
                        type="text"
                        name="S"
                        />
                    </div>
                    
                </div>
                <div className="two-col">
                    <div className="col1">
                        <label>T: </label>
                        <input 
                        type="text"
                        name="T"
                        />
                    </div>
                </div>
                <input type="submit" value="Submit" />
                <button id="clear" value="clear" onClick={()=>clear()}>Clear</button>
            </form>
          
        </div>
        
        
     );
}
 
export default FormEntry;