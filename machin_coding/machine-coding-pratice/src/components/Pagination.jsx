import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

function Pagination() {

    const [products,setProducts] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const PAGE_SIZE = 10;
    

    const fetchData = async()=>{
        const data = await fetch("https://dummyjson.com/products?limit=200");
        const json = await data.json();
        setProducts(json.products);
    };

    useEffect(()=>{
        fetchData();
    },[]);

    const totalProducts = products.length;
    const numberOfPages = Math.ceil(totalProducts / PAGE_SIZE);


    // slice data for current page
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    const endIndex = startIndex + PAGE_SIZE;
    const currentProducts = products.slice(startIndex,endIndex);

    const goToPage =(pageNum)=>{
      setCurrentPage(pageNum);
    }
  return (
    <div>
        <h2>Pagination Demo</h2>
        {
            products.length === 0 ? (
                <h3>No Products Found</h3>
            ):(
                <>
               <div style={{display:"flex",flexWrap:"wrap",margin:"auto",justifyContent:"center"}}>
                {
                    currentProducts.map((product)=><ProductCard key={product.id} product={product}/>)
                }
               </div>
                     
                {/* Pagination buttons */}

                <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
                    {
                        Array.from({length:numberOfPages},(_,index) =>(
                            <button
                            key={index+1}
                            onClick={()=>goToPage(index+1)}
                            style={{
                                 padding: '8px 12px',
                  margin: '0 4px',
                  backgroundColor: currentPage === index + 1 ? 'black' : '#eee',
                  color: currentPage === index + 1 ? 'white' : 'black',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                            }}
                            >
                             {
                                index+1
                             }
                            </button>
                        ))
                    }
                </div>




        

                </>

              

            )
        }
    </div>
  )
}

export default Pagination;