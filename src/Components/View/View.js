import React, { useEffect, useState } from 'react';
import { firestore } from '../../Firebase/config';
import './View.css';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore';
function View() {
  const [productDetails, setProductDetails] = useState({});
  const [user, setUser] = useState({});
  const { id } = useParams();
  
  useEffect(() => {
    async function fetchProduct() {
      try {
        const productDocRef = doc(firestore, 'products', id);
        const productSnapshot = await getDoc(productDocRef);
  
        if (productSnapshot.exists()) {
          const productData = productSnapshot.data();
          setProductDetails(productData);
  
          
          if (productData && productData.userId) {
            
            const userId = productData.userId;
            
          
            const userQuery = query(collection(firestore, 'users'), where('id', '==', userId))
            
            const userSnapshot = await getDocs(userQuery);
            
  
           if (userSnapshot.size ) {
            const userDetails = userSnapshot.docs[0].data();
            setUser(userDetails)
           }else{
            console.log("no such document");
           }
          }
        } else {
          console.log('No such product document!');
        }
      } catch (error) {
        console.error('Error fetching product details:', error.message);
      }
    }
  
    fetchProduct();
  }, [firestore, id]);
  



  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={productDetails.url ?? ""}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {productDetails.price ?? " "} </p>
          <span>{productDetails.productName ?? " "}</span>
          <p>{productDetails.category ?? " "}</p>
          <span>{productDetails.date}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{user.name ?? " "}</p>
          <p>{user.phone ?? " "}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
