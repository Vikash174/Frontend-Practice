import { useState } from "react";
import "./Accordian.css"
import {FaChevronUp, FaChevronDown} from "react-icons/fa"

function Accordian({items}){

    const[openIndex,setOpenIndex] = useState(null);

    const handleToggle = (index)=>{
         setOpenIndex(openIndex === index ? null : index);
    }

    return items.length == 0 ? "No Items Available" : (
        <div className="accordian">
           {items.map((item,index)=>{
                return(
                    <div
                    key={index}
                    className="accordian-item">

                        <button className="accordian-title"
                        onClick={()=>{
                            handleToggle(index);
                        }}
                        >
                            { item.title}
                            {openIndex === index ? <FaChevronUp className="right"/>:
                            <FaChevronDown className="right"/>}
                        </button>
                       {openIndex === index && <div className="accordian-content">
                            { item.content }
                        </div>}
                    </div>
                );
            })
           }
        </div>
    )

}

export default Accordian;