import { useState } from "react";


function ContactForm(){

    const [formData,setFormData] = useState({name:"",email: "",message:""});

    const[errors, setErrors] = useState({});
    const[submitted,setSubmitted] = useState(false);
    const[submittedName,setSubmittedName] = useState("");

    console.log(formData);
    


    const validate = ()=>{
      const newErrors = {};
      if(!formData.name.trim()) newErrors.name = "Name is required";
      if(!formData.email.trim()){
        newErrors.email = "Email is required";
      }else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
        newErrors.email = "Invalid email formate";
      }
      if(!formData.message.trim()) newErrors.message = "Message is required";
      return newErrors;
    }

    const handleChange = (e)=>{
          console.log(e);
          
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e)=>{
       e.preventDefault();
       const validationErrors = validate();
       if(Object.keys(validationErrors).length > 0){
        setErrors(validationErrors);
       }else{
        setSubmittedName(formData.name);
        setSubmitted(true);
        setErrors({});
        setFormData({name:"",email:"",message:""});
       }
    }

  return(
    <div style={{
        maxWidth:"400px",
        margin:"2rem auto",
        padding:"2rem",
        border:"1px solid #ccc",
        borderRadius:"8px",
        boxShadow:"0 4px 8px rgba(0,0,0,0.1)",
        fontFamily:"Arial, sans-serif"
    }}>
      
     { submitted ? (
           <h2>
             Thank You, {submittedName}. Your Details have been submitted
           </h2>
     ):(
       <form onSubmit={handleSubmit} >
          <div>
            <label htmlFor="name">Name:</label>
            <input 
            id="name" 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{width:"100%",padding:"0.5rem",marginTop:"0.25rem"}}
            />
            {
              errors.name &&(
               <p style={{color:"red"}}>{errors.name}*</p>
              )
            }
          </div>
            <div>
            <label htmlFor="email">Email:</label>
            <input 
            id="email" 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{width:"100%",padding:"0.5rem",marginTop:"0.25rem"}}
            />
            {
              errors.email &&(
                <p style={{color:"red"}}>{errors.email}*</p>
              )
            }
          </div>
            <div>
            <label htmlFor="message">Message:</label>
            <textarea 
            id="message" 
            type="text" 
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={{width:"100%",padding:"0.5rem",marginTop:"0.25rem"}}
            />
            {
              errors.message &&(
            <p style={{color:"red"}}>{errors.message}*</p>
              )
            }
          </div>
          <button
          type="submit"
          style={{
            width:"100px",
            padding:"0.75rem",
            backgroundColor:"green",
            color:'white',
            border:"none",
            borderRadius:"4px",
            cursor:"pointer",
          
          }}
          >
            Submit
          </button>
       </form>
     )

     }

    
 </div>
)
}

export default ContactForm;