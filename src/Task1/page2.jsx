import axios from "axios";
import { useState } from "react";
import { useEffect} from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Views =()=>{
    const [val,setVal] =  useState({});
    useEffect(()=>{
        const all = async ()=>{
            try{
                const res =  await axios.get("https://back1-production-1815.up.railway.app/data");                
                setVal(res.data);                
            }
            catch(err){
                console.log(err);
            }
        }        
        all();
},[]) 

//Updating

const   [ change,setChange] = useState(0);
const [alter,alterData] = useState({
    Name:"",
    Sex:"Male",
    Martial:"Married",
    Address:"",
    Dep:"HR",        
    Amount:""  
})
const up = (id)=>{
    console.log("changing");
    setChange(id);
}
const reset = () => {
    window.location.reload();
};
const vary = (ele)=>{
    alterData(cur=>({
            ...cur,
            [ele.target.name]:ele.target.value
    }))    
}
console.log(alter);

const click = async (e)=>{
    e.preventDefault();
     try{
        await axios.put("https://back1-production-1815.up.railway.app/up/"+change,alter)
        console.log("Altered");
        nav("/")
     }

     catch(err){
            console.log(err);
     }
}

//Deleting
const nav = useNavigate();
const  del  = async (id)=>{            
    try{
        console.log(id);
        await axios.delete("https://back1-production-1815.up.railway.app/add/"+id);
        console.log("deleted");
        nav("/")
    }
    catch(err){
        console.log(err);
    }
}

var emp =  val.employees;
var sal = val.salary;

    return(
        <>
        <div>            
        <table class="table">
            <thead>
              <tr>
               <th scope="col">Employee ID</th>
               <th scope="col">Employee Name</th>
               <th scope="col">Sex</th>
               <th scope="col">Maritial Status</th>
               <th scope="col">Address</th>
               <th scope="col">Salary</th>
               <th scope="col">Department</th>
              </tr>
             </thead>
                    

        {emp && Array.isArray(emp) &&  sal && Array.isArray(sal) ? emp.map((k,i) => (
        <>
          <tbody>
               <tr>
                 <th scope="row">{k.id}</th>
                 
                 {k.id  === change &&   <td><input type="text" placeholder={k.Name} name="Name" onChange={vary} /></td>}                 
                 {k.id !== change && <td>{k.Name}</td>}
                 
                 {k.id  === change &&<td>
                    <select name="Sex" onChange={vary}>
 	    	            <option className="d"  value="Male" >Male</option>
 	    	            <option className="d"  value="Female" >Female</option>
 		                <option className="d"  value="Others"  >Others</option>
    	            </select>
                 </td> }                 
                 {k.id !== change && <td>{k.Sex}</td>}

                 

                 {k.id  === change &&<td>
                    <select name="Martial" onChange={vary}>
 	    	            <option className="d"  value="Married" >Married</option>
 	    	            <option className="d"  value="Single" >Single</option> 		                
    	            </select>
                 </td> }                 
                 {k.id !== change && <td>{k.Martial}</td>}

                 
                 
                 {k.id  === change && <td> <input type="text" placeholder={k.Address} name="Address" onChange={vary}/></td>}                 
                 {k.id !== change && <td>{k.Address}</td>}

                 
                 
                 {k.id  === change && <td> <input type="number" placeholder={sal[i].Amount} name="Amount" onChange={vary}/></td>}                 
                 {k.id !== change && <td>{sal[i].Amount}</td>}

                 
                 
                 {k.id  === change && <>
                    <select name="Dep" onChange={vary}>
 	    	            <option className="d"  value="HR" >HR</option>
 	    	            <option className="d"  value="TR" >TR</option>
 		                <option className="d"  value="UI/UX"  >UI/UX</option>
    	            </select>
                 </>}                 
                 {k.id !== change && <td>{sal[i].Dep}</td>}

                 
                {
                    change === k.id && <>
                        <td><button class="btn btn-success" onClick={click}>Save Changes</button></td>                 
                        <td><button class="btn btn-danger" onClick={reset} >Cancel</button></td>   
                    </>
                }                 
                {
                    change !== k.id && <>
                        <td><button class="btn btn-success" onClick={()=>up(k.id)}>Update</button></td>                        
                        <td><button class="btn btn-danger" onClick={()=>del(k.id)} >Delete</button></td>
                    </>
                    
                }
                 
               </tr>    
             </tbody>
    
             </>
            )) : null
            }
            
        </table>                         
    </div>        
    </>
    )
}
export default Views;