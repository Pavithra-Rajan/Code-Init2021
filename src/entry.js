import FormEntry from "./formentry";
import Pic from "./pic";
const Entry = ({final,setFinal}) => {
    return ( 
           <div className='rowC'>
               <div className="fm">
                <FormEntry final={final} setFinal={setFinal} />
               </div>
               <Pic />
                
               
              
           </div>
       );
       }
       export default Entry;