import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./css/page1.css"
import axios from 'axios'; 
const Home = ()=>{
   
    const [data,setData] = useState({
        Name:"",
        Sex:"",
        Martial:"",
        Address:"",
        Dep:"HR",        
        Amount:0        
    });
    
      const reset = () => {
        window.location.reload();
      };
    
      const [errors, setErrors] = useState({});


      

    const nav = useNavigate();
    const add = (ele)=>{
        setData(cur=>({
                ...cur,
                [ele.target.name]:ele.target.value
        }))
        
    }
    const validate = () => {
        let newErrors = {};
        if (!data.Name) {
            newErrors.Name = "Name is required";
        }
        if (!data.Sex) {
            newErrors.Sex = "Sex is required";
        }
        if (!data.Martial) {
            newErrors.Martial = "Martial status is required";
        }
        if (!data.Address) {
            newErrors.Address = "Address is required";
        }
        if (!data.Amount) {
            newErrors.Amount = "Salary is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };


    const click = async (e)=>{
        e.preventDefault();
        if (!validate()) {
            return;
        }
         try{
           await axios.post("https://back1-production-1815.up.railway.app/add",data)
            nav("/add")
         }
         
         catch(err){
                console.log(err);
         }
    }

    return (
        <>        
        
 <div class="form">

    <h1 className='ce' >Intern Task</h1> 
    
    
    <div className='in'>
       <label className="d">Employer name:</label>
 	    <input  align="center" type="text" name="Name" placeholder="Your Name" required="" onChange={add}/>
         {errors.Name && <div className="error">{errors.Name}</div>}
    </div>
 	
    <div className='in'>
     <label className="d">Sex:</label>
     <div className='ine'>
        <input className="da"type="radio" name="Sex" value="male" onChange={add}/>Male
 	    <input className="da"type="radio" name="Sex" value="female" onChange={add}/>Female
 	    <input className="da"type="radio" name="Sex" value="others" onChange={add} />Others
     </div> 	
     {errors.Sex && <div className="error">{errors.Sex}</div>}
    </div>
 	

     <div className='in'>
        <label className="d">Martial Status:</label>
         <div className='ine'>
             <input className="da"type="radio" name="Martial" value="Married" onChange={add}/>Married
 	         <input className="da"type="radio" name="Martial" value="Single" onChange={add}/>Single
        </div> 	
        {errors.Martial && <div className="error">{errors.Martial}</div>}
    </div>
     
    <div className='in'>
        <label className="d">Adresss</label>
 	    <input  type="text" name="Address" placeholder="Address" required="" onChange={add}/>
         {errors.Address && <div className="error">{errors.Address}</div>}
    </div>


   <div className='in'>
     <label className="d">Department:</label>
    	<select name="Dep" onChange={add}>
 	    	<option className="d"  value="HR" >HR</option>
 	    	<option className="d"  value="TR" >TR</option>
 		    <option className="d"  value="UI/UX"  >UI/UX</option>
    	</select>
        
    </div>
      	       
        

    <div className='in'>
        <label>Salary</label>
        <input type="number" name="Amount" placeholder="Your Salary" onChange={add}/>
        {errors.Amount && <div className="error">{errors.Amount}</div>}
    </div>
 	<br />
    <br />

    <div className='in'>

        <button class="btn btn-info"  type="submit" name="sb" onClick={click} >Submit</button>

        <button   class="btn btn-danger"  type="submit" name="cl" onClick={reset} value="Cancel">Cancel</button>

        <Link to="/add"> <button className='btn btn-success'>View</button> </Link>
    </div> 
 	<h4 className='ce'><a href="https://mukeshkumarv18.netlify.app"> <i class="fa fa-hand-o-left" aria-hidden="true"></i> Contact Me </a></h4>
    
   </div>
 	        
       

    
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.min.js" integrity="sha384-mQ93GR66B00ZXjt0YO5KlohRA5SY2XofN4zfuZxLkoj1gXtW8ANNCe9d5Y3eG5eD" crossorigin="anonymous"></script>
</>
    )
}
export default Home;