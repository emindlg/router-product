import { useEffect, useState } from 'react';
import styles from "./Product.module.css";
import { Link } from "react-router-dom";



const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res)=> res.json())
      .then((json)=> setProducts(json));
  }, [])
  


  

  return (
    <div>
      <h2>Product Page</h2>
      <div className={styles.products}>
        {products.map((eachItem) =>(

          <Link to={`details/${eachItem.id}`} key={eachItem.id} className={styles.product}>
            <img style={{ width: "100px" }} src={eachItem.image} alt="" />
            <div className={styles.productDetails}>
              <h6>{eachItem.category}</h6>
              <p>{eachItem.title}</p>
            </div>
            
          </Link>


        ))}
      </div>
    </div>
  )
}

export default Products;