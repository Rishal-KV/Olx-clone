import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';

import Heart from '../../assets/Heart';
import './Post.css';

import { firestore } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
function Posts() {
  // const { setProduct } = useContext(PostContext)
  const [products, setProducts] = useState({})
   const navigate = useNavigate()

function handleClick(key){
  navigate(`/post/${key}`)
  console.log(key);
}

  useEffect(() => {
    const productsCollection = collection(firestore, 'products');
    getDocs(productsCollection)
      .then((querySnapshot) => {
        const data = {};
        querySnapshot.forEach((doc) => {
          data[doc.id] = doc.data();
        });
        console.log(data);
        setProducts(data);

      })
      .catch((error) => {
        console.error('Error fetching product details:', error);
      });

  }, [])
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>



        {Object.keys(products).map((key) => {
        const product = products[key];
        return (
          <div className="card" key={key} onClick={() => handleClick(key)}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={product.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; {product.price}</p>
              {/* <span className="kilometer">{product.kilometer}</span> */}
              <p className="name">{product.productName}</p>
            </div>
            <div className="date">
              <span>{product.date}</span>
            </div>
          </div>
        );
      })}



      </div>
    
    </div>
  );
}

export default Posts;
