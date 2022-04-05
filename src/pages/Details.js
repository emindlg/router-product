import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from "./Details.module.css";
import CheckOutBag from "../components/assets/CheckOutBag";
import BackArrow from "../components/assets/BackArrow";



const Details = () => {

  const params = useParams();
  const navigate = useNavigate()
  const [product, setProduct] = useState({})

  useEffect(() => {
   
    fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res=> res.json())
    .then(json=> setProduct(json));
  }, [])  

  const handleBack = () => {
    navigate(-1);
  }
  const handleCheckout = () => {
    navigate("/checkout");
  }

  return (
    <div>
    <div className={styles.detailsNav}> 

      <BackArrow className={styles.detailsNavIcon} onClick={handleBack}/>
      <h1>Details Page</h1>
      <CheckOutBag className={styles.detailsNavIcon} onClick={handleCheckout}/>

    </div>
      <div className={styles.detailsWrapper}>
        <p>{product?.id}</p>
        <p>{product?.title}</p>
        <p>{product?.description}</p>
        <p>{product?.category}</p>
        <p>$ {product?.price}</p>
        <p>{product?.rating?.rate}</p>
        <p>{product?.rating?.count}</p>
        <img 
        className={styles.detailsImage} 
        src={product?.image} 
        alt={product?.title} />
      </div>
    </div>
  )
}

export default Details;